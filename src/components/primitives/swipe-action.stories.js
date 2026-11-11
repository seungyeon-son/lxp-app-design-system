// SwipeAction — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { SwipeAction } from '../../index.js';

export default {
  component: SwipeAction,
  figma: '19:8837',
  args: { label: '읽음' },
};

export const Neutral = { name: 'neutral (기본) — 읽음·알림' };
export const Strong = { name: 'strong — 차단', args: { tone: 'strong', label: '차단' } };
export const Danger = { name: 'danger — 나가기', args: { tone: 'danger', label: '나가기' } };
export const Info = { name: 'info · 아이콘 — 고정', args: { tone: 'info', label: '고정', icon: 'pin-20-white' } };
export const Row = {
  name: '오른쪽 밀기 한 줄',
  render: () => [SwipeAction({ label: '읽음' }), SwipeAction({ label: '차단', tone: 'strong' }), SwipeAction({ label: '나가기', tone: 'danger' }), SwipeAction({ label: '고정', icon: 'pin-20-white', tone: 'info' })].join(''),
  parameters: { arrange: 'row' },
};
