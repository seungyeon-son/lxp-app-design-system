// 입력: Input(input-base-state 86:18467) · MessageInput · Footer(37:14876)
import { esc, cx } from '../core/html.js';
import { Icon } from '../core/assets.js';
import { Button, IconButton } from './button.js';

/**
 * 검색/텍스트 입력 (h44, radius 12)
 * @param {'enabled'|'focused'|'disabled'} [p.state] focused 는 정적 시안용(실제 포커스 시 자동 적용)
 * @param {'normal'|'filled'|'invalid'} [p.validation]
 * @param {string} [p.value] @param {string} [p.placeholder]
 * @param {string} [p.icon] 리딩 아이콘 (기본 search)
 */
export function Input({ state = 'enabled', validation, value = '', placeholder = '검색어를 입력하세요.', icon = 'search', className = '' } = {}) {
  const v = validation || (value ? 'filled' : 'normal');
  const disabled = state === 'disabled';
  const lead = disabled && v !== 'invalid' ? 'help-circle' : disabled ? 'search-disabled' : icon;
  return `<label class="${cx('lxp-input', `is-${state}`, `is-${v}`, className)}">
    ${Icon(lead, { size: 16, className: cx('lxp-input__lead', disabled && v === 'invalid' && 'is-faded') })}
    <input type="text" value="${esc(value)}" placeholder="${esc(placeholder)}"${disabled ? ' disabled' : ''}>
    ${v === 'filled' ? `<button class="lxp-input__clear" aria-label="지우기">${Icon('x-circle-filled', { size: 16 })}</button>` : ''}
  </label>`;
}

/** 메시지 입력 필드 (pill) — Footer 'message input' 내부 */
export function MessageInput({ placeholder = '메세지를 입력하세요.', value = '' } = {}) {
  return `<div class="lxp-msg-input">
    ${IconButton({ icon: 'plus', size: 36, round: true, label: '첨부' })}
    <input type="text" value="${esc(value)}" placeholder="${esc(placeholder)}">
    ${IconButton({ icon: 'arrow-up', size: 36, round: true, label: '보내기' })}
  </div>`;
}

/**
 * 하단 고정 영역
 * @param {'empty'|'button'|'count-button'|'message-input'|'message-block'} [p.type]
 * @param {string} [p.label] 버튼 라벨
 * @param {number} [p.count] count-button 의 인원 수
 * @param {string} [p.caption] message-block 안내 문구
 */
export function Footer({ type = 'button', label, count = 2, caption = '차단 친구와는 대화할 수 없습니다.', placeholder } = {}) {
  if (type === 'empty') return '<footer class="lxp-footer lxp-footer--empty"></footer>';
  if (type === 'button') return `<footer class="lxp-footer lxp-footer--action">${Button({ label: label || '저장하기', block: true })}</footer>`;
  if (type === 'count-button') {
    return `<footer class="lxp-footer lxp-footer--action"><div class="lxp-footer__row">
      <p class="lxp-footer__count"><span>총</span><span><em>${esc(count)}</em>명</span></p>${Button({ label: label || '대화시작하기' })}
    </div></footer>`;
  }
  if (type === 'message-input') return `<footer class="lxp-footer lxp-footer--chat">${MessageInput({ placeholder })}</footer>`;
  if (type === 'message-block') {
    return `<footer class="lxp-footer lxp-footer--chat lxp-footer--block">
      ${Button({ label: label || '차단 해제', variant: 'gray', size: 'md', icon: 'block', block: true })}
      <p class="lxp-footer__caption">${esc(caption)}</p>
    </footer>`;
  }
  return '';
}
