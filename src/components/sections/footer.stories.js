// Footer — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { Footer } from '../../index.js';

export default {
  component: Footer,
  figma: '37:14876',
};

export const ButtonType = { name: 'button (기본)' };
export const CountButton = { name: 'count-button — 총 2명 + 버튼', args: { type: 'count-button', count: 2, label: '대화시작하기' } };
export const CountButtonCustom = { name: 'count-button — 문구 · 단위 바꿈 · disabled', args: { type: 'count-button', prefix: '미체크', count: 3, unit: '명', label: '출석부 저장', disabled: true } };
export const ButtonPair = { name: 'button-pair — 보조 + 주 버튼 (출석부)', args: { type: 'button-pair', label: '출결 일괄 처리' } };
export const ButtonPairCustom = { name: 'button-pair — 보조 버튼 지정', args: { type: 'button-pair', label: '저장', secondary: { label: '자동출결', iconRight: 'check-circle' } } };
export const MessageInput = { name: 'message-input — 메시지 입력', args: { type: 'message-input' } };
export const MessageInputSafe = { name: 'message-input · safe — 홈 표시줄 여백', args: { type: 'message-input', safe: true } };
export const MessageBlock = { name: 'message-block — 차단 안내', args: { type: 'message-block' } };
export const Empty = { name: 'empty — 빈 바닥', args: { type: 'empty' } };
export const Disabled = { name: 'button · disabled', args: { label: '저장하기', disabled: true } };
export const WithAttrs = { name: 'button · attrs', args: { label: '저장하기', attrs: { id: 'save', type: 'submit' } } };
