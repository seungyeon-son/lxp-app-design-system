// Header · AppHeader — 4층 영역
import { esc } from '../../core/html.js';
import { Icon } from '../../core/assets.js';
import { Dropdown } from '../blocks/dropdown.js';
import { IconButton } from '../primitives/button.js';

const HEADER_PRESETS = {
  home: { title: '홈', actions: [{ icon: 'bell-18', size: 36 }] },
  class: { title: '2026년 1학기', caret: true, actions: [{ icon: 'grid-active', active: true }, { icon: 'list-inactive' }] },
  class_list: { title: '2026년 1학기', caret: true, actions: [{ icon: 'grid-inactive' }, { icon: 'list-active', active: true }] },
  message: { title: '메시지', actions: [{ icon: 'search-20', size: 40 }, { icon: 'dots-vertical-20', size: 40 }] },
  'message-open': {
    title: '메시지',
    actions: [{ icon: 'search-20', size: 40 }, { icon: 'dots-vertical-20', size: 40 }],
    menu: [{ icon: 'message-chat-circle', label: '차단 대화 관리' }],
  },
  more: { title: '더보기', actions: [] },
};

/**
 * 메인 탭 헤더 (h68, Head/20B)
 * @param {object} p
 * @param {'home'|'class'|'class_list'|'message'|'message-open'|'more'} [p.variant]
 * @param {string} [p.title] @param {boolean} [p.caret] 학기 선택 ▼
 * @param {{icon:string,size?:36|40,active?:boolean,label?:string}[]} [p.actions]
 * @param {{icon?:string,label:string}[]} [p.menu] 열린 드롭다운
 */
export function Header(p = {}) {
  const preset = HEADER_PRESETS[p.variant || 'home'] || {};
  const { title, caret, actions = [], menu } = { ...preset, ...p };
  return `<header class="lxp-header">
    <div class="lxp-header__title">
      <h1>${esc(title)}</h1>${caret ? Icon('caret-down', { size: 20 }) : ''}
    </div>
    <div class="lxp-header__actions">
      ${actions.map((a) => IconButton({ icon: a.icon, size: a.size || 36, active: a.active, label: a.label })).join('')}
    </div>
    ${menu ? Dropdown({ items: menu, className: 'lxp-header__menu' }) : ''}
  </header>`;
}

/**
 * 서브 페이지 헤더 (h56, 하단 보더)
 * @param {'default'|'popup_pull'|'page'|'page_chat'|'photo-viewer'} [p.type]
 * @param {string} [p.title] @param {string} [p.subtitle] photo-viewer 날짜
 * @param {string|null} [p.right] 오른쪽 아이콘 이름. null 이면 빈 자리. 생략하면 type 기본값
 * @param {string} [p.titleIcon] 타이틀 오른쪽 16px 아이콘 (스마트 출석부의 동기화 'refresh-16')
 */
export function AppHeader({ type = 'page', title = '', subtitle = '', right, titleIcon } = {}) {
  const leftIcon = { default: 'menu', popup_pull: 'x-close' }[type] || 'chevron-left';
  const rightIcon = right !== undefined ? right
    : type === 'default' ? 'bell-18'
    : (type === 'page_chat' || type === 'photo-viewer') ? 'dots-vertical' : null;
  const center = type === 'default' ? '<div class="lxp-app-header__title"></div>'
    : titleIcon
      ? `<div class="lxp-app-header__title has-icon"><p class="lxp-ellipsis">${esc(title)}</p>${Icon(titleIcon, { size: 16 })}</div>`
      : `<div class="lxp-app-header__title"><p class="lxp-ellipsis">${esc(title)}</p>${subtitle ? `<span>${esc(subtitle)}</span>` : ''}</div>`;
  return `<header class="lxp-app-header">
    ${IconButton({ icon: leftIcon, size: 36, label: leftIcon === 'chevron-left' ? '뒤로' : leftIcon === 'menu' ? '메뉴' : '닫기' })}
    ${center}
    ${rightIcon ? IconButton({ icon: rightIcon, size: 36 }) : '<span class="lxp-icon-btn lxp-icon-btn--36" aria-hidden="true"></span>'}
  </header>`;
}
