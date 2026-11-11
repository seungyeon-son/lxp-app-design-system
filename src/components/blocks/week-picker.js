// WeekPicker — 3층 블록
import { esc, cx } from '../../core/html.js';
import { asset } from '../../core/assets.js';

/**
 * 주간 날짜 선택 (Date picker 24:12363)
 * @param {{w:string,d:number|string,dot?:boolean}[]} [p.days]
 * @param {number} [p.selected] 선택 인덱스
 */
export function WeekPicker({ days, selected = 0 } = {}) {
  const list = days || ['월', '화', '수', '목', '금', '토', '일'].map((w, i) => ({ w, d: i + 1, dot: [0, 2, 4, 5].includes(i) }));
  return `<div class="lxp-week">
    ${list.map((x, i) => `<button class="${cx('lxp-week__day', i === selected && 'is-selected')}">
      <span>${esc(x.w)}</span><b>${esc(x.d)}</b>
      ${x.dot ? `<img class="lxp-week__dot" src="${asset('dot-red')}" alt="">` : ''}
    </button>`).join('')}
  </div>`;
}
