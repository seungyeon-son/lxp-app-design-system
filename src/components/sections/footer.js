// Footer — 4층 영역
import { esc } from '../../core/html.js';
import { MessageInput } from '../blocks/message-input.js';
import { Button } from '../primitives/button.js';

/**
 * 하단 고정 영역
 * @param {'empty'|'button'|'count-button'|'button-pair'|'message-input'|'message-block'} [p.type]
 * @param {{label?:string,icon?:string,iconRight?:string,attrs?:object}} [p.secondary] button-pair 왼쪽 보조 버튼
 * @param {object} [p.attrs] 주 버튼 추가 속성(id·type·data-*) — button · count-button · button-pair
 * @param {boolean} [p.disabled] 주 버튼 비활성 — button · count-button · button-pair
 * @param {string} [p.label] 버튼 라벨
 * @param {number|string} [p.count] count-button 의 숫자
 * @param {string} [p.prefix] count-button 숫자 앞 문구 (기본 '총', 빈 문자열이면 생략) 예: '미체크'
 * @param {string} [p.unit] count-button 숫자 뒤 단위 (기본 '명') 예: '건', '개'
 * @param {string} [p.caption] message-block 안내 문구
 */
export function Footer({ type = 'button', label, count = 2, prefix = '총', unit = '명', caption = '차단 친구와는 대화할 수 없습니다.', placeholder, secondary, attrs, disabled = false } = {}) {
  if (type === 'empty') return '<footer class="lxp-footer lxp-footer--empty"></footer>';
  if (type === 'button-pair') {
    // 출석부 BottomCTA (7062:38459): 왼쪽 보조 버튼 128px + 오른쪽 주 버튼, 높이 48
    const sec = { label: '자동출결', iconRight: 'check-circle', ...secondary };
    return `<footer class="lxp-footer lxp-footer--pair">
      ${Button({ label: sec.label, variant: 'outline-primary', size: 'xl', icon: sec.icon, iconRight: sec.iconRight, attrs: sec.attrs, className: 'lxp-footer__secondary' })}
      ${Button({ label: label || '출결 일괄 처리', size: 'xl', disabled, attrs, className: 'lxp-footer__primary' })}
    </footer>`;
  }
  if (type === 'button') return `<footer class="lxp-footer lxp-footer--action">${Button({ label: label || '저장하기', block: true, disabled, attrs })}</footer>`;
  if (type === 'count-button') {
    return `<footer class="lxp-footer lxp-footer--action"><div class="lxp-footer__row">
      <p class="lxp-footer__count">${prefix ? `<span>${esc(prefix)}</span>` : ''}<span><em>${esc(count)}</em>${esc(unit)}</span></p>${Button({ label: label || '대화시작하기', disabled, attrs })}
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
