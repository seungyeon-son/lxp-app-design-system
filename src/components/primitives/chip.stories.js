// Chip — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { Chip } from '../../index.js';

export default {
  component: Chip,
  figma: 'chip/times',
  args: { label: '3시간 남았어요' },
};

export const Info = { name: 'info (기본) — 진행 중·강조' };
export const Neutral = { name: 'neutral — 예정·비활성', args: { tone: 'neutral', label: 'D-4' } };
export const Posi = { name: 'posi — 완료', args: { tone: 'posi', label: '제출 완료' } };
export const Nega = { name: 'nega — 실패·위험', args: { tone: 'nega', label: '미제출' } };
export const Warn = { name: 'warn — 주의', args: { tone: 'warn', label: '마감 임박' } };
export const Label = { name: 'label — 속성 표시 (출석부 1교시)', args: { tone: 'label', label: '1교시' } };
export const AllTones = {
  name: '모든 tone',
  render: () => ['info', 'neutral', 'posi', 'nega', 'warn', 'label'].map((tone) => Chip({ tone, label: tone })).join(' '),
};
