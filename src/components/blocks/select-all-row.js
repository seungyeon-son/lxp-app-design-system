// SelectAllRow — 3층 블록 (전체 선택 줄 — 대화 멤버 초대 카드 87:22551)
import { esc, cx } from '../../core/html.js';
import { SelectCheck } from '../primitives/select-check.js';

/**
 * "전체 선택 34명" + 원형 선택 표시
 * 숫자 글자색: Figma tx/coursmos/primary(4.3:1) → 대비 규칙에 따라 coursmos-secondary
 * @param {string} [p.label] @param {number|string} [p.count] @param {boolean} [p.checked]
 */
export function SelectAllRow({ label = '전체 선택', count = 34, checked = false, className = '' } = {}) {
  return `<div class="${cx('lxp-select-all', className)}">
    <p><span>${esc(label)}</span><span class="lxp-num"><b>${esc(count)}</b>명</span></p>
    ${SelectCheck({ checked, label })}
  </div>`;
}
