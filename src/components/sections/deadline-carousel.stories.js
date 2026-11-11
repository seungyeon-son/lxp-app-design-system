// DeadlineCarousel — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { DeadlineCarousel } from '../../index.js';

export default {
  component: DeadlineCarousel,
  figma: '20:10530',
  parameters: { background: 'sky' },
};

export const One = { name: '한 장 (기본)' };
export const Many = { name: '여러 장 — 양옆 흐린 카드', args: { cards: [{}, { title: '3-1. 스마트 팜 기술', course: '사물인터넷과 4차산업사회' }, { title: '학습이론 3', remain: '1일 남았어요' }] } };
