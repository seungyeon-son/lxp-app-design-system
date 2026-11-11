// MessageInput — 3층 블록
import { esc } from '../../core/html.js';
import { IconButton } from '../primitives/button.js';

/** 메시지 입력 필드 (pill) — Footer 'message input' 내부 */
export function MessageInput({ placeholder = '메세지를 입력하세요.', value = '' } = {}) {
  return `<div class="lxp-msg-input">
    ${IconButton({ icon: 'plus', size: 36, round: true, label: '첨부' })}
    <input type="text" value="${esc(value)}" placeholder="${esc(placeholder)}">
    ${IconButton({ icon: 'arrow-up', size: 36, round: true, label: '보내기' })}
  </div>`;
}
