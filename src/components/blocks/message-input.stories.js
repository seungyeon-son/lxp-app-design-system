// MessageInput — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { MessageInput } from '../../index.js';

export default {
  component: MessageInput,
  figma: '86:18467',
  parameters: { layout: 'padded' },
};

export const Empty = { name: '빈 칸 (기본)' };
export const WithValue = { name: '입력 중', args: { value: '네 감사합니다.' } };
export const CustomPlaceholder = { name: '다른 안내 문구', args: { placeholder: '답장을 입력하세요.' } };
