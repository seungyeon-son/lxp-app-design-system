// Stack · Grid · Surface — 틀 (배치만 담당, 모양 없음)
// 화면·블록에서 style="display:flex;gap…;padding…" 를 쓰는 대신 이 함수로 배치합니다.
// 간격 값이 토큰 단계(2·4·6·8·12·16·20·24·28·32)에 있으면 var(--spac-N) 으로, 아니면 px 로 씁니다.
import { cx, slot } from '../../core/html.js';

const SCALE = [2, 4, 6, 8, 12, 16, 20, 24, 28, 32];
const len = (n) => (n === 0 ? '0' : SCALE.includes(n) ? `var(--spac-${n})` : `${n}px`);
/** 숫자 하나 | [세로, 가로] | [위, 오른쪽, 아래, 왼쪽] → CSS 값 */
const box = (v) => (v == null ? null : (Array.isArray(v) ? v : [v]).map(len).join(' '));
const ALIGN = { start: 'flex-start', center: 'center', end: 'flex-end', stretch: 'stretch', between: 'space-between' };

function frame({ tag = 'div', base, mods = [], vars = {}, children, className = '' }) {
  const style = Object.entries(vars).filter(([, v]) => v != null).map(([k, v]) => `--lxp-${k}:${v}`).join(';');
  return `<${tag} class="${cx(base, ...mods, className)}"${style ? ` style="${style}"` : ''}>${slot(children)}</${tag}>`;
}

/**
 * 쌓기 — 세로(기본) 또는 가로로 나열하고 간격·여백을 줍니다.
 * @param {string|string[]} p.children
 * @param {number|number[]} [p.gap] 아이 사이 간격(px). [세로, 가로] 도 가능
 * @param {number|number[]} [p.pad] 안쪽 여백(px). 숫자 | [세로, 가로] | [위, 오른쪽, 아래, 왼쪽]
 * @param {'column'|'row'} [p.direction]
 * @param {'start'|'center'|'end'|'stretch'} [p.align] 교차축 정렬
 * @param {'start'|'center'|'end'|'between'} [p.justify] 주축 정렬
 * @param {'div'|'section'|'ul'} [p.tag]
 */
export function Stack({ children = '', gap, pad, direction = 'column', align, justify, tag, className = '' } = {}) {
  return frame({
    tag, base: 'lxp-stack', mods: [direction === 'row' && 'lxp-stack--row'], className, children,
    vars: { gap: box(gap), pad: box(pad), align: ALIGN[align], justify: ALIGN[justify] },
  });
}

/**
 * 격자 — 같은 폭의 칸을 열 단위로 나열합니다 (예: 강의 카드 2열).
 * @param {number} p.cols 열 수
 * @param {number} [p.colWidth] 칸 폭(px). 없으면 남는 폭을 똑같이 나눔
 * @param {number|number[]} [p.gap] [세로, 가로]
 * @param {'start'|'center'|'end'} [p.justify] 격자 전체의 가로 정렬
 */
export function Grid({ children = '', cols = 2, colWidth, gap, pad, justify, className = '' } = {}) {
  return frame({
    base: 'lxp-grid', className, children,
    vars: { cols: `repeat(${cols}, ${colWidth ? `${colWidth}px` : 'minmax(0, 1fr)'})`, gap: box(gap), pad: box(pad), justify: ALIGN[justify] },
  });
}

/**
 * 바탕 구역 — 흰색/연회색 바탕을 깔고 Stack 처럼 쌓습니다.
 * @param {'white'|'subtle'} [p.tone] white=흰 바탕, subtle=연회색 바탕(--bg-hierarchy-primary-subtle)
 * @param {boolean} [p.fill] 스크롤 영역 높이를 꽉 채움 (화면 전체 바탕용)
 * 나머지 인자(gap, pad, direction, align, justify)는 Stack 과 같습니다.
 */
export function Surface({ children = '', tone = 'white', fill = false, gap, pad, direction = 'column', align, justify, tag, className = '' } = {}) {
  return frame({
    tag, base: 'lxp-stack', className, children,
    mods: [direction === 'row' && 'lxp-stack--row', `lxp-surface--${tone}`, fill && 'lxp-surface--fill'],
    vars: { gap: box(gap), pad: box(pad), align: ALIGN[align], justify: ALIGN[justify] },
  });
}
