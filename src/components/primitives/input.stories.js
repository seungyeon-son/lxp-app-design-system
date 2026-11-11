// Input — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { Input, Stack } from '../../index.js';

// 지우기(x) 버튼 = 값 비우기
const clear = (t) => (t.closest('.lxp-input__clear') ? { value: '', validation: 'normal' } : null);

export default {
  component: Input,
  figma: '86:18467',
  parameters: { layout: 'padded' },
};

export const Enabled = { name: 'enabled (기본)' };
export const Filled = { name: '값 있음', args: { value: '물리학' }, interact: clear };
export const Focused = { name: 'focused', args: { state: 'focused', value: '물리학' }, interact: clear };
export const Disabled = { name: 'disabled', args: { state: 'disabled' } };
export const ValidationNormal = { name: 'validation normal', args: { validation: 'normal', value: '물리학' } };
export const ValidationFilled = { name: 'validation filled', args: { validation: 'filled', value: '물리학' }, interact: clear };
export const Invalid = { name: 'validation invalid', args: { validation: 'invalid', value: '잘못된 입력' } };
export const NoIcon = { name: '아이콘 없음 (팝업 입력칸)', args: { icon: null, clearable: false, value: '김연아, 이상화, 봉준호' } };
export const NotClearable = { name: '지우기 버튼 없음', args: { clearable: false, value: '물리학' } };
export const AllStates = {
  name: 'state × validation',
  render: () => Stack({ gap: 8, children: ['enabled', 'focused', 'disabled'].flatMap((state) => ['normal', 'filled', 'invalid'].map((validation) => Input({ state, validation, value: `${state} · ${validation}` }))) }),
};
