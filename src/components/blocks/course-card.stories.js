// CourseCard — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { CourseCard } from '../../index.js';

export default {
  component: CourseCard,
  figma: '5:12819',
};

export const Grid = { name: 'grid (기본) 156×176', parameters: { layout: 'centered' } };
export const List = { name: 'list 320×68', args: { layout: 'list', title: '사물인터넷과 4차산업사회' }, parameters: { layout: 'padded' } };
export const Yellow = { name: 'color yellow', args: { color: 'yellow' }, parameters: { layout: 'centered' } };
export const Orange = { name: 'color orange', args: { color: 'orange' }, parameters: { layout: 'centered' } };
export const Green = { name: 'color green', args: { color: 'green' }, parameters: { layout: 'centered' } };
export const Purple = { name: 'color purple', args: { color: 'purple' }, parameters: { layout: 'centered' } };
export const LongTitle = { name: '긴 강의명', args: { title: '사물인터넷과 4차산업사회 — 스마트 팜 기술 도입 현황', professor: '홍길동 · 김교수' }, parameters: { layout: 'centered' } };
export const AllColors = {
  name: '모든 color',
  render: () => ['blue', 'yellow', 'orange', 'green', 'purple'].map((color) => CourseCard({ color, title: color })).join(''),
  parameters: { layout: 'centered', arrange: 'row' },
};
