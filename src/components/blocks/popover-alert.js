// PopoverAlert — 3층 블록 (채팅방 고정 메시지 팝오버 popover_alert 82:25752 — 닫힘 / 열림)
import { esc, cx } from '../../core/html.js';
import { Icon } from '../../core/assets.js';
import { IconButton } from '../primitives/button.js';

/**
 * 고정 메시지 팝오버 — 핀 · 보낸 사람(+시간) / 내용 · 펼치기
 * 그림자: Figma 0 4 6 -1 → 이 시스템의 0 오프셋 그림자 --shadow-md
 * @param {string} p.name @param {string} [p.time] 열림에서만 표시
 * @param {string} p.text 닫힘 = 한 줄 말줄임, 열림 = 전체
 * @param {boolean} [p.open]
 */
export function PopoverAlert({ name = '김연아', time = '오전 05:00', text = '과거 몇차례 잔디를 통해서 일하는 사람들에게는 ‘R&R을 넘어서는 역량‘이 중요하다고 언급했습니다.', open = false, className = '' } = {}) {
  return `<div class="${cx('lxp-popover-alert', open && 'is-open', className)}">
    ${Icon('pin-20-blue', { size: 20 })}
    <div class="lxp-popover-alert__main">
      <p class="lxp-popover-alert__who"><b>${esc(name)}</b>${open && time ? `<span class="lxp-num">${esc(time)}</span>` : ''}</p>
      <p class="${cx('lxp-popover-alert__text', !open && 'lxp-ellipsis')}">${esc(text)}</p>
    </div>
    ${IconButton({ icon: open ? 'chevron-up-20' : 'chevron-down-20', size: 20, label: open ? '접기' : '펼치기', attrs: { 'aria-expanded': open } })}
  </div>`;
}
