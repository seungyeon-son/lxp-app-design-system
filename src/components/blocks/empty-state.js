// EmptyState — 3층 블록 (빈 화면 안내 — block_chatting_icon 70:22686 '차단된 대화방이 없습니다.')
import { esc, cx } from '../../core/html.js';
import { asset } from '../../core/assets.js';

/**
 * 빈 화면 안내 — 회색 그림 + 문구 (가운데 정렬). 목록이 비었을 때 화면 가운데에 둡니다.
 * 문구 글자색: Figma tx/hierarchy/quinary → 대비 규칙에 따라 quaternary
 * @param {string} [p.text]
 * @param {string} [p.icon] 그림 에셋 (기본 block-chatting, Figma 35.49×35.28 칸에 맞춰 그림)
 * @param {number[]} [p.iconSize] [가로, 세로]
 */
export function EmptyState({ text = '차단된 대화방이 없습니다.', icon = 'block-chatting', iconSize = [35.49, 35.28], className = '' } = {}) {
  return `<div class="${cx('lxp-empty', className)}">
    <img class="lxp-empty__icon" src="${asset(icon)}" width="${iconSize[0]}" height="${iconSize[1]}" alt="" aria-hidden="true">
    <p>${esc(text)}</p>
  </div>`;
}
