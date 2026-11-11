// Chip — 2층 요소
import { esc, cx } from '../../core/html.js';

/**
 * 칩 (chip/times — "3시간 남았어요", "D-3")
 * @param {'info'|'neutral'|'posi'|'nega'|'warn'} [p.tone]
 */
export function Chip({ label = '', tone = 'info', className = '' } = {}) {
  return `<span class="${cx('lxp-chip', `lxp-chip--${tone}`, className)}">${esc(label)}</span>`;
}
