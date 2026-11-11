// 아이콘·이미지 에셋 로더.
// 빌드 시 assets.generated.js 에 data URI 맵이 채워져 dist/lxp.js 하나로 자립 동작합니다.
// 소스(ESM)로 직접 쓸 때 맵이 비어 있으면 assets/ 폴더의 상대경로를 사용합니다.
import { ASSETS } from './assets.generated.js';
import { cx, esc } from './html.js';

let BASE = 'src/assets/';
/** ESM 직접 사용 시 에셋 폴더 경로 지정 */
export function setAssetBase(path) { BASE = path.endsWith('/') ? path : path + '/'; }

/** 에셋 URL. name 은 파일명(확장자 제외). 예: 'tab-home', 'avatar-02' */
export function asset(name) {
  if (ASSETS[name]) return ASSETS[name];
  const isImg = /^(avatar|thumb|emoji)-/.test(name);
  return BASE + (isImg ? 'images/' : 'icons/') + name + (isImg ? '.png' : '.svg');
}

/** 등록된 아이콘 이름 목록 (빌드 결과 기준) */
export function iconNames() {
  return Object.keys(ASSETS).filter((k) => !/^(avatar|thumb)-/.test(k));
}

/**
 * 아이콘. Figma 원본 SVG를 그대로 사용합니다(색 포함).
 * color 를 주면 CSS mask 로 단색 틴트 (아이디에이션용).
 */
export function Icon(name, { size = 24, color, className = '', label = '' } = {}) {
  const src = asset(name);
  if (color) {
    return `<span class="${cx('lxp-icon', 'lxp-icon--tint', className)}" role="${label ? 'img' : 'presentation'}"${label ? ` aria-label="${esc(label)}"` : ' aria-hidden="true"'} style="width:${size}px;height:${size}px;--lxp-icon-src:url('${src}');color:${color}"></span>`;
  }
  return `<img class="${cx('lxp-icon', className)}" src="${src}" width="${size}" height="${size}" alt="${esc(label)}"${label ? '' : ' aria-hidden="true"'}>`;
}
