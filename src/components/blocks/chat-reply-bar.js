// ChatReplyBar — 3층 블록 (답장 중 표시 chating_reply 112:17153) — 메시지 입력 Footer 바로 위에 둠
import { esc, cx } from '../../core/html.js';
import { Icon } from '../../core/assets.js';
import { IconButton } from '../primitives/button.js';

/**
 * 답장 중 바 — "↳ @이름 에게 답장" / 원문 한 줄 / 닫기
 * 글자색: Figma 이름 tx/semantic/info-primary · 원문 tx/hierarchy/quinary → 대비 규칙에 따라 info-secondary · quaternary
 * @param {string} p.to 답장 대상 이름 (앞에 @ 붙음)
 * @param {string} p.text 원문 (한 줄, 넘치면 말줄임)
 */
export function ChatReplyBar({ to = '유비온', text = '과거 몇차례 잔디를 통해서 일하는 사람들에게는 ‘R&R을 넘어선', className = '' } = {}) {
  return `<div class="${cx('lxp-reply-bar', className)}">
    <div class="lxp-reply-bar__main">
      <p class="lxp-reply-bar__to">${Icon('corner-down-right-16', { size: 16 })}<b>@${esc(to)}</b><span>에게 답장</span></p>
      <p class="lxp-reply-bar__text lxp-ellipsis">${esc(text)}</p>
    </div>
    ${IconButton({ icon: 'x-close-20', size: 20, label: '답장 취소' })}
  </div>`;
}
