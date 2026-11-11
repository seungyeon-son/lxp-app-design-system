// Button · IconButton — 2층 요소
import { esc, cx, htmlAttrs } from '../../core/html.js';
import { Icon } from '../../core/assets.js';

/**
 * 텍스트 버튼
 * @param {string} p.label
 * @param {'primary'|'secondary'|'outline'|'outline-primary'|'gray'|'ghost'} [p.variant]
 *   primary  : 코스모스 블루 (저장하기/대화시작하기)
 *   secondary: 연회색 배경 (내 강의실 편집)
 *   outline  : 흰 배경 + 보더 (차단 해제 · 리스트 내)
 *   outline-primary: 흰 배경 + 연파랑 보더 + 파랑 글자 (출석부 '자동출결', Figma 7062:38460)
 *   gray     : 진회색 배경 (차단 해제 · 푸터)
 * @param {'xl'|'lg'|'md'|'sm'|'xs'} [p.size] xl=48(출석부 BottomCTA), lg=44, md=40, sm=32(btn-ghost-base-state, 출석부 '변경 ›'), xs=28
 * @param {string} [p.icon] 왼쪽 아이콘 이름
 * @param {string} [p.iconRight] 오른쪽 아이콘 이름
 * @param {boolean} [p.block] 가로 100%
 * @param {boolean} [p.disabled]
 * @param {'danger'|'primary'} [p.tone] 글자색만 바꿈 — ghost 버튼용. danger=nega-secondary(팝업 '삭제'), primary=info-secondary(팝업 '확인')
 * @param {Record<string,string|number|boolean>} [p.attrs] 추가 속성 (id, type, data-* 등)
 */
export function Button({ label = '', variant = 'primary', size = 'lg', tone, icon, iconRight, block = false, disabled = false, attrs, className = '' } = {}) {
  const iconSize = size === 'xs' ? 12 : size === 'xl' ? 18 : 16;
  return `<button class="${cx('lxp-btn', `lxp-btn--${variant}`, `lxp-btn--${size}`, block && 'lxp-btn--block', tone && `is-${tone}`, icon && 'has-icon', iconRight && 'has-icon-right', className)}"${disabled ? ' disabled' : ''}${htmlAttrs(attrs)}>
    ${icon ? Icon(icon, { size: iconSize }) : ''}<span>${esc(label)}</span>${iconRight ? Icon(iconRight, { size: iconSize }) : ''}
  </button>`;
}

/**
 * 아이콘 버튼
 * @param {string} p.icon
 * @param {16|24|36|40} [p.size] 버튼 크기 (아이콘: 16/14/18/20). 16 = 여백 없는 아이콘만(입력칸 지우기)
 * @param {boolean} [p.active] 선택 상태 (연회색 배경)
 * @param {boolean} [p.round] 원형 + 연회색 배경 (메시지 입력 +/↑)
 * @param {Record<string,string|number|boolean>} [p.attrs] 추가 속성 (id, data-* 등)
 */
export function IconButton({ icon, size = 36, active = false, round = false, label = '', attrs, className = '' } = {}) {
  const iconSize = { 16: 16, 24: 14, 36: 18, 40: 20 }[size] || 18;
  return `<button class="${cx('lxp-icon-btn', `lxp-icon-btn--${size}`, active && 'is-active', round && 'lxp-icon-btn--round', className)}" aria-label="${esc(label || icon)}"${htmlAttrs(attrs)}>
    ${Icon(icon, { size: iconSize })}
  </button>`;
}
