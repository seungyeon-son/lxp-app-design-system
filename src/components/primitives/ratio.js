// Ratio — 2층 요소 (진행 비율 "처리 현황: 3/40")
import { esc } from '../../core/html.js';

/**
 * 비율 표시 — 라벨 + 진한 값 + 연한 "/전체".
 * @param {string} [p.label] 앞 문구 (콜론까지 포함하지 않음)
 * @param {number|string} p.value @param {number|string} p.total
 */
export function Ratio({ label = '', value = 0, total = 0, className = '' } = {}) {
  return `<span class="${className ? `lxp-ratio ${className}` : 'lxp-ratio'}">${label ? `${esc(label)}: ` : ''}<span class="lxp-num lxp-ratio__value">${esc(value)}</span><span class="lxp-num lxp-ratio__total">/${esc(total)}</span></span>`;
}
