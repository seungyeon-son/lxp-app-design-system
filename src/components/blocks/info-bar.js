// InfoBar — 3층 블록
// 출처: Figma 4.5 LXP App 작업장(ZRoFjuXczoq30fVbJMNsVP) › 확정안 7054:14428 (스마트 출석부)
import { esc, cx } from '../../core/html.js';
import { Chip } from '../primitives/chip.js';
import { Pill } from '../primitives/pill.js';
import { Button } from '../primitives/button.js';

/**
 * 정보 줄 (SubRow 7062:38223 — "10-30 (금) 09:00 [1교시] (보강)  변경 ›")
 * @param {string} p.label 왼쪽 주 텍스트
 * @param {{label:string,variant?:'box'|'pill'}[]} [p.chips] box=Chip({ tone: 'label' })(chip/times), pill=Pill(chip/tag2-base)
 * @param {{label:string,icon?:string,attrs?:object}|false} [p.action] 오른쪽 Button(ghost, sm)
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
      ${chips.map((c) => (c.variant === 'pill' ? Pill({ label: c.label }) : Chip({ label: c.label, tone: 'label' }))).join('')}
    </div>
    ${action ? Button({ label: action.label, variant: 'ghost', size: 'sm', iconRight: action.icon, attrs: { type: 'button', ...action.attrs }, className: 'lxp-info-bar__action' }) : ''}
  </div>`;
}
