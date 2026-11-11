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
  name: '오른쪽 ToggleGroup (출석부) — 눌러 보세요',
  args: { value: null, overflow: { items: [{ value: 'early', label: '조퇴', icon: 'status-early', tone: 'warn' }, { value: 'lateearly', label: '지각조퇴', icon: 'status-lateearly', tone: 'neutral' }] } },
  render: (args) => MemberRow({ right: ToggleGroup(args) }),
  // ToggleGroup 과 같은 동작: 값 고르기(다시 누르면 해제) · ⋯ 메뉴 열고 닫기
  interact: (t, args) => {
    if (t.closest('[data-overflow]')) return { overflow: { ...args.overflow, open: !args.overflow.open } };
    const v = t.attr('data-value');
    return v == null ? null : { value: args.value === v ? null : v, overflow: { ...args.overflow, open: false } };
  },
  parameters: { height: 150 },
};
