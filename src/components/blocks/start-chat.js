// StartChat — 3층 블록 (새 대화방 안내 start-chat 79:18831)
import { esc, cx } from '../../core/html.js';
import { Avatar, AvatarGroup } from '../primitives/avatar.js';

/**
 * 대화 시작 안내 — 1:1 이면 큰 아바타(56), 단체면 겹친 아바타(36) + "+N"
 * @param {string[]} [p.names] 상대 이름들 (1명 = 기본, 2명 이상 = 단체)
 * @param {string[]} [p.avatars] 아바타 에셋 (단체는 앞 3개만 표시)
 * @param {number} [p.more] 단체에서 "+N" (기본: 이름 수 - 표시한 아바타 수)
 */
export function StartChat({ names = ['홍길동'], avatars = ['avatar-05'], more, className = '' } = {}) {
  const team = names.length > 1;
  const shown = avatars.slice(0, team ? 3 : 1);
  const extra = more ?? Math.max(0, names.length - shown.length);
  const who = team
    ? AvatarGroup({ avatars: shown, size: 36, overlap: 8, more: extra })
    : Avatar({ src: shown[0], name: names[0], size: 56 });
  return `<div class="${cx('lxp-start-chat', team && 'is-team', className)}">
    ${who}
    <p><b class="${team ? 'lxp-ellipsis' : ''}">${esc(names.join(', '))}</b><span>님과 대화를 시작해 보세요.</span></p>
  </div>`;
}
