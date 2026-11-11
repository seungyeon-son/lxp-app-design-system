// TabBar · TAB_ITEMS — 4층 영역
import { esc, cx } from '../../core/html.js';
import { Icon, asset } from '../../core/assets.js';

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
