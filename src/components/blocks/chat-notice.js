// ChatNotice — 3층 블록 (채팅방 공지 chat_notice 93:23602 — 닫힘 / 열림)
import { esc, cx } from '../../core/html.js';
import { IconButton } from '../primitives/button.js';

/**
 * 채팅방 공지 — 제목 한 줄 · 날짜 | 작성자 · 펼치기. open 이면 회색 머리 + 본문
 * 날짜·작성자 글자색: Figma tx/hierarchy/quinary → 대비 규칙에 따라 quaternary
 * @param {string} p.title @param {string} [p.date] @param {string} [p.author]
 * @param {string} [p.body] 본문 (줄바꿈 유지)
 * @param {boolean} [p.open]
 */
export function ChatNotice({
  title = '시험기간 2025년 4월 10~13일 입니다 시험기간 2025년 4월 10~13일 입니다.', date = '2025.08.18', author = '이지영(2451****)',
  body = '시험기간 2025년 4월 10~13일 입니다.\n\n동영상 시청 중 끊김과 관련하여 안내 말씀드립니다.', open = false, className = '',
} = {}) {
  return `<section class="${cx('lxp-chat-notice', open && 'is-open', className)}">
    <div class="lxp-chat-notice__head">
      <div class="lxp-chat-notice__text">
        <p class="lxp-chat-notice__title lxp-ellipsis">${esc(title)}</p>
        <p class="lxp-chat-notice__meta"><span class="lxp-num">${esc(date)}</span><i aria-hidden="true"></i><span>${esc(author)}</span></p>
      </div>
      ${IconButton({ icon: open ? 'chevron-up-16' : 'chevron-down-16', size: 28, label: open ? '공지 접기' : '공지 펼치기', attrs: { 'aria-expanded': open } })}
    </div>
    ${open ? `<div class="lxp-chat-notice__body">${esc(body)}</div>` : ''}
  </section>`;
}
