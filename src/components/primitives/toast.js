// Toast — 2층 요소
import { esc } from '../../core/html.js';
import { Icon } from '../../core/assets.js';

/** 토스트 (Notice_guide_secondary — "저장되었습니다") */
export function Toast({ label = '저장되었습니다', icon = 'check' } = {}) {
  return `<div class="lxp-toast" role="status">${icon ? Icon(icon, { size: 16 }) : ''}<span>${esc(label)}</span></div>`;
}
