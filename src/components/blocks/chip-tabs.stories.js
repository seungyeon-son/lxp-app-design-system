// ChipTabs — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { ChipTabs } from '../../index.js';

export default {
  component: ChipTabs,
  figma: '5:12886',
  // 탭을 누르면 그 칸이 선택됨
  interact: (t) => { const i = t.index('[role=tab]'); return i < 0 ? null : { active: i }; },
};

export const First = { name: '첫 칸 (기본)' };
export const Second = { name: '둘째 칸', args: { active: 1 } };
export const TwoItems = { name: '두 개', args: { items: ['진행 중', '종료'], active: 0 } };
