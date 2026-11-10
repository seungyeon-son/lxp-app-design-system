// 버튼: Button(btn-base-state) · IconButton(btn-icon-base-state)
import { esc, cx } from '../core/html.js';
import { Icon } from '../core/assets.js';

/**
 * 텍스트 버튼
 * @param {string} p.label
 * @param {'primary'|'secondary'|'outline'|'gray'|'ghost'} [p.variant]
 *   primary  : 코스모스 블루 (저장하기/대화시작하기)
 *   secondary: 연회색 배경 (내 강의실 편집)
 *   outline  : 흰 배경 + 보더 (차단 해제 · 리스트 내)
 *   gray     : 진회색 배경 (차단 해제 · 푸터)
 * @param {'lg'|'md'|'xs'} [p.size] lg=44, md=40, xs=28
 * @param {string} [p.icon] 왼쪽 아이콘 이름
 * @param {boolean} [p.block] 가로 100%
 * @param {boolean} [p.disabled]
 */
export function Button({ label = '', variant = 'primary', size = 'lg', icon, block = false, disabled = false, className = '' } = {}) {
  const iconSize = size === 'xs' ? 12 : 16;
  return `<button class="${cx('lxp-btn', `lxp-btn--${variant}`, `lxp-btn--${size}`, block && 'lxp-btn--block', icon && 'has-icon', className)}"${disabled ? ' disabled' : ''}>
    ${icon ? Icon(icon, { size: iconSize }) : ''}<span>${esc(label)}</span>
  </button>`;
}

/**
 * 아이콘 버튼
 * @param {string} p.icon
 * @param {24|36|40} [p.size] 버튼 크기 (아이콘: 14/18/20)
 * @param {boolean} [p.active] 선택 상태 (연회색 배경)
 * @param {boolean} [p.round] 원형 + 연회색 배경 (메시지 입력 +/↑)
 */
export function IconButton({ icon, size = 36, active = false, round = false, label = '', className = '' } = {}) {
  const iconSize = { 24: 14, 36: 18, 40: 20 }[size] || 18;
  return `<button class="${cx('lxp-icon-btn', `lxp-icon-btn--${size}`, active && 'is-active', round && 'lxp-icon-btn--round', className)}" aria-label="${esc(label || icon)}">
    ${Icon(icon, { size: iconSize })}
  </button>`;
}
