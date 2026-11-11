// CourseCard — 3층 블록
import { esc, cx } from '../../core/html.js';
import { asset } from '../../core/assets.js';

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
