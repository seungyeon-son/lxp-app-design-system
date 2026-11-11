// MemberRow — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { MemberRow, ToggleGroup } from '../../index.js';

export default {
  component: MemberRow,
  figma: '7062:38271',
};

export const Default = { name: '이름 + › / 학번' };
export const NoChevron = { name: '› 없음', args: { chevron: false } };
export const LongName = { name: '긴 이름 — 말줄임', args: { name: '남궁길동홍길동' } };
export const WithAvatar = { name: '아바타', args: { avatar: 'avatar-03', name: '김연아' } };
export const WithToggle = {
  name: '오른쪽 ToggleGroup (출석부)',
  render: () => MemberRow({ right: ToggleGroup({ overflow: { items: [{ value: 'early', label: '조퇴', icon: 'status-early', tone: 'warn' }, { value: 'lateearly', label: '지각조퇴', icon: 'status-lateearly', tone: 'neutral' }] } }) }),
};
