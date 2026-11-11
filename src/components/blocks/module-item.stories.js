// ModuleItem — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { ModuleItem, Stack } from '../../index.js';

export default {
  component: ModuleItem,
  figma: '21:10764',
  parameters: { layout: 'padded' },
};

export const Later = { name: 'D-4 (기본) — 회색 칩' };
export const Soon = { name: 'D-3 이하 — 파란 칩', args: { dday: 3 } };
export const Url = { name: 'URL 모듈 · 긴 제목', args: { dday: 2, module: 'module-url-28', title: '3-1. 스마트 팜 기술 도입 현황 및 효과 분석과 향후 과제' } };
export const List = {
  name: '목록',
  render: () => Stack({ gap: 8, children: [ModuleItem({ dday: 1 }), ModuleItem({ dday: 3, module: 'module-url-28' }), ModuleItem({ dday: 7 })] }),
};
