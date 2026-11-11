// MediaViewer — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { MediaViewer } from '../../index.js';

export default {
  component: MediaViewer,
  figma: '80:24028',
  parameters: { height: 560 },
};

export const Video = { name: 'video (기본) — 재생 버튼' };
export const Image = { name: 'image — 재생 버튼 없음', args: { type: 'image' } };
