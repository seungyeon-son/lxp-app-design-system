// AvatarGroup — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { AvatarGroup } from '../../index.js';

export default {
  component: AvatarGroup,
  figma: '70:25318',
};

export const Default = { name: '하나 + N (메시지 목록 48)' };
export const NoMore = { name: '+N 없음', args: { more: 0 } };
export const Many = { name: '여러 명 (대화 시작 안내 36)', args: { avatars: ['avatar-05', 'avatar-02', 'avatar-06'], size: 36, more: 5 } };
export const Overlap = { name: '겹침 폭 8px', args: { avatars: ['avatar-03', 'avatar-04', 'avatar-02'], size: 36, overlap: 8, more: 2 } };
