// BottomSheet — 3층 블록
import { esc, cx, slot } from '../../core/html.js';

/**
 * 바텀시트 (bottom_sheet/* — 롱프레스 메뉴, 채팅 설정)
 * @param {{icon?:string,label:string,tone?:'danger'}[]} [p.items]
 */
export function BottomSheet({ title = '', items = [], content } = {}) {
  return `<div class="lxp-sheet" role="dialog">
    <i class="lxp-sheet__handle"></i>
    ${title ? `<p class="lxp-sheet__title">${esc(title)}</p>` : ''}
    ${content ? slot(content) : `<ul class="lxp-sheet__list">${items.map((it) => `<li class="${cx('lxp-sheet__item', it.tone && `is-${it.tone}`)}">${esc(it.label)}</li>`).join('')}</ul>`}
  </div>`;
}
