// Dim — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { BottomSheet, Dim, Popup, Screen } from '../../index.js';

export default {
  component: Dim,
  description: '어두운 막 + 내용. 혼자 쓰지 않고 Screen({ overlay: Dim({ content }) }) 에 넣습니다.',
  parameters: { height: 260 },
};

export const Center = { name: "center (기본) — 팝업", render: () => Dim({ content: Popup({}) }) };
export const Bottom = { name: "bottom — 바텀시트", render: () => Dim({ align: 'bottom', content: BottomSheet({ items: [{ icon: 'reply-20', label: '메시지 답장' }] }) }) };
