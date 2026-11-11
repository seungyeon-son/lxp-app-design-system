// SelectAllRow — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { SelectAllRow } from '../../index.js';

export default {
  component: SelectAllRow,
  figma: '87:22551',
  parameters: { layout: 'padded' },
  interact: (t, args) => (t.closest('[role=checkbox]') ? { checked: !args.checked } : null),
};

export const Default = { name: '선택 안 함' };
export const Checked = { name: '모두 선택', args: { checked: true } };
