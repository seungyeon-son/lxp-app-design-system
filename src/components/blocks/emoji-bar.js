// EmojiBar — 3층 블록 (빠른 리액션 줄 — 메시지 길게 누르기 바텀시트 Message action bar)
import { esc, cx } from '../../core/html.js';
import { asset } from '../../core/assets.js';

const EMOJIS = [['heart', '하트'], ['check', '확인'], ['thumbsup', '좋아요'], ['eyes', '봤어요'], ['grin', '웃음'], ['cry', '슬픔']];

/**
 * 이모지 6개를 가로로 고르게 나열 (28px Apple 이모지 이미지, Figma 와 같은 그림)
 * @param {[string,string][]} [p.emojis] [에셋 이름(emoji-…의 뒤), 라벨]
 */
export function EmojiBar({ emojis = EMOJIS, className = '' } = {}) {
  return `<div class="${cx('lxp-emoji-bar', className)}">
    ${emojis.map(([n, label]) => `<button type="button" class="lxp-emoji-bar__item" aria-label="${esc(label)}" data-emoji="${esc(n)}"><img src="${asset(`emoji-${n}`)}" width="28" height="28" alt=""></button>`).join('')}
  </div>`;
}
