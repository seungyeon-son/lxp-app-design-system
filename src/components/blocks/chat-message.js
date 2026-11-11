// ChatMessage · ChatDate — 3층 블록 (chating-message 80:20270 · chat-date 79:18832)
import { esc, cx } from '../../core/html.js';
import { Icon } from '../../core/assets.js';
import { Avatar } from '../primitives/avatar.js';
import { Reaction } from '../primitives/reaction.js';

const REACTIONS = [{ icon: 'emoji-grin', count: 1 }, { icon: 'emoji-thumbsup', count: 1, selected: true }];

/**
 * 채팅 메시지 (chating-message 80:20270)
 * 회색 보조 글자: Figma tx/hierarchy/quinary → 대비 규칙에 따라 quaternary. 답장 대상 이름 info-primary → info-secondary
 * @param {'message'|'system'|'reply'} [p.kind]
 *   message = 기본, system = 나감·초대 안내('김연아님이 대화방에서 나갔습니다.' — 시간·읽음·리액션 없음), reply = 답장(인용 + 본문)
 * @param {'default'|'pressed'|'blocked'} [p.state] pressed = 길게 누른 메시지(연회색 바탕), blocked = 차단한 사람(흐리게)
 * @param {{emoji?:string,icon?:string,count:number,selected?:boolean}[]} [p.reactions] 기본 = Figma 이모지 이미지 2개
 * @param {number|null} [p.read] 읽음 수 (null = 표시 안 함)
 * @param {{to:string,text:string}} [p.quote] reply 인용 — '@to 에게 답장' + 원문
 * @param {string} [p.link] 본문 아래 링크 (밑줄 파란 글자)
 */
export function ChatMessage({
  kind = 'message', state = 'default',
  name = '김연아', time = '오후 05:00', read = 4, text = '안녕하세요.', avatar = 'avatar-03',
  reactions = REACTIONS, addReaction = true, quote, link,
} = {}) {
  const system = kind === 'system';
  const blocked = state === 'blocked';
  const showRead = read != null && !system && !blocked && kind !== 'reply';
  const showReactions = !system && !blocked && kind !== 'reply' && (reactions.length || addReaction);
  return `<div class="${cx('lxp-chat-msg', `is-${kind}`, state !== 'default' && `is-${state}`)}">
    ${Avatar({ src: avatar, size: 36 })}
    <div class="lxp-chat-msg__main">
      <div class="lxp-chat-msg__meta">
        <b>${esc(name)}</b>${system ? '' : `<span>${esc(time)}</span>`}
        ${showRead ? `<span class="lxp-chat-msg__read">${Icon('dot-separator', { size: 8 })}읽음 ${esc(read)}</span>` : ''}
      </div>
      ${kind === 'reply' && quote ? `<div class="lxp-chat-msg__quote"><i aria-hidden="true"></i><div>
        <p class="lxp-chat-msg__quote-to">${Icon('corner-down-right-16', { size: 16 })}<b>@${esc(quote.to)}</b><span>에게 답장</span></p>
        <p class="lxp-chat-msg__quote-text">${esc(quote.text)}</p></div></div>` : ''}
      <p class="lxp-chat-msg__text">${esc(text)}${link ? `<a class="lxp-chat-msg__link" href="${esc(link)}">${esc(link)}</a>` : ''}</p>
      ${showReactions ? `<div class="lxp-chat-msg__reactions">${reactions.map(Reaction).join('')}${addReaction ? Reaction({ add: true }) : ''}</div>` : ''}
    </div>
  </div>`;
}

/** 채팅 날짜 구분선 (chat-date 79:18832) — 가는 선 가운데 테두리 알약 */
export function ChatDate({ label = '오늘' } = {}) {
  return `<div class="lxp-chat-date"><i aria-hidden="true"></i><span>${esc(label)}</span><i aria-hidden="true"></i></div>`;
}
