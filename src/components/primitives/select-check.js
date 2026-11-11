// SelectCheck — 2층 요소 (원형 선택 표시 icon-check-state — 빈 원 / 파란 체크)
import { esc, cx, htmlAttrs } from '../../core/html.js';
import { Icon } from '../../core/assets.js';

/**
 * 원형 선택 표시 — 목록에서 여러 명 고르기 (대화 멤버 초대)
 * @param {boolean} [p.checked] @param {string} [p.label] 스크린리더용 이름
 * @param {Record<string,string|number|boolean>} [p.attrs]
 */
export function SelectCheck({ checked = false, label = '선택', attrs, className = '' } = {}) {
  return `<button type="button" class="${cx('lxp-select-check', checked && 'is-checked', className)}" role="checkbox" aria-checked="${checked}" aria-label="${esc(label)}"${htmlAttrs(attrs)}>${Icon(checked ? 'check-circle-24-blue' : 'circle-24', { size: 24 })}</button>`;
}
