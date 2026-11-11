// ListItem — 3층 블록 (목록 한 줄 list-base-state — 바텀시트 메뉴, 설정 목록, 언어 선택)
import { esc, cx, htmlAttrs } from '../../core/html.js';
import { Icon } from '../../core/assets.js';
import { Flag } from '../primitives/flag.js';

/**
 * 목록 한 줄 — 왼쪽 아이콘(20) 또는 국기(24) · 라벨 · 오른쪽 › / ✓
 * @param {string} p.label
 * @param {string} [p.icon] 20px 아이콘 (reply-20, edit-20 …)
 * @param {'kr'|'us'|'jp'|'cn'} [p.flag] 국기 (언어 선택)
 * @param {'chevron'|'check'} [p.trailing] chevron = 다음 화면, check = 선택됨(파란 ✓)
 * @param {'default'|'muted'|'danger'} [p.tone]
 *   default = 진한 회색(메뉴) · muted = 한 단계 연한 회색(설정 목록) · danger = 빨강(삭제·나가기)
 *   빨강 글자: Figma tx/semantic/nega-primary(3.8:1) → 대비 규칙에 따라 nega-secondary
 * @param {'md'|'sm'} [p.size] md = 44px · 15M, sm = 36px · 14M (언어 선택 시트)
 */
export function ListItem({ label = '', icon, flag, trailing, tone = 'default', size = 'md', attrs, className = '' } = {}) {
  const trail = trailing === 'chevron' ? Icon('chevron-right-18', { size: 18 })
    : trailing === 'check' ? Icon(size === 'sm' ? 'check-16-blue' : 'check-18-blue', { size: size === 'sm' ? 16 : 18 }) : '';
  return `<button type="button" class="${cx('lxp-list-item', `lxp-list-item--${size}`, `is-${tone}`, className)}"${trailing === 'check' ? ' aria-current="true"' : ''}${htmlAttrs(attrs)}>
    <span class="lxp-list-item__main">${flag ? Flag({ code: flag }) : icon ? Icon(icon, { size: 20 }) : ''}<span>${esc(label)}</span></span>
    ${trail}
  </button>`;
}
