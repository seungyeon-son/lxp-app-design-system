// Screen — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { AppHeader, BottomSheet, ClassEditRow, Dim, Fab, Footer, Header, Input, MenuList, MessageItem, ModuleItem, Popup, Screen, Section, Stack, TabBar, Toast, WeekPicker } from '../../index.js';

export default {
  component: Screen,
  description: '360×780 화면 틀. header · body(스크롤) · bottom · overlay · fab · toast 칸에 컴포넌트를 넣습니다. 완성 화면은 templates/screens.js(화면 템플릿 섹션) 참고.',
  parameters: { layout: 'phone' },
};

export const Basic = {
  name: '헤더 + 본문 + 탭바',
  render: () => Screen({ header: Header({ variant: 'more' }), body: Stack({ pad: 20, children: MenuList({}) }), bottom: TabBar({ active: 'more' }) }),
};
export const Sky = {
  name: "bg 'sky' — 홈",
  render: () => Screen({ bg: 'sky', header: Header({}), body: [WeekPicker({}), Section({ title: '이번 주 학습', count: 1, pad: [20, 0], children: Stack({ pad: [0, 16], children: ModuleItem({ dday: 2 }) }) })], bottom: TabBar({}) }),
};
export const White = {
  name: "bg 'white' · Footer",
  render: () => Screen({ bg: 'white', header: AppHeader({ title: '관리' }), body: Stack({ pad: 20, children: Input({}) }), bottom: Footer({ label: '저장하기' }) }),
};
export const Overlay = {
  name: 'overlay — 팝업 (Dim)',
  render: () => Screen({ header: AppHeader({ type: 'page_chat', title: '홍길동' }), bottom: Footer({ type: 'message-input' }), overlay: Dim({ content: Popup({}) }) }),
};
export const Sheet = {
  name: "overlay — 바텀시트 (Dim align 'bottom')",
  render: () => Screen({ header: AppHeader({ type: 'page_chat', title: '홍길동' }), bottom: Footer({ type: 'message-input' }), overlay: Dim({ align: 'bottom', content: BottomSheet({ items: [{ icon: 'reply-20', label: '메시지 답장' }] }) }) }),
};
export const WithToast = {
  name: 'toast — 하단 바로 위',
  render: () => Screen({ header: AppHeader({ title: '내 강의실 편집' }), body: Stack({ pad: 20, children: ClassEditRow({}) }), bottom: Footer({ label: '저장하기' }), toast: Toast({}) }),
};
export const WithFab = {
  name: 'fab — 떠 있는 버튼',
  render: () => Screen({ header: Header({ variant: 'message' }), body: MessageItem({}), bottom: TabBar({ active: 'message' }), fab: Fab({}) }),
};
export const NoStatusBar = {
  name: 'statusBar false',
  render: () => Screen({ statusBar: false, header: AppHeader({ title: '상태바 없음' }), bottom: TabBar({}) }),
};
