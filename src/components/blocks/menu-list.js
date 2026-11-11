// MenuList — 3층 블록 (더보기 메뉴 more_menu 21:11720 · 외부링크 메뉴 more_externel_menu 21:11955)
import { esc, cx, htmlAttrs } from '../../core/html.js';
import { Icon } from '../../core/assets.js';

const MORE_ITEMS = [
  { icon: 'user-20', label: '개인정보 수정' },
  { icon: 'bell-20', label: '알림 설정' },
  { icon: 'globe-20', label: '언어 설정', value: '한국어', valueTone: 'info' },
  { icon: 'announcement-20', label: '시스템 공지' },
  { icon: 'mail-20', label: '문의하기' },
  { icon: 'info-circle-20', label: '버전 정보', value: '1.0.0' },
  { icon: 'user-plus-20', label: '다른 계정으로 로그인' },
  { icon: 'log-out-20', label: '로그아웃' },
];

/**
 * 메뉴 목록 — 행 사이 구분선이 있는 카드형 목록 (더보기 탭)
 * @param {{icon?:string,label:string,value?:string,valueTone?:'info'|'muted',trailing?:string,attrs?:object}[]} [p.items]
 *   icon: 왼쪽 20px 아이콘 · value: 오른쪽 값(언어 '한국어' = info, 버전 '1.0.0' = muted)
 *   trailing: 오른쪽 아이콘 (기본 회색 › chevron-right-16-gray, 외부 링크는 link-external-20)
 * @param {'white'|'gray'} [p.tone] white = 흰 카드 + 테두리(more_menu), gray = 회색 바탕(more_externel_menu)
 */
export function MenuList({ items = MORE_ITEMS, tone = 'white', className = '' } = {}) {
  return `<div class="${cx('lxp-menu-list', `lxp-menu-list--${tone}`, className)}" role="list">
    ${items.map((it) => {
      const trailing = it.trailing || 'chevron-right-16-gray';
      return `<button type="button" class="lxp-menu-list__item" role="listitem"${htmlAttrs(it.attrs)}>
        <span class="lxp-menu-list__main">${it.icon ? Icon(it.icon, { size: 20 }) : ''}<span>${esc(it.label)}</span></span>
        <span class="lxp-menu-list__side">${it.value ? `<span class="${cx('lxp-menu-list__value', `is-${it.valueTone || 'muted'}`)}">${esc(it.value)}</span>` : ''}${Icon(trailing, { size: trailing.endsWith('-20') ? 20 : 16 })}</span>
      </button>`;
    }).join('')}
  </div>`;
}
