// Dropdown — 3층 블록
import { esc, cx } from '../../core/html.js';
import { Icon } from '../../core/assets.js';

/**
 * 드롭다운 메뉴 (Header message-open 의 more-dropdown, 79:18854)
 * @param {{icon?:string,label:string,value?:string,checked?:boolean}[]} [p.items]
 *   value 를 주면 data-value 로, checked 를 주면 선택형 메뉴(menuitemradio, aria-checked)로 그립니다.
 */
export function Dropdown({ items = [], className = '', style = '' } = {}) {
  return `<div class="${cx('lxp-dropdown', className)}" role="menu" style="${style}">
    ${items.map((it) => {
      const radio = it.checked != null;
      return `<button type="button" class="${cx('lxp-dropdown__item', it.checked && 'is-checked')}" role="${radio ? 'menuitemradio' : 'menuitem'}"${radio ? ` aria-checked="${!!it.checked}"` : ''}${it.value != null ? ` data-value="${esc(it.value)}"` : ''}>
      ${it.icon ? Icon(it.icon, { size: 18 }) : ''}<span>${esc(it.label)}</span></button>`;
    }).join('')}
  </div>`;
}
