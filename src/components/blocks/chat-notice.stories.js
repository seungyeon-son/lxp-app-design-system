// ChatNotice — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { ChatNotice } from '../../index.js';

export default {
  component: ChatNotice,
  figma: '93:23602',
  // 머리(제목 줄)나 펼치기 버튼을 누르면 열고 닫음
  interact: (t, args) => (t.closest('.lxp-chat-notice__head') ? { open: !args.open } : null),
};

export const Closed = { name: '닫힘 (기본)' };
export const Open = { name: '열림', args: { open: true } };
export const OpenLong = { name: '열림 — 긴 본문', args: { open: true, body: '시험기간 2025년 4월 10~13일 입니다.\n\n동영상 시청 중 끊김과 관련하여 안내 말씀드립니다.\n\n1. WIFI를 통해 수강 시 영상 지연이 발생할 경우, 모바일 데이터로 바꿔 보세요.\n2. 다른 통신망(통신사)이나 기기로 재생해 보세요.' } };
