# templates/ — 화면 템플릿과 시안 보관소

```
templates/
├── blank.html        새 시안 시작점 (로컬에서 열기용, ../lxp.css 참조)
├── screens.js        Figma 화면을 컴포넌트로 다시 조립한 기준 화면 (홈·내강의실·메시지·채팅)
└── mockups/          ← 팀원이 만든 시안. 한 파일 = 한 주제
    └── _starter.html     새 시안 틀 (밑줄로 시작 = 시안 아님)
```

`screens.js` 는 **Figma에 이미 있는 화면**, `mockups/` 는 **아직 Figma에 없는 새 시안**입니다.
새 시안은 `screens.js` 에 넣지 않습니다. 확정되어 Figma에 반영된 뒤에만 `screens.js` 로 옮깁니다.

---

## 1. 시안 파일 규칙

### 1-1. 위치와 이름

- `templates/mockups/<영문-슬러그>.html` — 소문자·하이픈. 예: `attendance.html`, `assignment-submit.html`
- 한 주제에 화면이 여러 개면 **한 파일 안에 폰을 나란히** 둡니다(출석부: 학생 A / 교수자 B).
- 같은 주제의 다른 안은 파일을 새로 만들지 않고 같은 파일 안에 `figure` 를 추가합니다(A안 / B안).
  버전은 git 이력으로 남깁니다. `attendance-v2.html`, `attendance-final.html` 같은 이름은 만들지 않습니다.

### 1-2. 파일 형식: 아티팩트 조각 하나로 로컬·아티팩트 둘 다

시안 파일은 `<html>`·`<head>`·`<body>` 가 없는 **조각**입니다. 아티팩트에 그대로 게시할 수 있는 형태입니다.

```html
<!-- (헤더 주석: 1-3 참고) -->
<title>LXP 출석부</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="stylesheet" href="lxp.css">     <!-- 항상 같은 폴더 기준 -->
<style> /* 캔버스 + 시안 전용 스타일 */ </style>
<div class="board"> <figure>…<div class="phone" id="a"></div></figure> </div>
<script src="lxp.js"></script>
<script> /* LXP.Screen(...) 조립 */ </script>
```

- `lxp.css`, `lxp.js` 는 **항상 같은 폴더 경로**로 씁니다(`../lxp.css` 금지).
- `npm run build` 가 `dist/mockups/<이름>.html` 에 `<base href="../">` 를 넣은 전체 문서를 만들어 줍니다.
  로컬 확인: `npm run dev` → `http://localhost:4173/mockups/<이름>.html`
- 아티팩트로 게시할 때는 이 파일을 그대로 페이지로 쓰고 `lxp.css`·`lxp.js`·`fonts/PretendardVariable.woff2` 를 함께 올립니다(방법은 `CLAUDE.md`).

### 1-3. 헤더 주석 (필수)

파일 맨 위에 아래 주석을 둡니다. **다음 사람이 이어서 고칠 때 가장 먼저 읽는 곳**이고,
`@local-ui`·`@gaps` 는 컴포넌트 승격 판단의 근거가 됩니다(`docs/promotion-rules.md`).

```html
<!--
@mockup  출석부 — 학생 출석 현황 / 교수자 출석 체크
@status  아이디어 | 검토중 | 확정 | 보류
@date    2026-11-10                         ← 마지막으로 크게 고친 날
@artifact https://claude.ai/artifact/…       ← 게시했다면 링크
@figma   (선택) Figma 노드 링크
@screens A 학생·내 출석 현황 | B 교수자·출석부 체크(인터랙션)
@local-ui att-card(흰 카드 면) · seg3(출/지/결 3단 토글) · …   ← 이 시안에서 새로 만든 UI 전부
@gaps    Button에 id 못 넘김 → lxp-btn 직접 마크업 / …          ← 시스템이 못 해줘서 우회한 것 전부
@assume  출석률 = (출석 + 지각×0.5) ÷ 진행 주차 — 시안용 가정      ← 지어낸 정책·숫자
-->
```

| 필드 | 무엇을 적나 | 왜 |
|---|---|---|
| `@local-ui` | 시안 `<style>` 에서 새로 만든 클래스 묶음과 한 줄 설명 | 같은 UI가 다른 시안에도 나오면 승격 후보가 됨 |
| `@gaps` | 시스템 컴포넌트·토큰·아이콘이 부족해서 직접 마크업하거나 우회한 것 | 컴포넌트 props·토큰 보강 목록이 됨 |
| `@assume` | 학사 정책, 계산식, 인원수 등 시안을 위해 정한 값 | 리뷰어가 실제 정책으로 오해하지 않도록 |

### 1-4. 상태값

| 상태 | 뜻 | 다음 행동 |
|---|---|---|
| 아이디어 | 혼자 그려 본 것 | 자유롭게 고침 |
| 검토중 | 공유해서 의견 받는 중 | 고칠 때 `@date` 갱신, 큰 변경은 새 `figure` 로 안을 추가 |
| 확정 | 기획·개발로 넘어감 | `@local-ui` 를 승격 규칙으로 검토 → Figma 반영 후 `screens.js` 로 옮김 |
| 보류 | 지금은 진행 안 함 | 지우지 않고 둠(나중에 재사용 근거) |

---

## 2. 남의 시안을 이어서 고칠 때

1. 헤더 주석을 먼저 읽습니다. 특히 `@gaps`(이미 알려진 우회)와 `@assume`(지어낸 값).
2. 아티팩트 링크가 있으면 **저장소 파일이 원본**입니다. 아티팩트에서만 고친 내용이 있으면 먼저 파일에 옮기고 시작합니다.
3. 고친 뒤 `@date`, `@local-ui`, `@gaps` 를 갱신합니다. 새로 만든 UI가 없으면 그대로 둡니다.
4. 같은 아티팩트 URL로 다시 게시합니다(링크가 바뀌지 않게).

## 3. 시안 캔버스 공통 규칙

출석부에서 쓴 캔버스를 모든 시안의 기본으로 씁니다. `blank.html` 의 레이아웃과 같습니다.

- 회색 캔버스(`#eceef0`) 위에 360×780 폰(`.phone`, radius 28)을 가로로 나열, 좁으면 줄바꿈.
- 폰마다 `<figure>` + `<figcaption><b>A</b>역할 · 화면 이름</figcaption>`. 인터랙션이 있으면 캡션에 "(○○을 눌러보세요)".
- **다크 모드는 캔버스에만** 적용합니다. 폰 화면(`.lxp-screen`)은 시스템에 다크 토큰이 없으므로 항상 라이트입니다.
- 캔버스 전용 변수는 `--canvas*` 처럼 시스템 토큰과 겹치지 않는 이름을 씁니다.
