// ChatGroupCard — 3층 블록 (메시지방 만들기: 강의 묶음 카드 generator_chat/group 57:20087 · search-student 60:20862)
import { esc, cx, slot } from '../../core/html.js';
import { IconButton } from '../primitives/button.js';
import { FriendRow } from './friend-row.js';
import { SelectAllRow } from './select-all-row.js';

/**
 * 강의 묶음 카드 — 강의명 + 인원 + › / (펼치면) 구분 라벨 + 사람 목록
 * 인원 숫자 글자색: Figma 는 tx/coursmos/primary(4.3:1) — 대비 규칙에 따라 coursmos-secondary
 * @param {string} p.title 강의명 (넘치면 말줄임)
 * @param {number|string} [p.count] 인원 ("34명"). 없으면 생략
 * @param {string} [p.label] 목록 위 구분 라벨 ('학습자')
 * @param {{name:string,avatar?:string,right?:string}[]} [p.members] 있으면 아래에 FriendRow 목록
 * @param {{label:string,members:object[]}[]} [p.sections] 여러 묶음 (대화 상대 선택: '교수자' · '학습자') — members 대신
 * @param {{count:number,checked?:boolean}} [p.selectAll] 제목 아래 '전체 선택 N명' 줄
 * @param {boolean} [p.chevron] 오른쪽 › 버튼 (기본 true)
 */
export function ChatGroupCard({ title = '강의명이 길어지면 이렇게 처리하면 좋겠습니다', count = 34, label = '학습자', members, sections, selectAll, chevron = true, className = '' } = {}) {
  const groups = sections || (members ? [{ label, members }] : null);
  const list = (g) => `<div class="lxp-chat-group__list">${g.label ? `<p class="lxp-chat-group__label">${esc(g.label)}</p>` : ''}${slot(g.members.map((m) => FriendRow(m)))}</div>`;
  return `<section class="${cx('lxp-chat-group', groups && 'is-open', className)}">
    <div class="lxp-chat-group__head">
      <div class="lxp-chat-group__title"><p class="lxp-ellipsis">${esc(title)}</p>${count != null ? `<span class="lxp-num"><b>${esc(count)}</b>명</span>` : ''}</div>
      ${chevron ? IconButton({ icon: 'chevron-right', size: 28, label: `${title} 열기` }) : ''}
    </div>
    ${selectAll ? SelectAllRow(selectAll) : ''}
    ${groups ? groups.map(list).join('') : ''}
  </section>`;
}
