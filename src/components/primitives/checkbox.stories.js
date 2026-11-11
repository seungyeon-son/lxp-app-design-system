// Checkbox — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { Checkbox } from '../../index.js';

export default {
  component: Checkbox,
  figma: '7062:38718',
  // 체크 칸이나 라벨을 누르면 켜고 끔 (쇼케이스가 기본 동작을 막고 인자로 다시 그림)
  interact: (t, args) => (t.closest('.lxp-checkbox') && !args.disabled ? { checked: !args.checked } : null),
};

export const Default = { name: '꺼짐' };
export const Checked = { name: '켜짐', args: { checked: true } };
export const WithCount = { name: '개수 표시', args: { checked: true, count: 3 } };
export const Disabled = { name: 'disabled', args: { disabled: true }, interact: false };
export const NoLabel = { name: '라벨 없음 (목록 선택용)', args: { label: '', checked: true } };
