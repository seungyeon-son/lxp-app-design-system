// ChatMessage · ChatDate — 3층 블록
import { esc } from '../../core/html.js';
import { Icon } from '../../core/assets.js';
import { Avatar } from '../primitives/avatar.js';
import { Reaction } from '../primitives/reaction.js';

/**
 * 채팅 메시지
 * @param {{emoji?:string,icon?:string,count:number,selected?:boolean}[]} [p.reactions]
 * @param {number|null} [p.read] 읽음 수
 */
export function ChatMessage({
  name = '김연아', time = '오후 05:00', read = 4, text = '안녕하세요.', avatar = 'avatar-03',
  reactions = [{ emoji: '😀', count: 1 }, { count: 1, selected: true }], addReaction = true,
} = {}) {
  return `<div class="lxp-chat-msg">
    ${Avatar({ src: avatar, size: 36 })}
    <div class="lxp-chat-msg__main">
      <div class="lxp-chat-msg__meta">
        <b>${esc(name)}</b><span>${esc(time)}</span>
        ${read != null ? `<span class="lxp-chat-msg__read">${Icon('dot-separator', { size: 8 })}읽음 ${esc(read)}</span>` : ''}
      </div>
      <p class="lxp-chat-msg__text">${esc(text)}</p>
      ${reactions.length || addReaction ? `<div class="lxp-chat-msg__reactions">${reactions.map(Reaction).join('')}${addReaction ? Reaction({ add: true }) : ''}</div>` : ''}
    </div>
  </div>`;
}

/** 채팅 날짜 구분선 (chat-date) — 토큰 기반 구성 */
export function ChatDate({ label = '2026년 1월 21일 수요일' } = {}) {
  return `<div class="lxp-chat-date"><span>${esc(label)}</span></div>`;
}
