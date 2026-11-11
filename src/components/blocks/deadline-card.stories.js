// DeadlineCard — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { DeadlineCard } from '../../index.js';

export default {
  component: DeadlineCard,
  figma: '20:10530',
  parameters: { layout: 'centered', background: 'sky' },
};

export const Default = {};
export const Faded = { name: 'faded — 캐러셀 양옆', args: { faded: true } };
export const Url = { name: 'URL 모듈', args: { module: 'module-url-28', title: '3-1. 스마트 팜 기술', course: '사물인터넷과 4차산업사회', remain: '1일 남았어요' } };
