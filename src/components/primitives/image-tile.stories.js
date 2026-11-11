// ImageTile — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { Grid, ImageTile } from '../../index.js';

export default {
  component: ImageTile,
  figma: '83:17338',
  parameters: { layout: 'padded' },
};

export const Empty = { name: '이미지 없음 (회색)' };
export const InGrid = {
  name: '4칸 격자 (채팅방 설정)',
  render: () => Grid({ cols: 4, gap: 8, children: [1, 2, 3, 4].map(() => ImageTile({})) }),
};
