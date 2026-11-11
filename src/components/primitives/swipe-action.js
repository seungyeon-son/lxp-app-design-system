// SwipeAction — 2층 요소 (목록 행을 밀면 드러나는 64×64 액션 칸)
import { esc, cx } from '../../core/html.js';
import { Icon } from '../../core/assets.js';

/**
 * 스와이프 액션 (Message list swipe 19:8837)
 * @param {string} [p.label] 글자 (아이콘이 있으면 aria-label 로만 씀)
 * @param {string} [p.icon] 흰 아이콘 에셋명 (예: pin-20-white)
 * @param {'neutral'|'strong'|'danger'|'info'} [p.tone]
 *   neutral=회색(읽음·알림) · strong=연회색(차단) · danger=빨강(나가기) · info=파랑(고정)
 */
export function SwipeAction({ label = '', icon, tone = 'neutral', className = '' } = {}) {
  return `<button class="${cx('lxp-swipe-action', `is-${tone}`, className)}"${icon ? ` aria-label="${esc(label)}"` : ''}>${icon ? Icon(icon, { size: 20 }) : esc(label)}</button>`;
}
