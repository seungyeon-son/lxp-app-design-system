// DateStrip — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { DateStrip } from '../../index.js';

export default {
  component: DateStrip,
  figma: '7062:38201',
  interact: (t) => { const i = t.attr('data-index'); return i == null ? null : { selected: Number(i) }; },
};

export const Today = { name: '오늘 선택 (기본)' };
export const OtherDay = { name: '다른 날 선택', args: { selected: 1 } };
export const MonthChange = {
  name: '달이 바뀌는 날 (11/2)',
  args: { items: [{ label: '목', date: '30' }, { label: '금', date: '31' }, { label: '토', date: '11/1' }, { label: '오늘', date: '2' }, { label: '월', date: '3' }, { label: '화', date: '4' }, { label: '수', date: '5' }] },
};
