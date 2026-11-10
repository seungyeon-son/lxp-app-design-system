// 상단/하단 내비게이션: StatusBar · Header · AppHeader · TabBar · Dropdown
// Figma: 공통(24:12502) — iPhone header / Header / App_header / Tab bar
import { esc, cx } from '../core/html.js';
import { Icon, asset } from '../core/assets.js';
import { IconButton } from './button.js';

/** iOS 상태바 (Figma 24:13152) */
export function StatusBar({ className = '' } = {}) {
  return `<div class="${cx('lxp-statusbar', className)}" aria-hidden="true">
    <img class="lxp-statusbar__left" src="${asset('statusbar-left')}" alt="">
    <img class="lxp-statusbar__right" src="${asset('statusbar-right')}" alt="">
  </div>`;
}

/** 드롭다운 메뉴 (Header message-open 의 more-dropdown, 79:18854) */
export function Dropdown({ items = [], className = '', style = '' } = {}) {
  return `<div class="${cx('lxp-dropdown', className)}" role="menu" style="${style}">
    ${items.map((it) => `<button class="lxp-dropdown__item" role="menuitem">
      ${it.icon ? Icon(it.icon, { size: 18 }) : ''}<span>${esc(it.label)}</span></button>`).join('')}
  </div>`;
}

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
 */
export function AppHeader({ type = 'page', title = '', subtitle = '', right } = {}) {
  const leftIcon = { default: 'menu', popup_pull: 'x-close' }[type] || 'chevron-left';
  const rightIcon = right !== undefined ? right
    : type === 'default' ? 'bell-18'
    : (type === 'page_chat' || type === 'photo-viewer') ? 'dots-vertical' : null;
  const center = type === 'default' ? '<div class="lxp-app-header__title"></div>'
    : `<div class="lxp-app-header__title"><p class="lxp-ellipsis">${esc(title)}</p>${subtitle ? `<span>${esc(subtitle)}</span>` : ''}</div>`;
  return `<header class="lxp-app-header">
    ${IconButton({ icon: leftIcon, size: 36, label: leftIcon === 'chevron-left' ? '뒤로' : leftIcon === 'menu' ? '메뉴' : '닫기' })}
    ${center}
    ${rightIcon ? IconButton({ icon: rightIcon, size: 36 }) : '<span class="lxp-icon-btn lxp-icon-btn--36" aria-hidden="true"></span>'}
  </header>`;
}

const TABS = [
  { key: 'home', label: '홈', icon: 'tab-home', activeIcon: 'tab-home-active' },
  { key: 'class', label: '내강의실', icon: 'tab-class', activeIcon: 'tab-class-active' },
  { key: 'message', label: '메시지', icon: 'tab-message', activeIcon: 'tab-message-active' },
  { key: 'more', label: '더보기', icon: 'tab-more', activeIcon: 'tab-more-active' },
];

/**
 * 하단 탭바 (h82)
 * @param {'home'|'class'|'message'|'more'} [p.active]
 * @param {Record<string, number|string>} [p.badges] 예: { message: 11 }
 * @param {string[]} [p.newDots] 예: ['more']
 * @param {typeof TABS} [p.items] 커스텀 탭
 */
export function TabBar({ active = 'home', badges = { message: 11 }, newDots = [], items = TABS } = {}) {
  return `<nav class="lxp-tabbar">
    ${items.map((t) => {
      const on = t.key === active;
      return `<a class="${cx('lxp-tabbar__item', on && 'is-active')}" ${on ? 'aria-current="page"' : ''}>
        ${Icon(on ? t.activeIcon : t.icon, { size: 24 })}
        <span>${esc(t.label)}</span>
        ${badges[t.key] != null ? `<i class="lxp-tabbar__badge">${esc(badges[t.key])}</i>` : ''}
        ${newDots.includes(t.key) ? `<img class="lxp-tabbar__dot" src="${asset('dot-new')}" alt="새 소식">` : ''}
      </a>`;
    }).join('')}
  </nav>`;
}

export const TAB_ITEMS = TABS;
