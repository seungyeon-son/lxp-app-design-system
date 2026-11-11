// Popup — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { Input, Popup } from '../../index.js';

export default {
  component: Popup,
  figma: '80:22498',
  parameters: { layout: 'centered' },
};

export const Delete = { name: '삭제 (기본) — danger' };
export const Confirm = { name: '확인 — primary', args: { title: '대화방 이름 변경', body: '변경한 이름은 나에게만 보입니다.', actions: [{ label: '취소' }, { label: '확인', tone: 'primary' }] } };
export const Leave = { name: '긴 본문 — 줄바꿈 유지', args: { title: '대화방 나가기', body: '대화방명이 길어지는 경우에는 말줄임처리...\n대화방을 나가시겠습니까?', actions: [{ label: '취소' }, { label: '나가기', tone: 'danger' }] } };
export const OneAction = { name: '버튼 하나', args: { title: '알림', body: '저장되었습니다.', actions: [{ label: '확인', tone: 'primary' }] } };
export const WithInput = {
  name: 'content — 입력칸',
  render: () => Popup({ title: '대화방 이름 변경', body: '', content: Input({ icon: null, clearable: false, value: '김연아, 이상화, 봉준호' }), actions: [{ label: '취소' }, { label: '확인', tone: 'primary' }] }),
};
