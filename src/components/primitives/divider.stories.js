// Divider — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { Divider } from '../../index.js';

export default {
  component: Divider,
  parameters: { layout: 'fullscreen' },
};

export const Default = { name: '꽉 참' };
export const Inset = { name: 'inset 20 — 좌우 띄움', args: { inset: 20 } };
