// ChatDate — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { ChatDate } from '../../index.js';

export default {
  component: ChatDate,
  figma: '79:18832',
  parameters: { layout: 'padded' },
};

export const Today = { name: '오늘 (기본)' };
export const Date = { name: '날짜', args: { label: '10월 1일 수요일' } };
