// ShareLinkCard · ShareFileCard — 3층 블록 (채팅방 기록: 링크 chat_share_link 89:23365 · 문서 chat_share_docs 87:23224)
import { esc, cx } from '../../core/html.js';
import { Icon } from '../../core/assets.js';
import { IconButton } from '../primitives/button.js';

/**
 * 링크 카드 (156×180) — 위 미리보기 / 제목 · 사이트명 / 주소
 * @param {string} p.title @param {string} [p.site] @param {string} [p.url]
 * @param {string} [p.image] 미리보기 이미지 URL (없으면 회색 칸)
 */
export function ShareLinkCard({ title = '[공유]유비온_발표자료 입니다', site = '유비온_발표자료', url = 'www.ubion.co.kr', image, className = '' } = {}) {
  return `<article class="${cx('lxp-share-link', className)}">
    <div class="lxp-share-link__thumb"${image ? ` style="background-image:url('${esc(image)}')"` : ''}></div>
    <div class="lxp-share-link__body">
      <div><p class="lxp-share-link__title lxp-ellipsis">${esc(title)}</p><p class="lxp-share-link__sub lxp-ellipsis">${esc(site)}</p></div>
      <p class="lxp-share-link__sub lxp-ellipsis">${esc(url)}</p>
    </div>
  </article>`;
}

/**
 * 문서 카드 — 파일 아이콘 40 · 이름 / 크기 · 내려받기
 * 크기 글자색: Figma tx/hierarchy/quinary → 대비 규칙에 따라 quaternary
 * @param {string} p.name @param {string} [p.size] @param {string} [p.icon] 파일 아이콘 에셋 (file-ppt-40 …)
 */
export function ShareFileCard({ name = '문서명 문서명 문서명 문서명 문서명 문서명', size = '16.7MB', icon = 'file-ppt-40', className = '' } = {}) {
  return `<article class="${cx('lxp-share-file', className)}">
    ${Icon(icon, { size: 40 })}
    <div class="lxp-share-file__text"><p class="lxp-ellipsis">${esc(name)}</p><span>${esc(size)}</span></div>
    ${IconButton({ icon: 'download-20-blue', size: 40, label: '내려받기' })}
  </article>`;
}
