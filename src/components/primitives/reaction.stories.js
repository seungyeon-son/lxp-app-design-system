// Reaction — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { Reaction } from '../../index.js';

export default {
  component: Reaction,
  figma: '80:20270',
  args: { count: 1 },
  // 누르면 내 리액션 켜고 끔 (숫자 ±1). 추가 버튼은 상태 없음
  interact: (t, args) => (args.add ? null : { selected: !args.selected, ...(args.count != null ? { count: args.count + (args.selected ? -1 : 1) } : {}) }),
};

export const Default = { name: '문자 이모지' };
export const Selected = { name: 'selected — 내가 누름', args: { selected: true, count: 3 } };
export const WithIcon = { name: '이모지 이미지', args: { icon: 'emoji-grin', count: 1 } };
export const NoCount = { name: '숫자 없음', args: { count: undefined } };
export const Add = { name: 'add — 리액션 추가', args: { add: true }, interact: false };
export const Row = { name: '메시지 아래 줄', render: () => [Reaction({ icon: 'emoji-grin', count: 1 }), Reaction({ icon: 'emoji-thumbsup', count: 1, selected: true }), Reaction({ add: true })].join(' ') };
