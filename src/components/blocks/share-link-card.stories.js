// ShareLinkCard — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { Grid, ShareLinkCard } from '../../index.js';

export default {
  component: ShareLinkCard,
  figma: '89:23365',
  parameters: { layout: 'centered' },
};

export const Default = { name: '미리보기 없음 (회색)' };
export const LongTitle = { name: '긴 제목 — 말줄임', args: { title: '[공유] 2026학년도 1학기 물리학실험 최종 발표자료 모음', site: '유비온 이캠퍼스', url: 'ecampus.ubion.co.kr/course/view.php?id=1234' } };
export const Grid2 = {
  name: '2열 격자 (대화방 기록)',
  render: () => Grid({ cols: 2, gap: 8, children: [ShareLinkCard({}), ShareLinkCard({})] }),
  parameters: { layout: 'padded' },
};
