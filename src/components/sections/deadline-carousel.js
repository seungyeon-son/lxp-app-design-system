// DeadlineCarousel — 4층 영역
import { DeadlineCard } from '../blocks/deadline-card.js';

/**
 * 마감 카드 슬라이드 (가운데 카드 + 양옆 미리보기)
 * @param {object[]} [p.cards] DeadlineCard 인자 배열. 첫 장이 가운데, 두 장 이상이면 양옆에 흐린 카드
 */
export function DeadlineCarousel({ cards = [{}] } = {}) {
  const c = cards[0] || {};
  return `<div class="lxp-deadline-carousel">
    ${DeadlineCard({ ...(cards[cards.length - 1] || c), faded: true })}
    ${DeadlineCard(c)}
    ${DeadlineCard({ ...(cards[1] || c), faded: true })}
  </div>`;
}
