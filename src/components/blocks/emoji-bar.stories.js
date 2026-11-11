// EmojiBar — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { EmojiBar } from '../../index.js';

export default {
  component: EmojiBar,
  figma: 'Message action bar',
  parameters: { layout: 'padded' },
};

export const Default = { name: '6개 (기본)' };
export const Few = { name: '3개', args: { emojis: [['heart', '좋아요'], ['check', '확인'], ['thumbsup', '최고']] } };
