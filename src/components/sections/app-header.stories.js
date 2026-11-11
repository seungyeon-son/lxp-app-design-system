// AppHeader — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { AppHeader } from '../../index.js';

export default {
  component: AppHeader,
  figma: '24:13004',
};

export const Page = { name: 'page (기본) — 뒤로', args: { title: '관리' } };
export const Default = { name: 'default — 메뉴', args: { type: 'default', title: '스마트 출석부' } };
export const PopupPull = { name: 'popup_pull — 닫기', args: { type: 'popup_pull', title: '친구 추가' } };
export const PageChat = { name: 'page_chat — 대화방 (오른쪽 ⋮)', args: { type: 'page_chat', title: '김연아, 이상화, 봉준호, 손흥민, 박지성' } };
export const PhotoViewer = { name: 'photo-viewer — 제목 + 날짜', args: { type: 'photo-viewer', title: '발신 유저명', subtitle: '2026.01.21' } };
export const NoRight = { name: '오른쪽 빈 자리 (right null)', args: { type: 'page_chat', title: '홍길동', right: null } };
export const TitleIcon = { name: 'titleIcon — 동기화', args: { type: 'default', title: '스마트 출석부', titleIcon: 'refresh-16' } };
