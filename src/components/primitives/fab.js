// Fab — 2층 요소 (떠 있는 원형 버튼 — 메시지 목록 '새 대화', Figma icon-base · icon/24/plus_2)
import { esc, cx, htmlAttrs } from '../../core/html.js';
import { Icon } from '../../core/assets.js';

/**
 * 떠 있는 48px 원형 버튼. 화면에 둘 때는 Screen({ fab: Fab({}) })
 * @param {string} [p.icon] 48px 아이콘 (기본 fab-plus-48 = 파란 원 + 흰 +)
 * @param {string} [p.label]
 */
export function Fab({ icon = 'fab-plus-48', label = '새 대화', attrs, className = '' } = {}) {
  return `<button type="button" class="${cx('lxp-fab', className)}" aria-label="${esc(label)}"${htmlAttrs(attrs)}>${Icon(icon, { size: 48 })}</button>`;
}
