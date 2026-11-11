// Flag — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { Flag } from '../../index.js';

export default {
  component: Flag,
  figma: 'icon/flag',
};

export const Korea = { name: 'kr (기본)' };
export const Usa = { name: 'us', args: { code: 'us' } };
export const Japan = { name: 'jp', args: { code: 'jp' } };
export const China = { name: 'cn', args: { code: 'cn' } };
export const Large = { name: 'size 40', args: { size: 40 } };
export const AllCodes = { name: '모든 국기', render: () => ['kr', 'us', 'jp', 'cn'].map((code) => Flag({ code })).join(' ') };
