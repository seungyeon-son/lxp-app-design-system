// ListGroup — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { ListGroup } from '../../index.js';

export default {
  component: ListGroup,
  parameters: { layout: 'padded', background: 'subtle' },
  args: { label: '대화방 관리', items: [{ icon: 'edit-20', label: '대화방 이름 변경', tone: 'muted' }, { icon: 'bell-setting-20', label: '대화방 알림 끄기', tone: 'muted' }, { icon: 'settings-20', label: '대화방 관리', tone: 'muted' }] },
};

export const Card = { name: 'card (기본) — 흰 카드 + 구분선' };
export const NoCard = { name: 'card false — 한 줄씩', args: { label: '메시지 번역', card: false, items: [{ icon: 'translate-20', label: '번역 언어 선택', tone: 'muted', trailing: 'chevron' }] } };
export const Small = {
  name: 'size sm — 언어 선택',
  args: { label: '언어 선택', size: 'sm', items: [{ flag: 'kr', label: '한국어', trailing: 'check' }, { flag: 'us', label: '영어' }, { flag: 'jp', label: '일본어' }, { flag: 'cn', label: '중국어' }] },
};
export const NoLabel = { name: '라벨 없음', args: { label: '' } };
