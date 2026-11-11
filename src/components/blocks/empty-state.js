// EmptyState — 3층 블록 (빈 화면 · 오류 안내 — block_chatting_icon 70:22686 · 에러_네트워크미연결 5:12102)
import { esc, cx, slot } from '../../core/html.js';
import { asset } from '../../core/assets.js';

/**
 * 빈 화면·오류 안내 — 그림 + (제목) + 문구 + (버튼). 가운데 정렬
 * 문구 글자색: Figma tx/hierarchy/quinary → 대비 규칙에 따라 quaternary
 * @param {string} [p.text] 안내 문구
 * @param {string} [p.title] 제목 (오류 화면 '연결이 불안정해요'). 있으면 그림·글·버튼 사이 20, 문구 14R
 * @param {string} [p.icon] 그림 에셋 (기본 block-chatting · 오류 illust-network-error)
 * @param {number[]} [p.iconSize] [가로, 세로] — Figma 칸 크기
 * @param {string} [p.action] 아래 버튼 슬롯 (예: Button({ label: '다시 시도하기', variant: 'outline', size: 'xl' }))
 */
export function EmptyState({ text = '차단된 대화방이 없습니다.', title = '', icon = 'block-chatting', iconSize = [35.49, 35.28], action = '', className = '' } = {}) {
  return `<div class="${cx('lxp-empty', title && 'has-title', className)}">
    <img class="lxp-empty__icon" src="${asset(icon)}" width="${iconSize[0]}" height="${iconSize[1]}" alt="" aria-hidden="true">
    ${title ? `<div class="lxp-empty__text"><p class="lxp-empty__title">${esc(title)}</p><p>${esc(text)}</p></div>` : `<p>${esc(text)}</p>`}
    ${action ? `<div class="lxp-empty__action">${slot(action)}</div>` : ''}
  </div>`;
}
