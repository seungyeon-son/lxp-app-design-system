// AlertItem — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { AlertItem } from '../../index.js';

export default {
  component: AlertItem,
  figma: '25:13296',
};

export const Default = {};
export const NoDivider = { name: '구분선 없음 (마지막 행)', args: { divider: false } };
export const LongText = { name: '긴 글 — 한 줄 말줄임', args: { course: '창의코딩-모두의파이썬 (2025-2-2) 분반 01 · 02 통합 강의', title: '[공지] 중간고사 일정이 변경되었습니다. 바뀐 일정을 꼭 확인해 주세요.' } };
export const List = {
  name: '목록',
  render: () => [AlertItem({}), AlertItem({ course: '물리학수업', time: '오전09:10', title: '[공지] 중간고사 일정이 변경되었습니다.' }), AlertItem({ divider: false })].join(''),
};
