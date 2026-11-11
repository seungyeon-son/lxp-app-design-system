// PopoverAlert — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { PopoverAlert } from '../../index.js';

export default {
  component: PopoverAlert,
  figma: '82:25752',
  parameters: { layout: 'padded' },
  interact: (t, args) => ({ open: !args.open }),
};

export const Closed = { name: '닫힘 (기본) — 한 줄' };
export const Open = { name: '열림 — 시간 · 전체 글', args: { open: true, text: '과거 몇차례 잔디를 통해서 일하는 사람들에게는 ‘R&R을 넘어서는 역량’이 중요하다고 언급했습니다. 이를 바꿔 설명하면, ‘경계 없는 협업 능력’이 조직 성과를 결정하는 아주 중요한 요소라는 뜻이기도 합니다.' } };
