// StartChat — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { StartChat } from '../../index.js';

export default {
  component: StartChat,
  figma: '79:18831',
  parameters: { layout: 'padded' },
};

export const Dm = { name: '1:1 (기본) — 큰 아바타' };
export const Group = { name: '단체 — 겹친 아바타 +N', args: { names: ['김연아', '이상화', '봉준호', '손흥민', '박지성'], avatars: ['avatar-05', 'avatar-02', 'avatar-06'], more: 5 } };
export const GroupAutoMore = { name: '단체 — +N 자동 계산', args: { names: ['김연아', '이상화', '봉준호', '손흥민'], avatars: ['avatar-05', 'avatar-02', 'avatar-06'] } };
