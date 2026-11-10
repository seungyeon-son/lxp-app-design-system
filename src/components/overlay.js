// 오버레이 & 화면 조립: Popup · BottomSheet · Screen
import { esc, cx, slot } from '../core/html.js';
import { StatusBar } from './navigation.js';

/**
 * 팝업 다이얼로그 (popup 80:22498)
 * @param {{label:string,tone?:'default'|'danger'|'primary'}[]} [p.actions]
 * @param {string} [p.body] 본문 텍스트 (HTML 원하면 content 사용)
 */
export function Popup({ title = '메시지 삭제', body = '메시지를 모두에게서 삭제할까요?', content, actions = [{ label: '취소' }, { label: '삭제', tone: 'danger' }] } = {}) {
  return `<div class="lxp-popup" role="dialog" aria-label="${esc(title)}">
    <div class="lxp-popup__content">
      ${title ? `<p class="lxp-popup__title">${esc(title)}</p>` : ''}
      ${content ? `<div class="lxp-popup__body">${slot(content)}</div>` : body ? `<p class="lxp-popup__body">${esc(body)}</p>` : ''}
    </div>
    <div class="lxp-popup__actions">
      ${actions.map((a) => `<button class="${cx('lxp-popup__btn', a.tone && `is-${a.tone}`)}">${esc(a.label)}</button>`).join('')}
    </div>
  </div>`;
}

/**
 * 바텀시트 (bottom_sheet/* — 롱프레스 메뉴, 채팅 설정)
 * @param {{icon?:string,label:string,tone?:'danger'}[]} [p.items]
 */
export function BottomSheet({ title = '', items = [], content } = {}) {
  return `<div class="lxp-sheet" role="dialog">
    <i class="lxp-sheet__handle"></i>
    ${title ? `<p class="lxp-sheet__title">${esc(title)}</p>` : ''}
    ${content ? slot(content) : `<ul class="lxp-sheet__list">${items.map((it) => `<li class="${cx('lxp-sheet__item', it.tone && `is-${it.tone}`)}">${esc(it.label)}</li>`).join('')}</ul>`}
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
