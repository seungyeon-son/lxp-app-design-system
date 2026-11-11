// IconButton — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { IconButton } from '../../index.js';

export default {
  component: IconButton,
  figma: 'btn-base-state',
  args: { icon: 'bell-18', label: '알림' },
};

export const Default = { name: '36 (기본)' };
export const Active = { name: 'active — 선택됨', args: { icon: 'grid-active', active: true, label: '카드형' } };
export const Round = { name: 'round — 메시지 입력 +', args: { icon: 'plus', round: true, label: '첨부' } };
export const TonePrimary = { name: 'tone primary — 파란 바탕', args: { icon: 'download-18-white', tone: 'primary', label: '내려받기' } };
export const Size16 = { name: 'size 16 — 입력칸 지우기', args: { icon: 'x-circle-filled', size: 16, label: '지우기' } };
export const Size20 = { name: 'size 20 — 답장 바 닫기', args: { icon: 'x-close-20', size: 20, label: '닫기' } };
export const Size24 = { name: 'size 24', args: { size: 24 } };
export const Size28 = { name: 'size 28 — 공지 펼치기', args: { icon: 'chevron-down-16', size: 28, label: '펼치기' } };
export const Size32 = { name: 'size 32', args: { icon: 'caret-up-18', size: 32, label: '접기' } };
export const Size40 = { name: 'size 40 — 메시지 헤더', args: { icon: 'search-20', size: 40, label: '검색' } };
export const WithAttrs = { name: 'attrs', args: { attrs: { 'data-act': 'alarm' } } };
export const AllSizes = {
  name: '모든 size',
  render: () => [16, 20, 24, 28, 32, 36, 40].map((size) => IconButton({ icon: 'bell-18', size, active: true, label: String(size) })).join(' '),
};
