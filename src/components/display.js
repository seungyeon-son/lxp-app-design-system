// 데이터 표시: Chip · Badge · Avatar · AvatarGroup · Tag · Toast · StatGrid · InfoBar · MemberRow
import { esc, cx, slot, htmlAttrs } from '../core/html.js';
import { Icon, asset } from '../core/assets.js';
import { IconButton } from './button.js';

/**
 * 칩 (chip/times — "3시간 남았어요", "D-3")
 * @param {'info'|'neutral'|'posi'|'nega'|'warn'} [p.tone]
 */
export function Chip({ label = '', tone = 'info', className = '' } = {}) {
  return `<span class="${cx('lxp-chip', `lxp-chip--${tone}`, className)}">${esc(label)}</span>`;
}

/**
 * 카운트 배지 (새 메시지 수 — 민트 배경)
 * @param {'md'|'sm'|'square'} [p.size] md=22px/12SB, sm=18px/11SB, square=radius4/13M
 */
export function Badge({ count = 1, size = 'md', className = '' } = {}) {
  return `<span class="${cx('lxp-badge', `lxp-badge--${size}`, className)}">${esc(count)}</span>`;
}

/**
 * 아바타 (Avata-base: 24/28/32/36/40/48)
 * @param {string} [p.src] 이미지 URL 또는 에셋명 (avatar-02~05). 없으면 이름 첫 글자 플레이스홀더
 * @param {string} [p.name] 플레이스홀더 이니셜용
 * @param {boolean} [p.dimmed] 차단/나간 사용자 (투명도 25%)
 */
export function Avatar({ src, name = '', size = 48, dimmed = false, alt = '', className = '' } = {}) {
  const box = `width:${size}px;height:${size}px`;
  if (!src) {
    return `<span class="${cx('lxp-avatar', 'is-empty', dimmed && 'is-dimmed', className)}" style="${box};font-size:${Math.round(size * 0.4)}px" aria-label="${esc(alt || name)}">${esc(name.slice(0, 1))}</span>`;
  }
  const url = /^avatar-/.test(src) ? asset(src) : src;
  return `<span class="${cx('lxp-avatar', dimmed && 'is-dimmed', className)}" style="${box}">
    <img src="${url}" alt="${esc(alt)}">
  </span>`;
}

/** 그룹 아바타 (아바타 + "+N" 원형, 겹침 -24px) */
export function AvatarGroup({ src = 'avatar-03', more = 5, size = 48 } = {}) {
  return `<span class="lxp-avatar-group" style="--size:${size}px">
    ${Avatar({ src, size })}<span class="lxp-avatar-group__more">+${esc(more)}</span>
  </span>`;
}

/**
 * 선택 태그 (con-base — 받는 사람 선택 칩)
 * @param {'md'|'lg'} [p.size] md=40, lg=44
 * @param {string|false} [p.avatar] 아바타 에셋/URL. false 면 아이콘형
 * @param {boolean} [p.closable]
 */
export function Tag({ label = 'label', size = 'md', avatar = 'avatar-03', icon = 'plus', closable = true } = {}) {
  const av = avatar ? Avatar({ src: avatar, size: size === 'lg' ? 40 : 36 }) : Icon(icon, { size: 18 });
  return `<span class="${cx('lxp-tag', `lxp-tag--${size}`, avatar ? 'has-avatar' : 'has-icon')}">
    ${av}<span>${esc(label)}</span>${closable ? IconButton({ icon: 'x-close-14', size: 24, label: '삭제' }) : ''}
  </span>`;
}

/** 토스트 (Notice_guide_secondary — "저장되었습니다") */
export function Toast({ label = '저장되었습니다', icon = 'check' } = {}) {
  return `<div class="lxp-toast" role="status">${icon ? Icon(icon, { size: 16 }) : ''}<span>${esc(label)}</span></div>`;
}

// ---------------------------------------------------------------------------
// 아래 3종 출처: Figma 4.5 LXP App 작업장(ZRoFjuXczoq30fVbJMNsVP) › 확정안 7054:14428 (스마트 출석부)

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

/**
 * 정보 줄 (SubRow 7062:38223 — "10-30 (금) 09:00 [1교시] (보강)  변경 ›")
 * @param {string} p.label 왼쪽 주 텍스트
 * @param {{label:string,variant?:'box'|'pill'}[]} [p.chips] box=연파랑 사각 칩(chip/times), pill=회색 둥근 태그(chip/tag2-base)
 * @param {{label:string,icon?:string,attrs?:object}|false} [p.action] 오른쪽 고스트 버튼
 */
export function InfoBar({
  label = '10-30 (금) 09:00',
  chips = [{ label: '1교시', variant: 'box' }, { label: '보강', variant: 'pill' }],
  action = { label: '변경', icon: 'chevron-right' },
  className = '',
} = {}) {
  return `<div class="${cx('lxp-info-bar', className)}">
    <div class="lxp-info-bar__main">
      <p class="lxp-num">${esc(label)}</p>
      ${chips.map((c) => `<span class="${cx('lxp-info-bar__chip', `is-${c.variant || 'box'}`)}">${esc(c.label)}</span>`).join('')}
    </div>
    ${action ? `<button type="button" class="lxp-info-bar__action"${htmlAttrs(action.attrs)}>${esc(action.label)}${action.icon ? Icon(action.icon, { size: 16 }) : ''}</button>` : ''}
  </div>`;
}

/**
 * 사람 행 (LearnerRows › Row 7062:38271) — 이름(15B, 5글자 넘으면 말줄임) + › / 보조 텍스트(학번) / 오른쪽 슬롯
 * @param {string} p.name @param {string} [p.sub] 이름 아래 보조 텍스트
 * @param {boolean} [p.chevron] 이름 옆 › (상세 보기)
 * @param {string} [p.right] 오른쪽 슬롯 (예: ToggleGroup)
 * @param {string} [p.avatar] 아바타 에셋/URL (Figma 출석부에는 없음, 다른 목록용 선택 옵션)
 * @param {Record<string,string|number|boolean>} [p.attrs] 행 요소 추가 속성
 */
export function MemberRow({ name = '홍길동', sub = '202080187', chevron = true, right = '', avatar, attrs, className = '' } = {}) {
  return `<div class="${cx('lxp-member-row', className)}"${htmlAttrs(attrs)}>
    ${avatar ? Avatar({ src: avatar, name, size: 36 }) : ''}
    <div class="lxp-member-row__who">
      <div class="lxp-member-row__name"><p>${esc(name)}</p>${chevron ? `<span class="lxp-member-row__chev" aria-hidden="true">${Icon('chevron-right-14', { size: 14 })}</span>` : ''}</div>
      ${sub ? `<span class="lxp-member-row__sub lxp-num">${esc(sub)}</span>` : ''}
    </div>
    ${right ? `<div class="lxp-member-row__right">${slot(right)}</div>` : ''}
  </div>`;
}
