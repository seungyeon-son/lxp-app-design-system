// Tag — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)
import { Tag } from '../../index.js';

export default {
  component: Tag,
  figma: '63:11157',
  parameters: { layout: 'centered' },
  args: { label: '김연아' },
};

export const Avatar = { name: '아바타 (기본) · md 40' };
export const Large = { name: 'size lg (44)', args: { size: 'lg' } };
export const NotClosable = { name: '닫기 없음', args: { closable: false } };
export const IconType = { name: '아이콘형 (avatar false)', args: { avatar: false, label: '물리학실험실 전체', icon: 'plus' } };
export const TextOnly = { name: '글자만 (avatar false · icon null)', args: { avatar: false, icon: null, label: '물리학실험실 전체' } };
export const Row = { name: '받는 사람 줄', render: () => [Tag({ avatar: false, icon: null, label: '물리학실험실 전체' }), Tag({ label: '강동원', avatar: 'avatar-04' }), Tag({ label: '김연아' })].join(' ') };
