// Section — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { Button, ClassEditRow, CourseCard, ModuleItem, Section, Stack } from '../../index.js';

export default {
  component: Section,
  parameters: { background: 'sky' },
};

export const WithCount = {
  name: '제목 + 개수 + 내용 (홈)',
  render: () => Section({ title: '이번 주 학습', count: 2, pad: [20, 0], children: Stack({ gap: 8, pad: [0, 16], children: [ModuleItem({ dday: 2 }), ModuleItem({})] }) }),
};
export const WithAside = {
  name: '오른쪽 보조 (aside)',
  render: () => Section({ title: '내 강의', pad: [20, 16], aside: Button({ label: '내 강의실 편집', variant: 'secondary', size: 'xs', icon: 'settings' }), children: CourseCard({ layout: 'list' }) }),
};
export const Small = {
  name: 'size sm — 작은 제목 (숨김 강의)',
  render: () => Section({ size: 'sm', title: '숨김 강의', pad: [16, 20], children: ClassEditRow({ visible: false }) }),
  parameters: { background: undefined },
};
