// MediaViewer — 3층 블록 (사진·동영상 크게 보기 — 대화방 기록 뷰어 80:24028)
import { esc, cx } from '../../core/html.js';
import { asset } from '../../core/assets.js';
import { IconButton } from '../primitives/button.js';

/**
 * 미디어 뷰어 — 회색 화면(이미지 또는 동영상 재생 버튼) + 아래 내려받기 줄
 * @param {'video'|'image'} [p.type] video = 가운데 재생 버튼
 * @param {string} [p.src] 이미지 URL (없으면 회색 화면)
 */
export function MediaViewer({ type = 'video', src, className = '' } = {}) {
  return `<div class="${cx('lxp-media-viewer', className)}">
    <div class="lxp-media-viewer__stage"${src ? ` style="background-image:url('${esc(src)}')"` : ''}>
      ${type === 'video' ? `<button type="button" class="lxp-media-viewer__play" aria-label="재생"><img src="${asset('play-68')}" width="68" height="68" alt=""></button>` : ''}
    </div>
    <div class="lxp-media-viewer__bar">${IconButton({ icon: 'download-18-white', size: 36, tone: 'primary', label: '내려받기' })}</div>
  </div>`;
}
