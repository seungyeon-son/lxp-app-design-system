// Flag — 2층 요소 (국기 원형 아이콘 icon/flag/*_02 — 메시지 번역 언어 선택)
import { cx } from '../../core/html.js';
import { asset } from '../../core/assets.js';

/**
 * 국기 (원형 24). 한국·미국 국기는 Figma 처럼 얇은 테두리(bo/neutral/b20% → 같은 회색 --bo-hierarchy-quaternary)
 * @param {'kr'|'us'|'jp'|'cn'} p.code
 * @param {number} [p.size]
 */
export function Flag({ code = 'kr', size = 24, className = '' } = {}) {
  return `<span class="${cx('lxp-flag', (code === 'kr' || code === 'us') && 'has-ring', className)}" style="width:${size}px;height:${size}px"><img src="${asset(`flag-${code}`)}" width="${size}" height="${size}" alt=""></span>`;
}
