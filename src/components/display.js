// 데이터 표시: Chip · Badge · Avatar · AvatarGroup · Tag · Toast
import { esc, cx } from '../core/html.js';
import { Icon, asset } from '../core/assets.js';
import { IconButton } from './button.js';

/**
 * 칩 (chip/times — "3시간 남았어요", "D-3")
 * @param {'info'|'neutral'|'posi'|'nega'|'warn'} [p.tone]
 */
export function Chip({ label = '', tone = 'info', className = '' } = {}) {
  return `<span class="${cx('lxp-chip', `lxp-chip--${tone}`, className)}">${esc(label)}</span>`;
}

/**
 * 카운트 배지 (새 메시지 수 — 민트 배경)
 * @param {'md'|'sm'|'square'} [p.size] md=22px/12SB, sm=18px/11SB, square=radius4/13M
 */
export function Badge({ count = 1, size = 'md', className = '' } = {}) {
  return `<span class="${cx('lxp-badge', `lxp-badge--${size}`, className)}">${esc(count)}</span>`;
}

/**
 * 아바타 (Avata-base: 24/28/32/36/40/48)
 * @param {string} [p.src] 이미지 URL 또는 에셋명 (avatar-02~05). 없으면 이름 첫 글자 플레이스홀더
 * @param {string} [p.name] 플레이스홀더 이니셜용
 * @param {boolean} [p.dimmed] 차단/나간 사용자 (투명도 25%)
 */
export function Avatar({ src, name = '', size = 48, dimmed = false, alt = '', className = '' } = {}) {
  const box = `width:${size}px;height:${size}px`;
  if (!src) {
    return `<span class="${cx('lxp-avatar', 'is-empty', dimmed && 'is-dimmed', className)}" style="${box};font-size:${Math.round(size * 0.4)}px" aria-label="${esc(alt || name)}">${esc(name.slice(0, 1))}</span>`;
  }
  const url = /^avatar-/.test(src) ? asset(src) : src;
  return `<span class="${cx('lxp-avatar', dimmed && 'is-dimmed', className)}" style="${box}">
    <img src="${url}" alt="${esc(alt)}">
  </span>`;
}

/** 그룹 아바타 (아바타 + "+N" 원형, 겹침 -24px) */
export function AvatarGroup({ src = 'avatar-03', more = 5, size = 48 } = {}) {
  return `<span class="lxp-avatar-group" style="--size:${size}px">
    ${Avatar({ src, size })}<span class="lxp-avatar-group__more">+${esc(more)}</span>
  </span>`;
}

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

/** 토스트 (Notice_guide_secondary — "저장되었습니다") */
export function Toast({ label = '저장되었습니다', icon = 'check' } = {}) {
  return `<div class="lxp-toast" role="status">${icon ? Icon(icon, { size: 16 }) : ''}<span>${esc(label)}</span></div>`;
}
