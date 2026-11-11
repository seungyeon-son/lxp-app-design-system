# UBION LXP 앱 디자인 시스템 (코드)

Figma **[-UBION-4.5 LXP App 디자인 시스템](https://www.figma.com/design/E5xzHTfMeooeU4BXCykmiA)** 의
변수(컬러·타이포·간격·반경·그림자)와 `Native App - 컴포넌트 정리` 페이지의 컴포넌트를 코드로 옮긴 저장소입니다.
새 시안 작업과 아이디에이션에서 **함수 호출로 360×780 모바일 화면을 빠르게 조립**하는 것이 목적입니다.

- 의존성 없음 (Node 18+ 로 빌드만)
- 모든 컴포넌트 = HTML 문자열을 반환하는 순수 함수 → 정적 HTML, Claude 아티팩트, React 어디서나 사용
- 단일 소스: `tokens/tokens.json` (Figma 변수명 그대로)

## 빠른 시작

```bash
npm run build      # tokens.json → CSS 변수, 에셋 인라인, dist/ 생성
npm run dev        # 빌드 + http://localhost:4173 (문서/쇼케이스)
```

```html
<link rel="stylesheet" href="dist/lxp.css">
<script src="dist/lxp.js"></script>
<div id="app"></div>
<script>
  const { Screen, Header, WeekPicker, ModuleItem, TabBar } = LXP;
  app.innerHTML = Screen({
    bg: 'sky',
    header: Header({ variant: 'home' }),
    body: [WeekPicker({ selected: 2 }), ModuleItem({ title: '학습이론 2', dday: 3 })],
    bottom: TabBar({ active: 'home' }),
  });
</script>
```

ESM으로 쓸 때: `import { Screen, Header } from './src/index.js'` (빌드 후 에셋이 data URI로 포함됨).

새 시안은 `templates/mockups/_starter.html` 을 복사해서 시작하거나, `templates/screens.js` 의 화면 함수를 복사해 고치세요(자세한 규칙은 아래 "시안 만들기").

## 구조

```
tokens/tokens.json         단일 소스 (primitive → semantic 참조)
src/styles/tokens.css      ← 빌드 생성
src/styles/base.css        폰트(@font-face), :where() 리셋, Screen 프레임
src/core/                  esc/cx/slot 유틸, Icon/asset 로더
src/components/            컴포넌트 하나 = 파일 하나(.js + .css), 계층별 폴더 (docs/architecture.md)
  primitives/              2층 요소  Button · Chip · Badge · Avatar · Checkbox · Input · Toast · Ratio · SwipeAction …
  blocks/                  3층 블록  ModuleItem · MemberRow · Popup · ToggleGroup · StatGrid · Tabs …
  sections/                4층 영역  Header · TabBar · Footer · Section · DeadlineCarousel
  layout/                  틀        Screen · Stack · Grid · Surface
src/assets/                Figma 원본 SVG/PNG, Pretendard Variable
templates/                 screens.js(홈·내강의실·메시지·채팅·출석부), blank.html
templates/mockups/         팀 시안 보관소 (아티팩트 게시용 조각, _starter.html 이 틀)
docs/index.html            쇼케이스 (아티팩트 게시용 조각)
docs/architecture.md       컴포넌트 계층 구조와 규칙
docs/promotion-rules.md    새 UI → 정식 컴포넌트 승격 규칙 + 후보 장부
CLAUDE.md                  Claude 작업 규칙 (저장소를 열면 자동 적용)
scripts/build.mjs          빌드 (컴포넌트 파일 자동 탐색, import 관계로 순서 결정, 문서 빠짐 경고)
scripts/test.mjs           스냅샷 테스트 (npm test)
tests/snapshots.json       HTML 출력 기준
dist/                      lxp.css · lxp.js · fonts/ · index.html · tokens.json
```

## 토큰 네이밍

| Figma | CSS |
|---|---|
| `bg/hierarchy/primary` | `--bg-hierarchy-primary` |
| `bg/coursmos/primary-30%` | `--bg-coursmos-primary-30` |
| `nutral/gray20` (오타) | `--neutral-gray20` |
| `sementic/info45` (오타) | `--semantic-info45` |
| `Lable/14M` | `--font-label-14m` · `.t-label-14m` |
| `spac20` / `radiXsm-8` / `shadow-md` | `--spac-20` / `--radi-xsm` / `--shadow-md` |

역할 접두사: `bg` 배경 · `tx` 텍스트 · `fg` 아이콘/전경 · `bo` 보더 · `ut` 유틸리티(모듈·학교·그래프 색).
위계 접미사: primary → secondary → tertiary → quaternary → quinary → senary (진한 → 연한).

## 컴포넌트 ↔ Figma

계층은 아래에서 위로 쌓입니다. 위 층은 아래 층을 **호출해서** 만들고, 같은 모양을 다시 그리지 않습니다([docs/architecture.md](docs/architecture.md)).

### 틀 (배치만, 모양 없음)

| 함수 | Figma 노드 | 주요 props |
|---|---|---|
| `Screen` | — | `header, body, bottom, overlay, toast, bg('default'\|'white'\|'sky')` |
| `Stack` / `Grid` | — | `children, gap, pad, direction('column'\|'row'), align, justify` / `cols, colWidth, gap, justify` |
| `Surface` | — | `tone('white'\|'subtle'), fill` + Stack 인자 |
| `StatusBar` / `Dim` | 24:13152 | `Screen` 이 StatusBar 를 자동으로 넣음 · `Dim({ content, align })` |

### 4층 영역

| 함수 | Figma 노드 | 주요 props |
|---|---|---|
| `Header` | 5:12707 | `variant('home'\|'class'\|'class_list'\|'message'\|'message-open'\|'more'), title, actions, menu` |
| `AppHeader` | 24:13004 | `type('default'\|'popup_pull'\|'page'\|'page_chat'\|'photo-viewer'), title, subtitle, right, titleIcon` |
| `TabBar` | 5:12712 | `active, badges, newDots` |
| `Footer` | 37:14876 · 7062:38459 | `type('empty'\|'button'\|'count-button'\|'button-pair'\|'message-input'\|'message-block'), label, count, prefix, unit, secondary, attrs, disabled` |
| `Section` | 홈 '이번 주 학습' | `title, count, aside, children, gap, pad` |
| `DeadlineCarousel` | 20:10530 | `cards[]` (DeadlineCard 3장) |

### 3층 블록

| 함수 | Figma 노드 | 주요 props |
|---|---|---|
| `MessageInput` / `Tag` | 86:18467 · 63:11157 | `placeholder, value` / `label, size, avatar, closable` |
| `ChipTabs` / `SegmentedControl` / `LineTabs` | 5:12886 / 37:15014 / 85:21691 | `items, active` |
| `CourseCard` | 5:12819 | `layout('grid'\|'list'), color('blue'\|'yellow'\|'orange'\|'green'\|'purple'), title, professor` |
| `DeadlineCard` | 20:10530 | `label, remain, title, course, module` |
| `ModuleItem` | 21:10764 | `title, course, dday, module` (dday ≤ 3 → 파란 칩) |
| `WeekPicker` | 24:12363 | `days, selected` |
| `MessageItem` | 19:8837 | `option('dm'\|'group'), state('enabled'\|'focused'\|'update'\|'block'), swipe('left'\|'right')` |
| `ChatMessage` / `ChatDate` | 80:20270 | `name, time, read, text, reactions` / `label` |
| `Popup` / `BottomSheet` / `Dropdown` | 80:22498 · 37:14852 | Popup `actions[{label,tone}]` · Dropdown `items[{icon,label,value,checked}]` |
| `DateStrip` | 7062:38201 † | `items[{label,date}], selected` |
| `InfoBar` | 7062:38223 † | `label, chips[{label,variant('box'\|'pill')}], action{label,icon}` |
| `StatGrid` | 7062:38229 † | `items[{label,count,icon,value}], linked, footer` (0이면 비활성) |
| `ToggleGroup` | 7062:38277 † | `items[{value,label,icon,iconOff,tone}], value, overflow{items,open}, label, attrs` |
| `MemberRow` | 7062:38271 † | `name, sub, chevron, right, avatar, attrs` |

### 2층 요소

| 함수 | Figma 노드 | 주요 props |
|---|---|---|
| `Button` / `IconButton` | btn-base-state | `variant(+'outline-primary'), size('xl'\|'lg'\|'md'\|'sm'\|'xs'), tone('danger'\|'primary'), icon, iconRight, block, attrs` / `icon, size(16\|24\|36\|40), active, round, attrs` |
| `Input` | 86:18467 | `state('enabled'\|'focused'\|'disabled'), validation('normal'\|'filled'\|'invalid'), value` |
| `Avatar` / `AvatarGroup` | 72:11136 | `src('avatar-02'…), size(24–48), dimmed` |
| `Chip` / `Badge` | chip/times · new | `tone('info'\|'neutral'\|'posi'\|'nega'\|'warn'\|'label')` / `count, size` |
| `Pill` | chip/tag2-base · 7062:38227 † | `label` (회색 둥근 태그 '보강') |
| `Toast` | 37:14852 | `label, icon` — 화면에 띄울 때는 `Screen({ toast })` |
| `Reaction` | 80:20270 | `emoji, icon, count, selected, add` |
| `Checkbox` | 7062:38718 † | `label, checked, count, id` |
| `Ratio` | 7062:38718 † | `label, value, total` (처리 현황 3/40) |
| `SwipeAction` | 19:8837 | `label, icon, tone('neutral'\|'strong'\|'danger'\|'info')` |

† 출처는 컴포넌트 페이지가 아니라 **4.5 LXP App 작업장** 파일(`ZRoFjuXczoq30fVbJMNsVP`)의 스마트 출석부 확정안(7054:14428)입니다. 화면 조립 예시: `LXP_SCREENS.rollBookEntry()` · `rollBookChecking()` · `rollBook({ statuses, onlyTodo, menu })`.

## Figma와 다른 점 (의도적 근사)

- 모바일 전용이라 hover/pressed 색(`b6%-hovered`, `w1%`), 웹 LNB 색(`ut/module/lnb`), 헤드 56·40·32px, 캡션 10px은 두지 않습니다.
- 그림자는 x·y 오프셋 0, spread 없이 blur와 농도만 다른 단계입니다: `xsm 4` · `sm 8` · `card 10` · `md 12` · `lg 20` · `xl 32`(px). Figma의 2xl/3xl(데스크톱 모달용)은 뺐습니다.
- `LineTabs`, `ChatDate`, `BottomSheet`, 홈 섹션 카운트 배지, 홈 상단 그라디언트는 화면 캡처 + 토큰으로 구성했습니다.
- 카드 썸네일 패턴은 Figma 렌더(1x)를 잘라 쓴 PNG입니다. 고해상도가 필요하면 Figma에서 `thumb/lxp_solid/*` 를 2x로 내보내 `src/assets/images/thumb-*.png` 를 교체하세요.
- Figma의 이모지 리액션·기본 아바타 레이어는 gear 플레이스홀더로만 내보내져, 문자 이모지(👍)와 이니셜 플레이스홀더로 대체했습니다.
- 홈의 `module/report`(초록) 등 일부 모듈 아이콘은 아직 내려받지 않았습니다(현재 `module-vod`, `module-url`).

## 시안 만들기

- Claude에게 맡길 때: 저장소를 열면 `CLAUDE.md` 를 자동으로 따릅니다. "출석부 시안 그려줘"처럼 말하면 됩니다.
- 시안은 `templates/mockups/<이름>.html` 에 모읍니다. 틀은 `templates/mockups/_starter.html`, 규칙은 [`templates/README.md`](templates/README.md).
- 로컬 확인: `npm run dev` → `http://localhost:4173/mockups/<이름>.html`

## 확장하기

새 컴포넌트를 **언제** 올릴지는 [`docs/promotion-rules.md`](docs/promotion-rules.md) 를 먼저 보세요(승격 조건, 체크리스트, 후보 장부).

1. 토큰 수정: `tokens/tokens.json` → `npm run build`
2. 컴포넌트 추가: `src/components/foo.js|css` 작성 → `src/index.js` export 추가 → `scripts/build.mjs` 의 `cssOrder`/`jsOrder` 에 추가
3. 아이콘 추가: SVG를 `src/assets/icons/` 에 넣고 빌드 → `Icon('파일명')`
