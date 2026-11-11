#!/usr/bin/env node
// 의존성 없는 빌드 스크립트
//  1) tokens/tokens.json → src/styles/tokens.css (+ dist/tokens.json)
//  2) src/assets → src/core/assets.generated.js (data URI)
//  3) CSS 결합 → dist/lxp.css,  JS 모듈 결합(IIFE) → dist/lxp.js (window.LXP)
//  4) 폰트 · docs 복사 → dist/
import { readFileSync, writeFileSync, mkdirSync, readdirSync, copyFileSync, existsSync } from 'node:fs';
import { join, dirname, extname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const r = (...p) => join(ROOT, ...p);
const DIST = r('dist');
mkdirSync(join(DIST, 'fonts'), { recursive: true });

// ---------------------------------------------------------------- 1. tokens
const T = JSON.parse(readFileSync(r('tokens/tokens.json'), 'utf8'));
const varName = (path) => '--' + path.replace(/%/g, '').replace(/[\/\s]+/g, '-').toLowerCase();
const lines = [];
const push = (k, v) => lines.push(`  ${k}: ${v};`);

lines.push('  /* primitive */');
for (const [group, values] of Object.entries(T.primitive)) {
  for (const [k, v] of Object.entries(values)) push(varName(`${group}-${k}`), v);
}
lines.push('  /* semantic (Figma 변수명과 1:1) */');
const resolveRef = (ref) => {
  if (ref.startsWith('#')) return ref;
  const [g, k] = ref.split('.');
  if (!T.primitive[g] || T.primitive[g][k] == null) throw new Error(`Unknown token ref: ${ref}`);
  return `var(${varName(`${g}-${k}`)})`;
};
for (const [k, ref] of Object.entries(T.semantic)) push(varName(k), resolveRef(ref));

lines.push('  /* typography — font shorthand + letter-spacing */');
push('--font-family', T.typography.fontFamily);
push('--ls-head', '0');
push('--ls-label', '-0.005em');
push('--ls-cap', '-0.005em');
for (const [k, [size, weight, lh]] of Object.entries(T.typography.styles)) {
  push(varName(`font-${k}`), `${weight} ${size}px/${lh} var(--font-family)`);
}
lines.push('  /* spacing */');
for (const [k, v] of Object.entries(T.spacing)) push(`--spac-${k.replace('spac', '')}`, `${v}px`);
lines.push('  /* radius */');
for (const [k, v] of Object.entries(T.radius)) push(`--radi-${k.replace('radi', '').toLowerCase()}`, `${v}px`);
lines.push('  /* shadow */');
for (const [k, v] of Object.entries(T.shadow)) push(`--shadow-${k}`, v);

const typoClasses = Object.entries(T.typography.styles).map(([k]) => {
  const ls = k.startsWith('head') ? 'head' : k.startsWith('cap') ? 'cap' : 'label';
  return `.t-${k.replace('/', '-').toLowerCase()} { font: var(${varName(`font-${k}`)}); letter-spacing: var(--ls-${ls}); }`;
});

const tokensCss = `/* 자동 생성 — tokens/tokens.json 을 수정하고 npm run build 하세요 */\n:root {\n${lines.join('\n')}\n}\n\n/* 타이포 유틸리티 클래스 */\n${typoClasses.join('\n')}\n`;
writeFileSync(r('src/styles/tokens.css'), tokensCss);
writeFileSync(join(DIST, 'tokens.json'), JSON.stringify(T, null, 2));

// ---------------------------------------------------------------- 2. assets
const mime = { '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg' };
const assets = {};
for (const dir of ['icons', 'images']) {
  for (const f of readdirSync(r('src/assets', dir)).sort()) {
    const ext = extname(f);
    if (!mime[ext]) continue;
    const buf = readFileSync(r('src/assets', dir, f));
    assets[basename(f, ext)] = ext === '.svg'
      ? `data:image/svg+xml;utf8,${encodeURIComponent(buf.toString('utf8').replace(/\s+/g, ' ').trim())}`
      : `data:${mime[ext]};base64,${buf.toString('base64')}`;
  }
}
writeFileSync(r('src/core/assets.generated.js'),
  `// 자동 생성 파일 — \`npm run build\` 시 덮어씁니다. 직접 수정하지 마세요.\nexport const ASSETS = ${JSON.stringify(assets, null, 0).replace(/","/g, '",\n  "')};\n`);

// ---------------------------------------------------------------- 3. css
// 컴포넌트 파일은 src/components/ 에서 자동으로 찾고, import 관계로 순서를 정합니다.
//  - 쓰이는 쪽(예: button)이 쓰는 쪽(예: input)보다 먼저 → JS 정의 순서, CSS 덮어쓰기 순서가 모두 맞음
//  - 관계가 없는 파일끼리는 계층(요소 → 블록 → 영역 → 틀) 다음 이름순. 새 파일을 만들어도 이 스크립트를 고칠 필요가 없습니다.
const compDir = r('src/components');
// 하위 폴더(primitives · blocks · sections · layout)까지 찾습니다. 키는 'blocks/popup' 처럼 폴더/이름
const walk = (dir, pre = '') => readdirSync(join(compDir, pre), { withFileTypes: true }).flatMap((e) =>
  e.isDirectory() ? walk(dir, join(pre, e.name)) : e.name.endsWith('.js') ? [join(pre, basename(e.name, '.js'))] : []);
const LAYER_RANK = { primitives: 0, blocks: 1, sections: 2, layout: 3 };   // 관계 없는 파일끼리는 아래 층부터
const rank = (n) => LAYER_RANK[n.split('/')[0]] ?? 9;
const compNames = walk(compDir).sort((a, b) => rank(a) - rank(b) || a.localeCompare(b));
const deps = Object.fromEntries(compNames.map((n) => [n,
  [...readFileSync(join(compDir, n + '.js'), 'utf8').matchAll(/^import[^;]*from\s+'(\.\.?\/[^']+)\.js'/gm)]
    .map((m) => join(dirname(n), m[1]))
    .filter((d) => !d.startsWith('..'))]));      // ../../core 는 항상 맨 앞이라 제외
const compOrder = [];
const visiting = new Set();
const visit = (n, chain = []) => {
  if (compOrder.includes(n)) return;
  if (!deps[n]) throw new Error(`components/${chain.at(-1)}.js 가 없는 파일 components/${n}.js 를 import 합니다`);
  if (visiting.has(n)) throw new Error(`컴포넌트 순환 import: ${[...chain, n].join(' → ')}`);
  visiting.add(n);
  deps[n].forEach((d) => visit(d, [...chain, n]));
  visiting.delete(n);
  compOrder.push(n);
};
compNames.forEach((n) => visit(n));
for (const n of compOrder) if (!existsSync(join(compDir, n + '.css'))) console.warn(`! components/${n}.css 없음 (JS만 있는 컴포넌트)`);

const cssOrder = ['styles/tokens.css', 'styles/base.css',
  ...compOrder.filter((n) => existsSync(join(compDir, n + '.css'))).map((n) => `components/${n}.css`)];
const css = cssOrder.map((f) => `/* ===== ${f} ===== */\n` + readFileSync(r('src', f), 'utf8')).join('\n')
  .replace(/\.\.\/assets\/fonts\//g, 'fonts/');
writeFileSync(join(DIST, 'lxp.css'), `/*! UBION LXP App Design System */\n${css}`);

// ---------------------------------------------------------------- 4. js (의존 순서대로 결합)
const jsOrder = ['core/html.js', 'core/assets.generated.js', 'core/assets.js', ...compOrder.map((n) => `components/${n}.js`)];
const exported = new Set();
const body = jsOrder.map((f) => {
  let src = readFileSync(r('src', f), 'utf8');
  src = src.replace(/^import[^;]+;\s*$/gm, '');
  src = src.replace(/^export\s+(function|const|let|class)\s+([A-Za-z_$][\w$]*)/gm, (_, kw, name) => { exported.add(name); return `${kw} ${name}`; });
  src = src.replace(/^export\s*\{[^}]*\};?\s*$/gm, '');
  return `// ----- ${f}\n${src}`;
}).join('\n');
const js = `/*! UBION LXP App Design System — window.LXP */\n(function (global) {\n'use strict';\n${body}\nglobal.LXP = { ${[...exported].join(', ')}, tokens: ${JSON.stringify({ primitive: T.primitive, semantic: T.semantic, typography: T.typography, spacing: T.spacing, radius: T.radius, shadow: T.shadow })} };\n})(typeof window !== 'undefined' ? window : globalThis);\n`;
writeFileSync(join(DIST, 'lxp.js'), js);

// ---------------------------------------------------------------- 5. static
copyFileSync(r('src/assets/fonts/PretendardVariable.woff2'), join(DIST, 'fonts/PretendardVariable.woff2'));
// docs/*.html 은 <head>/<body> 없는 조각(아티팩트 게시용). 로컬 열람용으로 전체 문서를 함께 만듭니다.
for (const f of readdirSync(r('docs'))) {
  if (!f.endsWith('.html')) continue;
  const frag = readFileSync(r('docs', f), 'utf8');
  writeFileSync(join(DIST, f.replace('.html', '.fragment.html')), frag);
  writeFileSync(join(DIST, f), `<!doctype html>\n<html lang="ko">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n</head>\n<body>\n${frag}\n</body>\n</html>\n`);
}
if (existsSync(r('templates'))) {
  mkdirSync(join(DIST, 'templates'), { recursive: true });
  for (const f of readdirSync(r('templates'), { withFileTypes: true })) {
    if (f.isFile()) copyFileSync(r('templates', f.name), join(DIST, 'templates', f.name));
  }
}
// templates/mockups/*.html 은 아티팩트에 그대로 게시하는 조각(lxp.css·lxp.js 를 같은 폴더에서 찾음).
// 로컬 열람용으로 <base href="../"> 를 넣은 전체 문서를 dist/mockups/ 에 만듭니다.
const mockups = [];
if (existsSync(r('templates/mockups'))) {
  mkdirSync(join(DIST, 'mockups'), { recursive: true });
  for (const f of readdirSync(r('templates/mockups')).sort()) {
    if (!f.endsWith('.html')) continue;
    const frag = readFileSync(r('templates/mockups', f), 'utf8');
    writeFileSync(join(DIST, 'mockups', f), `<!doctype html>\n<html lang="ko">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n<base href="../">\n</head>\n<body>\n${frag}\n</body>\n</html>\n`);
    mockups.push(f);
  }
}

console.log(`✓ tokens ${lines.length} vars · assets ${Object.keys(assets).length} · exports ${exported.size}`);
// ---------------------------------------------------------------- 6. 빠짐 검사 (경고만)
// export 한 컴포넌트 함수가 README 컴포넌트 표와 쇼케이스 예시에 모두 있는지 봅니다.
{
  const readme = readFileSync(r('README.md'), 'utf8');
  const showcase = readFileSync(r('docs/index.html'), 'utf8');
  const notComponent = new Set(['Icon', 'TAB_ITEMS', 'ASSETS']);
  const comps = [...exported].filter((n) => /^[A-Z]/.test(n) && !notComponent.has(n));
  const noReadme = comps.filter((n) => !readme.includes('`' + n + '`'));
  const noDemo = comps.filter((n) => !new RegExp(`\\b${n}\\(`).test(showcase));
  if (noReadme.length) console.warn(`! README 컴포넌트 표에 없음: ${noReadme.join(', ')}`);
  if (noDemo.length) console.warn(`! 쇼케이스(docs/index.html) 예시에 없음: ${noDemo.join(', ')}`);
}

console.log(`✓ 컴포넌트 순서: ${compOrder.join(' → ')}`);
console.log(`✓ dist/lxp.css ${(css.length / 1024).toFixed(1)}KB · dist/lxp.js ${(js.length / 1024).toFixed(1)}KB`);
if (mockups.length) console.log(`✓ mockups ${mockups.length} → dist/mockups/ (${mockups.join(', ')})`);
