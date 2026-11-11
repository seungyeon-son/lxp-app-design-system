// EmptyState — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { Button, EmptyState } from '../../index.js';

export default {
  component: EmptyState,
  figma: '70:22686',
  parameters: { layout: 'padded' },
};

export const Default = { name: '차단된 대화방 없음' };
export const MessageEmpty = { name: '메시지 없음', args: { icon: 'illust-message-send', iconSize: [140, 140], text: '새로운 메시지를 시작해보세요.' } };
export const WithTitleAction = {
  name: '제목 + 버튼 (네트워크 오류)',
  render: () => EmptyState({ icon: 'illust-network-error', iconSize: [200, 200], title: '연결이 불안정해요', text: '네트워크 연결 상태를 확인한 후\n다시 시도해 주세요.', action: Button({ label: '다시 시도하기', variant: 'outline', size: 'xl' }) }),
};
