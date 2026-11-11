// SelectCheck — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { SelectCheck } from '../../index.js';

export default {
  component: SelectCheck,
  figma: 'icon-check-state',
  interact: (t, args) => ({ checked: !args.checked }),
};

export const Default = { name: '선택 안 함' };
export const Checked = { name: '선택함', args: { checked: true } };
