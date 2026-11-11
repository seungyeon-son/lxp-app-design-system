// Chip — 2층 요소
import { esc, cx } from '../../core/html.js';

/**
 * 칩 (chip/times — "3시간 남았어요", "D-3", "1교시")
 * @param {'info'|'neutral'|'posi'|'nega'|'warn'|'label'} [p.tone]
 *   label = 연파랑 바탕 + 회색 글자. 상태가 아닌 속성 표시 (출석부 InfoBar '1교시', Figma 7062:38226)
 */
export function Chip({ label = '', tone = 'info', className = '' } = {}) {
  return `<span class="${cx('lxp-chip', `lxp-chip--${tone}`, className)}">${esc(label)}</span>`;
}
