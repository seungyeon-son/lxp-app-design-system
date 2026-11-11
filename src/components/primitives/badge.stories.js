// Badge — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { Badge } from '../../index.js';

export default {
  component: Badge,
};

export const Default = { name: 'md (22)' };
export const Small = { name: 'sm (18) — 탭바', args: { size: 'sm', count: 11 } };
export const Square = { name: 'square — 네모 숫자', args: { size: 'square', count: 3 } };
export const LongCount = { name: '긴 숫자', args: { count: '99+' } };
export const AllSizes = { name: '모든 크기', render: () => [Badge({ count: 1 }), Badge({ count: 11, size: 'sm' }), Badge({ count: 3, size: 'square' })].join(' ') };
