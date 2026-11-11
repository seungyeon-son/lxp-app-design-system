// DeadlineCard — 3층 블록
import { esc, cx } from '../../core/html.js';
import { Icon } from '../../core/assets.js';
import { Chip } from '../primitives/chip.js';

/**
 * 마감 학습 카드 (Card 20:10467 — 오늘 마감 학습)
 * @param {string} [p.module] 모듈 아이콘 (module-vod | module-url ...)
 * @param {boolean} [p.faded] 캐러셀 양옆 카드 (흰 80%)
 */
export function DeadlineCard({ label = '오늘 마감 학습', remain = '3시간 남았어요', title = '학습이론 2: 경험주의', course = '물리학수업', module = 'module-vod', faded = false } = {}) {
  return `<article class="${cx('lxp-deadline-card', faded && 'is-faded')}">
    <div class="lxp-deadline-card__head"><span>${esc(label)}</span>${Chip({ label: remain, tone: 'info' })}</div>
    <div class="lxp-deadline-card__body">
      <div class="lxp-deadline-card__text"><p>${esc(title)}</p><span>${esc(course)}</span></div>
      ${Icon(module, { size: 40 })}
    </div>
  </article>`;
}
