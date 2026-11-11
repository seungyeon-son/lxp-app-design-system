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
| `render` | 여러 컴포넌트를 조합할 때. Controls 는 적용되지 않고 코드가 그대로 보입니다 |
| `parameters.layout` | `centered`(가운데, 바탕 없음 — 2층 기본) · `fullscreen`(360 폭 — 3·4층 기본) · `padded`(360 폭 + 좌우 20) · `phone`(360×780) |
| `parameters.background` | `sky`(홈 그라디언트) · `subtle`(연회색) · `dark` |
| `parameters.arrange` | `row` · `column` — render 가 여러 개를 이어 붙일 때 간격 8 |
| `parameters.height` | 최소 높이(px) — 드롭다운·시트처럼 아래로 펼쳐지는 것 |

## 2. 무엇을 story 로 만드나

**변형·상태를 빠짐없이.** 순서는 기본 → 변형(variant·tone·type) → 크기 → 상태(selected·disabled·open …) → 긴 글·빈 값 → 조합(모두 보기).

- JSDoc 의 **선택지 인자**(`{'a'|'b'}`, `{16|20}`)는 값마다, **boolean 인자**는 기본값이 아닌 쪽을 보여 주는 story 가 있어야 합니다.
  빠지면 `npm run build` 가 경고합니다: `! story 로 보여 주지 않은 값: Button.size: "2xs"`
- 그래서 **인자에는 JSDoc 을 꼭 답니다.** 선택지는 타입에 값을 나열합니다(`@param {'md'|'sm'} [p.size]`). 설명이 Controls 표에 그대로 나옵니다.
- 실제로 쓰이는 문구·샘플을 씁니다(`templates/screens.js` 와 같은 강의명·이름·아바타).
- 없는 아이콘 이름을 쓰면 `npm test` 가 실패합니다(`없는 에셋 x-circle`). `LXP.iconNames()` 로 확인합니다.

## 3. 확인

```bash
npm run build   # stories 수 · 빠진 값 경고
npm test        # story 하나 = 스냅샷 하나 (story:Button/Outline)
npm run dev     # http://localhost:4173/#/button  (Docs) · /#/button--outline (Canvas)
```

쇼케이스 주소: `#/<컴포넌트>` = Docs(모든 story + 인자 표), `#/<컴포넌트>--<story>` = Canvas(story 하나 + Controls).
