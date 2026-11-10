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

/** 자식 렌더: 문자열/배열/함수 모두 허용 */
export function slot(v) {
  if (v == null || v === false) return '';
  if (Array.isArray(v)) return v.map(slot).join('');
  if (typeof v === 'function') return slot(v());
  return String(v);
}
