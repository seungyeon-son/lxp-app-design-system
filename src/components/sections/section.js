// Section — 4층 영역 (제목 + 내용 묶음, 예: 홈 '이번 주 학습 6')
import { esc } from '../../core/html.js';
import { Stack } from '../layout/stack.js';

/**
 * 섹션 — 제목 줄(제목 + 개수 + 오른쪽 보조)과 그 아래 내용을 세로로 묶습니다.
 * 바깥 간격은 갖지 않습니다. 위아래 여백은 pad 로 이 섹션이 정합니다.
 * @param {string} p.title
 * @param {number|string} [p.count] 제목 옆 개수 상자 (홈 "이번 주 학습 6")
 * @param {string} [p.aside] 제목 줄 오른쪽 슬롯 (예: Button xs)
 * @param {string|string[]} [p.children] 내용
 * @param {number|number[]} [p.gap] 제목과 내용 사이 간격 (기본 12)
 * @param {number|number[]} [p.pad] 섹션 안쪽 여백
 */
export function Section({ title = '', count, aside = '', children = '', gap = 12, pad, className = '' } = {}) {
  const head = `<div class="lxp-section-title"><span class="lxp-section-title__text">${esc(title)}</span>${count != null ? `<span class="lxp-section-title__count">${esc(count)}</span>` : ''}${aside ? `<span class="lxp-section-title__aside">${aside}</span>` : ''}</div>`;
  return Stack({ tag: 'section', gap, pad, className, children: [head, children] });
}
