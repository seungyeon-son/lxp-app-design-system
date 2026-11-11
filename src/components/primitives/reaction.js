// Reaction — 2층 요소
import { esc, cx } from '../../core/html.js';
import { Icon } from '../../core/assets.js';

/**
 * 이모지 리액션 버튼
 * @param {string} [p.emoji] 문자 이모지 (기본 👍)
 * @param {string} [p.icon] 이모지 대신 쓸 아이콘 에셋명
 */
export function Reaction({ emoji = '👍', icon, count, selected = false, add = false } = {}) {
  if (add) return `<button class="lxp-reaction" aria-label="리액션 추가">${Icon('face-smile-plus', { size: 16 })}</button>`;
  const glyph = icon ? Icon(icon, { size: 16 }) : `<span class="lxp-reaction__emoji">${esc(emoji)}</span>`;
  return `<button class="${cx('lxp-reaction', selected && 'is-selected')}">${glyph}${count != null ? `<span>${esc(count)}</span>` : ''}</button>`;
}
