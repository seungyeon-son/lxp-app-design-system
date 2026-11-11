// Surface — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { Checkbox, EmptyState, InfoBar, Ratio, Surface } from '../../index.js';

export default {
  component: Surface,
};

export const White = { name: 'white (기본)', render: () => Surface({ pad: 16, children: InfoBar({}) }) };
export const Subtle = {
  name: 'subtle — 회색 바탕 안 흰 바탕',
  render: () => Surface({ tone: 'subtle', pad: 16, gap: 12, children: [Surface({ tone: 'white', pad: 16, children: InfoBar({}) }), Ratio({ label: '처리 현황', value: 3, total: 40 })] }),
};
export const Fill = { name: 'fill — 화면 높이 꽉 채움', render: () => Surface({ tone: 'subtle', fill: true, pad: 16, children: EmptyState({}) }), parameters: { height: 300 } };
export const Row = { name: '가로 쌓기', render: () => Surface({ direction: 'row', justify: 'between', align: 'center', pad: [12, 20], children: [Ratio({ label: '처리 현황', value: 3, total: 40 }), Checkbox({})] }) };
