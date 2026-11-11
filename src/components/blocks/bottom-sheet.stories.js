// BottomSheet — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { BottomSheet, Button, Divider, EmojiBar, ListGroup, ListItem, Stack } from '../../index.js';

export default {
  component: BottomSheet,
  figma: '80:21734',
  parameters: { height: 200 },
};

export const Items = { name: 'items — 간단 메뉴', args: { items: [{ icon: 'reply-20', label: '메시지 답장' }, { icon: 'pin-20', label: '공지 등록' }, { icon: 'trash-20-red', label: '메시지 삭제', tone: 'danger' }] } };
export const WithTitle = { name: '제목 있음', args: { title: '대화방 설정', items: [{ icon: 'edit-20', label: '대화방 이름 변경' }] } };
export const Subtle = { name: 'tone subtle — 회색 시트', args: { tone: 'subtle', title: '대화방 설정', items: [{ icon: 'edit-20', label: '대화방 이름 변경', tone: 'muted' }] } };
export const LongPress = {
  name: '길게 누르기 (long_press)',
  render: () => BottomSheet({ content: Stack({ gap: 8, children: [EmojiBar({}), Divider({}), Stack({ gap: 4, children: [ListItem({ icon: 'reply-20', label: '메시지 답장' }), ListItem({ icon: 'pin-20', label: '공지 등록' }), ListItem({ icon: 'trash-20-red', label: '메시지 삭제', tone: 'danger' })] })] }) }),
};
export const ChatSetting = {
  name: '대화방 설정 (chat_setting)',
  render: () => BottomSheet({ tone: 'subtle', title: '대화방 설정', gap: 20, content: Stack({ gap: 32, children: [
    ListGroup({ label: '메시지 번역', card: false, items: [{ icon: 'translate-20', label: '번역 언어 선택', tone: 'muted', trailing: 'chevron' }] }),
    ListGroup({ label: '대화방 관리', items: [{ icon: 'edit-20', label: '대화방 이름 변경', tone: 'muted' }, { icon: 'bell-setting-20', label: '대화방 알림 끄기', tone: 'muted' }, { icon: 'settings-20', label: '대화방 관리', tone: 'muted' }] }),
    ListItem({ icon: 'log-out-20-red', label: '대화방 나가기', tone: 'danger' }),
  ] }) }),
};
export const Translate = {
  name: '메시지 번역 (언어 선택)',
  render: () => BottomSheet({ tone: 'subtle', title: '메시지 번역', gap: 12, content: [
    ListGroup({ label: '언어 선택', items: [{ flag: 'kr', label: '한국어', trailing: 'check' }, { flag: 'us', label: '영어' }, { flag: 'jp', label: '일본어' }, { flag: 'cn', label: '중국어' }] }),
    Stack({ direction: 'row', justify: 'end', children: Button({ label: '원문 보기', variant: 'outline' }) }),
  ] }),
};
