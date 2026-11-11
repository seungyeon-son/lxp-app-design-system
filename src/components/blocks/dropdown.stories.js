// Dropdown — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { Dropdown } from '../../index.js';

export default {
  component: Dropdown,
  figma: '79:18854',
  parameters: { layout: 'centered' },
};

export const Menu = { name: '메뉴 하나', args: { items: [{ icon: 'message-chat-circle', label: '차단 대화 관리' }] } };
export const NoIcon = { name: '아이콘 없음', args: { items: [{ label: '최신순' }, { label: '이름순' }] } };
export const Checked = {
  name: '선택형 (checked)',
  args: { items: [{ label: '전체', value: 'all', checked: true }, { label: '읽지 않음', value: 'unread' }, { label: '고정됨', value: 'pinned' }] },
};
