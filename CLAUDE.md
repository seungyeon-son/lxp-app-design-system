# CLAUDE.md — UBION LXP 앱 디자인 시스템

이 저장소는 Figma **UBION 4.5 LXP App 디자인 시스템**을 코드로 옮긴 것입니다.
목적은 하나입니다. **팀원이 "○○ 화면 그려줘"라고 하면, 처음부터 만들지 말고 이 시스템의 함수로 360×780 모바일 시안을 조립**합니다.

- 컴포넌트 목록·props: `README.md` 의 컴포넌트 표 → 정확한 인자는 `src/components/*.js` 의 JSDoc
- 시안 보관 규칙: `templates/README.md`
- 새 UI를 정식 컴포넌트로 올리는 규칙과 후보 장부: `docs/promotion-rules.md`

---

## 시안 요청을 받으면 (예: "출석부 그려줘", "과제 제출 화면 만들어줘")

1. **이미 있는지 본다.** `templates/mockups/` 에 같은 주제가 있으면 새 파일을 만들지 말고 그 파일에 안(`figure`)을 추가합니다.
   `docs/promotion-rules.md` §5 후보 장부에 쓸 만한 UI가 있으면 그 시안의 코드를 가져다 씁니다.
2. **틀을 복사한다.** `templates/mockups/_starter.html` → `templates/mockups/<영문-슬러그>.html`.
   헤더 주석(`@mockup` `@status` `@date` …)을 채웁니다.
3. **조립한다.** `LXP.Screen({ header, body, bottom, overlay, bg })` 안에 시스템 함수를 넣습니다.
   비슷한 기존 화면이 있으면 `templates/screens.js`(홈·내강의실·메시지·채팅·출석부)에서 시작합니다.
   **출석 관련 요청은 `rollBook({ statuses, onlyTodo, menu })`·`rollBookEntry()`·`rollBookChecking()` 에서 시작하고 새로 그리지 않습니다**(Figma 확정안).
   샘플 데이터(강의명, 교수명, 아바타 `avatar-02~05`, 썸네일 색)도 `screens.js` 것을 재사용합니다.
4. **시스템에 없는 UI만** 시안 `<style>` 에 직접 만들고, 헤더 `@local-ui` 에 적습니다. 우회한 것은 `@gaps` 에 적습니다.
5. **확인한다.** `npm run build` 후 `npm run dev` → `http://localhost:4173/mockups/<슬러그>.html`.
   콘솔 에러가 없는지, 아래 "토큰" 규칙을 어긴 곳이 없는지 확인합니다.
6. 사용자가 원하면 **아티팩트로 게시**하고 URL을 헤더 `@artifact` 에 적습니다(아래 "게시").

---

## 규칙

각 규칙의 근거는 첫 테스트 시안(출석부, 지금은 삭제함)에서 실제로 생긴 문제입니다.

### 조립

- **시스템 함수가 있는 UI는 직접 만들지 않습니다.** 버튼·칩·아바타·헤더·탭·푸터·토스트·팝업은 반드시 함수로.
- **`lxp-*` 클래스를 직접 마크업하지 않습니다.** 함수가 못 해 주는 게 있어서 어쩔 수 없이 쓰면 `@gaps` 에 이유를 적습니다.
  (근거: 첫 테스트 시안은 `lxp-btn`·`lxp-footer` 를 직접 썼고, 그 뒤 `Button`·`Footer` 에 `attrs`·`prefix`·`disabled` 가 생기면서 그 코드는 필요 없어졌습니다. 직접 쓴 마크업은 이런 변화를 따라가지 못합니다.)
  `id`·`type`·`data-*` 가 필요하면 `Button({ attrs: { id: 'save', 'data-x': 1 } })` 처럼 `attrs` 를 씁니다.
- **시안 전용 클래스는 시안 접두사**(`att-`, `roll-` 처럼 주제 약자)를 씁니다. `lxp-` 는 시스템 전용입니다.
- **떠 있는 레이어는 `overlay` 슬롯에.** 토스트·팝업(`Dim` + `Popup`)·바텀시트를 `body` 안에 절대배치하지 않습니다.
  (근거: 출석부의 저장 토스트는 본문 안에 있어서, 목록을 끝까지 스크롤하면 화면 중간(위에서 246px)으로 올라갑니다.)
  overlay 는 화면 전체를 덮으므로 떠 있는 동안 아래 화면은 눌리지 않습니다 — 토스트처럼 잠깐 뜨는 것은 괜찮습니다.
- **`src/` 는 시안 작업 중에 고치지 않습니다.** 컴포넌트 추가·수정은 `docs/promotion-rules.md` 절차로 따로 합니다.
  사용자가 명시적으로 요청한 경우만 예외입니다.
- 사용자 텍스트를 템플릿 문자열에 넣을 때는 `LXP.esc()` 를 씁니다. 같은 함수를 다시 정의하지 않습니다.
- 아이콘이 없으면 비슷한 아이콘을 뒤집거나 돌리지 말고 `@gaps` 에 적습니다(`LXP.iconNames()` 로 목록 확인).

### 토큰

- 폰 화면 안의 색·글꼴·반경·그림자는 **CSS 변수만** 씁니다. hex·rgb·px 반경을 직접 쓰지 않습니다.
- **쓰기 전에 토큰이 있는지 확인합니다**: `grep -- '--font-head' src/styles/tokens.css`.
  없는 변수는 에러 없이 무시되어 눈치채기 어렵습니다.
  (근거: 출석부의 출석률 숫자는 `--font-head-32b` 를 썼는데, 이 토큰은 모바일 정리 때 삭제되어 16px 일반 글꼴로 나옵니다.)
- 글꼴 단계: 제목 `--font-head-28b / 24b / 20b / 20sb` 가 최대입니다(32 이상 없음). 라벨은 `--font-label-{12~18}{r|m|sb|b}`, 본문 `--font-paragraph-16r`, 캡션 `--font-cap-11sb / 12sb`.
- 반경은 토큰 값 중에서: `3xsm 4` · `2xsm 6` · `xsm 8` · `sm 10` · `md 12` · `lg 16` · `xlg 32` · `full`.
- **카드는 `--radi-lg`(16px)**, 그림자는 `--shadow-card` 또는 `--shadow-xsm`. 기존 카드(`CourseCard`, `DeadlineCard`, `ModuleItem`)와 맞춥니다.
  (근거: 출석부 카드는 12px로 기존 카드와 달랐습니다.)
- 여백은 px로 써도 되지만 `2·4·6·8·12·16·20·24·28·32` 단계를 우선합니다. 화면 좌우 여백은 16px(카드 목록) 또는 20px(리스트·푸터).
- 역할 접두사를 지킵니다: 배경 `--bg-*`, 글자 `--tx-*`, 아이콘 `--fg-*`, 테두리 `--bo-*`. 배경 토큰을 글자색에 쓰지 않습니다.

### 상태 → 색 (모든 시안 공통)

같은 의미는 어느 시안에서든 같은 색입니다. `Chip({ tone })` 과 글자색 토큰을 아래처럼 씁니다.

**출석 상태(출석·결석·지각·조퇴·지각조퇴)는 이 표가 아니라 `templates/screens.js` 의 `ROLL_MAIN`·`ROLL_EXTRA` 를 따릅니다.**
Figma 확정안 기준이며 일반적인 의미 색과 다릅니다(예: 출석 = `info` 파랑, 지각 = `posi`). 아이콘도 `status-*` 를 그대로 씁니다.

| 의미 | 예 | `tone` | 글자/숫자 색 | 채움 색 (막대·선택된 버튼) |
|---|---|---|---|---|
| 완료·정상 | 제출 완료, 수강 완료 | `posi` | `--tx-semantic-posi-primary` | `--bg-semantic-posi-primary` |
| 주의 | 마감 임박 | `warn` | `--tx-semantic-noti-primary` | `--bg-semantic-warn-primary` |
| 실패·위험 | 미제출, 누적 경고 | `nega` | `--tx-semantic-nega-primary` | `--bg-semantic-nega-primary` |
| 진행 중·강조 | 이번 주차, D-3 이하, 선택됨 | `info` | `--tx-coursmos-primary` | `--bg-coursmos-primary` |
| 예정·비활성 | 다음 주차, D-4 이상 | `neutral` | `--tx-hierarchy-tertiary` | `--bg-hierarchy-quaternary` |

경고(warn) 글자색 토큰 이름은 `noti` 입니다(`--tx-semantic-warn-*` 은 없음).

### 내용

- **지어낸 정책·계산식·숫자는 `@assume` 에 적습니다.** (예: 출석부의 "지각 2회 = 결석 1회", "결석 허용 4회"는 시안용 가정)
- 인터랙션이 있으면 캡션에 "(○○을 눌러보세요)"라고 알려 줍니다.
- 인터랙션 구현: 상태는 일반 객체 → 바뀌면 `Screen` 전체를 다시 그림 → 본문 `scrollTop` 복원, 클릭은 폰 요소 하나에 위임.
  눌림·선택 상태는 `aria-pressed` / `aria-selected` 로 표시합니다. (`_starter.html` 의 B 화면 참고)
- 캔버스(폰 바깥)만 다크 모드를 지원합니다. 폰 화면은 항상 라이트입니다.

---

## 게시 (Claude 아티팩트)

시안 파일은 그대로 아티팩트 페이지가 되는 조각입니다. 저장소의 `dist/` 파일을 같이 올립니다.

```
file_path: templates/mockups/<슬러그>.html
files: {
  "lxp.css": "dist/lxp.css",
  "lxp.js":  "dist/lxp.js",
  "fonts/PretendardVariable.woff2": "dist/fonts/PretendardVariable.woff2"
}
```

- 게시 전에 `npm run build` 로 `dist/` 를 최신으로 만듭니다.
- 이미 `@artifact` 링크가 있으면 **같은 URL로 업데이트**합니다(편집 권한이 없으면 새로 게시하고 헤더 링크를 바꿈).
- 아티팩트에서만 고친 내용이 생기지 않게, 고칠 때는 항상 저장소 파일을 고친 뒤 다시 게시합니다.
- 디자인 시스템 쇼케이스(`docs/index.html` 조각): https://claude.ai/artifact/JdkPxGDbAKQjGbsSUqPxah — `src/` 가 바뀌면 소유자가 다시 게시합니다.

## 저장소 작업

```bash
npm run build   # tokens.json → CSS 변수, 에셋 인라인, dist/ 생성 (dist/ 는 커밋함)
npm run dev     # 빌드 + http://localhost:4173 (쇼케이스, /mockups/<이름>.html)
```

- 토큰 원본은 `tokens/tokens.json` 하나입니다. `src/styles/tokens.css`, `src/core/assets.generated.js`, `dist/` 는 빌드 결과라 직접 고치지 않습니다.
- 토큰은 **Figma 변수에 있는 것만** 추가합니다(Figma 파일 `E5xzHTfMeooeU4BXCykmiA`).
- 커밋 메시지: `feat(mockup): 출석부 시안 추가` · `feat(component): …` · `fix: …` — 한국어 설명. 커밋은 사용자가 요청할 때만 합니다.
