// stories 도구 — build.mjs 가 씁니다.
//  1) parseDocs(src)        컴포넌트 파일의 JSDoc + 함수 기본값 → 인자 표 (Controls · Props 표 · 빠짐 검사용)
//  2) bundleStories(files)  *.stories.js (Storybook CSF 모양) → 브라우저용 dist/stories.js 조각
//  3) checkCoverage(...)    선택지(enum)·boolean 인자마다 그 값을 쓰는 story 가 있는지

// ---------------------------------------------------------------- 1. JSDoc
const LAYERS = { primitives: '2 요소', blocks: '3 블록', sections: '4 영역', layout: '틀' };
export const layerOf = (key) => LAYERS[key.split('/')[0]] || '기타';

/** 짝 맞는 괄호까지 잘라 냄. s[i] 는 여는 괄호 */
function matchBrace(s, i) {
  const open = s[i], close = { '{': '}', '(': ')', '[': ']' }[open];
  let depth = 0, q = null;
  for (let j = i; j < s.length; j++) {
    const c = s[j];
    if (q) { if (c === '\\') j++; else if (c === q) q = null; continue; }
    if (c === "'" || c === '"' || c === '`') { q = c; continue; }
    if (c === open) depth++;
    else if (c === close && --depth === 0) return j;
  }
  return -1;
}
/** 최상위 쉼표로 나눔 (괄호·따옴표 안은 무시) */
function splitTop(s) {
  const out = []; let depth = 0, q = null, start = 0;
  for (let j = 0; j < s.length; j++) {
    const c = s[j];
    if (q) { if (c === '\\') j++; else if (c === q) q = null; continue; }
    if (c === "'" || c === '"' || c === '`') { q = c; continue; }
    if ('{[('.includes(c)) depth++;
    else if ('}])'.includes(c)) depth--;
    else if (c === ',' && depth === 0) { out.push(s.slice(start, j)); start = j + 1; }
  }
  out.push(s.slice(start));
  return out.map((x) => x.trim()).filter(Boolean);
}
const literal = (src) => {
  if (src == null) return undefined;
  if (/^'[^']*'$/.test(src)) return src.slice(1, -1);
  if (/^-?\d+(\.\d+)?$/.test(src)) return Number(src);
  if (src === 'true' || src === 'false') return src === 'true';
  if (src === 'null') return null;
  if (src === '[]') return [];
  return undefined;   // 식(expression)은 값으로 쓰지 않고 글자로만 보여 줌
};
function control(type) {
  const t = type.replace(/\s/g, '');
  const opts = t.split('|');
  if (opts.length > 1 && opts.every((o) => /^'[^']*'$/.test(o) || /^-?\d+$/.test(o) || o === 'null')) {
    return { control: 'select', options: opts.filter((o) => o !== 'null').map(literal) };
  }
  if (t === 'boolean') return { control: 'boolean' };
  if (t === 'number') return { control: 'number' };
  if (t === 'string') return { control: 'text' };
  if (/^(string\|number|number\|string)$/.test(t)) return { control: 'text' };
  return { control: 'object' };
}

/** 파일 하나 → { 함수이름: { description, params: [...] } } */
export function parseDocs(src) {
  const out = {};
  const re = /\/\*\*([\s\S]*?)\*\/\s*export function ([A-Z]\w*)\s*\(/g;
  for (let m; (m = re.exec(src));) {
    const [, raw, name] = m;
    const text = raw.split('\n').map((l) => l.replace(/^\s*\*\s?/, '')).join('\n').trim();
    const [descPart, ...chunks] = text.split(/@param\s+/);
    const params = [];
    for (const ch of chunks) {
      let type = '', rest = ch;
      if (ch[0] === '{') { const e = matchBrace(ch, 0); type = ch.slice(1, e); rest = ch.slice(e + 1); }
      const nm = rest.trim().match(/^(\[?)([\w.]+)(?:=[^\]]*)?\]?\s*([\s\S]*)$/);
      if (!nm) continue;
      const pname = nm[2].replace(/^p\./, '');
      if (pname === 'p' || pname.includes('.')) continue;
      params.push({ name: pname, type: type.trim(), optional: !!nm[1], desc: nm[3].replace(/\n\s*/g, '\n').trim(), ...control(type) });
    }
    // 기본값: export function X({ a = 1, b } = {})
    const open = m.index + m[0].length;
    const defaults = {};
    if (src[open] === '{') {
      const end = matchBrace(src, open);
      for (const part of splitTop(src.slice(open + 1, end))) {
        const [k, ...v] = part.split('=');
        const key = k.trim();
        if (!/^\w+$/.test(key)) continue;
        defaults[key] = v.length ? v.join('=').trim() : undefined;
        if (!params.some((p) => p.name === key) && key !== 'className') {
          const lit = literal(defaults[key]);
          params.push({ name: key, type: typeof lit === 'boolean' ? 'boolean' : typeof lit === 'number' ? 'number' : 'string', optional: true, desc: '', undocumented: true,
            control: typeof lit === 'boolean' ? 'boolean' : typeof lit === 'number' ? 'number' : 'text' });
        }
      }
    }
    for (const p of params) {
      if (p.name in defaults) { p.defaultSrc = defaults[p.name] ?? null; p.default = literal(p.defaultSrc); }
    }
    out[name] = { description: descPart.replace(/\n\s*/g, ' ').trim(), params };
  }
  return out;
}

// ---------------------------------------------------------------- 2. 번들
/** *.stories.js 원문 → 브라우저에서 실행할 함수 조각. import 는 지우고 LXP 전역에서 꺼내 씀 */
export function bundleStory(key, src) {
  const names = [];
  const imported = (src.match(/^import\s*\{([^}]*)\}/m) || ['', ''])[1].split(',').map((x) => x.trim());
  let body = src.replace(/^import[^;]+;\s*$/gm, '');
  body = body.replace(/^export default\s+/m, 'const __meta = ');
  body = body.replace(/^export const (\w+)\s*=/gm, (_, n) => {
    if (imported.includes(n)) throw new Error(`${key}.stories.js: story 이름 ${n} 이 import 한 컴포넌트와 같습니다 (ESM 에서도 오류). 다른 이름을 쓰세요`);
    names.push(n); return `const ${n} =`;
  });
  if (!body.includes('const __meta')) throw new Error(`${key}.stories.js 에 export default 가 없습니다`);
  return `  { file: ${JSON.stringify(key)}, load: function () {\n${body}\n  return { meta: __meta, stories: { ${names.join(', ')} }, order: ${JSON.stringify(names)} };\n  } }`;
}

// 브라우저·테스트에서 공통으로 쓰는 정리 함수 (문자열로 dist/stories.js 에 들어감)
export const RUNTIME = String.raw`
  const kebab = (s) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').replace(/[^\w-]+/g, '-').toLowerCase();
  const words = (s) => s.replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/_/g, ' ');
  const isId = (k) => /^[A-Za-z_$][\w$]*$/.test(k);
  function fmt(v, ind) {
    ind = ind || '';
    if (typeof v === 'string') return "'" + v.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n') + "'";
    if (Array.isArray(v)) {
      const items = v.map((x) => fmt(x, ind + '  '));
      const one = '[' + items.join(', ') + ']';
      return one.length < 70 ? one : '[\n' + items.map((x) => ind + '  ' + x).join(',\n') + ',\n' + ind + ']';
    }
    if (v && typeof v === 'object') {
      const items = Object.entries(v).filter(([, x]) => x !== undefined).map(([k, x]) => (isId(k) ? k : fmt(k)) + ': ' + fmt(x, ind + '  '));
      if (!items.length) return '{}';
      const one = '{ ' + items.join(', ') + ' }';
      return one.length < 70 ? one : '{\n' + items.map((x) => ind + '  ' + x).join(',\n') + ',\n' + ind + '}';
    }
    return String(v);
  }
  const renderSrc = (fn) => {
    const s = fn.toString().trim();
    const m = s.match(/^\(?\s*(\w*)\s*\)?\s*=>\s*([\s\S]*)$/);
    return m ? m[2].replace(/^\(([\s\S]*)\)$/, '$1').trim() : s;
  };
  function normalize(files, docs) {
    const comps = [];
    for (const f of files) {
      const { meta, stories, order } = f.load();
      const fn = meta.component;
      const name = meta.title || (fn && fn.name) || f.file;
      const id = kebab(name);
      const doc = (fn && docs[fn.name]) || { description: '', params: [] };
      const list = order.map((key) => {
        const s = stories[key] || {};
        const args = Object.assign({}, meta.args, s.args);
        const parameters = Object.assign({}, meta.parameters, s.parameters);
        const render = s.render || null;
        return {
          id: id + '--' + kebab(key), key, name: s.name || words(key), args, parameters, render,
          description: s.description || '',
          code: render ? renderSrc(render) : name + '(' + fmt(args) + ')',
          run: (over) => { const a = Object.assign({}, args, over); return render ? render(a) : fn(a); },
        };
      });
      comps.push({
        id, name, file: f.file, layer: meta.layer || f.layer, figma: meta.figma || '', component: fn,
        description: meta.description || doc.description, notes: meta.notes || '',
        params: doc.params, args: meta.args || {}, parameters: meta.parameters || {}, stories: list,
      });
    }
    return comps;
  }
`;

// ---------------------------------------------------------------- 3. 빠짐 검사
/** 선택지 인자의 각 값, boolean 인자의 기본값 아닌 쪽을 쓰는 story 가 있는지 */
export function checkCoverage(comps) {
  const missing = [];
  for (const c of comps) {
    if (!c.component) continue;
    const srcs = c.stories.map((s) => (s.render ? s.render.toString() : ''));
    for (const p of c.params) {
      const used = (v) => c.stories.some((s) => s.args[p.name] === v) ||
        srcs.some((src) => new RegExp(`\\b${p.name}:\\s*${typeof v === 'string' ? `'${v.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'` : `${String(v)}\\b`}`).test(src));
      if (p.control === 'select') {
        const def = p.default;
        const lack = p.options.filter((o) => o !== def && !used(o));
        if (lack.length) missing.push(`${c.name}.${p.name}: ${lack.map((o) => JSON.stringify(o)).join(' ')}`);
      } else if (p.control === 'boolean' && !p.undocumented) {
        const v = !(p.default ?? false);
        if (!used(v)) missing.push(`${c.name}.${p.name}: ${v}`);
      }
    }
  }
  return missing;
}
