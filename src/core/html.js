// 공통 유틸 — 모든 컴포넌트는 HTML 문자열을 반환하는 순수 함수입니다.
// (프레임워크 없이 아티팩트/정적 페이지/React dangerouslySetInnerHTML 어디서나 재사용)

/** 텍스트 이스케이프 */
export function esc(v) {
  return String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** className 결합: cx('a', cond && 'b', { c: true }) */
export function cx(...args) {
  const out = [];
  for (const a of args) {
    if (!a) continue;
    if (typeof a === 'string') out.push(a);
    else if (typeof a === 'object') for (const k in a) if (a[k]) out.push(k);
  }
  return out.join(' ');
}

/**
 * 추가 HTML 속성: htmlAttrs({ id: 'save', 'data-i': 3, disabled: true }) → ' id="save" data-i="3" disabled'
 * false/null/undefined 는 생략, true 는 값 없는 속성. 단 aria-* 의 true/false 는 "true"/"false" 값으로 씁니다. 앞에 공백이 붙어 있어 태그 안에 바로 이어 씁니다.
 */
export function htmlAttrs(obj) {
  if (!obj) return '';
  let out = '';
  for (const k in obj) {
    const v = obj[k];
    if (v == null || !/^[a-zA-Z_:][\w:.-]*$/.test(k)) continue;
    if (typeof v === 'boolean' && k.startsWith('aria-')) { out += ` ${k}="${v}"`; continue; }   // aria-pressed="false" 처럼 값이 있어야 함
    if (v === false) continue;
    out += v === true ? ` ${k}` : ` ${k}="${esc(v)}"`;
  }
  return out;
}

/** 자식 렌더: 문자열/배열/함수 모두 허용 */
export function slot(v) {
  if (v == null || v === false) return '';
  if (Array.isArray(v)) return v.map(slot).join('');
  if (typeof v === 'function') return slot(v());
  return String(v);
}
