// Pill — 2층 요소 (chip/tag2-base — 회색 둥근 태그 "보강")
import { esc, cx } from '../../core/html.js';

/**
 * 회색 둥근 태그 (Figma chip/tag2-base, 출석부 InfoBar '보강' 7062:38227)
 * @param {string} p.label
 */
export function Pill({ label = '', className = '' } = {}) {
  return `<span class="${cx('lxp-pill', className)}">${esc(label)}</span>`;
}
