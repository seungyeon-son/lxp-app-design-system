// ShareFileCard — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { ShareFileCard } from '../../index.js';

export default {
  component: ShareFileCard,
  figma: '87:23224',
  parameters: { layout: 'padded' },
};

export const Default = { name: '문서 (긴 이름 말줄임)' };
export const Short = { name: '짧은 이름', args: { name: '발표자료.pptx', size: '2.1MB' } };
