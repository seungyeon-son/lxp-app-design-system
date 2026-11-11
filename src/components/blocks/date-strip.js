// DateStrip — 3층 블록
// 출처: Figma 4.5 LXP App 작업장(ZRoFjuXczoq30fVbJMNsVP) › 확정안 7054:14428 (스마트 출석부)
import { esc, cx } from '../../core/html.js';

const DEFAULT_DAYS = [
  { label: '화', date: '27' }, { label: '수', date: '28' }, { label: '목', date: '29' },
  { label: '오늘', date: '30' }, { label: '월', date: '11/2' }, { label: '화', date: '3' }, { label: '수', date: '4' },
];

/**
 * 날짜 줄 (DateStrip 7062:38201) — 62×60 날짜 칸을 가로로 나열, 가운데 정렬(양 끝은 잘림).
 * 달이 바뀌는 날짜에만 월을 함께 표기("11/2"), 오늘은 가운데에 두는 것이 Figma 규칙입니다.
 * @param {{label:string,date:string}[]} [p.items] 위 줄(요일·'오늘') / 아래 줄(날짜)
 * @param {number} [p.selected] 선택 칸 인덱스 (파란 칸)
 * 각 칸은 data-index 속성을 가집니다.
 */
export function DateStrip({ items = DEFAULT_DAYS, selected = 3, className = '' } = {}) {
  return `<div class="${cx('lxp-date-strip', className)}"><div class="lxp-date-strip__track">
    ${items.map((d, i) => `<button type="button" class="${cx('lxp-date-strip__item', i === selected && 'is-active')}" aria-pressed="${i === selected}" data-index="${i}">
      <span>${esc(d.label)}</span><strong>${esc(d.date)}</strong>
    </button>`).join('')}
  </div></div>`;
}
