// Grid — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { CourseCard, Grid, ImageTile } from '../../index.js';

export default {
  component: Grid,
};

export const TwoColumns = {
  name: '2열 · 칸 폭 고정 · 가운데',
  render: () => Grid({ cols: 2, colWidth: 156, gap: [16, 8], justify: 'center', pad: [12, 0], children: [CourseCard({}), CourseCard({ color: 'green', title: '창의적 문제해결' })] }),
};
export const FlexibleColumns = { name: '4열 · 남는 폭 나눔', render: () => Grid({ cols: 4, gap: 8, pad: 20, children: [1, 2, 3, 4].map(() => ImageTile({})) }) };
export const JustifyStart = { name: 'justify start', render: () => Grid({ cols: 2, colWidth: 100, gap: 8, justify: 'start', pad: 16, children: [ImageTile({}), ImageTile({})] }) };
export const JustifyEnd = { name: 'justify end', render: () => Grid({ cols: 2, colWidth: 100, gap: 8, justify: 'end', pad: 16, children: [ImageTile({}), ImageTile({})] }) };
