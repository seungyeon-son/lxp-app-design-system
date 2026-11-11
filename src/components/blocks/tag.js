// Tag — 3층 블록
import { esc, cx } from '../../core/html.js';
import { Icon } from '../../core/assets.js';
import { Avatar } from '../primitives/avatar.js';
import { IconButton } from '../primitives/button.js';

/**
 * 선택 태그 (con-base — 받는 사람 선택 칩)
 * @param {'md'|'lg'} [p.size] md=40, lg=44
 * @param {string|false} [p.avatar] 아바타 에셋/URL. false 면 아이콘형
 * @param {boolean} [p.closable]
 */
export function Tag({ label = 'label', size = 'md', avatar = 'avatar-03', icon = 'plus', closable = true } = {}) {
  const av = avatar ? Avatar({ src: avatar, size: size === 'lg' ? 40 : 36 }) : Icon(icon, { size: 18 });
  return `<span class="${cx('lxp-tag', `lxp-tag--${size}`, avatar ? 'has-avatar' : 'has-icon')}">
    ${av}<span>${esc(label)}</span>${closable ? IconButton({ icon: 'x-close-14', size: 24, label: '삭제' }) : ''}
  </span>`;
}
