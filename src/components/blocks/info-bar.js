// InfoBar — 3층 블록
// 출처: Figma 4.5 LXP App 작업장(ZRoFjuXczoq30fVbJMNsVP) › 확정안 7054:14428 (스마트 출석부)
import { esc, cx, htmlAttrs } from '../../core/html.js';
import { Icon } from '../../core/assets.js';

/**
 * 정보 줄 (SubRow 7062:38223 — "10-30 (금) 09:00 [1교시] (보강)  변경 ›")
 * @param {string} p.label 왼쪽 주 텍스트
 * @param {{label:string,variant?:'box'|'pill'}[]} [p.chips] box=연파랑 사각 칩(chip/times), pill=회색 둥근 태그(chip/tag2-base)
 * @param {{label:string,icon?:string,attrs?:object}|false} [p.action] 오른쪽 고스트 버튼
 */
export function InfoBar({
  label = '10-30 (금) 09:00',
  chips = [{ label: '1교시', variant: 'box' }, { label: '보강', variant: 'pill' }],
  action = { label: '변경', icon: 'chevron-right' },
  className = '',
} = {}) {
  return `<div class="${cx('lxp-info-bar', className)}">
    <div class="lxp-info-bar__main">
      <p class="lxp-num">${esc(label)}</p>
      ${chips.map((c) => `<span class="${cx('lxp-info-bar__chip', `is-${c.variant || 'box'}`)}">${esc(c.label)}</span>`).join('')}
    </div>
    ${action ? `<button type="button" class="lxp-info-bar__action"${htmlAttrs(action.attrs)}>${esc(action.label)}${action.icon ? Icon(action.icon, { size: 16 }) : ''}</button>` : ''}
  </div>`;
}
