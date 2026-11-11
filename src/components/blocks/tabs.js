// ChipTabs · SegmentedControl · LineTabs — 3층 블록
import { esc, cx } from '../../core/html.js';

/** 필 형태 칩 탭 (정규강좌/자율강좌/교육프로그램) */
export function ChipTabs({ items = ['정규강좌', '자율강좌', '교육프로그램'], active = 0, className = '' } = {}) {
  return `<div class="${cx('lxp-chip-tabs', className)}" role="tablist">
    ${items.map((t, i) => `<button role="tab" aria-selected="${i === active}" class="${cx('lxp-chip-tabs__item', i === active && 'is-active')}">${esc(t)}</button>`).join('')}
  </div>`;
}

/** 세그먼트 컨트롤 (회색 트랙 + 흰 선택 칸) */
export function SegmentedControl({ items = ['정규강좌', '자율강좌', '교육프로그램'], active = 0, className = '' } = {}) {
  const parts = [];
  items.forEach((t, i) => {
    if (i > 0) {
      const hide = i === active || i - 1 === active;
      parts.push(`<i class="${cx('lxp-segment__divider', hide && 'is-hidden')}"></i>`);
    }
    parts.push(`<button role="tab" aria-selected="${i === active}" class="${cx('lxp-segment__item', i === active && 'is-active')}">${esc(t)}</button>`);
  });
  return `<div class="${cx('lxp-segment', className)}"><div class="lxp-segment__track" role="tablist">${parts.join('')}</div></div>`;
}

/** 라인 탭 (하단 인디케이터, 채팅방 설정 등) — 스타일은 토큰 기반 추정 */
export function LineTabs({ items = ['사진', '파일', '링크'], active = 0, className = '' } = {}) {
  return `<div class="${cx('lxp-line-tabs', className)}" role="tablist">
    ${items.map((t, i) => `<button role="tab" aria-selected="${i === active}" class="${cx('lxp-line-tabs__item', i === active && 'is-active')}">${esc(t)}</button>`).join('')}
  </div>`;
}
