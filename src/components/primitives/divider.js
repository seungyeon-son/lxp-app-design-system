// Divider — 2층 요소 (1px 구분선 — 목록 묶음 사이, 바텀시트 리액션 아래)
import { cx } from '../../core/html.js';

/**
 * 가로 구분선 (--bo-hierarchy-primary)
 * @param {number} [p.inset] 좌우 안쪽 여백(px). 예: 20 → 화면 좌우 20 띄움
 */
export function Divider({ inset = 0, className = '' } = {}) {
  return `<hr class="${cx('lxp-divider', className)}"${inset ? ` style="--lxp-inset:${inset}px"` : ''}>`;
}
