// InfoBar — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { InfoBar } from '../../index.js';

export default {
  component: InfoBar,
  figma: '7062:38223',
  parameters: { layout: 'padded' },
};

export const Default = { name: '칩 2개 + 변경 ›' };
export const NoChips = { name: '칩 없음', args: { chips: [] } };
export const NoAction = { name: '오른쪽 버튼 없음', args: { action: false } };
export const BoxOnly = { name: 'box 칩만', args: { label: '10-31 (토) 13:00', chips: [{ label: '3교시', variant: 'box' }] } };
