// Pill — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { Chip, Pill } from '../../index.js';

export default {
  component: Pill,
  figma: 'chip/tag2-base',
  args: { label: '보강' },
};

export const Default = {};
export const WithChip = { name: 'Chip label 옆 (출석부 InfoBar)', render: () => [Chip({ tone: 'label', label: '1교시' }), Pill({ label: '보강' })].join(' ') };
