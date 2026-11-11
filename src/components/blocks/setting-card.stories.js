// SettingCard — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { FriendRow, Grid, IconButton, ImageTile, SelectAllRow, SelectCheck, SettingCard, Stack } from '../../index.js';

export default {
  component: SettingCard,
  figma: '83:17411',
  parameters: { layout: 'padded', background: 'subtle' },
};

export const Photos = {
  name: '사진/동영상 — ImageTile 4칸',
  render: () => SettingCard({ icon: 'file-img-24', title: '사진/동영상', children: Grid({ cols: 4, gap: 8, pad: [0, 20], children: [1, 2, 3, 4].map(() => ImageTile({})) }) }),
};
export const TitleOnly = { name: '제목만 — 문서', args: { icon: 'file-info-24', title: '문서' } };
export const NoMore = { name: '모두 보기 없음', args: { icon: 'link-24', title: '링크', more: false } };
export const Members = {
  name: '대화 멤버 — list',
  render: () => SettingCard({ title: '대화 멤버', count: 5, more: false, list: true, children: [FriendRow({ icon: 'plus-circle-48', name: '초대하기' }), FriendRow({ name: '이병헌(2251****)', avatar: 'avatar-04' }), FriendRow({ name: '유비온(2251****)', avatar: 'avatar-06' })] }),
};
export const Invite = {
  name: 'heading md — 멤버 초대 카드',
  render: () => SettingCard({ heading: 'md', title: '물리학실험실 2 [001]', more: false, list: true, aside: IconButton({ icon: 'caret-up-18', size: 32, label: '접기' }), children: Stack({ gap: 8, children: [SelectAllRow({}), FriendRow({ name: '김연아(2251****)', right: SelectCheck({ checked: true }), selected: true })] }) }),
};
export const AllCards = {
  name: '카드 목록 (문서 · 링크 · 공지)',
  render: () => Stack({ gap: 8, children: [SettingCard({ icon: 'file-info-24', title: '문서' }), SettingCard({ icon: 'link-24', title: '링크' }), SettingCard({ icon: 'pin-24-blue', title: '공지' })] }),
};
