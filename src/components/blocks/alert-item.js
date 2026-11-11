// AlertItem — 3층 블록 (홈 > 알림 목록 행 Alert_content 25:13296)
import { esc, cx } from '../../core/html.js';
import { Icon } from '../../core/assets.js';

/**
 * 알림 목록 행 — 강의명 · 시간 / 알림 제목, 아래 구분선
 * 강의명 글자색: Figma 는 tx/hierarchy/quinary(3.2:1) — 흰 배경 대비 규칙(CLAUDE.md)에 따라 quaternary 사용
 * @param {string} [p.course] 강의명 (한 줄, 넘치면 말줄임)
 * @param {string} [p.time] 시간 ("오후12:56")
 * @param {string} [p.title] 알림 제목 (한 줄, 넘치면 말줄임)
 * @param {boolean} [p.divider] 아래 구분선
 */
export function AlertItem({ course = '창의코딩-모두의파이썬 (2025-2-2)', time = '오후12:56', title = '[학습이론 1 행동주의]새 과제가 등록되었습니다.', divider = true, className = '' } = {}) {
  return `<article class="${cx('lxp-alert-item', className)}">
    <div class="lxp-alert-item__body">
      <div class="lxp-alert-item__meta">
        <p class="lxp-ellipsis">${esc(course)}</p>
        <span class="lxp-alert-item__time">${Icon('clock-12', { size: 12 })}<span class="lxp-num">${esc(time)}</span></span>
      </div>
      <p class="lxp-alert-item__title lxp-ellipsis">${esc(title)}</p>
    </div>
    ${divider ? '<hr class="lxp-alert-item__line">' : ''}
  </article>`;
}
