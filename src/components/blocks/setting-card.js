// SettingCard — 3층 블록 (채팅방 설정 카드 chat_setting 83:17411 — 사진/동영상 · 문서 · 링크 · 공지 · 대화 멤버 · 멤버 초대)
import { esc, cx, slot } from '../../core/html.js';
import { Icon } from '../../core/assets.js';
import { Button } from '../primitives/button.js';

/**
 * 채팅방 설정 카드 — 제목 줄(아이콘 · 제목 · 개수 / 오른쪽) + 내용
 * 개수 글자색: Figma tx/hierarchy/quinary → 대비 규칙에 따라 quaternary
 * @param {string} p.title
 * @param {string} [p.icon] 24px 제목 아이콘 (file-img-24 · file-info-24 · link-24 · pin-24-blue)
 * @param {number|string} [p.count] 제목 옆 개수 ('대화 멤버 5')
 * @param {string|false} [p.more] 오른쪽 '모두 보기 ›' 라벨. false 면 없음
 * @param {string} [p.aside] 오른쪽 슬롯 (more 대신, 예: IconButton)
 * @param {'lg'|'md'} [p.heading] lg = 16SB(기본), md = 15B · 높이 36(멤버 초대 카드)
 * @param {string|string[]} [p.children] 내용 (Grid(ImageTile …), FriendRow 목록 …)
 * @param {boolean} [p.list] 내용이 사람 목록일 때 — 아래 여백 8 (Figma member · member_add)
 */
export function SettingCard({ title = '사진/동영상', icon, count, more = '모두 보기', aside = '', heading = 'lg', children = '', list = false, className = '' } = {}) {
  const right = aside || (more ? Button({ label: more, variant: 'ghost', size: '2xs', tone: 'primary', iconRight: 'chevron-right-14-blue' }) : '');
  return `<section class="${cx('lxp-setting-card', children && 'has-body', list && 'is-list', className)}">
    <div class="${cx('lxp-setting-card__head', `is-${heading}`)}">
      <p class="lxp-setting-card__title">${icon ? Icon(icon, { size: 24 }) : ''}<span>${esc(title)}</span>${count != null ? `<em class="lxp-num">${esc(count)}</em>` : ''}</p>
      ${right}
    </div>
    ${children ? `<div class="lxp-setting-card__body">${slot(children)}</div>` : ''}
  </section>`;
}
