// Avatar — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { Avatar } from '../../index.js';

export default {
  component: Avatar,
  figma: '72:11136',
  args: { src: 'avatar-05' },
};

export const Default = {};
export const Size24 = { name: 'size 24', args: { size: 24 } };
export const Size28 = { name: 'size 28', args: { size: 28 } };
export const Size32 = { name: 'size 32', args: { size: 32 } };
export const Size36 = { name: 'size 36', args: { size: 36 } };
export const Size40 = { name: 'size 40', args: { size: 40 } };
export const Placeholder = { name: '이미지 없음 — 이름 첫 글자', args: { src: undefined, name: '홍길동' } };
export const Dimmed = { name: 'dimmed — 차단 · 나간 사용자', args: { dimmed: true } };
export const AllSizes = {
  name: '모든 크기',
  render: () => [24, 28, 32, 36, 40, 48].map((size) => Avatar({ src: 'avatar-05', size })).join(' '),
};
export const AllImages = {
  name: '샘플 이미지 6종 (avatar-01 ~ 06)',
  render: () => ['avatar-01', 'avatar-02', 'avatar-03', 'avatar-04', 'avatar-05', 'avatar-06'].map((src) => Avatar({ src })).join(' '),
};
