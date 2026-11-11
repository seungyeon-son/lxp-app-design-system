// FriendRow — 3층 블록 (Friends list_state — 대화 상대 선택 목록 행)
import { esc, cx, slot, htmlAttrs } from '../../core/html.js';
import { Icon } from '../../core/assets.js';
import { Avatar } from '../primitives/avatar.js';

/**
 * 사람 선택 행 — 아바타 48 + 이름(학번) / 오른쪽 슬롯 (선택 체크 등)
 * @param {string} p.name 예: '김연아(2251****)'
 * @param {string} [p.avatar] avatar-01~07 또는 URL
 * @param {string} [p.icon] 아바타 대신 48px 아이콘 + 굵은 라벨 (대화 멤버 '초대하기' = plus-circle-48)
 * @param {string} [p.right] 오른쪽 슬롯 (SelectCheck 등)
 * @param {boolean} [p.selected] 고른 행 (연회색 바탕)
 * @param {boolean} [p.disabled] 이미 멤버라 고를 수 없음 (흐린 이름)
 * @param {Record<string,string|number|boolean>} [p.attrs]
 */
export function FriendRow({ name = '김연아(2251****)', avatar = 'avatar-03', icon, right = '', selected = false, disabled = false, attrs, className = '' } = {}) {
  const lead = icon ? Icon(icon, { size: 48 }) : Avatar({ src: avatar, name, size: 48 });
  return `<div class="${cx('lxp-friend-row', icon && 'is-action', selected && 'is-selected', disabled && 'is-disabled', className)}"${disabled ? ' aria-disabled="true"' : ''}${htmlAttrs(attrs)}>
    <div class="lxp-friend-row__who">${lead}<p class="lxp-ellipsis">${esc(name)}</p></div>
    ${right ? `<div class="lxp-friend-row__right">${slot(right)}</div>` : ''}
  </div>`;
}
