// MenuList — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { MenuList } from '../../index.js';

export default {
  component: MenuList,
  figma: '21:11720',
  parameters: { layout: 'padded' },
};

export const More = { name: 'white (기본) — 더보기 메뉴' };
export const External = { name: 'gray — 외부링크 (more_externel_menu)', args: { tone: 'gray', items: [{ label: '외부링크 메뉴', trailing: 'link-external-20' }] } };
export const Values = {
  name: '오른쪽 값 info · muted',
  args: { items: [{ icon: 'globe-20', label: '언어 설정', value: '한국어', valueTone: 'info' }, { icon: 'info-circle-20', label: '버전 정보', value: '1.0.0', valueTone: 'muted', trailing: '' }] },
};
