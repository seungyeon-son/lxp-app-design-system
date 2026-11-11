// Input — 2층 요소
import { esc, cx } from '../../core/html.js';
import { Icon } from '../../core/assets.js';
import { IconButton } from './button.js';

/**
 * 검색/텍스트 입력 (h44, radius 12)
 * @param {'enabled'|'focused'|'disabled'} [p.state] focused 는 정적 시안용(실제 포커스 시 자동 적용)
 * @param {'normal'|'filled'|'invalid'} [p.validation]
 * @param {string} [p.value] @param {string} [p.placeholder]
 * @param {string|null} [p.icon] 리딩 아이콘 (기본 search, null = 없음 — 팝업 이름 입력)
 * @param {boolean} [p.clearable] 값이 있을 때 지우기 버튼 (기본 true)
 */
export function Input({ state = 'enabled', validation, value = '', placeholder = '검색어를 입력하세요.', icon = 'search', clearable = true, className = '' } = {}) {
  const v = validation || (value ? 'filled' : 'normal');
  const disabled = state === 'disabled';
  const lead = disabled && v !== 'invalid' ? 'help-circle' : disabled ? 'search-disabled' : icon;
  return `<label class="${cx('lxp-input', `is-${state}`, `is-${v}`, className)}">
    ${lead ? Icon(lead, { size: 16, className: cx('lxp-input__lead', disabled && v === 'invalid' && 'is-faded') }) : ''}
    <input type="text" value="${esc(value)}" placeholder="${esc(placeholder)}"${disabled ? ' disabled' : ''}>
    ${v === 'filled' && clearable ? IconButton({ icon: 'x-circle-filled', size: 16, label: '지우기', className: 'lxp-input__clear' }) : ''}
  </label>`;
}
