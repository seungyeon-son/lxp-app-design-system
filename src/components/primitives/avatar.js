// Avatar · AvatarGroup — 2층 요소
import { esc, cx } from '../../core/html.js';
import { asset } from '../../core/assets.js';

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
/**
 * 그룹 아바타 — 아바타(들) + "+N" 원형
 * @param {string} [p.src] 아바타 하나 (기본, 메시지 목록: 48px · 절반 겹침)
 * @param {string[]} [p.avatars] 여러 개 (대화 시작 안내: 36px · 8px 겹침, Figma start-chat 79:18831)
 * @param {number} [p.more] "+N" — 0 이면 생략
 * @param {number} [p.overlap] 겹치는 폭(px). 기본 = 크기의 절반
 */
export function AvatarGroup({ src = 'avatar-03', avatars, more = 5, size = 48, overlap } = {}) {
  const list = avatars || [src];
  const ov = overlap != null ? `;--overlap:${overlap}px` : '';
  return `<span class="${cx('lxp-avatar-group', size <= 36 && 'is-sm')}" style="--size:${size}px${ov}">
    ${list.map((s) => Avatar({ src: s, size })).join('')}${more ? `<span class="lxp-avatar-group__more">+${esc(more)}</span>` : ''}
  </span>`;
}
