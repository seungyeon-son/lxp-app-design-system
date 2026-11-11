// ChatMessage — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { ChatMessage } from '../../index.js';

export default {
  component: ChatMessage,
  figma: '80:20270',
  parameters: { layout: 'padded' },
};

export const Message = { name: 'message (기본)' };
export const LongText = { name: '긴 글', args: { name: '이병헌', avatar: 'avatar-04', text: '과거 몇차례 잔디를 통해서 일하는 사람들에게는 ‘R&R을 넘어서는 역량’이 중요하다고 언급했습니다.' } };
export const Pressed = { name: 'state pressed — 길게 누름', args: { state: 'pressed' } };
export const Blocked = { name: 'state blocked — 차단한 사람', args: { state: 'blocked', name: '홍길동' } };
export const System = { name: 'kind system — 초대·나감 안내', args: { kind: 'system', text: '김연아님이 대화방에서 나갔습니다.' } };
export const Reply = {
  name: 'kind reply — 답장',
  args: { kind: 'reply', quote: { to: '박진영', text: '과거 몇차례 잔디를 통해서 일하는 사람들에게는 ‘R&R을 넘어서는 역량’이 중요하다고 언급했습니다.' }, text: '네 확인했습니다.' },
};
export const WithLink = { name: '링크', args: { text: '자료 공유드립니다.', link: 'https://ecampus.smu.ac.kr/local/ubassistant/approve.php?id=86570' } };
export const NoRead = { name: '읽음 수 없음', args: { read: null } };
export const NoReactions = { name: '리액션 없음', args: { reactions: [], addReaction: false } };
export const CustomReactions = { name: '리액션 직접 지정', args: { reactions: [{ emoji: '🎉', count: 2 }, { emoji: '👍', count: 5, selected: true }] } };
