// StatusBar · Screen · Dim — 틀
import { cx, slot } from '../../core/html.js';
import { asset } from '../../core/assets.js';

/** iOS 상태바 (Figma 24:13152) */
export function StatusBar({ className = '' } = {}) {
  return `<div class="${cx('lxp-statusbar', className)}" aria-hidden="true">
    <img class="lxp-statusbar__left" src="${asset('statusbar-left')}" alt="">
    <img class="lxp-statusbar__right" src="${asset('statusbar-right')}" alt="">
  </div>`;
}

/**
 * 360×780 모바일 화면 조립 — 시안/아이디에이션 진입점
 * @param {object} p
 * @param {string} [p.header]  Header()/AppHeader() 결과
 * @param {string|string[]} [p.body] 스크롤 영역 내용
 * @param {string} [p.bottom]  TabBar()/Footer() 결과 (하단 고정)
 * @param {string} [p.overlay] Dim+Popup 등 최상단 레이어 (화면 전체를 덮어 아래 터치를 막음)
 * @param {string} [p.toast]   Toast() 결과. 하단(bottom) 바로 위 가운데에 떠 있고 스크롤·터치에 영향 없음
 * @param {'default'|'white'|'sky'} [p.bg] sky=홈 블루 그라디언트
 * @param {boolean} [p.statusBar]
 */
export function Screen({ header = '', body = '', bottom = '', overlay = '', toast = '', bg = 'default', statusBar = true, className = '' } = {}) {
  return `<div class="${cx('lxp', 'lxp-screen', bg !== 'default' && `lxp-screen--${bg}`, className)}">
    ${statusBar ? StatusBar() : ''}
    ${slot(header)}
    <main class="lxp-screen__body">${slot(body)}</main>
    ${toast ? `<div class="lxp-screen__toast">${slot(toast)}</div>` : ''}
    ${slot(bottom)}
    ${overlay ? `<div class="lxp-screen__overlay">${slot(overlay)}</div>` : ''}
  </div>`;
}

/** 딤 + 가운데 정렬 컨텐츠 */
export function Dim({ content = '', align = 'center' } = {}) {
  return `<div class="lxp-dim"></div><div class="${cx('lxp-dim__content', `is-${align}`)}">${slot(content)}</div>`;
}
