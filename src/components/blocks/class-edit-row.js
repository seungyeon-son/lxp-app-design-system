// ClassEditRow — 3층 블록 (내 강의실 편집 행 class_edit_list 51:9191)
import { esc, cx, htmlAttrs } from '../../core/html.js';
import { IconButton } from '../primitives/button.js';

/**
 * 내 강의실 편집 행 — 공개 토글(눈) · 강의명/교수 · 순서 변경 손잡이
 * 공개 토글은 Figma status_toggle_icon(46:9178): 공개 = 열린 눈, 비공개 = 감긴 눈 → IconButton 40
 * @param {string} [p.title] 강의명 (한 줄, 넘치면 말줄임)
 * @param {string} [p.professor]
 * @param {boolean} [p.visible] 공개 여부 (aria-pressed 로 남김)
 * @param {Record<string,string|number|boolean>} [p.attrs] 행 추가 속성 (예: { 'data-id': 3 })
 */
export function ClassEditRow({ title = '2025년 폭력예방교육(메디컬 교원 대상)', professor = '홍길동 교수', visible = true, attrs, className = '' } = {}) {
  return `<div class="${cx('lxp-class-edit-row', !visible && 'is-hidden', className)}"${htmlAttrs(attrs)}>
    ${IconButton({ icon: visible ? 'eye-20' : 'eye-off-20', size: 40, label: visible ? '숨기기' : '보이기', attrs: { 'aria-pressed': visible, 'data-toggle': '' }, className: 'lxp-class-edit-row__toggle' })}
    <div class="lxp-class-edit-row__text"><p class="lxp-ellipsis">${esc(title)}</p><span>${esc(professor)}</span></div>
    ${IconButton({ icon: 'drag-handle-20', size: 40, label: '순서 변경', attrs: { 'data-drag': '' }, className: 'lxp-class-edit-row__drag' })}
  </div>`;
}
