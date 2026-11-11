// Ratio — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { Ratio } from '../../index.js';

export default {
  component: Ratio,
  args: { label: '처리 현황', value: 3, total: 40 },
};

export const Default = {};
export const Zero = { name: '0 / 전체', args: { value: 0 } };
export const Done = { name: '다 처리함', args: { value: 40 } };
