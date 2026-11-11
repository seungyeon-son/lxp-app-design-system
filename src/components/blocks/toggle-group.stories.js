// ToggleGroup — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { MemberRow, ToggleGroup } from '../../index.js';

export default {
  component: ToggleGroup,
  figma: '7062:38277',
  parameters: { layout: 'centered' },
};

export const Default = { name: '미처리 (기본) — 아무것도 안 고름' };
export const Present = { name: '출석 선택', args: { value: 'present' } };
export const Absent = { name: '결석 선택', args: { value: 'absent' } };
export const Late = { name: '지각 선택', args: { value: 'late' } };
export const WithOverflow = { name: '⋯ 메뉴 (닫힘)', args: { overflow: { items: [{ value: 'early', label: '조퇴', icon: 'status-early', tone: 'warn' }, { value: 'lateearly', label: '지각조퇴', icon: 'status-lateearly', tone: 'neutral' }] } } };
export const OverflowOpen = { name: '⋯ 메뉴 열림', args: { overflow: { open: true, items: [{ value: 'early', label: '조퇴', icon: 'status-early', tone: 'warn' }, { value: 'lateearly', label: '지각조퇴', icon: 'status-lateearly', tone: 'neutral' }] } }, parameters: { height: 160 } };
export const OverflowSelected = { name: '⋯ 항목 선택 (조퇴)', args: { value: 'early', overflow: { items: [{ value: 'early', label: '조퇴', icon: 'status-early', tone: 'warn' }, { value: 'lateearly', label: '지각조퇴', icon: 'status-lateearly', tone: 'neutral' }] } } };
export const InRow = {
  name: '사람 행 안 (출석부)',
  render: () => MemberRow({ name: '남궁길동', right: ToggleGroup({ value: 'absent', overflow: { items: [{ value: 'early', label: '조퇴', icon: 'status-early', tone: 'warn' }, { value: 'lateearly', label: '지각조퇴', icon: 'status-lateearly', tone: 'neutral' }] } }) }),
  parameters: { layout: 'fullscreen' },
};
