// SegmentedControl — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { SegmentedControl } from '../../index.js';

export default {
  component: SegmentedControl,
  figma: '37:15014',
};

export const First = { name: '첫 칸 (기본)' };
export const Middle = { name: '가운데 — 양옆 구분선 숨김', args: { active: 1 } };
export const Last = { name: '끝 칸', args: { active: 2 } };
