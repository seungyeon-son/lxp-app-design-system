// ListItem — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { ListItem } from '../../index.js';

export default {
  component: ListItem,
  args: { icon: 'reply-20', label: '메시지 답장' },
  parameters: { layout: 'padded' },
};

export const Default = { name: 'default (기본)' };
export const Muted = { name: 'tone muted — 설정 목록', args: { icon: 'edit-20', label: '대화방 이름 변경', tone: 'muted' } };
export const Danger = { name: 'tone danger — 삭제·나가기', args: { icon: 'trash-20-red', label: '메시지 삭제', tone: 'danger' } };
export const Chevron = { name: 'trailing chevron — 다음 화면', args: { icon: 'translate-20', label: '번역 언어 선택', trailing: 'chevron', tone: 'muted' } };
export const Check = { name: 'trailing check — 선택됨', args: { icon: undefined, flag: 'kr', label: '한국어', trailing: 'check' } };
export const FlagUs = { name: 'flag us', args: { icon: undefined, flag: 'us', label: '영어' } };
export const FlagJp = { name: 'flag jp', args: { icon: undefined, flag: 'jp', label: '일본어' } };
export const FlagCn = { name: 'flag cn', args: { icon: undefined, flag: 'cn', label: '중국어' } };
export const Small = { name: 'size sm (36)', args: { icon: undefined, flag: 'kr', label: '한국어', size: 'sm', trailing: 'check' } };
export const NoIcon = { name: '아이콘 없음', args: { icon: undefined, label: '원문 보기' } };
