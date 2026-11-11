// MessageItem — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { MessageItem } from '../../index.js';

export default {
  component: MessageItem,
  figma: '19:8837',
};

export const Dm = { name: 'dm · enabled (기본)' };
export const Group = { name: 'group', args: { option: 'group' } };
export const Focused = { name: 'state focused — 눌림', args: { state: 'focused' } };
export const Update = { name: 'state update — 새 메시지', args: { option: 'group', state: 'update' } };
export const Block = { name: 'state block — 차단·나감', args: { state: 'block', name: '홍길동', avatar: 'avatar-03' } };
export const Plain = { name: '알림 끔·고정 아이콘 없음', args: { muted: false, pinned: false, name: '김연아', preview: '감사합니다.', avatar: 'avatar-03' } };
export const SwipeRight = { name: 'swipe right — 오른쪽 액션', args: { swipe: 'right', name: '김연아', preview: '감사합니다.', avatar: 'avatar-03', unread: 10, muted: false, pinned: false } };
export const SwipeLeft = { name: 'swipe left — 왼쪽 액션', args: { swipe: 'left', name: '김연아', preview: '감사합니다.', avatar: 'avatar-03', unread: 10, muted: false } };
