// Popup — 3층 블록
import { esc, slot } from '../../core/html.js';
import { Button } from '../primitives/button.js';

/**
 * 팝업 다이얼로그 (popup 80:22498)
 * @param {{label:string,tone?:'default'|'danger'|'primary'}[]} [p.actions]
 * @param {string} [p.body] 본문 텍스트 (HTML 원하면 content 사용)
 */
export function Popup({ title = '메시지 삭제', body = '메시지를 모두에게서 삭제할까요?', content, actions = [{ label: '취소' }, { label: '삭제', tone: 'danger' }] } = {}) {
  return `<div class="lxp-popup" role="dialog" aria-label="${esc(title)}">
    <div class="lxp-popup__content">
      ${title ? `<p class="lxp-popup__title">${esc(title)}</p>` : ''}
      ${content ? `<div class="lxp-popup__body">${slot(content)}</div>` : body ? `<p class="lxp-popup__body">${esc(body)}</p>` : ''}
    </div>
    <div class="lxp-popup__actions">
      ${actions.map((a) => Button({ label: a.label, variant: 'ghost', tone: a.tone === 'default' ? undefined : a.tone, className: 'lxp-popup__btn' })).join('')}
    </div>
  </div>`;
}
