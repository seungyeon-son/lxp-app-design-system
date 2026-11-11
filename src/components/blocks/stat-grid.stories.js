// StatGrid — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { Checkbox, Ratio, Stack, StatGrid } from '../../index.js';

export default {
  component: StatGrid,
  figma: '7062:38229',
};

export const Empty = { name: '모두 0 (기본) — 누를 수 없음' };
export const Counts = {
  name: '개수 있음',
  args: { items: [{ label: '출석', count: 32, icon: 'status-present' }, { label: '결석', count: 0, icon: 'status-absent' }, { label: '지각', count: 2, icon: 'status-late' }, { label: '조퇴', count: 1, icon: 'status-early' }, { label: '지각조퇴', count: 0, icon: 'status-lateearly-muted' }] },
};
export const Linked = {
  name: 'linked — 누르면 목록으로 (›)',
  args: { linked: true, items: [{ label: '출석', count: 32, icon: 'status-present' }, { label: '결석', count: 0, icon: 'status-absent' }, { label: '지각', count: 2, icon: 'status-late' }, { label: '조퇴', count: 1, icon: 'status-early' }, { label: '지각조퇴', count: 0, icon: 'status-lateearly-muted' }] },
};
export const WithFooter = {
  name: 'footer — 처리 현황 + 필터',
  render: () => StatGrid({ footer: Stack({ direction: 'row', justify: 'between', children: [Ratio({ label: '처리 현황', value: 3, total: 40 }), Checkbox({ count: 37 })] }) }),
};
