// Header — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { Header } from '../../index.js';

// 메시지 헤더의 ⋮ = 드롭다운 열고 닫기
const toggleMenu = (t, args) => {
    if (!t.closest('[aria-label="dots-vertical-20"]')) return null;
    if (args.variant === 'message') return { variant: 'message-open' };
    if (args.variant === 'message-open') return { variant: 'message' };
    return null;
  };

export default {
  component: Header,
  figma: '5:12707',
};

export const Home = { name: 'home (기본)', args: { variant: 'home' } };
export const Class = { name: 'class — 학기 선택 · 카드형', args: { variant: 'class' } };
export const ClassList = { name: 'class_list — 목록형', args: { variant: 'class_list' } };
export const Message = { name: 'message', args: { variant: 'message' }, interact: toggleMenu };
export const MessageOpen = { name: 'message-open — 드롭다운 열림', args: { variant: 'message-open' }, parameters: { height: 130 }, interact: toggleMenu };
export const More = { name: 'more — 아이콘 없음', args: { variant: 'more' } };
export const Custom = { name: '직접 구성 (title · caret · actions)', args: { title: '2026년 2학기', caret: true, actions: [{ icon: 'search-20', size: 40, label: '검색' }] } };
export const WithMenu = { name: '직접 구성 — menu', args: { variant: 'message', menu: [{ icon: 'message-chat-circle', label: '차단 대화 관리' }] }, parameters: { height: 130 } };
