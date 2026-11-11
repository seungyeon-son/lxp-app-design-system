// Stack — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { AlertItem, Avatar, Button, ChatDate, ChatMessage, Chip, EmptyState, ModuleItem, Stack } from '../../index.js';

export default {
  component: Stack,
  description: '쌓기 틀. 화면·블록에서 style="display:flex;gap…" 대신 씁니다. 간격은 숫자(px)로 주고, 토큰 단계(2–32)면 --spac-* 로 바뀝니다.',
};

const items = () => [ModuleItem({ dday: 2 }), ModuleItem({})];
export const Column = { name: '세로 (기본) · gap · pad', render: () => Stack({ gap: 8, pad: [12, 16], children: items() }) };
export const Row = {
  name: '가로 · 양끝 정렬',
  render: () => Stack({ direction: 'row', justify: 'between', align: 'center', pad: [8, 20], children: [Chip({ label: 'D-3' }), Button({ label: '편집', variant: 'secondary', size: 'xs' })] }),
};
export const AlignStart = { name: 'align start', render: () => Stack({ direction: 'row', align: 'start', gap: 8, pad: 16, children: [Avatar({ size: 36 }), Chip({ label: '위로 붙음' })] }) };
export const AlignEnd = { name: 'align end', render: () => Stack({ align: 'end', pad: 16, children: Button({ label: '오른쪽', size: 'xs' }) }) };
export const AlignStretch = { name: 'align stretch', render: () => Stack({ align: 'stretch', pad: 16, children: Button({ label: '꽉 참', size: 'md' }) }) };
export const JustifyStart = { name: 'justify start', render: () => Stack({ direction: 'row', justify: 'start', gap: 8, pad: 16, children: [Chip({ label: 'A' }), Chip({ label: 'B' })] }) };
export const JustifyCenter = { name: 'justify center', render: () => Stack({ direction: 'row', justify: 'center', gap: 8, pad: 16, children: [Chip({ label: 'A' }), Chip({ label: 'B' })] }) };
export const JustifyEnd = { name: 'justify end', render: () => Stack({ direction: 'row', justify: 'end', gap: 8, pad: 16, children: [Chip({ label: 'A' }), Chip({ label: 'B' })] }) };
export const AlignCenter = { name: 'align center', render: () => Stack({ align: 'center', pad: 16, children: EmptyState({}) }) };
export const AsList = { name: "tag 'ul' — 목록 의미", render: () => Stack({ tag: 'ul', gap: 0, children: [AlertItem({}), AlertItem({ divider: false })] }) };
export const AsSection = { name: "tag 'section'", render: () => Stack({ tag: 'section', gap: 8, pad: 16, children: items() }) };
export const Fill = {
  name: 'fill + justify end — 아래부터 쌓기 (채팅)',
  render: () => Stack({ fill: true, justify: 'end', gap: 16, pad: 20, children: [ChatDate({}), ChatMessage({})] }),
  parameters: { height: 320 },
};
