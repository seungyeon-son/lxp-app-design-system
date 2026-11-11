# 컴포넌트 계층 구조

처음 코드화한 컴포넌트는 Figma 화면을 **덩어리째 잘라 낸 단위**에 가까웠습니다. 안쪽 버튼·칩·배지를 다시 손으로 그렸고,
화면은 인라인 스타일 `<div>` 로 이어 붙였습니다. 이 문서는 **작은 것을 조합해 큰 것을 만드는** 계층과 그 규칙,
그리고 그 구조로 옮긴 기록과 남은 작업을 정합니다.

> **진행 상황 (2026-11-11)** — A·B·C 완료, D 남음. 아래 §2 표의 "상태" 열 참고.

---

## 1. 다섯 계층

```
화면   templates/screens.js          rollBook, home …          ← 3·4층만 조합, 인라인 스타일 없음
  ↑
4 영역  sections                       Header · TabBar · Footer · Section · List
  ↑
3 블록  blocks                         ModuleItem · MemberRow · Popup · ToggleGroup · StatGrid …
  ↑
2 요소  primitives                     Button · IconButton · Chip · Badge · Avatar · Checkbox · Toast · Input
  ↑
1 기반  core · tokens                  Icon · 토큰(색·글꼴·간격·반경·그림자)
+ 틀    layout                         Screen · Stack · Surface   (어느 층에서나 배치용으로 사용)
```

| 계층 | 정의 | 안에 쓸 수 있는 것 | 예 |
|---|---|---|---|
| **1 기반** | 토큰, 아이콘 | — | `Icon('bell')`, `--radi-lg` |
| **2 요소** | 더 쪼갤 수 없는 조작·표시 단위. 하나의 의미 | 1층만 | `Button`, `Chip`, `Badge`, `Avatar` |
| **3 블록** | 요소 여러 개를 한 덩어리로 묶은 것. 혼자 의미가 있음 | 1·2층 (+ 같은 층 블록 중 더 작은 것) | `MemberRow` = `Avatar` + 텍스트 + 오른쪽 슬롯 |
| **4 영역** | 화면의 한 구역. 블록을 담고 배치함 | 1~3층 | `Footer` = `Button` 두 개, `Section` = 제목 + 블록 목록 |
| **틀** | 배치만 하고 모양이 없음(간격·방향·여백·바탕) | 무엇이든 담음 | `Stack({ gap: 8, pad: 16 })` |
| **화면** | 영역과 틀만으로 조립 | 2~4층 + 틀 | `rollBook()` |

### 규칙

1. **아래 층에 이미 있는 모양은 다시 그리지 않고 호출합니다.** 블록 안의 버튼은 `Button()`, 칩은 `Chip()`.
   모양이 조금 다르면 새로 그리지 말고 **아래 층 컴포넌트에 변형(variant)을 추가**합니다.
2. **위 층을 아래 층에서 쓰지 않습니다.** `Button` 안에 `Footer` 가 들어가는 일은 없습니다(빌드가 순환 import 를 막음).
3. **배치는 틀(`Stack`·`Surface`)로, 모양은 컴포넌트로.** 화면과 블록에 `style="display:flex;gap…"` 를 쓰지 않습니다.
4. **각 층은 자기 바깥 여백을 갖지 않습니다.** 간격은 담는 쪽(틀·영역)이 정합니다. 그래야 어디에 넣어도 같은 모양입니다.
5. **Figma 컴포넌트 하나 = 코드 함수 하나**를 기본으로 하되, Figma가 덩어리로 그린 것(예: SessionStrip)은
   코드에서 2층 요소로 쪼개 조합합니다.

---

## 2. 지금 상태 진단

### 2-1. 이미 조합으로 되어 있는 것 (유지)

`Header`·`AppHeader` → `IconButton` · `Footer` → `Button` · `MessageInput` → `IconButton` · `Tag` → `Avatar`+`IconButton` ·
`DeadlineCard`·`ModuleItem` → `Chip` · `MessageItem` → `Avatar`+`Badge`+`Button` · `ChatMessage` → `Avatar`+`Reaction` ·
`MemberRow` → `Avatar` · `ToggleGroup` → `Dropdown`

### 2-2. 안쪽을 손으로 그린 것 (고칠 대상)

| 컴포넌트 | 손으로 그린 부분 | 바꿀 방향 | 모양 변화 | 상태 |
|---|---|---|---|---|
| `Popup` | 하단 버튼 `lxp-popup__btn` | `Button({ variant: 'text', tone })` 변형 추가 후 호출 | 없어야 함 | **완료** — `Button({ variant: 'ghost', tone })` |
| `MessageItem` swipe | 액션 버튼 5개, 색을 `style=` 로 | 2층 `SwipeAction({ tone, icon, label })` | 없어야 함 | **완료** — `SwipeAction({ tone })` |
| `TabBar` | 숫자 배지 `lxp-tabbar__badge` | `Badge({ size: 'sm', tone })` | 확인 필요(빨강 배지 vs 민트 `Badge`) | D (남음) |
| `InfoBar` | box 칩, pill 칩, 오른쪽 '변경 ›' 버튼 | `Chip` 변형(`subtle`), `Tag` 계열 pill, `Button({ variant: 'ghost', iconRight })` | 확인 필요(칩 배경 단계가 `Chip` 과 다름) | D (남음) |
| `Input` | 지우기 버튼 | `IconButton({ size: 24 })` | 없어야 함 | **완료** — `IconButton({ size: 16 })` |
| `DateStrip` · `WeekPicker` | 날짜 칸을 각자 그림 | 2층 `DayCell({ size: 'sm'\|'lg' })` 하나로 | 확인 필요(크기·선택색이 다름) |
| 홈 섹션 제목 | 함수 없이 `.lxp-section-title` CSS만 | 4층 `Section({ title, count, aside, children })` | 없어야 함 | **완료** — `Section` |

### 2-3. 화면을 인라인 스타일로 이어 붙인 것 (고칠 대상)

`templates/screens.js` 에 인라인 `style=` 이 **15곳** 있습니다. 같은 패턴이 반복됩니다.

| 반복 패턴 | 횟수 | 바꿀 방향 |
|---|---|---|
| 세로로 쌓고 간격·여백 주기 (`flex-direction:column; gap; padding`) | 6 | `Stack({ gap, pad })` |
| 여백만 주기 / 오른쪽 정렬 | 3 | `Stack({ pad, align: 'end' })` |
| 흰 바탕·회색 바탕 구역 | 3 | `Surface({ tone: 'white'\|'subtle', pad })` |
| 2열 격자 (강의 카드) | 1 | `Stack({ grid: 2, gap })` |
| 글자색 직접 지정 (처리 현황 "3/40") | 2 | 2층 요소 `Ratio({ label, value, total })` |

**완료** — `screens.js` 의 인라인 스타일 0곳. `Stack` · `Grid` · `Surface` · `Section` · `Ratio` 로 바꿨습니다.

홈의 섹션 제목("이번 주 학습 6")도 함수 없이 `.lxp-section-title` 마크업을 직접 씁니다 → `Section({ title, count })`.

### 2-4. 계층 밖에 있는 것

- `Screen` 이 `overlay.js` 에 있음 → `layout/screen.js` 로 **완료**
- `display.js` 에 2층(`Chip`·`Badge`·`Avatar`)과 3층(`StatGrid`·`InfoBar`·`MemberRow`)이 섞여 있음 → 층별 폴더로 **완료**

---

## 3. 파일 구조

```
src/components/
  primitives/   avatar · badge · button · checkbox · chip · input · ratio · reaction · swipe-action · toast
  blocks/       bottom-sheet · chat-message · course-card · date-strip · deadline-card · dropdown · info-bar
                member-row · message-input · message-item · module-item · popup · stat-grid · tabs · tag
                toggle-group · week-picker
  sections/     deadline-carousel · footer · header · section · tab-bar
  layout/       screen · stack (Stack · Grid · Surface)
```

- 파일 하나 = 컴포넌트 하나(아주 가까운 묶음은 한 파일: `tabs` = ChipTabs·SegmentedControl·LineTabs, `header` = Header·AppHeader).
- 각 파일 첫 줄에 `// 함수 — 계층` 을 적습니다. CSS 는 같은 이름의 `.css` 에 둡니다.
- 빌드는 하위 폴더까지 찾아 import 관계로 순서를 정합니다(관계가 없으면 요소 → 블록 → 영역 → 틀 순). 새 파일을 만들어도 `build.mjs` 는 고치지 않습니다.
- 결과물 `dist/lxp.css`·`dist/lxp.js` 와 함수 이름은 그대로라서 기존 시안·아티팩트는 바꿀 필요가 없습니다.

## 4. 옮기는 순서와 확인 방법

모든 단계는 `npm test`(HTML 스냅샷)와 **겉모습 비교**로 확인했습니다. 겉모습 비교는 바꾸기 전·후 쇼케이스를 나란히 띄워, 화면에 그려지는 글자(위치·크기·색·글꼴), 이미지, 칠해진 상자(배경·테두리·반경·그림자) 1,221개를 비교한 것입니다. A·B·C 모두 차이 0개였습니다.

| 단계 | 내용 | 스냅샷 | 화면 | 결과 |
|---|---|---|---|---|
| A | 폴더 분리만 (코드 이동, 내용 그대로) | 같아야 함 | 같아야 함 | 완료 · 스냅샷 같음 · 화면 같음 |
| B | 틀 추가(`Stack`·`Surface`·`Section`) → `screens.js` 인라인 스타일 15곳 제거 | 바뀜(구조) | 같아야 함 | 완료 · 화면 같음 |
| C | 2-2 중 "모양 변화 없어야 함" 항목 (`Popup`·swipe·`Input`·섹션 제목) | 바뀜 | 같아야 함 | 완료 · 화면 같음 |
| D | 2-2 중 "확인 필요" 항목 (`TabBar` 배지·`InfoBar` 칩·날짜 칸) | 바뀜 | **Figma 와 비교해 정함** | 남음 |

D는 지금 서로 다르게 생긴 것을 하나로 합칠지 정하는 일이라, 디자인 판단이 필요합니다.
