// ListGroup — 3층 블록 (라벨 + 목록 묶음 — 채팅방 설정·메시지 번역 시트)
import { esc, cx } from '../../core/html.js';
import { ListItem } from './list-item.js';

/**
 * 라벨 + ListItem 묶음
 * 라벨 글자색: Figma tx/hierarchy/quinary → 대비 규칙에 따라 quaternary
 * @param {string} [p.label] 위 작은 제목 ('대화방 관리')
 * @param {object[]} p.items ListItem 인자 배열
 * @param {boolean} [p.card] true = 흰 카드 안에 구분선으로 묶음, false = 한 줄씩 그대로(흰 줄)
 * @param {'md'|'sm'} [p.size] 행 크기 (sm = 언어 선택 시트)
 */
export function ListGroup({ label = '', items = [], card = true, size = 'md', className = '' } = {}) {
  const rows = items.map((it) => ListItem({ size, ...it }));
  return `<div class="${cx('lxp-list-group', className)}">
    ${label ? `<p class="lxp-list-group__label">${esc(label)}</p>` : ''}
    ${card ? `<div class="${cx('lxp-list-group__card', `is-${size}`)}">${rows.join('<i class="lxp-list-group__line" aria-hidden="true"></i>')}</div>` : rows.join('')}
  </div>`;
}
