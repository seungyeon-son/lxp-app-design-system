# stories — 컴포넌트별 관리 (Storybook 형식)

컴포넌트마다 옆에 `<이름>.stories.js` 를 둡니다. 쇼케이스의 **컴포넌트** 섹션(트리 · Canvas · Controls · Docs)과
스냅샷 테스트(`npm test`)가 이 파일을 그대로 씁니다. 예시를 다른 곳에 따로 적지 않습니다.

```
src/components/primitives/
  button.js            ← 컴포넌트 (JSDoc = 인자 표 · Controls)
  button.css
  button.stories.js    ← story (변형·상태별 예시)
  icon-button.stories.js   한 파일에 함수가 여럿이면 stories 는 함수마다 (button.js → Button · IconButton)
```

## 1. 파일 모양

Storybook CSF 와 같은 모양입니다. 나중에 진짜 Storybook(`@storybook/html`)으로 옮길 때 파일은 그대로 씁니다.

```js
// Button — stories
import { Button } from '../../index.js';

export default {
  component: Button,            // 필수. 이 함수의 JSDoc 이 인자 표가 됩니다
  figma: 'btn-base-state',      // Figma 노드 ID 또는 컴포넌트 이름 (숫자:숫자 면 링크)
  args: { label: '저장하기' },   // 모든 story 의 기본 인자
  parameters: { layout: 'centered' },
  description: '…',             // 없으면 JSDoc 첫 설명
};

export const Primary = { name: 'primary (기본)' };                               // 인자 그대로
export const Outline = { name: 'outline', args: { variant: 'outline', label: '차단 해제' } };
export const AllVariants = {                                                   // 여러 개 조합
  name: '모든 variant',
  render: () => ['primary', 'outline'].map((variant) => Button({ label: variant, variant })).join(' '),
  parameters: { arrange: 'row' },
};
```

| 항목 | 설명 |
|---|---|
| `export const 이름` | story 키 (PascalCase). **import 한 컴포넌트 이름과 같으면 안 됩니다**(빌드 오류) |
| `name` | 화면에 보이는 이름. `값 — 쓰임` 형식 (예: `'tone danger — 삭제·나가기'`) |
| `args` | 그 story 인자 (meta `args` 위에 덮음). **데이터만** 넣습니다. 다른 컴포넌트 결과(HTML)가 필요하면 `render` |
| `render` | 여러 컴포넌트를 조합할 때. 코드가 그대로 보입니다. `render: (args) => …` 처럼 args 를 받으면 Controls · 클릭도 반영됩니다 |
| `parameters.layout` | `centered`(가운데, 바탕 없음 — 2층 기본) · `fullscreen`(360 폭 — 3·4층 기본) · `padded`(360 폭 + 좌우 20) · `phone`(360×780) |
| `parameters.background` | `sky`(홈 그라디언트) · `subtle`(연회색) · `dark` |
| `parameters.arrange` | `row` · `column` — render 가 여러 개를 이어 붙일 때 간격 8 |
| `parameters.height` | 최소 높이(px) — 드롭다운·시트처럼 아래로 펼쳐지는 것 |
| `interact` | 클릭 시뮬레이션 (아래 §2-1). meta 에 두면 모든 story, story 에 두면 그 story 만. `interact: false` 로 끔 |

## 2. 무엇을 story 로 만드나

**변형·상태를 빠짐없이.** 순서는 기본 → 변형(variant·tone·type) → 크기 → 상태(selected·disabled·open …) → 긴 글·빈 값 → 조합(모두 보기).

- JSDoc 의 **선택지 인자**(`{'a'|'b'}`, `{16|20}`)는 값마다, **boolean 인자**는 기본값이 아닌 쪽을 보여 주는 story 가 있어야 합니다.
  빠지면 `npm run build` 가 경고합니다: `! story 로 보여 주지 않은 값: Button.size: "2xs"`
- 그래서 **인자에는 JSDoc 을 꼭 답니다.** 선택지는 타입에 값을 나열합니다(`@param {'md'|'sm'} [p.size]`). 설명이 Controls 표에 그대로 나옵니다.
- 실제로 쓰이는 문구·샘플을 씁니다(`templates/screens.js` 와 같은 강의명·이름·아바타).
- 없는 아이콘 이름을 쓰면 `npm test` 가 실패합니다(`없는 에셋 x-circle`). `LXP.iconNames()` 로 확인합니다.

## 2-1. 클릭 시뮬레이션 (`interact`)

선택·열림·체크처럼 **눌러서 바뀌는 상태**가 있는 컴포넌트는 `interact` 를 둡니다. 쇼케이스에서 미리보기를 누르면
`interact(t, args)` 가 불리고, 돌려준 값이 인자에 합쳐져 다시 그려집니다. Canvas 에서는 Controls 와 코드도 같이 바뀌고,
미리보기 아래에 `클릭 → value 'absent'` 처럼 바뀐 인자가 기록됩니다. (트리에서 ● 표시가 있는 컴포넌트)

```js
export default {
  component: ToggleGroup,
  interact: (t, args) => {
    if (t.closest('[data-overflow]')) return { overflow: { ...args.overflow, open: !args.overflow.open } };
    const v = t.attr('data-value');
    return v == null ? null : { value: args.value === v ? null : v };   // null = 바뀐 것 없음
  },
};
```

| `t` | 설명 |
|---|---|
| `t.el` | 누른 요소 |
| `t.closest(sel)` | 누른 요소에서 가장 가까운 `sel` (미리보기 밖이면 null) |
| `t.index(sel)` | 누른 `sel` 이 미리보기 안 `sel` 들 중 몇 번째인지 (탭·요일 칸) — 없으면 -1 |
| `t.attr(name)` | 가장 가까운 `[name]` 의 값 (`data-value`, `data-index`) |

- 상태는 **인자로만** 바꿉니다(DOM 을 직접 고치지 않음). 그래야 Controls·코드·스냅샷과 어긋나지 않습니다.
- 인자가 비어 있을 때의 기본값을 생각합니다: `{ visible: !(args.visible ?? true) }`.
- `render` story 를 눌러 보게 하려면 `render: (args) => MemberRow({ right: ToggleGroup(args) })` 처럼 **args 를 받게** 씁니다.
  args 를 받는 render 는 Controls 도 적용됩니다.
- 누를 대상은 컴포넌트가 이미 내보내는 속성(`data-value` · `role="tab"` · `aria-pressed` · `aria-expanded`)으로 찾습니다.
  `aria-*` 에 boolean 을 넘기면 `htmlAttrs` 가 `"true"`/`"false"` 로 씁니다.

지금 인터랙션이 있는 컴포넌트: ToggleGroup · MemberRow(토글) · Checkbox · SelectCheck · SelectAllRow · FriendRow(고르기) ·
ChipTabs · SegmentedControl · LineTabs · WeekPicker · DateStrip · TabBar · ClassEditRow(공개 토글) · ChatNotice · PopoverAlert ·
ChatGroupCard(펼치기) · Reaction · Dropdown(선택형) · ListGroup(언어 선택) · Input(지우기) · Header(메시지 ⋮)

## 3. 확인

```bash
npm run build   # stories 수 · 빠진 값 경고
npm test        # story 하나 = 스냅샷 하나 (story:Button/Outline)
npm run dev     # http://localhost:4173/#/button  (Docs) · /#/button--outline (Canvas)
```

쇼케이스 주소: `#/<컴포넌트>` = Docs(모든 story + 인자 표), `#/<컴포넌트>--<story>` = Canvas(story 하나 + Controls).
