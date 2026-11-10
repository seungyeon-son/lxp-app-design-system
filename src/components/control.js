// 선택 컨트롤: DateStrip · ToggleGroup · Checkbox
// 출처: Figma 4.5 LXP App 작업장(ZRoFjuXczoq30fVbJMNsVP) › 확정안 7054:14428 (스마트 출석부)
// 이벤트 처리는 넣지 않습니다(순수 함수). 선택 상태는 aria-pressed / aria-checked 로 마크업에 남깁니다.
import { esc, cx, htmlAttrs } from '../core/html.js';
import { Icon } from '../core/assets.js';
import { Dropdown } from './navigation.js';

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

/**
 * 토글 그룹 (리스트 SessionStrip 7062:38277 · 상태 스펙 default/selected/unselected/active)
 * 버튼 여러 개 중 하나를 고르는 단일 선택. 고르면 선택 버튼만 tone 색 테두리, 나머지는 흐려집니다.
 * @param {{value:string,label:string,icon?:string,iconOff?:string,tone?:'info'|'nega'|'posi'|'warn'|'neutral'}[]} p.items
 *   icon: 기본/선택 아이콘, iconOff: 다른 버튼이 선택됐을 때(흐린 상태) 아이콘
 * @param {string|null} [p.value] 선택 값. null 이면 아무것도 고르지 않은 기본 상태
 * @param {{icon?:string,label?:string,open?:boolean,items:{value:string,label:string,icon?:string,tone?:string}[]}} [p.overflow]
 *   ⋯ 버튼과 메뉴. value 가 overflow 항목이면 ⋯ 자리에 그 아이콘을 tone 테두리로 보여 줍니다(출석부 조퇴·지각조퇴).
 * @param {string} [p.label] 그룹 aria-label (예: '홍길동 출결')
 * @param {Record<string,string|number|boolean>} [p.attrs] 그룹 요소 추가 속성 (예: { 'data-row': 3 })
 * 버튼: data-value="값" aria-pressed, ⋯ 버튼: data-overflow aria-expanded, 메뉴 항목: data-value aria-checked
 */
export function ToggleGroup({
  items = [
    { value: 'present', label: '출석', icon: 'status-present', iconOff: 'status-present-off', tone: 'info' },
    { value: 'absent', label: '결석', icon: 'status-absent', iconOff: 'status-absent-off', tone: 'nega' },
    { value: 'late', label: '지각', icon: 'status-late', iconOff: 'status-late-off', tone: 'posi' },
  ],
  value = null, overflow, label = '', attrs, className = '',
} = {}) {
  const picked = value != null;
  const extra = overflow && overflow.items.find((o) => o.value === value);
  return `<div class="${cx('lxp-toggle-group', picked && 'is-picked', className)}" role="group"${label ? ` aria-label="${esc(label)}"` : ''}${htmlAttrs(attrs)}>
    ${items.map((it) => {
      const on = it.value === value;
      const icon = picked && !on && it.iconOff ? it.iconOff : it.icon;
      return `<button type="button" class="${cx('lxp-toggle-group__item', on && `is-active is-${it.tone || 'info'}`)}" aria-pressed="${on}" data-value="${esc(it.value)}">
        ${icon ? Icon(icon, { size: 18 }) : ''}<span>${esc(it.label)}</span>
      </button>`;
    }).join('')}
    ${overflow ? `<button type="button" class="${cx('lxp-toggle-group__more', extra && `is-active is-${extra.tone || 'neutral'}`)}" data-overflow aria-haspopup="menu" aria-expanded="${!!overflow.open}" aria-label="${esc(extra ? extra.label : overflow.label || '더보기')}">
      ${Icon(extra ? extra.icon : overflow.icon || 'dots-horizontal', { size: 18 })}
    </button>` : ''}
    ${overflow && overflow.open ? Dropdown({
      className: 'lxp-toggle-group__menu',
      items: overflow.items.map((o) => ({ icon: o.icon, label: o.label, value: o.value, checked: o.value === value })),
    }) : ''}
  </div>`;
}

/**
 * 체크박스 + 라벨 (출석부 '미처리만 보기' 7062:38718) — 토큰 기반 구성
 * @param {string} p.label
 * @param {boolean} [p.checked]
 * @param {string|number} [p.count] 라벨 뒤 빨간 개수 "(3)"
 * @param {string} [p.id] input id (상태 보존용)
 */
export function Checkbox({ label = '미처리만 보기', checked = false, count, id, disabled = false, className = '' } = {}) {
  return `<label class="${cx('lxp-checkbox', className)}">
    <input type="checkbox"${id ? ` id="${esc(id)}"` : ''}${checked ? ' checked' : ''}${disabled ? ' disabled' : ''}>
    <span>${esc(label)}${count != null ? `<em>(${esc(count)})</em>` : ''}</span>
  </label>`;
}
