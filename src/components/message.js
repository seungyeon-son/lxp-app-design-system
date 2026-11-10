// 메시지 도메인: MessageItem · ChatMessage · Reaction
// Figma: 메뉴탭 > 메시지(69:22329) — Message list(19:8837), chating-message(80:20270)
import { esc, cx } from '../core/html.js';
import { Icon } from '../core/assets.js';
import { Avatar, AvatarGroup, Badge } from './display.js';
import { Button } from './button.js';

/**
 * 메시지 목록 아이템
 * @param {'dm'|'group'} [p.option]
 * @param {'enabled'|'focused'|'update'|'block'} [p.state]
 *   update=새 메시지 하이라이트, focused=눌림, block=차단/나간 대화
 * @param {'left'|'right'|null} [p.swipe] 스와이프 액션 노출
 * @param {boolean} [p.muted] 알림 끔 아이콘  @param {boolean} [p.pinned] 고정 아이콘
 */
export function MessageItem({
  option = 'dm', state = 'enabled', swipe = null,
  name = option === 'group' ? '김연아, 이상화, 봉준호, 손흥민, 박지성' : '긴 대화방명은 말줄임표를 사용하여 한줄로 표기',
  preview = option === 'group' ? '안녕하세요~' : '과거 몇차례 잔디를 통해서 일하는 사...',
  avatar = 'avatar-04', more = 5, unread = option === 'group' ? 10 : 1,
  muted = true, pinned = true,
} = {}) {
  const block = state === 'block';
  const av = option === 'group' ? AvatarGroup({ src: avatar, more }) : Avatar({ src: avatar, size: 48, dimmed: block });
  const icons = !block && (muted || pinned)
    ? `<span class="lxp-msg-item__icons">${muted ? Icon('bell-off', { size: 12 }) : ''}${pinned ? Icon('pin', { size: 12 }) : ''}</span>` : '';
  const trailing = block
    ? Button({ label: '차단 해제', variant: 'outline', size: 'xs', icon: 'block-12' })
    : unread ? Badge({ count: unread, size: swipe === 'left' ? 'square' : swipe === 'right' ? 'sm' : 'md' }) : '';
  const row = `<div class="${cx('lxp-msg-item', `is-${state}`, swipe && 'is-swiped')}">
    ${av}
    <div class="lxp-msg-item__text">
      <div class="lxp-msg-item__name"><p class="lxp-ellipsis">${esc(name)}</p>${icons}</div>
      <p class="lxp-msg-item__preview">${esc(block ? '대화방을 나갔습니다.' : preview)}</p>
    </div>
    ${trailing}
  </div>`;
  if (swipe === 'right') {
    return `<div class="lxp-swipe lxp-swipe--right">${row}
      <button class="lxp-swipe__act" style="background:var(--bg-hierarchy-quinary)">읽음</button>
      <button class="lxp-swipe__act" style="background:var(--bg-hierarchy-senary)">차단</button>
      <button class="lxp-swipe__act" style="background:var(--bg-semantic-nega-primary)">나가기</button>
    </div>`;
  }
  if (swipe === 'left') {
    return `<div class="lxp-swipe lxp-swipe--left">
      <button class="lxp-swipe__act" style="background:var(--fg-semantic-info)" aria-label="고정">${Icon('pin-20-white', { size: 20 })}</button>
      <button class="lxp-swipe__act" style="background:var(--bg-hierarchy-quinary)" aria-label="알림">${Icon('bell-20-white', { size: 20 })}</button>
      ${row}
    </div>`;
  }
  return row;
}

/**
 * 이모지 리액션 버튼
 * @param {string} [p.emoji] 문자 이모지 (기본 👍)
 * @param {string} [p.icon] 이모지 대신 쓸 아이콘 에셋명
 */
export function Reaction({ emoji = '👍', icon, count, selected = false, add = false } = {}) {
  if (add) return `<button class="lxp-reaction" aria-label="리액션 추가">${Icon('face-smile-plus', { size: 16 })}</button>`;
  const glyph = icon ? Icon(icon, { size: 16 }) : `<span class="lxp-reaction__emoji">${esc(emoji)}</span>`;
  return `<button class="${cx('lxp-reaction', selected && 'is-selected')}">${glyph}${count != null ? `<span>${esc(count)}</span>` : ''}</button>`;
}

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
