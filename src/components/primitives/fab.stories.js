// Fab — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { Fab, Screen } from '../../index.js';

export default {
  component: Fab,
  figma: '5:11732',
  description: '떠 있는 원형 버튼. 화면에 띄울 때는 Screen({ fab: Fab({}) }) — 하단 탭바 위 오른쪽에 고정됩니다.',
};

export const Default = { name: '새 대화' };
export const WithAttrs = { name: 'attrs', args: { attrs: { 'data-act': 'new-chat' } } };
