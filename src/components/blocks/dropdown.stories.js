// Dropdown — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { Dropdown } from '../../index.js';

// 선택형 메뉴: 누른 항목 하나만 선택
const pick = (t, args) => {
    const v = t.attr('data-value');
    if (v == null || !args.items.some((it) => 'checked' in it)) return null;
    return { items: args.items.map((it) => ({ ...it, checked: it.value === v })) };
  };

export default {
  component: Dropdown,
  figma: '79:18854',
  parameters: { layout: 'centered' },
};

export const Menu = { name: '메뉴 하나', args: { items: [{ icon: 'message-chat-circle', label: '차단 대화 관리' }] } };
export const NoIcon = { name: '아이콘 없음', args: { items: [{ label: '최신순' }, { label: '이름순' }] } };
export const Checked = {
  interact: pick,
  name: '선택형 (checked)',
  args: { items: [{ label: '전체', value: 'all', checked: true }, { label: '읽지 않음', value: 'unread' }, { label: '고정됨', value: 'pinned' }] },
};
