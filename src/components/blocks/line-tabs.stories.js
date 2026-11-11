// LineTabs — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { LineTabs } from '../../index.js';

export default {
  component: LineTabs,
  figma: '85:21691',
  args: { items: ['사진/동영상', '문서', '링크', '공지'] },
};

export const First = { name: '첫 칸' };
export const Third = { name: '셋째 칸', args: { active: 2 } };
