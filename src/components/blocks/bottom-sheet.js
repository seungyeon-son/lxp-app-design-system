// BottomSheet — 3층 블록 (bottom_sheet/long_press 80:21734 · bottom_sheet/chat_setting 80:25749 · 언어 선택 78:16570)
import { esc, cx, slot } from '../../core/html.js';
import { asset } from '../../core/assets.js';
import { ListItem } from './list-item.js';

/**
 * 바텀시트 — 손잡이 · (가운데 제목) · 내용. 화면에 띄울 때는 Screen({ overlay: Dim({ content, align: 'bottom' }) })
 * @param {string} [p.title] 가운데 제목 ('대화방 설정')
 * @param {'white'|'subtle'} [p.tone] white = 흰 시트(길게 누르기 메뉴), subtle = 연회색 시트(설정 · 번역 — 안에 흰 목록)
 * @param {{icon?:string,label:string,tone?:'default'|'muted'|'danger'}[]} [p.items] 간단 메뉴 → ListItem 목록
 * @param {string|string[]} [p.content] 직접 구성할 때 (EmojiBar, ListGroup, Button …)
 * @param {number} [p.gap] 내용 사이 간격 (기본 16)
 */
export function BottomSheet({ title = '', tone = 'white', items = [], content, gap = 16, className = '' } = {}) {
  const body = content ? slot(content) : `<div class="lxp-sheet__list">${items.map((it) => ListItem(it)).join('')}</div>`;
  return `<div class="${cx('lxp-sheet', `lxp-sheet--${tone}`, className)}" role="dialog"${title ? ` aria-label="${esc(title)}"` : ''} style="--sheet-gap:${gap}px">
    <img class="lxp-sheet__handle" src="${asset('sheet-handle')}" width="48" height="4" alt="" aria-hidden="true">
    ${title ? `<p class="lxp-sheet__title">${esc(title)}</p>` : ''}
    ${body}
  </div>`;
}
