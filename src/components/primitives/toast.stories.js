// Toast — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { Toast } from '../../index.js';

export default {
  component: Toast,
  figma: '37:14852',
};

export const Default = { name: '저장되었습니다' };
export const CustomLabel = { name: '다른 문구', args: { label: '출석부가 저장되었습니다' } };
export const NoIcon = { name: '아이콘 없음', args: { icon: null, label: '복사되었습니다' } };
