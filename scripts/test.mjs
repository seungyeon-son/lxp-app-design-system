#!/usr/bin/env node
// 스냅샷 테스트 — 컴포넌트가 만드는 HTML 이 의도치 않게 바뀌지 않았는지 확인합니다.
//   npm test             저장된 스냅샷과 비교 (다르면 실패)
//   npm test -- --update 지금 결과를 새 기준으로 저장 (의도한 변경일 때만)
//
// 검사 대상 (dist/lxp.js · dist/stories.js · dist/templates/screens.js 기준 = 실제로 쓰는 번들)
//   default:<함수>   모든 컴포넌트 함수를 인자 없이 호출한 결과
//   story:<컴포넌트>/<story>  src/components/**/*.stories.js 의 story 전부 (쇼케이스 Docs 와 같은 것)
//   screen:<이름>    templates/screens.js 의 화면 전부
// 에셋 data URI 는 파일 이름으로 바꿔 저장합니다(스냅샷이 읽히도록).
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import { ASSETS } from '../src/core/assets.generated.js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const r = (...p) => join(ROOT, ...p);
const SNAP = r('tests/snapshots.json');
const update = process.argv.includes('--update');

// ---- 번들 로드
const ctx = { console };
ctx.window = ctx; ctx.globalThis = ctx;
vm.createContext(ctx);
vm.runInContext(readFileSync(r('dist/lxp.js'), 'utf8'), ctx);
vm.runInContext(readFileSync(r('dist/templates/screens.js'), 'utf8'), ctx);
vm.runInContext(readFileSync(r('dist/stories.js'), 'utf8'), ctx);
const L = ctx.LXP, SC = ctx.LXP_SCREENS;

// ---- 정규화
const byUri = new Map(Object.entries(ASSETS).map(([k, v]) => [v, k]));
const norm = (html) => String(html)
  .replace(/data:[^"')\s]+/g, (u) => (byUri.has(u) ? `asset:${byUri.get(u)}` : u))
  .replace(/\s+/g, ' ')
  .replace(/>\s+</g, '><')
  .trim();

// ---- 케이스 수집
const cases = {};
const run = (key, fn) => { try { cases[key] = norm(fn()); } catch (e) { cases[key] = `THROWS: ${e.message}`; } };

const skip = new Set(['esc', 'cx', 'slot', 'asset', 'Icon', 'iconNames', 'setAssetBase', 'htmlAttrs', 'tokens', 'TAB_ITEMS']);
for (const name of Object.keys(L).sort()) {
  if (skip.has(name) || typeof L[name] !== 'function' || !/^[A-Z]/.test(name)) continue;
  run(`default:${name}`, () => L[name]({}));
}
run('default:Icon', () => L.Icon('bell'));

for (const c of ctx.LXP_STORIES) for (const st of c.stories) run(`story:${c.name}/${st.key}`, () => st.run());

for (const name of Object.keys(SC).sort()) run(`screen:${name}`, () => SC[name]());

// ---- 없는 에셋: asset() 은 맵에 없는 이름을 src/assets/… 경로로 돌려주므로(번들에서는 깨진 그림) 에러로 봅니다
for (const [k, v] of Object.entries(cases)) {
  const miss = [...new Set([...v.matchAll(/src\/assets\/(?:icons|images)\/([\w-]+)\.(?:svg|png)/g)].map((m) => m[1]).filter((n) => n !== 'undefined'))];  // 필수 인자 없이 부른 default:IconButton 은 제외
  if (miss.length) cases[k] = `THROWS: 없는 에셋 ${miss.join(', ')} — LXP.iconNames() 로 이름을 확인하세요`;
}

// ---- 비교
const total = Object.keys(cases).length;
const throws = Object.entries(cases).filter(([, v]) => v.startsWith('THROWS'));
if (update || !existsSync(SNAP)) {
  mkdirSync(dirname(SNAP), { recursive: true });
  writeFileSync(SNAP, JSON.stringify(cases, null, 1) + '\n');
  console.log(`✓ 스냅샷 저장: ${total}개 → tests/snapshots.json`);
  if (throws.length) { console.log(`✗ 에러 ${throws.length}개:`); throws.forEach(([k, v]) => console.log(`  ${k}\n    ${v}`)); process.exit(1); }
  process.exit(0);
}

const saved = JSON.parse(readFileSync(SNAP, 'utf8'));
const changed = [], added = [], removed = [];
for (const k of Object.keys(cases)) {
  if (!(k in saved)) added.push(k);
  else if (saved[k] !== cases[k]) changed.push(k);
}
for (const k of Object.keys(saved)) if (!(k in cases)) removed.push(k);

const firstDiff = (a, b) => {
  let i = 0; while (i < a.length && a[i] === b[i]) i++;
  const s = Math.max(0, i - 60);
  return `    기존: …${a.slice(s, i + 80)}…\n    지금: …${b.slice(s, i + 80)}…`;
};
const short = (k) => (k.length > 90 ? k.slice(0, 90) + '…' : k);

if (!changed.length && !added.length && !removed.length && !throws.length) {
  console.log(`✓ 스냅샷 ${total}개 모두 같음`);
  process.exit(0);
}
if (changed.length) {
  console.log(`✗ 바뀜 ${changed.length}개`);
  changed.forEach((k) => console.log(`  ${short(k)}\n${firstDiff(saved[k], cases[k])}`));
}
if (added.length) { console.log(`+ 새로 생김 ${added.length}개`); added.forEach((k) => console.log(`  ${short(k)}`)); }
if (removed.length) { console.log(`- 사라짐 ${removed.length}개`); removed.forEach((k) => console.log(`  ${short(k)}`)); }
if (throws.length) { console.log(`✗ 에러 ${throws.length}개`); throws.forEach(([k, v]) => console.log(`  ${short(k)}: ${v}`)); }
console.log('\n의도한 변경이면 화면을 확인한 뒤 `npm test -- --update` 로 기준을 갱신하세요.');
process.exit(1);
