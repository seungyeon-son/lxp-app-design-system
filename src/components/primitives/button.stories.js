// Button — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { Button } from '../../index.js';

export default {
  component: Button,
  figma: 'btn-base-state',
  args: { label: '저장하기' },
};

export const Primary = { name: 'primary (기본)' };
export const Secondary = { name: 'secondary', args: { variant: 'secondary', label: '내 강의실 편집' } };
export const Outline = { name: 'outline', args: { variant: 'outline', label: '차단 해제' } };
export const OutlinePrimary = { name: 'outline-primary', args: { variant: 'outline-primary', label: '자동출결' } };
export const Gray = { name: 'gray', args: { variant: 'gray', label: '차단 해제' } };
export const Ghost = { name: 'ghost', args: { variant: 'ghost', label: '변경', size: 'sm', iconRight: 'chevron-right' } };
export const SizeXl = { name: 'size xl (48)', args: { size: 'xl' } };
export const SizeMd = { name: 'size md (40)', args: { size: 'md' } };
export const SizeSm = { name: 'size sm (32)', args: { size: 'sm' } };
export const SizeXs = { name: 'size xs (28)', args: { size: 'xs', variant: 'secondary', label: '내 강의실 편집', icon: 'settings' } };
export const Size2xs = { name: 'size 2xs (24)', args: { size: '2xs', variant: 'ghost', label: '모두 보기', iconRight: 'chevron-right' } };
export const WithIcon = { name: '왼쪽 아이콘', args: { variant: 'gray', size: 'md', icon: 'block', label: '차단 해제' } };
export const WithIconRight = { name: '오른쪽 아이콘', args: { variant: 'outline-primary', size: 'xl', iconRight: 'check-circle', label: '자동출결' } };
export const Block = { name: 'block — 가로 100%', args: { block: true }, parameters: { layout: 'padded' } };
export const Disabled = { name: 'disabled', args: { disabled: true } };
export const GhostDanger = { name: 'ghost · tone danger (팝업 삭제)', args: { variant: 'ghost', tone: 'danger', label: '삭제' } };
export const GhostPrimary = { name: 'ghost · tone primary (팝업 확인)', args: { variant: 'ghost', tone: 'primary', label: '확인' } };
export const OutlineDanger = { name: 'outline · tone danger (대화방 나가기)', args: { variant: 'outline', tone: 'danger', label: '대화방 나가기' } };
export const WithAttrs = { name: 'attrs — id · data-*', args: { label: '출결 일괄 처리', size: 'xl', attrs: { id: 'bulk', 'data-act': 'bulk' } } };
export const AllVariants = {
  name: '모든 variant',
  render: () => ['primary', 'secondary', 'outline', 'outline-primary', 'gray', 'ghost'].map((variant) => Button({ label: variant, variant, size: 'md' })).join(' '),
  parameters: { arrange: 'row' },
};
export const AllSizes = {
  name: '모든 size',
  render: () => ['xl', 'lg', 'md', 'sm', 'xs', '2xs'].map((size) => Button({ label: size, size })).join(' '),
  parameters: { arrange: 'row' },
};
