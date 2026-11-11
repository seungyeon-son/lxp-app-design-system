// SegmentedControl — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { SegmentedControl } from '../../index.js';

export default {
  component: SegmentedControl,
  figma: '37:15014',
  // 탭을 누르면 그 칸이 선택됨
  interact: (t) => { const i = t.index('[role=tab]'); return i < 0 ? null : { active: i }; },
};

export const First = { name: '첫 칸 (기본)' };
export const Middle = { name: '가운데 — 양옆 구분선 숨김', args: { active: 1 } };
export const Last = { name: '끝 칸', args: { active: 2 } };
