// ModuleItem — 3층 블록
import { esc } from '../../core/html.js';
import { Icon } from '../../core/assets.js';
import { Chip } from '../primitives/chip.js';

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
