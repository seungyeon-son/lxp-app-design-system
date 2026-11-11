// MemberRow — 3층 블록
// 출처: Figma 4.5 LXP App 작업장(ZRoFjuXczoq30fVbJMNsVP) › 확정안 7054:14428 (스마트 출석부)
import { esc, cx, slot, htmlAttrs } from '../../core/html.js';
import { Icon } from '../../core/assets.js';
import { Avatar } from '../primitives/avatar.js';

/**
 * 사람 행 (LearnerRows › Row 7062:38271) — 이름(15B, 5글자 넘으면 말줄임) + › / 보조 텍스트(학번) / 오른쪽 슬롯
 * @param {string} p.name @param {string} [p.sub] 이름 아래 보조 텍스트
 * @param {boolean} [p.chevron] 이름 옆 › (상세 보기)
 * @param {string} [p.right] 오른쪽 슬롯 (예: ToggleGroup)
 * @param {string} [p.avatar] 아바타 에셋/URL (Figma 출석부에는 없음, 다른 목록용 선택 옵션)
 * @param {Record<string,string|number|boolean>} [p.attrs] 행 요소 추가 속성
 */
export function MemberRow({ name = '홍길동', sub = '202080187', chevron = true, right = '', avatar, attrs, className = '' } = {}) {
  return `<div class="${cx('lxp-member-row', className)}"${htmlAttrs(attrs)}>
    ${avatar ? Avatar({ src: avatar, name, size: 36 }) : ''}
    <div class="lxp-member-row__who">
      <div class="lxp-member-row__name"><p>${esc(name)}</p>${chevron ? `<span class="lxp-member-row__chev" aria-hidden="true">${Icon('chevron-right-14', { size: 14 })}</span>` : ''}</div>
      ${sub ? `<span class="lxp-member-row__sub lxp-num">${esc(sub)}</span>` : ''}
    </div>
    ${right ? `<div class="lxp-member-row__right">${slot(right)}</div>` : ''}
  </div>`;
}
