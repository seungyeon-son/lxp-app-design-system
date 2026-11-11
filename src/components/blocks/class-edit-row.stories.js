// ClassEditRow — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { ClassEditRow } from '../../index.js';

export default {
  component: ClassEditRow,
  figma: '51:9191',
  parameters: { layout: 'padded' },
};

export const Visible = { name: '공개 (기본)' };
export const Hidden = { name: '비공개', args: { visible: false, title: '교육공학 개론', professor: '최지은 교수' } };
export const WithAttrs = { name: 'attrs — data-id', args: { attrs: { 'data-id': 3 } } };
