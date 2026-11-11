// TabBar — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { TAB_ITEMS, TabBar } from '../../index.js';

export default {
  component: TabBar,
  figma: '5:12712',
  interact: (t, args) => { const i = t.index('.lxp-tabbar__item'); return i < 0 ? null : { active: (args.items || TAB_ITEMS)[i].key }; },
};

export const Home = { name: 'home (기본) — 메시지 배지 11' };
export const Class = { name: 'class', args: { active: 'class' } };
export const Message = { name: 'message', args: { active: 'message' } };
export const More = { name: 'more · 새 소식 점', args: { active: 'more', newDots: ['more'] } };
export const NoBadge = { name: '배지 없음', args: { badges: {} } };
