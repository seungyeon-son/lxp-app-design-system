// WeekPicker — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { WeekPicker } from '../../index.js';

export default {
  component: WeekPicker,
  figma: '24:12363',
  parameters: { background: 'sky' },
  interact: (t) => { const i = t.index('.lxp-week__day'); return i < 0 ? null : { selected: i }; },
};

export const First = { name: '첫날 선택 (기본)' };
export const Middle = { name: '중간 요일', args: { selected: 3 } };
export const NoDots = {
  name: '학습 없는 주 (점 없음)',
  args: { days: [{ w: '일', d: 1 }, { w: '월', d: 2 }, { w: '화', d: 3 }, { w: '수', d: 4 }, { w: '목', d: 5 }, { w: '금', d: 6 }, { w: '토', d: 7 }] },
};
