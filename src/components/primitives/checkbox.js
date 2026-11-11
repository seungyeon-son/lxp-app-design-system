// Checkbox — 2층 요소
// 출처: Figma 4.5 LXP App 작업장(ZRoFjuXczoq30fVbJMNsVP) › 확정안 7054:14428 (스마트 출석부)
import { esc, cx } from '../../core/html.js';

/**
 * 체크박스 + 라벨 (출석부 '미처리만 보기' 7062:38718) — 토큰 기반 구성
 * @param {string} p.label
 * @param {boolean} [p.checked]
 * @param {string|number} [p.count] 라벨 뒤 빨간 개수 "(3)"
 * @param {string} [p.id] input id (상태 보존용)
 * @param {boolean} [p.disabled] 누를 수 없음 (흐리게)
 */
export function Checkbox({ label = '미처리만 보기', checked = false, count, id, disabled = false, className = '' } = {}) {
  return `<label class="${cx('lxp-checkbox', className)}">
    <input type="checkbox"${id ? ` id="${esc(id)}"` : ''}${checked ? ' checked' : ''}${disabled ? ' disabled' : ''}>
    <span>${esc(label)}${count != null ? `<em>(${esc(count)})</em>` : ''}</span>
  </label>`;
}
