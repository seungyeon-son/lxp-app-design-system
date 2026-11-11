// ImageTile — 2층 요소 (정사각 사진 칸 — 채팅방 설정 사진/동영상 미리보기)
import { esc, cx } from '../../core/html.js';

/**
 * 정사각 사진 칸 (이미지가 없으면 회색 칸)
 * @param {string} [p.src] 이미지 URL
 */
export function ImageTile({ src, className = '' } = {}) {
  return `<span class="${cx('lxp-image-tile', className)}"${src ? ` style="background-image:url('${esc(src)}')"` : ''}></span>`;
}
