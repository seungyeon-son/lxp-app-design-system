// ChatReplyBar — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { ChatReplyBar } from '../../index.js';

export default {
  component: ChatReplyBar,
  figma: '112:17153',
};

export const Default = {};
export const Short = { name: '짧은 원문', args: { to: '김연아', text: '네 감사합니다.' } };
