// 학습 도메인: CourseCard · DeadlineCard · DeadlineCarousel · ModuleItem · WeekPicker
// Figma: 메뉴탭 > 홈(69:22326), 메뉴탭 > 내강의실(69:22327)
import { esc, cx } from '../core/html.js';
import { Icon, asset } from '../core/assets.js';
import { Chip } from './display.js';

/**
 * 강의 카드 (Card-class-base 5:12819)
 * @param {'grid'|'list'} [p.layout] grid=156×176, list=320×68
 * @param {'blue'|'yellow'|'orange'|'green'|'purple'} [p.color] 썸네일 패턴 색
 */
export function CourseCard({ title = '물리학수업', professor = '홍길동 교수', color = 'blue', layout = 'grid', className = '' } = {}) {
  const thumb = `<div class="lxp-course-card__thumb" style="background-image:url('${asset('thumb-' + color)}')"></div>`;
  return `<article class="${cx('lxp-course-card', `lxp-course-card--${layout}`, className)}">
    ${thumb}
    <div class="lxp-course-card__body">
      <p class="lxp-course-card__title">${esc(title)}</p>
      <p class="lxp-course-card__meta">${esc(professor)}</p>
    </div>
  </article>`;
}

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

/** 마감 카드 슬라이드 (가운데 카드 + 양옆 미리보기) */
export function DeadlineCarousel({ cards = [{}] } = {}) {
  const c = cards[0] || {};
  return `<div class="lxp-deadline-carousel">
    ${DeadlineCard({ ...(cards[cards.length - 1] || c), faded: true })}
    ${DeadlineCard(c)}
    ${DeadlineCard({ ...(cards[1] || c), faded: true })}
  </div>`;
}

/**
 * 학습 모듈 아이템 (Learning module-base 21:10764)
 * @param {number} p.dday 남은 일수 — 3 이하면 강조(파란 칩)
 * @param {string} [p.module] 28px 모듈 아이콘
 */
export function ModuleItem({ title = '1-2. [과제] IoT 기술이 적용된 산업 사례 조사 보고서', course = '사물인터넷과 4차산업사회', dday = 4, module = 'module-vod-28' } = {}) {
  const urgent = dday <= 3;
  return `<article class="lxp-module-item">
    ${Icon(module, { size: 28 })}
    <div class="lxp-module-item__text"><p class="lxp-ellipsis">${esc(title)}</p><span>${esc(course)}</span></div>
    ${Chip({ label: `D-${dday}`, tone: urgent ? 'info' : 'neutral' })}
  </article>`;
}

/**
 * 주간 날짜 선택 (Date picker 24:12363)
 * @param {{w:string,d:number|string,dot?:boolean}[]} [p.days]
 * @param {number} [p.selected] 선택 인덱스
 */
export function WeekPicker({ days, selected = 0 } = {}) {
  const list = days || ['월', '화', '수', '목', '금', '토', '일'].map((w, i) => ({ w, d: i + 1, dot: [0, 2, 4, 5].includes(i) }));
  return `<div class="lxp-week">
    ${list.map((x, i) => `<button class="${cx('lxp-week__day', i === selected && 'is-selected')}">
      <span>${esc(x.w)}</span><b>${esc(x.d)}</b>
      ${x.dot ? `<img class="lxp-week__dot" src="${asset('dot-red')}" alt="">` : ''}
    </button>`).join('')}
  </div>`;
}
