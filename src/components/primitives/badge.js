// Badge — 2층 요소
import { esc, cx } from '../../core/html.js';

/**
 * 카운트 배지 (새 메시지 수 — 민트 배경)
 * @param {number|string} [p.count] 숫자 (99+ 같은 글자도 됨)
 * @param {'md'|'sm'|'square'} [p.size] md=22px/12SB, sm=18px/11SB, square=radius4/13M
 */
export function Badge({ count = 1, size = 'md', className = '' } = {}) {
  return `<span class="${cx('lxp-badge', `lxp-badge--${size}`, className)}">${esc(count)}</span>`;
}
