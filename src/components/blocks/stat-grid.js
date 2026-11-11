// StatGrid — 3층 블록
// 출처: Figma 4.5 LXP App 작업장(ZRoFjuXczoq30fVbJMNsVP) › 확정안 7054:14428 (스마트 출석부)
import { esc, cx, slot, htmlAttrs } from '../../core/html.js';
import { Icon } from '../../core/assets.js';

/**
 * 상태별 개수 줄 (SessionStrip 7062:38229 — 출석 현황 & 미처리)
 * 아이콘+라벨 / 숫자를 가로로 균등 배치. 숫자가 0이면 누를 수 없고, linked 면 0이 아닌 칸에 › 를 붙입니다.
 * @param {{label:string,count:number|string,icon?:string,value?:string}[]} [p.items]
 * @param {boolean} [p.linked] 칸을 눌러 목록으로 이동할 수 있음(Active 상태)
 * @param {string} [p.footer] 아래 구분선 줄 슬롯 (예: 처리 현황 + Checkbox)
 * 각 칸: data-value, data-count
 */
export function StatGrid({
  items = [
    { label: '출석', count: 0, icon: 'status-present', value: 'present' },
    { label: '결석', count: 0, icon: 'status-absent', value: 'absent' },
    { label: '지각', count: 0, icon: 'status-late', value: 'late' },
    { label: '조퇴', count: 0, icon: 'status-early', value: 'early' },
    { label: '지각조퇴', count: 0, icon: 'status-lateearly-muted', value: 'lateearly' },
  ],
  linked = false, footer, className = '',
} = {}) {
  return `<section class="${cx('lxp-stat-grid', className)}">
    <div class="lxp-stat-grid__row">
      ${items.map((it) => {
        const zero = Number(it.count) === 0;
        return `<button type="button" class="${cx('lxp-stat-grid__item', it.label.length > 3 && 'is-long')}"${zero ? ' disabled' : ''}${htmlAttrs({ 'data-value': it.value, 'data-count': it.count })} aria-label="${esc(it.label)} ${esc(it.count)}">
          <span class="lxp-stat-grid__label">${it.icon ? Icon(it.icon, { size: 18 }) : ''}${esc(it.label)}</span>
          <span class="lxp-stat-grid__count lxp-num">${esc(it.count)}${linked && !zero ? Icon('chevron-right-14', { size: 14 }) : ''}</span>
        </button>`;
      }).join('')}
    </div>
    ${footer ? `<div class="lxp-stat-grid__footer">${slot(footer)}</div>` : ''}
  </section>`;
}
