// ChatGroupCard — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { ChatGroupCard, SelectCheck } from '../../index.js';

export default {
  component: ChatGroupCard,
  figma: '57:20087',
  parameters: { layout: 'padded' },
};

export const Closed = { name: '닫힘 (기본)' };
export const NoCount = { name: '인원 없음', args: { title: '물리학실험실 2 [001]', count: null } };
export const NoChevron = { name: '› 없음', args: { chevron: false } };
export const Open = {
  name: '펼침 — 사람 목록',
  args: { title: '물리학실험실 2 [001]', count: null, members: [{ name: '김연아(2251****)', avatar: 'avatar-03' }, { name: '이상화(2251****)', avatar: 'avatar-02' }] },
};
export const Sections = {
  name: '펼침 — 교수자 · 학습자 묶음',
  args: { title: '물리학실험실 2 [001]', count: null, sections: [{ label: '교수자', members: [{ name: '고교수(1001****)', avatar: 'avatar-01' }] }, { label: '학습자', members: [{ name: '김연아(2251****)', avatar: 'avatar-03' }, { name: '이상화(2251****)', avatar: 'avatar-02' }] }] },
};
export const SelectAll = {
  name: '펼침 — 전체 선택 줄',
  args: { title: '물리학실험실 2 [001]', count: null, selectAll: { count: 34, checked: false }, members: [{ name: '김연아(2251****)', avatar: 'avatar-03' }] },
};
export const WithRight = {
  name: '펼침 — 오른쪽 선택 표시',
  render: () => ChatGroupCard({ title: '물리학실험실 2 [001]', count: null, members: [
    { name: '김연아(2251****)', avatar: 'avatar-03', right: SelectCheck({ checked: true }) },
    { name: '이상화(2251****)', avatar: 'avatar-02', right: SelectCheck({}) },
  ] }),
};
