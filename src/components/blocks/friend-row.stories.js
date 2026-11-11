// FriendRow — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { FriendRow, SelectCheck } from '../../index.js';

export default {
  component: FriendRow,
  figma: '60:20862',
};

export const Default = {};
export const Selected = { name: 'selected — 고른 행', render: () => FriendRow({ selected: true, right: SelectCheck({ checked: true }) }) };
export const Disabled = { name: 'disabled — 이미 멤버', render: () => FriendRow({ disabled: true, name: '이상화(2251****)', avatar: 'avatar-02', right: SelectCheck({ checked: true }) }) };
export const Invite = { name: 'icon — 초대하기', args: { icon: 'plus-circle-48', name: '초대하기' } };
export const WithRight = { name: '오른쪽 슬롯', render: () => FriendRow({ name: '봉준호(2251****)', avatar: 'avatar-04', right: SelectCheck({}) }) };
