// MessageItem — 3층 블록
import { esc, cx } from '../../core/html.js';
import { Icon } from '../../core/assets.js';
import { Avatar, AvatarGroup } from '../primitives/avatar.js';
import { Badge } from '../primitives/badge.js';
import { Button } from '../primitives/button.js';
import { SwipeAction } from '../primitives/swipe-action.js';

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
  preview = state === 'block' ? '대화방을 나갔습니다.' : option === 'group' ? '안녕하세요~' : '과거 몇차례 잔디를 통해서 일하는 사...',
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
      <p class="lxp-msg-item__preview">${esc(preview)}</p>
    </div>
    ${trailing}
  </div>`;
  if (swipe === 'right') {
    return `<div class="lxp-swipe lxp-swipe--right">${row}
      ${SwipeAction({ label: '읽음', tone: 'neutral' })}${SwipeAction({ label: '차단', tone: 'strong' })}${SwipeAction({ label: '나가기', tone: 'danger' })}
    </div>`;
  }
  if (swipe === 'left') {
    return `<div class="lxp-swipe lxp-swipe--left">
      ${SwipeAction({ label: '고정', icon: 'pin-20-white', tone: 'info' })}${SwipeAction({ label: '알림', icon: 'bell-20-white', tone: 'neutral' })}
      ${row}
    </div>`;
  }
  return row;
}
