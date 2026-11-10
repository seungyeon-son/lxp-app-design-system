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
push('--ls-paragraph', '-0.001em');
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
  const ls = k.startsWith('head') ? 'head' : k.startsWith('paragraph') ? 'paragraph' : k.startsWith('cap') ? 'cap' : 'label';
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
const cssOrder = ['styles/tokens.css', 'styles/base.css', 'components/button.css', 'components/navigation.css',
  'components/input.css', 'components/tabs.css', 'components/control.css', 'components/display.css', 'components/learning.css',
  'components/message.css', 'components/overlay.css'];
const css = cssOrder.map((f) => `/* ===== ${f} ===== */\n` + readFileSync(r('src', f), 'utf8')).join('\n')
  .replace(/\.\.\/assets\/fonts\//g, 'fonts/');
writeFileSync(join(DIST, 'lxp.css'), `/*! UBION LXP App Design System */\n${css}`);

// ---------------------------------------------------------------- 4. js (의존 순서대로 결합)
const jsOrder = ['core/html.js', 'core/assets.generated.js', 'core/assets.js', 'components/button.js',
  'components/display.js', 'components/navigation.js', 'components/input.js', 'components/tabs.js', 'components/control.js',
  'components/learning.js', 'components/message.js', 'components/overlay.js'];
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
console.log(`✓ dist/lxp.css ${(css.length / 1024).toFixed(1)}KB · dist/lxp.js ${(js.length / 1024).toFixed(1)}KB`);
if (mockups.length) console.log(`✓ mockups ${mockups.length} → dist/mockups/ (${mockups.join(', ')})`);
