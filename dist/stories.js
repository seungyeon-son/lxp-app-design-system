/*! UBION LXP — stories (자동 생성: src/components 의 *.stories.js) */
(function (global) {
'use strict';
const { esc, cx, htmlAttrs, slot, ASSETS, setAssetBase, asset, iconNames, Icon, Avatar, AvatarGroup, Badge, Button, IconButton, Checkbox, Chip, Divider, Fab, Flag, ImageTile, Input, Pill, Ratio, Reaction, SelectCheck, SwipeAction, Toast, AlertItem, ListItem, BottomSheet, FriendRow, SelectAllRow, ChatGroupCard, ChatMessage, ChatDate, ChatNotice, ChatReplyBar, ClassEditRow, CourseCard, DateStrip, DeadlineCard, Dropdown, EmojiBar, EmptyState, InfoBar, ListGroup, MediaViewer, MemberRow, MenuList, MessageInput, MessageItem, ModuleItem, PopoverAlert, Popup, SettingCard, ShareLinkCard, ShareFileCard, StartChat, StatGrid, ChipTabs, SegmentedControl, LineTabs, Tag, ToggleGroup, WeekPicker, DeadlineCarousel, Footer, Header, AppHeader, Stack, Grid, Surface, Section, TabBar, TAB_ITEMS, StatusBar, Screen, Dim } = global.LXP;
const FILES = [
  { layer: "2 요소", file: "primitives/avatar", load: function () {
// Avatar — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: Avatar,
  figma: '72:11136',
  args: { src: 'avatar-05' },
};

const Default = {};
const Size24 = { name: 'size 24', args: { size: 24 } };
const Size28 = { name: 'size 28', args: { size: 28 } };
const Size32 = { name: 'size 32', args: { size: 32 } };
const Size36 = { name: 'size 36', args: { size: 36 } };
const Size40 = { name: 'size 40', args: { size: 40 } };
const Placeholder = { name: '이미지 없음 — 이름 첫 글자', args: { src: undefined, name: '홍길동' } };
const Dimmed = { name: 'dimmed — 차단 · 나간 사용자', args: { dimmed: true } };
const AllSizes = {
  name: '모든 크기',
  render: () => [24, 28, 32, 36, 40, 48].map((size) => Avatar({ src: 'avatar-05', size })).join(' '),
};
const AllImages = {
  name: '샘플 이미지 6종 (avatar-01 ~ 06)',
  render: () => ['avatar-01', 'avatar-02', 'avatar-03', 'avatar-04', 'avatar-05', 'avatar-06'].map((src) => Avatar({ src })).join(' '),
};

  return { meta: __meta, stories: { Default, Size24, Size28, Size32, Size36, Size40, Placeholder, Dimmed, AllSizes, AllImages }, order: ["Default","Size24","Size28","Size32","Size36","Size40","Placeholder","Dimmed","AllSizes","AllImages"] };
  } },
  { layer: "2 요소", file: "primitives/avatar-group", load: function () {
// AvatarGroup — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: AvatarGroup,
  figma: '70:25318',
};

const Default = { name: '하나 + N (메시지 목록 48)' };
const NoMore = { name: '+N 없음', args: { more: 0 } };
const Many = { name: '여러 명 (대화 시작 안내 36)', args: { avatars: ['avatar-05', 'avatar-02', 'avatar-06'], size: 36, more: 5 } };
const Overlap = { name: '겹침 폭 8px', args: { avatars: ['avatar-03', 'avatar-04', 'avatar-02'], size: 36, overlap: 8, more: 2 } };

  return { meta: __meta, stories: { Default, NoMore, Many, Overlap }, order: ["Default","NoMore","Many","Overlap"] };
  } },
  { layer: "2 요소", file: "primitives/badge", load: function () {
// Badge — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: Badge,
};

const Default = { name: 'md (22)' };
const Small = { name: 'sm (18) — 탭바', args: { size: 'sm', count: 11 } };
const Square = { name: 'square — 네모 숫자', args: { size: 'square', count: 3 } };
const LongCount = { name: '긴 숫자', args: { count: '99+' } };
const AllSizes = { name: '모든 크기', render: () => [Badge({ count: 1 }), Badge({ count: 11, size: 'sm' }), Badge({ count: 3, size: 'square' })].join(' ') };

  return { meta: __meta, stories: { Default, Small, Square, LongCount, AllSizes }, order: ["Default","Small","Square","LongCount","AllSizes"] };
  } },
  { layer: "2 요소", file: "primitives/button", load: function () {
// Button — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: Button,
  figma: 'btn-base-state',
  args: { label: '저장하기' },
};

const Primary = { name: 'primary (기본)' };
const Secondary = { name: 'secondary', args: { variant: 'secondary', label: '내 강의실 편집' } };
const Outline = { name: 'outline', args: { variant: 'outline', label: '차단 해제' } };
const OutlinePrimary = { name: 'outline-primary', args: { variant: 'outline-primary', label: '자동출결' } };
const Gray = { name: 'gray', args: { variant: 'gray', label: '차단 해제' } };
const Ghost = { name: 'ghost', args: { variant: 'ghost', label: '변경', size: 'sm', iconRight: 'chevron-right' } };
const SizeXl = { name: 'size xl (48)', args: { size: 'xl' } };
const SizeMd = { name: 'size md (40)', args: { size: 'md' } };
const SizeSm = { name: 'size sm (32)', args: { size: 'sm' } };
const SizeXs = { name: 'size xs (28)', args: { size: 'xs', variant: 'secondary', label: '내 강의실 편집', icon: 'settings' } };
const Size2xs = { name: 'size 2xs (24)', args: { size: '2xs', variant: 'ghost', label: '모두 보기', iconRight: 'chevron-right' } };
const WithIcon = { name: '왼쪽 아이콘', args: { variant: 'gray', size: 'md', icon: 'block', label: '차단 해제' } };
const WithIconRight = { name: '오른쪽 아이콘', args: { variant: 'outline-primary', size: 'xl', iconRight: 'check-circle', label: '자동출결' } };
const Block = { name: 'block — 가로 100%', args: { block: true }, parameters: { layout: 'padded' } };
const Disabled = { name: 'disabled', args: { disabled: true } };
const GhostDanger = { name: 'ghost · tone danger (팝업 삭제)', args: { variant: 'ghost', tone: 'danger', label: '삭제' } };
const GhostPrimary = { name: 'ghost · tone primary (팝업 확인)', args: { variant: 'ghost', tone: 'primary', label: '확인' } };
const OutlineDanger = { name: 'outline · tone danger (대화방 나가기)', args: { variant: 'outline', tone: 'danger', label: '대화방 나가기' } };
const WithAttrs = { name: 'attrs — id · data-*', args: { label: '출결 일괄 처리', size: 'xl', attrs: { id: 'bulk', 'data-act': 'bulk' } } };
const AllVariants = {
  name: '모든 variant',
  render: () => ['primary', 'secondary', 'outline', 'outline-primary', 'gray', 'ghost'].map((variant) => Button({ label: variant, variant, size: 'md' })).join(' '),
  parameters: { arrange: 'row' },
};
const AllSizes = {
  name: '모든 size',
  render: () => ['xl', 'lg', 'md', 'sm', 'xs', '2xs'].map((size) => Button({ label: size, size })).join(' '),
  parameters: { arrange: 'row' },
};

  return { meta: __meta, stories: { Primary, Secondary, Outline, OutlinePrimary, Gray, Ghost, SizeXl, SizeMd, SizeSm, SizeXs, Size2xs, WithIcon, WithIconRight, Block, Disabled, GhostDanger, GhostPrimary, OutlineDanger, WithAttrs, AllVariants, AllSizes }, order: ["Primary","Secondary","Outline","OutlinePrimary","Gray","Ghost","SizeXl","SizeMd","SizeSm","SizeXs","Size2xs","WithIcon","WithIconRight","Block","Disabled","GhostDanger","GhostPrimary","OutlineDanger","WithAttrs","AllVariants","AllSizes"] };
  } },
  { layer: "2 요소", file: "primitives/checkbox", load: function () {
// Checkbox — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: Checkbox,
  figma: '7062:38718',
};

const Default = { name: '꺼짐' };
const Checked = { name: '켜짐', args: { checked: true } };
const WithCount = { name: '개수 표시', args: { checked: true, count: 3 } };
const Disabled = { name: 'disabled', args: { disabled: true } };
const NoLabel = { name: '라벨 없음 (목록 선택용)', args: { label: '', checked: true } };

  return { meta: __meta, stories: { Default, Checked, WithCount, Disabled, NoLabel }, order: ["Default","Checked","WithCount","Disabled","NoLabel"] };
  } },
  { layer: "2 요소", file: "primitives/chip", load: function () {
// Chip — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: Chip,
  figma: 'chip/times',
  args: { label: '3시간 남았어요' },
};

const Info = { name: 'info (기본) — 진행 중·강조' };
const Neutral = { name: 'neutral — 예정·비활성', args: { tone: 'neutral', label: 'D-4' } };
const Posi = { name: 'posi — 완료', args: { tone: 'posi', label: '제출 완료' } };
const Nega = { name: 'nega — 실패·위험', args: { tone: 'nega', label: '미제출' } };
const Warn = { name: 'warn — 주의', args: { tone: 'warn', label: '마감 임박' } };
const Label = { name: 'label — 속성 표시 (출석부 1교시)', args: { tone: 'label', label: '1교시' } };
const AllTones = {
  name: '모든 tone',
  render: () => ['info', 'neutral', 'posi', 'nega', 'warn', 'label'].map((tone) => Chip({ tone, label: tone })).join(' '),
};

  return { meta: __meta, stories: { Info, Neutral, Posi, Nega, Warn, Label, AllTones }, order: ["Info","Neutral","Posi","Nega","Warn","Label","AllTones"] };
  } },
  { layer: "2 요소", file: "primitives/divider", load: function () {
// Divider — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: Divider,
  parameters: { layout: 'fullscreen' },
};

const Default = { name: '꽉 참' };
const Inset = { name: 'inset 20 — 좌우 띄움', args: { inset: 20 } };

  return { meta: __meta, stories: { Default, Inset }, order: ["Default","Inset"] };
  } },
  { layer: "2 요소", file: "primitives/fab", load: function () {
// Fab — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: Fab,
  figma: '5:11732',
  description: '떠 있는 원형 버튼. 화면에 띄울 때는 Screen({ fab: Fab({}) }) — 하단 탭바 위 오른쪽에 고정됩니다.',
};

const Default = { name: '새 대화' };
const WithAttrs = { name: 'attrs', args: { attrs: { 'data-act': 'new-chat' } } };

  return { meta: __meta, stories: { Default, WithAttrs }, order: ["Default","WithAttrs"] };
  } },
  { layer: "2 요소", file: "primitives/flag", load: function () {
// Flag — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: Flag,
  figma: 'icon/flag',
};

const Korea = { name: 'kr (기본)' };
const Usa = { name: 'us', args: { code: 'us' } };
const Japan = { name: 'jp', args: { code: 'jp' } };
const China = { name: 'cn', args: { code: 'cn' } };
const Large = { name: 'size 40', args: { size: 40 } };
const AllCodes = { name: '모든 국기', render: () => ['kr', 'us', 'jp', 'cn'].map((code) => Flag({ code })).join(' ') };

  return { meta: __meta, stories: { Korea, Usa, Japan, China, Large, AllCodes }, order: ["Korea","Usa","Japan","China","Large","AllCodes"] };
  } },
  { layer: "2 요소", file: "primitives/icon-button", load: function () {
// IconButton — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: IconButton,
  figma: 'btn-base-state',
  args: { icon: 'bell-18', label: '알림' },
};

const Default = { name: '36 (기본)' };
const Active = { name: 'active — 선택됨', args: { icon: 'grid-active', active: true, label: '카드형' } };
const Round = { name: 'round — 메시지 입력 +', args: { icon: 'plus', round: true, label: '첨부' } };
const TonePrimary = { name: 'tone primary — 파란 바탕', args: { icon: 'download-18-white', tone: 'primary', label: '내려받기' } };
const Size16 = { name: 'size 16 — 입력칸 지우기', args: { icon: 'x-circle-filled', size: 16, label: '지우기' } };
const Size20 = { name: 'size 20 — 답장 바 닫기', args: { icon: 'x-close-20', size: 20, label: '닫기' } };
const Size24 = { name: 'size 24', args: { size: 24 } };
const Size28 = { name: 'size 28 — 공지 펼치기', args: { icon: 'chevron-down-16', size: 28, label: '펼치기' } };
const Size32 = { name: 'size 32', args: { icon: 'caret-up-18', size: 32, label: '접기' } };
const Size40 = { name: 'size 40 — 메시지 헤더', args: { icon: 'search-20', size: 40, label: '검색' } };
const WithAttrs = { name: 'attrs', args: { attrs: { 'data-act': 'alarm' } } };
const AllSizes = {
  name: '모든 size',
  render: () => [16, 20, 24, 28, 32, 36, 40].map((size) => IconButton({ icon: 'bell-18', size, active: true, label: String(size) })).join(' '),
};

  return { meta: __meta, stories: { Default, Active, Round, TonePrimary, Size16, Size20, Size24, Size28, Size32, Size40, WithAttrs, AllSizes }, order: ["Default","Active","Round","TonePrimary","Size16","Size20","Size24","Size28","Size32","Size40","WithAttrs","AllSizes"] };
  } },
  { layer: "2 요소", file: "primitives/image-tile", load: function () {
// ImageTile — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: ImageTile,
  figma: '83:17338',
  parameters: { layout: 'padded' },
};

const Empty = { name: '이미지 없음 (회색)' };
const InGrid = {
  name: '4칸 격자 (채팅방 설정)',
  render: () => Grid({ cols: 4, gap: 8, children: [1, 2, 3, 4].map(() => ImageTile({})) }),
};

  return { meta: __meta, stories: { Empty, InGrid }, order: ["Empty","InGrid"] };
  } },
  { layer: "2 요소", file: "primitives/input", load: function () {
// Input — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: Input,
  figma: '86:18467',
  parameters: { layout: 'padded' },
};

const Enabled = { name: 'enabled (기본)' };
const Filled = { name: '값 있음', args: { value: '물리학' } };
const Focused = { name: 'focused', args: { state: 'focused', value: '물리학' } };
const Disabled = { name: 'disabled', args: { state: 'disabled' } };
const ValidationNormal = { name: 'validation normal', args: { validation: 'normal', value: '물리학' } };
const ValidationFilled = { name: 'validation filled', args: { validation: 'filled', value: '물리학' } };
const Invalid = { name: 'validation invalid', args: { validation: 'invalid', value: '잘못된 입력' } };
const NoIcon = { name: '아이콘 없음 (팝업 입력칸)', args: { icon: null, clearable: false, value: '김연아, 이상화, 봉준호' } };
const NotClearable = { name: '지우기 버튼 없음', args: { clearable: false, value: '물리학' } };
const AllStates = {
  name: 'state × validation',
  render: () => Stack({ gap: 8, children: ['enabled', 'focused', 'disabled'].flatMap((state) => ['normal', 'filled', 'invalid'].map((validation) => Input({ state, validation, value: `${state} · ${validation}` }))) }),
};

  return { meta: __meta, stories: { Enabled, Filled, Focused, Disabled, ValidationNormal, ValidationFilled, Invalid, NoIcon, NotClearable, AllStates }, order: ["Enabled","Filled","Focused","Disabled","ValidationNormal","ValidationFilled","Invalid","NoIcon","NotClearable","AllStates"] };
  } },
  { layer: "2 요소", file: "primitives/pill", load: function () {
// Pill — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: Pill,
  figma: 'chip/tag2-base',
  args: { label: '보강' },
};

const Default = {};
const WithChip = { name: 'Chip label 옆 (출석부 InfoBar)', render: () => [Chip({ tone: 'label', label: '1교시' }), Pill({ label: '보강' })].join(' ') };

  return { meta: __meta, stories: { Default, WithChip }, order: ["Default","WithChip"] };
  } },
  { layer: "2 요소", file: "primitives/ratio", load: function () {
// Ratio — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: Ratio,
  args: { label: '처리 현황', value: 3, total: 40 },
};

const Default = {};
const Zero = { name: '0 / 전체', args: { value: 0 } };
const Done = { name: '다 처리함', args: { value: 40 } };

  return { meta: __meta, stories: { Default, Zero, Done }, order: ["Default","Zero","Done"] };
  } },
  { layer: "2 요소", file: "primitives/reaction", load: function () {
// Reaction — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: Reaction,
  figma: '80:20270',
  args: { count: 1 },
};

const Default = { name: '문자 이모지' };
const Selected = { name: 'selected — 내가 누름', args: { selected: true, count: 3 } };
const WithIcon = { name: '이모지 이미지', args: { icon: 'emoji-grin', count: 1 } };
const NoCount = { name: '숫자 없음', args: { count: undefined } };
const Add = { name: 'add — 리액션 추가', args: { add: true } };
const Row = { name: '메시지 아래 줄', render: () => [Reaction({ icon: 'emoji-grin', count: 1 }), Reaction({ icon: 'emoji-thumbsup', count: 1, selected: true }), Reaction({ add: true })].join(' ') };

  return { meta: __meta, stories: { Default, Selected, WithIcon, NoCount, Add, Row }, order: ["Default","Selected","WithIcon","NoCount","Add","Row"] };
  } },
  { layer: "2 요소", file: "primitives/select-check", load: function () {
// SelectCheck — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: SelectCheck,
  figma: 'icon-check-state',
};

const Default = { name: '선택 안 함' };
const Checked = { name: '선택함', args: { checked: true } };

  return { meta: __meta, stories: { Default, Checked }, order: ["Default","Checked"] };
  } },
  { layer: "2 요소", file: "primitives/swipe-action", load: function () {
// SwipeAction — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: SwipeAction,
  figma: '19:8837',
  args: { label: '읽음' },
};

const Neutral = { name: 'neutral (기본) — 읽음·알림' };
const Strong = { name: 'strong — 차단', args: { tone: 'strong', label: '차단' } };
const Danger = { name: 'danger — 나가기', args: { tone: 'danger', label: '나가기' } };
const Info = { name: 'info · 아이콘 — 고정', args: { tone: 'info', label: '고정', icon: 'pin-20-white' } };
const Row = {
  name: '오른쪽 밀기 한 줄',
  render: () => [SwipeAction({ label: '읽음' }), SwipeAction({ label: '차단', tone: 'strong' }), SwipeAction({ label: '나가기', tone: 'danger' }), SwipeAction({ label: '고정', icon: 'pin-20-white', tone: 'info' })].join(''),
  parameters: { arrange: 'row' },
};

  return { meta: __meta, stories: { Neutral, Strong, Danger, Info, Row }, order: ["Neutral","Strong","Danger","Info","Row"] };
  } },
  { layer: "2 요소", file: "primitives/toast", load: function () {
// Toast — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: Toast,
  figma: '37:14852',
};

const Default = { name: '저장되었습니다' };
const CustomLabel = { name: '다른 문구', args: { label: '출석부가 저장되었습니다' } };
const NoIcon = { name: '아이콘 없음', args: { icon: null, label: '복사되었습니다' } };

  return { meta: __meta, stories: { Default, CustomLabel, NoIcon }, order: ["Default","CustomLabel","NoIcon"] };
  } },
  { layer: "3 블록", file: "blocks/alert-item", load: function () {
// AlertItem — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: AlertItem,
  figma: '25:13296',
};

const Default = {};
const NoDivider = { name: '구분선 없음 (마지막 행)', args: { divider: false } };
const LongText = { name: '긴 글 — 한 줄 말줄임', args: { course: '창의코딩-모두의파이썬 (2025-2-2) 분반 01 · 02 통합 강의', title: '[공지] 중간고사 일정이 변경되었습니다. 바뀐 일정을 꼭 확인해 주세요.' } };
const List = {
  name: '목록',
  render: () => [AlertItem({}), AlertItem({ course: '물리학수업', time: '오전09:10', title: '[공지] 중간고사 일정이 변경되었습니다.' }), AlertItem({ divider: false })].join(''),
};

  return { meta: __meta, stories: { Default, NoDivider, LongText, List }, order: ["Default","NoDivider","LongText","List"] };
  } },
  { layer: "3 블록", file: "blocks/bottom-sheet", load: function () {
// BottomSheet — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: BottomSheet,
  figma: '80:21734',
  parameters: { height: 200 },
};

const Items = { name: 'items — 간단 메뉴', args: { items: [{ icon: 'reply-20', label: '메시지 답장' }, { icon: 'pin-20', label: '공지 등록' }, { icon: 'trash-20-red', label: '메시지 삭제', tone: 'danger' }] } };
const WithTitle = { name: '제목 있음', args: { title: '대화방 설정', items: [{ icon: 'edit-20', label: '대화방 이름 변경' }] } };
const Subtle = { name: 'tone subtle — 회색 시트', args: { tone: 'subtle', title: '대화방 설정', items: [{ icon: 'edit-20', label: '대화방 이름 변경', tone: 'muted' }] } };
const LongPress = {
  name: '길게 누르기 (long_press)',
  render: () => BottomSheet({ content: Stack({ gap: 8, children: [EmojiBar({}), Divider({}), Stack({ gap: 4, children: [ListItem({ icon: 'reply-20', label: '메시지 답장' }), ListItem({ icon: 'pin-20', label: '공지 등록' }), ListItem({ icon: 'trash-20-red', label: '메시지 삭제', tone: 'danger' })] })] }) }),
};
const ChatSetting = {
  name: '대화방 설정 (chat_setting)',
  render: () => BottomSheet({ tone: 'subtle', title: '대화방 설정', gap: 20, content: Stack({ gap: 32, children: [
    ListGroup({ label: '메시지 번역', card: false, items: [{ icon: 'translate-20', label: '번역 언어 선택', tone: 'muted', trailing: 'chevron' }] }),
    ListGroup({ label: '대화방 관리', items: [{ icon: 'edit-20', label: '대화방 이름 변경', tone: 'muted' }, { icon: 'bell-setting-20', label: '대화방 알림 끄기', tone: 'muted' }, { icon: 'settings-20', label: '대화방 관리', tone: 'muted' }] }),
    ListItem({ icon: 'log-out-20-red', label: '대화방 나가기', tone: 'danger' }),
  ] }) }),
};
const Translate = {
  name: '메시지 번역 (언어 선택)',
  render: () => BottomSheet({ tone: 'subtle', title: '메시지 번역', gap: 12, content: [
    ListGroup({ label: '언어 선택', items: [{ flag: 'kr', label: '한국어', trailing: 'check' }, { flag: 'us', label: '영어' }, { flag: 'jp', label: '일본어' }, { flag: 'cn', label: '중국어' }] }),
    Stack({ direction: 'row', justify: 'end', children: Button({ label: '원문 보기', variant: 'outline' }) }),
  ] }),
};

  return { meta: __meta, stories: { Items, WithTitle, Subtle, LongPress, ChatSetting, Translate }, order: ["Items","WithTitle","Subtle","LongPress","ChatSetting","Translate"] };
  } },
  { layer: "3 블록", file: "blocks/chat-date", load: function () {
// ChatDate — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: ChatDate,
  figma: '79:18832',
  parameters: { layout: 'padded' },
};

const Today = { name: '오늘 (기본)' };
const Date = { name: '날짜', args: { label: '10월 1일 수요일' } };

  return { meta: __meta, stories: { Today, Date }, order: ["Today","Date"] };
  } },
  { layer: "3 블록", file: "blocks/chat-group-card", load: function () {
// ChatGroupCard — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: ChatGroupCard,
  figma: '57:20087',
  parameters: { layout: 'padded' },
};

const Closed = { name: '닫힘 (기본)' };
const NoCount = { name: '인원 없음', args: { title: '물리학실험실 2 [001]', count: null } };
const NoChevron = { name: '› 없음', args: { chevron: false } };
const Open = {
  name: '펼침 — 사람 목록',
  args: { title: '물리학실험실 2 [001]', count: null, members: [{ name: '김연아(2251****)', avatar: 'avatar-03' }, { name: '이상화(2251****)', avatar: 'avatar-02' }] },
};
const Sections = {
  name: '펼침 — 교수자 · 학습자 묶음',
  args: { title: '물리학실험실 2 [001]', count: null, sections: [{ label: '교수자', members: [{ name: '고교수(1001****)', avatar: 'avatar-01' }] }, { label: '학습자', members: [{ name: '김연아(2251****)', avatar: 'avatar-03' }, { name: '이상화(2251****)', avatar: 'avatar-02' }] }] },
};
const SelectAll = {
  name: '펼침 — 전체 선택 줄',
  args: { title: '물리학실험실 2 [001]', count: null, selectAll: { count: 34, checked: false }, members: [{ name: '김연아(2251****)', avatar: 'avatar-03' }] },
};
const WithRight = {
  name: '펼침 — 오른쪽 선택 표시',
  render: () => ChatGroupCard({ title: '물리학실험실 2 [001]', count: null, members: [
    { name: '김연아(2251****)', avatar: 'avatar-03', right: SelectCheck({ checked: true }) },
    { name: '이상화(2251****)', avatar: 'avatar-02', right: SelectCheck({}) },
  ] }),
};

  return { meta: __meta, stories: { Closed, NoCount, NoChevron, Open, Sections, SelectAll, WithRight }, order: ["Closed","NoCount","NoChevron","Open","Sections","SelectAll","WithRight"] };
  } },
  { layer: "3 블록", file: "blocks/chat-message", load: function () {
// ChatMessage — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: ChatMessage,
  figma: '80:20270',
  parameters: { layout: 'padded' },
};

const Message = { name: 'message (기본)' };
const LongText = { name: '긴 글', args: { name: '이병헌', avatar: 'avatar-04', text: '과거 몇차례 잔디를 통해서 일하는 사람들에게는 ‘R&R을 넘어서는 역량’이 중요하다고 언급했습니다.' } };
const Pressed = { name: 'state pressed — 길게 누름', args: { state: 'pressed' } };
const Blocked = { name: 'state blocked — 차단한 사람', args: { state: 'blocked', name: '홍길동' } };
const System = { name: 'kind system — 초대·나감 안내', args: { kind: 'system', text: '김연아님이 대화방에서 나갔습니다.' } };
const Reply = {
  name: 'kind reply — 답장',
  args: { kind: 'reply', quote: { to: '박진영', text: '과거 몇차례 잔디를 통해서 일하는 사람들에게는 ‘R&R을 넘어서는 역량’이 중요하다고 언급했습니다.' }, text: '네 확인했습니다.' },
};
const WithLink = { name: '링크', args: { text: '자료 공유드립니다.', link: 'https://ecampus.smu.ac.kr/local/ubassistant/approve.php?id=86570' } };
const NoRead = { name: '읽음 수 없음', args: { read: null } };
const NoReactions = { name: '리액션 없음', args: { reactions: [], addReaction: false } };
const CustomReactions = { name: '리액션 직접 지정', args: { reactions: [{ emoji: '🎉', count: 2 }, { emoji: '👍', count: 5, selected: true }] } };

  return { meta: __meta, stories: { Message, LongText, Pressed, Blocked, System, Reply, WithLink, NoRead, NoReactions, CustomReactions }, order: ["Message","LongText","Pressed","Blocked","System","Reply","WithLink","NoRead","NoReactions","CustomReactions"] };
  } },
  { layer: "3 블록", file: "blocks/chat-notice", load: function () {
// ChatNotice — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: ChatNotice,
  figma: '93:23602',
};

const Closed = { name: '닫힘 (기본)' };
const Open = { name: '열림', args: { open: true } };
const OpenLong = { name: '열림 — 긴 본문', args: { open: true, body: '시험기간 2025년 4월 10~13일 입니다.\n\n동영상 시청 중 끊김과 관련하여 안내 말씀드립니다.\n\n1. WIFI를 통해 수강 시 영상 지연이 발생할 경우, 모바일 데이터로 바꿔 보세요.\n2. 다른 통신망(통신사)이나 기기로 재생해 보세요.' } };

  return { meta: __meta, stories: { Closed, Open, OpenLong }, order: ["Closed","Open","OpenLong"] };
  } },
  { layer: "3 블록", file: "blocks/chat-reply-bar", load: function () {
// ChatReplyBar — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: ChatReplyBar,
  figma: '112:17153',
};

const Default = {};
const Short = { name: '짧은 원문', args: { to: '김연아', text: '네 감사합니다.' } };

  return { meta: __meta, stories: { Default, Short }, order: ["Default","Short"] };
  } },
  { layer: "3 블록", file: "blocks/chip-tabs", load: function () {
// ChipTabs — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: ChipTabs,
  figma: '5:12886',
};

const First = { name: '첫 칸 (기본)' };
const Second = { name: '둘째 칸', args: { active: 1 } };
const TwoItems = { name: '두 개', args: { items: ['진행 중', '종료'], active: 0 } };

  return { meta: __meta, stories: { First, Second, TwoItems }, order: ["First","Second","TwoItems"] };
  } },
  { layer: "3 블록", file: "blocks/class-edit-row", load: function () {
// ClassEditRow — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: ClassEditRow,
  figma: '51:9191',
  parameters: { layout: 'padded' },
};

const Visible = { name: '공개 (기본)' };
const Hidden = { name: '비공개', args: { visible: false, title: '교육공학 개론', professor: '최지은 교수' } };
const WithAttrs = { name: 'attrs — data-id', args: { attrs: { 'data-id': 3 } } };

  return { meta: __meta, stories: { Visible, Hidden, WithAttrs }, order: ["Visible","Hidden","WithAttrs"] };
  } },
  { layer: "3 블록", file: "blocks/course-card", load: function () {
// CourseCard — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: CourseCard,
  figma: '5:12819',
};

const Grid = { name: 'grid (기본) 156×176', parameters: { layout: 'centered' } };
const List = { name: 'list 320×68', args: { layout: 'list', title: '사물인터넷과 4차산업사회' }, parameters: { layout: 'padded' } };
const Yellow = { name: 'color yellow', args: { color: 'yellow' }, parameters: { layout: 'centered' } };
const Orange = { name: 'color orange', args: { color: 'orange' }, parameters: { layout: 'centered' } };
const Green = { name: 'color green', args: { color: 'green' }, parameters: { layout: 'centered' } };
const Purple = { name: 'color purple', args: { color: 'purple' }, parameters: { layout: 'centered' } };
const LongTitle = { name: '긴 강의명', args: { title: '사물인터넷과 4차산업사회 — 스마트 팜 기술 도입 현황', professor: '홍길동 · 김교수' }, parameters: { layout: 'centered' } };
const AllColors = {
  name: '모든 color',
  render: () => ['blue', 'yellow', 'orange', 'green', 'purple'].map((color) => CourseCard({ color, title: color })).join(''),
  parameters: { layout: 'centered', arrange: 'row' },
};

  return { meta: __meta, stories: { Grid, List, Yellow, Orange, Green, Purple, LongTitle, AllColors }, order: ["Grid","List","Yellow","Orange","Green","Purple","LongTitle","AllColors"] };
  } },
  { layer: "3 블록", file: "blocks/date-strip", load: function () {
// DateStrip — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: DateStrip,
  figma: '7062:38201',
};

const Today = { name: '오늘 선택 (기본)' };
const OtherDay = { name: '다른 날 선택', args: { selected: 1 } };
const MonthChange = {
  name: '달이 바뀌는 날 (11/2)',
  args: { items: [{ label: '목', date: '30' }, { label: '금', date: '31' }, { label: '토', date: '11/1' }, { label: '오늘', date: '2' }, { label: '월', date: '3' }, { label: '화', date: '4' }, { label: '수', date: '5' }] },
};

  return { meta: __meta, stories: { Today, OtherDay, MonthChange }, order: ["Today","OtherDay","MonthChange"] };
  } },
  { layer: "3 블록", file: "blocks/deadline-card", load: function () {
// DeadlineCard — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: DeadlineCard,
  figma: '20:10530',
  parameters: { layout: 'centered', background: 'sky' },
};

const Default = {};
const Faded = { name: 'faded — 캐러셀 양옆', args: { faded: true } };
const Url = { name: 'URL 모듈', args: { module: 'module-url-28', title: '3-1. 스마트 팜 기술', course: '사물인터넷과 4차산업사회', remain: '1일 남았어요' } };

  return { meta: __meta, stories: { Default, Faded, Url }, order: ["Default","Faded","Url"] };
  } },
  { layer: "3 블록", file: "blocks/dropdown", load: function () {
// Dropdown — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: Dropdown,
  figma: '79:18854',
  parameters: { layout: 'centered' },
};

const Menu = { name: '메뉴 하나', args: { items: [{ icon: 'message-chat-circle', label: '차단 대화 관리' }] } };
const NoIcon = { name: '아이콘 없음', args: { items: [{ label: '최신순' }, { label: '이름순' }] } };
const Checked = {
  name: '선택형 (checked)',
  args: { items: [{ label: '전체', value: 'all', checked: true }, { label: '읽지 않음', value: 'unread' }, { label: '고정됨', value: 'pinned' }] },
};

  return { meta: __meta, stories: { Menu, NoIcon, Checked }, order: ["Menu","NoIcon","Checked"] };
  } },
  { layer: "3 블록", file: "blocks/emoji-bar", load: function () {
// EmojiBar — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: EmojiBar,
  figma: 'Message action bar',
  parameters: { layout: 'padded' },
};

const Default = { name: '6개 (기본)' };
const Few = { name: '3개', args: { emojis: [['heart', '좋아요'], ['check', '확인'], ['thumbsup', '최고']] } };

  return { meta: __meta, stories: { Default, Few }, order: ["Default","Few"] };
  } },
  { layer: "3 블록", file: "blocks/empty-state", load: function () {
// EmptyState — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: EmptyState,
  figma: '70:22686',
  parameters: { layout: 'padded' },
};

const Default = { name: '차단된 대화방 없음' };
const MessageEmpty = { name: '메시지 없음', args: { icon: 'illust-message-send', iconSize: [140, 140], text: '새로운 메시지를 시작해보세요.' } };
const WithTitleAction = {
  name: '제목 + 버튼 (네트워크 오류)',
  render: () => EmptyState({ icon: 'illust-network-error', iconSize: [200, 200], title: '연결이 불안정해요', text: '네트워크 연결 상태를 확인한 후\n다시 시도해 주세요.', action: Button({ label: '다시 시도하기', variant: 'outline', size: 'xl' }) }),
};

  return { meta: __meta, stories: { Default, MessageEmpty, WithTitleAction }, order: ["Default","MessageEmpty","WithTitleAction"] };
  } },
  { layer: "3 블록", file: "blocks/friend-row", load: function () {
// FriendRow — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: FriendRow,
  figma: '60:20862',
};

const Default = {};
const Selected = { name: 'selected — 고른 행', render: () => FriendRow({ selected: true, right: SelectCheck({ checked: true }) }) };
const Disabled = { name: 'disabled — 이미 멤버', render: () => FriendRow({ disabled: true, name: '이상화(2251****)', avatar: 'avatar-02', right: SelectCheck({ checked: true }) }) };
const Invite = { name: 'icon — 초대하기', args: { icon: 'plus-circle-48', name: '초대하기' } };
const WithRight = { name: '오른쪽 슬롯', render: () => FriendRow({ name: '봉준호(2251****)', avatar: 'avatar-04', right: SelectCheck({}) }) };

  return { meta: __meta, stories: { Default, Selected, Disabled, Invite, WithRight }, order: ["Default","Selected","Disabled","Invite","WithRight"] };
  } },
  { layer: "3 블록", file: "blocks/info-bar", load: function () {
// InfoBar — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: InfoBar,
  figma: '7062:38223',
  parameters: { layout: 'padded' },
};

const Default = { name: '칩 2개 + 변경 ›' };
const NoChips = { name: '칩 없음', args: { chips: [] } };
const NoAction = { name: '오른쪽 버튼 없음', args: { action: false } };
const BoxOnly = { name: 'box 칩만', args: { label: '10-31 (토) 13:00', chips: [{ label: '3교시', variant: 'box' }] } };

  return { meta: __meta, stories: { Default, NoChips, NoAction, BoxOnly }, order: ["Default","NoChips","NoAction","BoxOnly"] };
  } },
  { layer: "3 블록", file: "blocks/line-tabs", load: function () {
// LineTabs — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: LineTabs,
  figma: '85:21691',
  args: { items: ['사진/동영상', '문서', '링크', '공지'] },
};

const First = { name: '첫 칸' };
const Third = { name: '셋째 칸', args: { active: 2 } };

  return { meta: __meta, stories: { First, Third }, order: ["First","Third"] };
  } },
  { layer: "3 블록", file: "blocks/list-group", load: function () {
// ListGroup — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: ListGroup,
  parameters: { layout: 'padded', background: 'subtle' },
  args: { label: '대화방 관리', items: [{ icon: 'edit-20', label: '대화방 이름 변경', tone: 'muted' }, { icon: 'bell-setting-20', label: '대화방 알림 끄기', tone: 'muted' }, { icon: 'settings-20', label: '대화방 관리', tone: 'muted' }] },
};

const Card = { name: 'card (기본) — 흰 카드 + 구분선' };
const NoCard = { name: 'card false — 한 줄씩', args: { label: '메시지 번역', card: false, items: [{ icon: 'translate-20', label: '번역 언어 선택', tone: 'muted', trailing: 'chevron' }] } };
const Small = {
  name: 'size sm — 언어 선택',
  args: { label: '언어 선택', size: 'sm', items: [{ flag: 'kr', label: '한국어', trailing: 'check' }, { flag: 'us', label: '영어' }, { flag: 'jp', label: '일본어' }, { flag: 'cn', label: '중국어' }] },
};
const NoLabel = { name: '라벨 없음', args: { label: '' } };

  return { meta: __meta, stories: { Card, NoCard, Small, NoLabel }, order: ["Card","NoCard","Small","NoLabel"] };
  } },
  { layer: "3 블록", file: "blocks/list-item", load: function () {
// ListItem — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: ListItem,
  args: { icon: 'reply-20', label: '메시지 답장' },
  parameters: { layout: 'padded' },
};

const Default = { name: 'default (기본)' };
const Muted = { name: 'tone muted — 설정 목록', args: { icon: 'edit-20', label: '대화방 이름 변경', tone: 'muted' } };
const Danger = { name: 'tone danger — 삭제·나가기', args: { icon: 'trash-20-red', label: '메시지 삭제', tone: 'danger' } };
const Chevron = { name: 'trailing chevron — 다음 화면', args: { icon: 'translate-20', label: '번역 언어 선택', trailing: 'chevron', tone: 'muted' } };
const Check = { name: 'trailing check — 선택됨', args: { icon: undefined, flag: 'kr', label: '한국어', trailing: 'check' } };
const FlagUs = { name: 'flag us', args: { icon: undefined, flag: 'us', label: '영어' } };
const FlagJp = { name: 'flag jp', args: { icon: undefined, flag: 'jp', label: '일본어' } };
const FlagCn = { name: 'flag cn', args: { icon: undefined, flag: 'cn', label: '중국어' } };
const Small = { name: 'size sm (36)', args: { icon: undefined, flag: 'kr', label: '한국어', size: 'sm', trailing: 'check' } };
const NoIcon = { name: '아이콘 없음', args: { icon: undefined, label: '원문 보기' } };

  return { meta: __meta, stories: { Default, Muted, Danger, Chevron, Check, FlagUs, FlagJp, FlagCn, Small, NoIcon }, order: ["Default","Muted","Danger","Chevron","Check","FlagUs","FlagJp","FlagCn","Small","NoIcon"] };
  } },
  { layer: "3 블록", file: "blocks/media-viewer", load: function () {
// MediaViewer — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: MediaViewer,
  figma: '80:24028',
  parameters: { height: 560 },
};

const Video = { name: 'video (기본) — 재생 버튼' };
const Image = { name: 'image — 재생 버튼 없음', args: { type: 'image' } };

  return { meta: __meta, stories: { Video, Image }, order: ["Video","Image"] };
  } },
  { layer: "3 블록", file: "blocks/member-row", load: function () {
// MemberRow — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: MemberRow,
  figma: '7062:38271',
};

const Default = { name: '이름 + › / 학번' };
const NoChevron = { name: '› 없음', args: { chevron: false } };
const LongName = { name: '긴 이름 — 말줄임', args: { name: '남궁길동홍길동' } };
const WithAvatar = { name: '아바타', args: { avatar: 'avatar-03', name: '김연아' } };
const WithToggle = {
  name: '오른쪽 ToggleGroup (출석부)',
  render: () => MemberRow({ right: ToggleGroup({ overflow: { items: [{ value: 'early', label: '조퇴', icon: 'status-early', tone: 'warn' }, { value: 'lateearly', label: '지각조퇴', icon: 'status-lateearly', tone: 'neutral' }] } }) }),
};

  return { meta: __meta, stories: { Default, NoChevron, LongName, WithAvatar, WithToggle }, order: ["Default","NoChevron","LongName","WithAvatar","WithToggle"] };
  } },
  { layer: "3 블록", file: "blocks/menu-list", load: function () {
// MenuList — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: MenuList,
  figma: '21:11720',
  parameters: { layout: 'padded' },
};

const More = { name: 'white (기본) — 더보기 메뉴' };
const External = { name: 'gray — 외부링크 (more_externel_menu)', args: { tone: 'gray', items: [{ label: '외부링크 메뉴', trailing: 'link-external-20' }] } };
const Values = {
  name: '오른쪽 값 info · muted',
  args: { items: [{ icon: 'globe-20', label: '언어 설정', value: '한국어', valueTone: 'info' }, { icon: 'info-circle-20', label: '버전 정보', value: '1.0.0', valueTone: 'muted', trailing: '' }] },
};

  return { meta: __meta, stories: { More, External, Values }, order: ["More","External","Values"] };
  } },
  { layer: "3 블록", file: "blocks/message-input", load: function () {
// MessageInput — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: MessageInput,
  figma: '86:18467',
  parameters: { layout: 'padded' },
};

const Empty = { name: '빈 칸 (기본)' };
const WithValue = { name: '입력 중', args: { value: '네 감사합니다.' } };
const CustomPlaceholder = { name: '다른 안내 문구', args: { placeholder: '답장을 입력하세요.' } };

  return { meta: __meta, stories: { Empty, WithValue, CustomPlaceholder }, order: ["Empty","WithValue","CustomPlaceholder"] };
  } },
  { layer: "3 블록", file: "blocks/message-item", load: function () {
// MessageItem — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: MessageItem,
  figma: '19:8837',
};

const Dm = { name: 'dm · enabled (기본)' };
const Group = { name: 'group', args: { option: 'group' } };
const Focused = { name: 'state focused — 눌림', args: { state: 'focused' } };
const Update = { name: 'state update — 새 메시지', args: { option: 'group', state: 'update' } };
const Block = { name: 'state block — 차단·나감', args: { state: 'block', name: '홍길동', avatar: 'avatar-03' } };
const Plain = { name: '알림 끔·고정 아이콘 없음', args: { muted: false, pinned: false, name: '김연아', preview: '감사합니다.', avatar: 'avatar-03' } };
const SwipeRight = { name: 'swipe right — 오른쪽 액션', args: { swipe: 'right', name: '김연아', preview: '감사합니다.', avatar: 'avatar-03', unread: 10, muted: false, pinned: false } };
const SwipeLeft = { name: 'swipe left — 왼쪽 액션', args: { swipe: 'left', name: '김연아', preview: '감사합니다.', avatar: 'avatar-03', unread: 10, muted: false } };

  return { meta: __meta, stories: { Dm, Group, Focused, Update, Block, Plain, SwipeRight, SwipeLeft }, order: ["Dm","Group","Focused","Update","Block","Plain","SwipeRight","SwipeLeft"] };
  } },
  { layer: "3 블록", file: "blocks/module-item", load: function () {
// ModuleItem — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: ModuleItem,
  figma: '21:10764',
  parameters: { layout: 'padded' },
};

const Later = { name: 'D-4 (기본) — 회색 칩' };
const Soon = { name: 'D-3 이하 — 파란 칩', args: { dday: 3 } };
const Url = { name: 'URL 모듈 · 긴 제목', args: { dday: 2, module: 'module-url-28', title: '3-1. 스마트 팜 기술 도입 현황 및 효과 분석과 향후 과제' } };
const List = {
  name: '목록',
  render: () => Stack({ gap: 8, children: [ModuleItem({ dday: 1 }), ModuleItem({ dday: 3, module: 'module-url-28' }), ModuleItem({ dday: 7 })] }),
};

  return { meta: __meta, stories: { Later, Soon, Url, List }, order: ["Later","Soon","Url","List"] };
  } },
  { layer: "3 블록", file: "blocks/popover-alert", load: function () {
// PopoverAlert — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: PopoverAlert,
  figma: '82:25752',
  parameters: { layout: 'padded' },
};

const Closed = { name: '닫힘 (기본) — 한 줄' };
const Open = { name: '열림 — 시간 · 전체 글', args: { open: true, text: '과거 몇차례 잔디를 통해서 일하는 사람들에게는 ‘R&R을 넘어서는 역량’이 중요하다고 언급했습니다. 이를 바꿔 설명하면, ‘경계 없는 협업 능력’이 조직 성과를 결정하는 아주 중요한 요소라는 뜻이기도 합니다.' } };

  return { meta: __meta, stories: { Closed, Open }, order: ["Closed","Open"] };
  } },
  { layer: "3 블록", file: "blocks/popup", load: function () {
// Popup — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: Popup,
  figma: '80:22498',
  parameters: { layout: 'centered' },
};

const Delete = { name: '삭제 (기본) — danger' };
const Confirm = { name: '확인 — primary', args: { title: '대화방 이름 변경', body: '변경한 이름은 나에게만 보입니다.', actions: [{ label: '취소' }, { label: '확인', tone: 'primary' }] } };
const Leave = { name: '긴 본문 — 줄바꿈 유지', args: { title: '대화방 나가기', body: '대화방명이 길어지는 경우에는 말줄임처리...\n대화방을 나가시겠습니까?', actions: [{ label: '취소' }, { label: '나가기', tone: 'danger' }] } };
const OneAction = { name: '버튼 하나', args: { title: '알림', body: '저장되었습니다.', actions: [{ label: '확인', tone: 'primary' }] } };
const WithInput = {
  name: 'content — 입력칸',
  render: () => Popup({ title: '대화방 이름 변경', body: '', content: Input({ icon: null, clearable: false, value: '김연아, 이상화, 봉준호' }), actions: [{ label: '취소' }, { label: '확인', tone: 'primary' }] }),
};

  return { meta: __meta, stories: { Delete, Confirm, Leave, OneAction, WithInput }, order: ["Delete","Confirm","Leave","OneAction","WithInput"] };
  } },
  { layer: "3 블록", file: "blocks/segmented-control", load: function () {
// SegmentedControl — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: SegmentedControl,
  figma: '37:15014',
};

const First = { name: '첫 칸 (기본)' };
const Middle = { name: '가운데 — 양옆 구분선 숨김', args: { active: 1 } };
const Last = { name: '끝 칸', args: { active: 2 } };

  return { meta: __meta, stories: { First, Middle, Last }, order: ["First","Middle","Last"] };
  } },
  { layer: "3 블록", file: "blocks/select-all-row", load: function () {
// SelectAllRow — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: SelectAllRow,
  figma: '87:22551',
  parameters: { layout: 'padded' },
};

const Default = { name: '선택 안 함' };
const Checked = { name: '모두 선택', args: { checked: true } };

  return { meta: __meta, stories: { Default, Checked }, order: ["Default","Checked"] };
  } },
  { layer: "3 블록", file: "blocks/setting-card", load: function () {
// SettingCard — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: SettingCard,
  figma: '83:17411',
  parameters: { layout: 'padded', background: 'subtle' },
};

const Photos = {
  name: '사진/동영상 — ImageTile 4칸',
  render: () => SettingCard({ icon: 'file-img-24', title: '사진/동영상', children: Grid({ cols: 4, gap: 8, pad: [0, 20], children: [1, 2, 3, 4].map(() => ImageTile({})) }) }),
};
const TitleOnly = { name: '제목만 — 문서', args: { icon: 'file-info-24', title: '문서' } };
const NoMore = { name: '모두 보기 없음', args: { icon: 'link-24', title: '링크', more: false } };
const Members = {
  name: '대화 멤버 — list',
  render: () => SettingCard({ title: '대화 멤버', count: 5, more: false, list: true, children: [FriendRow({ icon: 'plus-circle-48', name: '초대하기' }), FriendRow({ name: '이병헌(2251****)', avatar: 'avatar-04' }), FriendRow({ name: '유비온(2251****)', avatar: 'avatar-06' })] }),
};
const Invite = {
  name: 'heading md — 멤버 초대 카드',
  render: () => SettingCard({ heading: 'md', title: '물리학실험실 2 [001]', more: false, list: true, aside: IconButton({ icon: 'caret-up-18', size: 32, label: '접기' }), children: Stack({ gap: 8, children: [SelectAllRow({}), FriendRow({ name: '김연아(2251****)', right: SelectCheck({ checked: true }), selected: true })] }) }),
};
const AllCards = {
  name: '카드 목록 (문서 · 링크 · 공지)',
  render: () => Stack({ gap: 8, children: [SettingCard({ icon: 'file-info-24', title: '문서' }), SettingCard({ icon: 'link-24', title: '링크' }), SettingCard({ icon: 'pin-24-blue', title: '공지' })] }),
};

  return { meta: __meta, stories: { Photos, TitleOnly, NoMore, Members, Invite, AllCards }, order: ["Photos","TitleOnly","NoMore","Members","Invite","AllCards"] };
  } },
  { layer: "3 블록", file: "blocks/share-file-card", load: function () {
// ShareFileCard — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: ShareFileCard,
  figma: '87:23224',
  parameters: { layout: 'padded' },
};

const Default = { name: '문서 (긴 이름 말줄임)' };
const Short = { name: '짧은 이름', args: { name: '발표자료.pptx', size: '2.1MB' } };

  return { meta: __meta, stories: { Default, Short }, order: ["Default","Short"] };
  } },
  { layer: "3 블록", file: "blocks/share-link-card", load: function () {
// ShareLinkCard — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: ShareLinkCard,
  figma: '89:23365',
  parameters: { layout: 'centered' },
};

const Default = { name: '미리보기 없음 (회색)' };
const LongTitle = { name: '긴 제목 — 말줄임', args: { title: '[공유] 2026학년도 1학기 물리학실험 최종 발표자료 모음', site: '유비온 이캠퍼스', url: 'ecampus.ubion.co.kr/course/view.php?id=1234' } };
const Grid2 = {
  name: '2열 격자 (대화방 기록)',
  render: () => Grid({ cols: 2, gap: 8, children: [ShareLinkCard({}), ShareLinkCard({})] }),
  parameters: { layout: 'padded' },
};

  return { meta: __meta, stories: { Default, LongTitle, Grid2 }, order: ["Default","LongTitle","Grid2"] };
  } },
  { layer: "3 블록", file: "blocks/start-chat", load: function () {
// StartChat — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: StartChat,
  figma: '79:18831',
  parameters: { layout: 'padded' },
};

const Dm = { name: '1:1 (기본) — 큰 아바타' };
const Group = { name: '단체 — 겹친 아바타 +N', args: { names: ['김연아', '이상화', '봉준호', '손흥민', '박지성'], avatars: ['avatar-05', 'avatar-02', 'avatar-06'], more: 5 } };
const GroupAutoMore = { name: '단체 — +N 자동 계산', args: { names: ['김연아', '이상화', '봉준호', '손흥민'], avatars: ['avatar-05', 'avatar-02', 'avatar-06'] } };

  return { meta: __meta, stories: { Dm, Group, GroupAutoMore }, order: ["Dm","Group","GroupAutoMore"] };
  } },
  { layer: "3 블록", file: "blocks/stat-grid", load: function () {
// StatGrid — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: StatGrid,
  figma: '7062:38229',
};

const Empty = { name: '모두 0 (기본) — 누를 수 없음' };
const Counts = {
  name: '개수 있음',
  args: { items: [{ label: '출석', count: 32, icon: 'status-present' }, { label: '결석', count: 0, icon: 'status-absent' }, { label: '지각', count: 2, icon: 'status-late' }, { label: '조퇴', count: 1, icon: 'status-early' }, { label: '지각조퇴', count: 0, icon: 'status-lateearly-muted' }] },
};
const Linked = {
  name: 'linked — 누르면 목록으로 (›)',
  args: { linked: true, items: [{ label: '출석', count: 32, icon: 'status-present' }, { label: '결석', count: 0, icon: 'status-absent' }, { label: '지각', count: 2, icon: 'status-late' }, { label: '조퇴', count: 1, icon: 'status-early' }, { label: '지각조퇴', count: 0, icon: 'status-lateearly-muted' }] },
};
const WithFooter = {
  name: 'footer — 처리 현황 + 필터',
  render: () => StatGrid({ footer: Stack({ direction: 'row', justify: 'between', children: [Ratio({ label: '처리 현황', value: 3, total: 40 }), Checkbox({ count: 37 })] }) }),
};

  return { meta: __meta, stories: { Empty, Counts, Linked, WithFooter }, order: ["Empty","Counts","Linked","WithFooter"] };
  } },
  { layer: "3 블록", file: "blocks/tag", load: function () {
// Tag — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: Tag,
  figma: '63:11157',
  parameters: { layout: 'centered' },
  args: { label: '김연아' },
};

const Avatar = { name: '아바타 (기본) · md 40' };
const Large = { name: 'size lg (44)', args: { size: 'lg' } };
const NotClosable = { name: '닫기 없음', args: { closable: false } };
const IconType = { name: '아이콘형 (avatar false)', args: { avatar: false, label: '물리학실험실 전체', icon: 'plus' } };
const TextOnly = { name: '글자만 (avatar false · icon null)', args: { avatar: false, icon: null, label: '물리학실험실 전체' } };
const Row = { name: '받는 사람 줄', render: () => [Tag({ avatar: false, icon: null, label: '물리학실험실 전체' }), Tag({ label: '강동원', avatar: 'avatar-04' }), Tag({ label: '김연아' })].join(' ') };

  return { meta: __meta, stories: { Avatar, Large, NotClosable, IconType, TextOnly, Row }, order: ["Avatar","Large","NotClosable","IconType","TextOnly","Row"] };
  } },
  { layer: "3 블록", file: "blocks/toggle-group", load: function () {
// ToggleGroup — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: ToggleGroup,
  figma: '7062:38277',
  parameters: { layout: 'centered' },
};

const Default = { name: '미처리 (기본) — 아무것도 안 고름' };
const Present = { name: '출석 선택', args: { value: 'present' } };
const Absent = { name: '결석 선택', args: { value: 'absent' } };
const Late = { name: '지각 선택', args: { value: 'late' } };
const WithOverflow = { name: '⋯ 메뉴 (닫힘)', args: { overflow: { items: [{ value: 'early', label: '조퇴', icon: 'status-early', tone: 'warn' }, { value: 'lateearly', label: '지각조퇴', icon: 'status-lateearly', tone: 'neutral' }] } } };
const OverflowOpen = { name: '⋯ 메뉴 열림', args: { overflow: { open: true, items: [{ value: 'early', label: '조퇴', icon: 'status-early', tone: 'warn' }, { value: 'lateearly', label: '지각조퇴', icon: 'status-lateearly', tone: 'neutral' }] } }, parameters: { height: 160 } };
const OverflowSelected = { name: '⋯ 항목 선택 (조퇴)', args: { value: 'early', overflow: { items: [{ value: 'early', label: '조퇴', icon: 'status-early', tone: 'warn' }, { value: 'lateearly', label: '지각조퇴', icon: 'status-lateearly', tone: 'neutral' }] } } };
const InRow = {
  name: '사람 행 안 (출석부)',
  render: () => MemberRow({ name: '남궁길동', right: ToggleGroup({ value: 'absent', overflow: { items: [{ value: 'early', label: '조퇴', icon: 'status-early', tone: 'warn' }, { value: 'lateearly', label: '지각조퇴', icon: 'status-lateearly', tone: 'neutral' }] } }) }),
  parameters: { layout: 'fullscreen' },
};

  return { meta: __meta, stories: { Default, Present, Absent, Late, WithOverflow, OverflowOpen, OverflowSelected, InRow }, order: ["Default","Present","Absent","Late","WithOverflow","OverflowOpen","OverflowSelected","InRow"] };
  } },
  { layer: "3 블록", file: "blocks/week-picker", load: function () {
// WeekPicker — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: WeekPicker,
  figma: '24:12363',
  parameters: { background: 'sky' },
};

const First = { name: '첫날 선택 (기본)' };
const Middle = { name: '중간 요일', args: { selected: 3 } };
const NoDots = {
  name: '학습 없는 주 (점 없음)',
  args: { days: [{ w: '일', d: 1 }, { w: '월', d: 2 }, { w: '화', d: 3 }, { w: '수', d: 4 }, { w: '목', d: 5 }, { w: '금', d: 6 }, { w: '토', d: 7 }] },
};

  return { meta: __meta, stories: { First, Middle, NoDots }, order: ["First","Middle","NoDots"] };
  } },
  { layer: "4 영역", file: "sections/app-header", load: function () {
// AppHeader — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: AppHeader,
  figma: '24:13004',
};

const Page = { name: 'page (기본) — 뒤로', args: { title: '관리' } };
const Default = { name: 'default — 메뉴', args: { type: 'default', title: '스마트 출석부' } };
const PopupPull = { name: 'popup_pull — 닫기', args: { type: 'popup_pull', title: '친구 추가' } };
const PageChat = { name: 'page_chat — 대화방 (오른쪽 ⋮)', args: { type: 'page_chat', title: '김연아, 이상화, 봉준호, 손흥민, 박지성' } };
const PhotoViewer = { name: 'photo-viewer — 제목 + 날짜', args: { type: 'photo-viewer', title: '발신 유저명', subtitle: '2026.01.21' } };
const NoRight = { name: '오른쪽 빈 자리 (right null)', args: { type: 'page_chat', title: '홍길동', right: null } };
const TitleIcon = { name: 'titleIcon — 동기화', args: { type: 'default', title: '스마트 출석부', titleIcon: 'refresh-16' } };

  return { meta: __meta, stories: { Page, Default, PopupPull, PageChat, PhotoViewer, NoRight, TitleIcon }, order: ["Page","Default","PopupPull","PageChat","PhotoViewer","NoRight","TitleIcon"] };
  } },
  { layer: "4 영역", file: "sections/deadline-carousel", load: function () {
// DeadlineCarousel — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: DeadlineCarousel,
  figma: '20:10530',
  parameters: { background: 'sky' },
};

const One = { name: '한 장 (기본)' };
const Many = { name: '여러 장 — 양옆 흐린 카드', args: { cards: [{}, { title: '3-1. 스마트 팜 기술', course: '사물인터넷과 4차산업사회' }, { title: '학습이론 3', remain: '1일 남았어요' }] } };

  return { meta: __meta, stories: { One, Many }, order: ["One","Many"] };
  } },
  { layer: "4 영역", file: "sections/footer", load: function () {
// Footer — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: Footer,
  figma: '37:14876',
};

const ButtonType = { name: 'button (기본)' };
const CountButton = { name: 'count-button — 총 2명 + 버튼', args: { type: 'count-button', count: 2, label: '대화시작하기' } };
const CountButtonCustom = { name: 'count-button — 문구 · 단위 바꿈 · disabled', args: { type: 'count-button', prefix: '미체크', count: 3, unit: '명', label: '출석부 저장', disabled: true } };
const ButtonPair = { name: 'button-pair — 보조 + 주 버튼 (출석부)', args: { type: 'button-pair', label: '출결 일괄 처리' } };
const ButtonPairCustom = { name: 'button-pair — 보조 버튼 지정', args: { type: 'button-pair', label: '저장', secondary: { label: '자동출결', iconRight: 'check-circle' } } };
const MessageInput = { name: 'message-input — 메시지 입력', args: { type: 'message-input' } };
const MessageInputSafe = { name: 'message-input · safe — 홈 표시줄 여백', args: { type: 'message-input', safe: true } };
const MessageBlock = { name: 'message-block — 차단 안내', args: { type: 'message-block' } };
const Empty = { name: 'empty — 빈 바닥', args: { type: 'empty' } };
const Disabled = { name: 'button · disabled', args: { label: '저장하기', disabled: true } };
const WithAttrs = { name: 'button · attrs', args: { label: '저장하기', attrs: { id: 'save', type: 'submit' } } };

  return { meta: __meta, stories: { ButtonType, CountButton, CountButtonCustom, ButtonPair, ButtonPairCustom, MessageInput, MessageInputSafe, MessageBlock, Empty, Disabled, WithAttrs }, order: ["ButtonType","CountButton","CountButtonCustom","ButtonPair","ButtonPairCustom","MessageInput","MessageInputSafe","MessageBlock","Empty","Disabled","WithAttrs"] };
  } },
  { layer: "4 영역", file: "sections/header", load: function () {
// Header — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: Header,
  figma: '5:12707',
};

const Home = { name: 'home (기본)', args: { variant: 'home' } };
const Class = { name: 'class — 학기 선택 · 카드형', args: { variant: 'class' } };
const ClassList = { name: 'class_list — 목록형', args: { variant: 'class_list' } };
const Message = { name: 'message', args: { variant: 'message' } };
const MessageOpen = { name: 'message-open — 드롭다운 열림', args: { variant: 'message-open' }, parameters: { height: 130 } };
const More = { name: 'more — 아이콘 없음', args: { variant: 'more' } };
const Custom = { name: '직접 구성 (title · caret · actions)', args: { title: '2026년 2학기', caret: true, actions: [{ icon: 'search-20', size: 40, label: '검색' }] } };
const WithMenu = { name: '직접 구성 — menu', args: { variant: 'message', menu: [{ icon: 'message-chat-circle', label: '차단 대화 관리' }] }, parameters: { height: 130 } };

  return { meta: __meta, stories: { Home, Class, ClassList, Message, MessageOpen, More, Custom, WithMenu }, order: ["Home","Class","ClassList","Message","MessageOpen","More","Custom","WithMenu"] };
  } },
  { layer: "4 영역", file: "sections/section", load: function () {
// Section — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: Section,
  parameters: { background: 'sky' },
};

const WithCount = {
  name: '제목 + 개수 + 내용 (홈)',
  render: () => Section({ title: '이번 주 학습', count: 2, pad: [20, 0], children: Stack({ gap: 8, pad: [0, 16], children: [ModuleItem({ dday: 2 }), ModuleItem({})] }) }),
};
const WithAside = {
  name: '오른쪽 보조 (aside)',
  render: () => Section({ title: '내 강의', pad: [20, 16], aside: Button({ label: '내 강의실 편집', variant: 'secondary', size: 'xs', icon: 'settings' }), children: CourseCard({ layout: 'list' }) }),
};
const Small = {
  name: 'size sm — 작은 제목 (숨김 강의)',
  render: () => Section({ size: 'sm', title: '숨김 강의', pad: [16, 20], children: ClassEditRow({ visible: false }) }),
  parameters: { background: undefined },
};

  return { meta: __meta, stories: { WithCount, WithAside, Small }, order: ["WithCount","WithAside","Small"] };
  } },
  { layer: "4 영역", file: "sections/tab-bar", load: function () {
// TabBar — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: TabBar,
  figma: '5:12712',
};

const Home = { name: 'home (기본) — 메시지 배지 11' };
const Class = { name: 'class', args: { active: 'class' } };
const Message = { name: 'message', args: { active: 'message' } };
const More = { name: 'more · 새 소식 점', args: { active: 'more', newDots: ['more'] } };
const NoBadge = { name: '배지 없음', args: { badges: {} } };

  return { meta: __meta, stories: { Home, Class, Message, More, NoBadge }, order: ["Home","Class","Message","More","NoBadge"] };
  } },
  { layer: "틀", file: "layout/dim", load: function () {
// Dim — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: Dim,
  description: '어두운 막 + 내용. 혼자 쓰지 않고 Screen({ overlay: Dim({ content }) }) 에 넣습니다.',
  parameters: { height: 260 },
};

const Center = { name: "center (기본) — 팝업", render: () => Dim({ content: Popup({}) }) };
const Bottom = { name: "bottom — 바텀시트", render: () => Dim({ align: 'bottom', content: BottomSheet({ items: [{ icon: 'reply-20', label: '메시지 답장' }] }) }) };

  return { meta: __meta, stories: { Center, Bottom }, order: ["Center","Bottom"] };
  } },
  { layer: "틀", file: "layout/grid", load: function () {
// Grid — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: Grid,
};

const TwoColumns = {
  name: '2열 · 칸 폭 고정 · 가운데',
  render: () => Grid({ cols: 2, colWidth: 156, gap: [16, 8], justify: 'center', pad: [12, 0], children: [CourseCard({}), CourseCard({ color: 'green', title: '창의적 문제해결' })] }),
};
const FlexibleColumns = { name: '4열 · 남는 폭 나눔', render: () => Grid({ cols: 4, gap: 8, pad: 20, children: [1, 2, 3, 4].map(() => ImageTile({})) }) };
const JustifyStart = { name: 'justify start', render: () => Grid({ cols: 2, colWidth: 100, gap: 8, justify: 'start', pad: 16, children: [ImageTile({}), ImageTile({})] }) };
const JustifyEnd = { name: 'justify end', render: () => Grid({ cols: 2, colWidth: 100, gap: 8, justify: 'end', pad: 16, children: [ImageTile({}), ImageTile({})] }) };

  return { meta: __meta, stories: { TwoColumns, FlexibleColumns, JustifyStart, JustifyEnd }, order: ["TwoColumns","FlexibleColumns","JustifyStart","JustifyEnd"] };
  } },
  { layer: "틀", file: "layout/screen", load: function () {
// Screen — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: Screen,
  description: '360×780 화면 틀. header · body(스크롤) · bottom · overlay · fab · toast 칸에 컴포넌트를 넣습니다. 완성 화면은 templates/screens.js(화면 템플릿 섹션) 참고.',
  parameters: { layout: 'phone' },
};

const Basic = {
  name: '헤더 + 본문 + 탭바',
  render: () => Screen({ header: Header({ variant: 'more' }), body: Stack({ pad: 20, children: MenuList({}) }), bottom: TabBar({ active: 'more' }) }),
};
const Sky = {
  name: "bg 'sky' — 홈",
  render: () => Screen({ bg: 'sky', header: Header({}), body: [WeekPicker({}), Section({ title: '이번 주 학습', count: 1, pad: [20, 0], children: Stack({ pad: [0, 16], children: ModuleItem({ dday: 2 }) }) })], bottom: TabBar({}) }),
};
const White = {
  name: "bg 'white' · Footer",
  render: () => Screen({ bg: 'white', header: AppHeader({ title: '관리' }), body: Stack({ pad: 20, children: Input({}) }), bottom: Footer({ label: '저장하기' }) }),
};
const Overlay = {
  name: 'overlay — 팝업 (Dim)',
  render: () => Screen({ header: AppHeader({ type: 'page_chat', title: '홍길동' }), bottom: Footer({ type: 'message-input' }), overlay: Dim({ content: Popup({}) }) }),
};
const Sheet = {
  name: "overlay — 바텀시트 (Dim align 'bottom')",
  render: () => Screen({ header: AppHeader({ type: 'page_chat', title: '홍길동' }), bottom: Footer({ type: 'message-input' }), overlay: Dim({ align: 'bottom', content: BottomSheet({ items: [{ icon: 'reply-20', label: '메시지 답장' }] }) }) }),
};
const WithToast = {
  name: 'toast — 하단 바로 위',
  render: () => Screen({ header: AppHeader({ title: '내 강의실 편집' }), body: Stack({ pad: 20, children: ClassEditRow({}) }), bottom: Footer({ label: '저장하기' }), toast: Toast({}) }),
};
const WithFab = {
  name: 'fab — 떠 있는 버튼',
  render: () => Screen({ header: Header({ variant: 'message' }), body: MessageItem({}), bottom: TabBar({ active: 'message' }), fab: Fab({}) }),
};
const NoStatusBar = {
  name: 'statusBar false',
  render: () => Screen({ statusBar: false, header: AppHeader({ title: '상태바 없음' }), bottom: TabBar({}) }),
};

  return { meta: __meta, stories: { Basic, Sky, White, Overlay, Sheet, WithToast, WithFab, NoStatusBar }, order: ["Basic","Sky","White","Overlay","Sheet","WithToast","WithFab","NoStatusBar"] };
  } },
  { layer: "틀", file: "layout/stack", load: function () {
// Stack — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: Stack,
  description: '쌓기 틀. 화면·블록에서 style="display:flex;gap…" 대신 씁니다. 간격은 숫자(px)로 주고, 토큰 단계(2–32)면 --spac-* 로 바뀝니다.',
};

const items = () => [ModuleItem({ dday: 2 }), ModuleItem({})];
const Column = { name: '세로 (기본) · gap · pad', render: () => Stack({ gap: 8, pad: [12, 16], children: items() }) };
const Row = {
  name: '가로 · 양끝 정렬',
  render: () => Stack({ direction: 'row', justify: 'between', align: 'center', pad: [8, 20], children: [Chip({ label: 'D-3' }), Button({ label: '편집', variant: 'secondary', size: 'xs' })] }),
};
const AlignStart = { name: 'align start', render: () => Stack({ direction: 'row', align: 'start', gap: 8, pad: 16, children: [Avatar({ size: 36 }), Chip({ label: '위로 붙음' })] }) };
const AlignEnd = { name: 'align end', render: () => Stack({ align: 'end', pad: 16, children: Button({ label: '오른쪽', size: 'xs' }) }) };
const AlignStretch = { name: 'align stretch', render: () => Stack({ align: 'stretch', pad: 16, children: Button({ label: '꽉 참', size: 'md' }) }) };
const JustifyStart = { name: 'justify start', render: () => Stack({ direction: 'row', justify: 'start', gap: 8, pad: 16, children: [Chip({ label: 'A' }), Chip({ label: 'B' })] }) };
const JustifyCenter = { name: 'justify center', render: () => Stack({ direction: 'row', justify: 'center', gap: 8, pad: 16, children: [Chip({ label: 'A' }), Chip({ label: 'B' })] }) };
const JustifyEnd = { name: 'justify end', render: () => Stack({ direction: 'row', justify: 'end', gap: 8, pad: 16, children: [Chip({ label: 'A' }), Chip({ label: 'B' })] }) };
const AlignCenter = { name: 'align center', render: () => Stack({ align: 'center', pad: 16, children: EmptyState({}) }) };
const AsList = { name: "tag 'ul' — 목록 의미", render: () => Stack({ tag: 'ul', gap: 0, children: [AlertItem({}), AlertItem({ divider: false })] }) };
const AsSection = { name: "tag 'section'", render: () => Stack({ tag: 'section', gap: 8, pad: 16, children: items() }) };
const Fill = {
  name: 'fill + justify end — 아래부터 쌓기 (채팅)',
  render: () => Stack({ fill: true, justify: 'end', gap: 16, pad: 20, children: [ChatDate({}), ChatMessage({})] }),
  parameters: { height: 320 },
};

  return { meta: __meta, stories: { Column, Row, AlignStart, AlignEnd, AlignStretch, JustifyStart, JustifyCenter, JustifyEnd, AlignCenter, AsList, AsSection, Fill }, order: ["Column","Row","AlignStart","AlignEnd","AlignStretch","JustifyStart","JustifyCenter","JustifyEnd","AlignCenter","AsList","AsSection","Fill"] };
  } },
  { layer: "틀", file: "layout/status-bar", load: function () {
// StatusBar — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: StatusBar,
  figma: '24:13152',
  description: 'iOS 상태바. Screen 이 자동으로 넣습니다(statusBar: false 로 끔).',
};

const Default = {};

  return { meta: __meta, stories: { Default }, order: ["Default"] };
  } },
  { layer: "틀", file: "layout/surface", load: function () {
// Surface — stories (Storybook CSF 모양 · 쇼케이스 Docs 와 스냅샷 테스트가 이 파일을 씁니다)

const __meta = {
  component: Surface,
};

const White = { name: 'white (기본)', render: () => Surface({ pad: 16, children: InfoBar({}) }) };
const Subtle = {
  name: 'subtle — 회색 바탕 안 흰 바탕',
  render: () => Surface({ tone: 'subtle', pad: 16, gap: 12, children: [Surface({ tone: 'white', pad: 16, children: InfoBar({}) }), Ratio({ label: '처리 현황', value: 3, total: 40 })] }),
};
const Fill = { name: 'fill — 화면 높이 꽉 채움', render: () => Surface({ tone: 'subtle', fill: true, pad: 16, children: EmptyState({}) }), parameters: { height: 300 } };
const Row = { name: '가로 쌓기', render: () => Surface({ direction: 'row', justify: 'between', align: 'center', pad: [12, 20], children: [Ratio({ label: '처리 현황', value: 3, total: 40 }), Checkbox({})] }) };

  return { meta: __meta, stories: { White, Subtle, Fill, Row }, order: ["White","Subtle","Fill","Row"] };
  } }
];

  const kebab = (s) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').replace(/[^\w-]+/g, '-').toLowerCase();
  const words = (s) => s.replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/_/g, ' ');
  const isId = (k) => /^[A-Za-z_$][\w$]*$/.test(k);
  function fmt(v, ind) {
    ind = ind || '';
    if (typeof v === 'string') return "'" + v.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n') + "'";
    if (Array.isArray(v)) {
      const items = v.map((x) => fmt(x, ind + '  '));
      const one = '[' + items.join(', ') + ']';
      return one.length < 70 ? one : '[\n' + items.map((x) => ind + '  ' + x).join(',\n') + ',\n' + ind + ']';
    }
    if (v && typeof v === 'object') {
      const items = Object.entries(v).filter(([, x]) => x !== undefined).map(([k, x]) => (isId(k) ? k : fmt(k)) + ': ' + fmt(x, ind + '  '));
      if (!items.length) return '{}';
      const one = '{ ' + items.join(', ') + ' }';
      return one.length < 70 ? one : '{\n' + items.map((x) => ind + '  ' + x).join(',\n') + ',\n' + ind + '}';
    }
    return String(v);
  }
  const renderSrc = (fn) => {
    const s = fn.toString().trim();
    const m = s.match(/^\(?\s*(\w*)\s*\)?\s*=>\s*([\s\S]*)$/);
    return m ? m[2].replace(/^\(([\s\S]*)\)$/, '$1').trim() : s;
  };
  function normalize(files, docs) {
    const comps = [];
    for (const f of files) {
      const { meta, stories, order } = f.load();
      const fn = meta.component;
      const name = meta.title || (fn && fn.name) || f.file;
      const id = kebab(name);
      const doc = (fn && docs[fn.name]) || { description: '', params: [] };
      const list = order.map((key) => {
        const s = stories[key] || {};
        const args = Object.assign({}, meta.args, s.args);
        const parameters = Object.assign({}, meta.parameters, s.parameters);
        const render = s.render || null;
        return {
          id: id + '--' + kebab(key), key, name: s.name || words(key), args, parameters, render,
          description: s.description || '',
          code: render ? renderSrc(render) : name + '(' + fmt(args) + ')',
          run: (over) => { const a = Object.assign({}, args, over); return render ? render(a) : fn(a); },
        };
      });
      comps.push({
        id, name, file: f.file, layer: meta.layer || f.layer, figma: meta.figma || '', component: fn,
        description: meta.description || doc.description, notes: meta.notes || '',
        params: doc.params, args: meta.args || {}, parameters: meta.parameters || {}, stories: list,
      });
    }
    return comps;
  }

const DOCS_BY_FN = {"Avatar":{"description":"아바타 (Avata-base: 24/28/32/36/40/48)","params":[{"name":"src","type":"string","optional":true,"desc":"이미지 URL 또는 에셋명 (avatar-02~05). 없으면 이름 첫 글자 플레이스홀더","control":"text","defaultSrc":null},{"name":"name","type":"string","optional":true,"desc":"플레이스홀더 이니셜용","control":"text","defaultSrc":"''","default":""},{"name":"size","type":"24|28|32|36|40|48","optional":true,"desc":"지름(px)","control":"select","options":[24,28,32,36,40,48],"defaultSrc":"48","default":48},{"name":"dimmed","type":"boolean","optional":true,"desc":"차단/나간 사용자 (투명도 25%)","control":"boolean","defaultSrc":"false","default":false},{"name":"alt","type":"string","optional":true,"desc":"스크린리더용 이름 (없으면 name)","control":"text","defaultSrc":"''","default":""}],"source":"primitives/avatar"},"AvatarGroup":{"description":"그룹 아바타 (아바타 + \"+N\" 원형, 겹침 -24px) */ /** 그룹 아바타 — 아바타(들) + \"+N\" 원형","params":[{"name":"src","type":"string","optional":true,"desc":"아바타 하나 (기본, 메시지 목록: 48px · 절반 겹침)","control":"text","defaultSrc":"'avatar-03'","default":"avatar-03"},{"name":"avatars","type":"string[]","optional":true,"desc":"여러 개 (대화 시작 안내: 36px · 8px 겹침, Figma start-chat 79:18831)","control":"object","defaultSrc":null},{"name":"more","type":"number","optional":true,"desc":"\"+N\" — 0 이면 생략","control":"number","defaultSrc":"5","default":5},{"name":"overlap","type":"number","optional":true,"desc":"겹치는 폭(px). 기본 = 크기의 절반","control":"number","defaultSrc":null},{"name":"size","type":"36|48","optional":true,"desc":"아바타 지름 — 48 = 메시지 목록, 36 이하 = 대화 시작 안내(작은 +N)","control":"select","options":[36,48],"defaultSrc":"48","default":48}],"source":"primitives/avatar"},"Badge":{"description":"카운트 배지 (새 메시지 수 — 민트 배경)","params":[{"name":"count","type":"number|string","optional":true,"desc":"숫자 (99+ 같은 글자도 됨)","control":"text","defaultSrc":"1","default":1},{"name":"size","type":"'md'|'sm'|'square'","optional":true,"desc":"md=22px/12SB, sm=18px/11SB, square=radius4/13M","control":"select","options":["md","sm","square"],"defaultSrc":"'md'","default":"md"}],"source":"primitives/badge"},"Button":{"description":"텍스트 버튼","params":[{"name":"label","type":"string","optional":false,"desc":"","control":"text","defaultSrc":"''","default":""},{"name":"variant","type":"'primary'|'secondary'|'outline'|'outline-primary'|'gray'|'ghost'","optional":true,"desc":"primary  : 코스모스 블루 (저장하기/대화시작하기)\nsecondary: 연회색 배경 (내 강의실 편집)\noutline  : 흰 배경 + 보더 (차단 해제 · 리스트 내)\noutline-primary: 흰 배경 + 연파랑 보더 + 파랑 글자 (출석부 '자동출결', Figma 7062:38460)\ngray     : 진회색 배경 (차단 해제 · 푸터)","control":"select","options":["primary","secondary","outline","outline-primary","gray","ghost"],"defaultSrc":"'primary'","default":"primary"},{"name":"size","type":"'xl'|'lg'|'md'|'sm'|'xs'|'2xs'","optional":true,"desc":"xl=48(출석부 BottomCTA), lg=44, md=40, sm=32(btn-ghost-base-state, 출석부 '변경 ›'), xs=28, 2xs=24(채팅방 설정 '모두 보기 ›')","control":"select","options":["xl","lg","md","sm","xs","2xs"],"defaultSrc":"'lg'","default":"lg"},{"name":"icon","type":"string","optional":true,"desc":"왼쪽 아이콘 이름","control":"text","defaultSrc":null},{"name":"iconRight","type":"string","optional":true,"desc":"오른쪽 아이콘 이름","control":"text","defaultSrc":null},{"name":"block","type":"boolean","optional":true,"desc":"가로 100%","control":"boolean","defaultSrc":"false","default":false},{"name":"disabled","type":"boolean","optional":true,"desc":"","control":"boolean","defaultSrc":"false","default":false},{"name":"tone","type":"'danger'|'primary'","optional":true,"desc":"ghost: 글자색(danger=nega-secondary 팝업 '삭제', primary=info-secondary 팝업 '확인') · outline: danger = 빨강 테두리+글자('대화방 나가기')","control":"select","options":["danger","primary"],"defaultSrc":null},{"name":"attrs","type":"Record<string,string|number|boolean>","optional":true,"desc":"추가 속성 (id, type, data-* 등)","control":"object","defaultSrc":null}],"source":"primitives/button"},"IconButton":{"description":"아이콘 버튼","params":[{"name":"icon","type":"string","optional":false,"desc":"","control":"text","defaultSrc":null},{"name":"size","type":"16|20|24|28|32|36|40","optional":true,"desc":"버튼 크기 (아이콘: 16/20/14/16/18/18/20).\n16·20 = 여백 없는 아이콘만(입력칸 지우기, 답장 바 닫기) · 28 = Figma btn-icon-basic 28(공지 펼치기, 강의 › )","control":"select","options":[16,20,24,28,32,36,40],"defaultSrc":"36","default":36},{"name":"active","type":"boolean","optional":true,"desc":"선택 상태 (연회색 배경)","control":"boolean","defaultSrc":"false","default":false},{"name":"round","type":"boolean","optional":true,"desc":"원형 + 연회색 배경 (메시지 입력 +/↑)","control":"boolean","defaultSrc":"false","default":false},{"name":"tone","type":"'primary'","optional":true,"desc":"primary = 파란 바탕 (흰 아이콘과 함께 — download-18-white)","control":"object","defaultSrc":null},{"name":"attrs","type":"Record<string,string|number|boolean>","optional":true,"desc":"추가 속성 (id, data-* 등)","control":"object","defaultSrc":null},{"name":"label","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":"''","default":""}],"source":"primitives/button"},"Checkbox":{"description":"체크박스 + 라벨 (출석부 '미처리만 보기' 7062:38718) — 토큰 기반 구성","params":[{"name":"label","type":"string","optional":false,"desc":"","control":"text","defaultSrc":"'미처리만 보기'","default":"미처리만 보기"},{"name":"checked","type":"boolean","optional":true,"desc":"","control":"boolean","defaultSrc":"false","default":false},{"name":"count","type":"string|number","optional":true,"desc":"라벨 뒤 빨간 개수 \"(3)\"","control":"text","defaultSrc":null},{"name":"id","type":"string","optional":true,"desc":"input id (상태 보존용)","control":"text","defaultSrc":null},{"name":"disabled","type":"boolean","optional":true,"desc":"누를 수 없음 (흐리게)","control":"boolean","defaultSrc":"false","default":false}],"source":"primitives/checkbox"},"Chip":{"description":"칩 (chip/times — \"3시간 남았어요\", \"D-3\", \"1교시\")","params":[{"name":"tone","type":"'info'|'neutral'|'posi'|'nega'|'warn'|'label'","optional":true,"desc":"label = 연파랑 바탕 + 회색 글자. 상태가 아닌 속성 표시 (출석부 InfoBar '1교시', Figma 7062:38226)","control":"select","options":["info","neutral","posi","nega","warn","label"],"defaultSrc":"'info'","default":"info"},{"name":"label","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":"''","default":""}],"source":"primitives/chip"},"Divider":{"description":"가로 구분선 (--bo-hierarchy-primary)","params":[{"name":"inset","type":"number","optional":true,"desc":"좌우 안쪽 여백(px). 예: 20 → 화면 좌우 20 띄움","control":"number","defaultSrc":"0","default":0}],"source":"primitives/divider"},"Fab":{"description":"떠 있는 48px 원형 버튼. 화면에 둘 때는 Screen({ fab: Fab({}) })","params":[{"name":"icon","type":"string","optional":true,"desc":"48px 아이콘 (기본 fab-plus-48 = 파란 원 + 흰 +)","control":"text","defaultSrc":"'fab-plus-48'","default":"fab-plus-48"},{"name":"label","type":"string","optional":true,"desc":"","control":"text","defaultSrc":"'새 대화'","default":"새 대화"},{"name":"attrs","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":null}],"source":"primitives/fab"},"Flag":{"description":"국기 (원형 24). 한국·미국 국기는 Figma 처럼 얇은 테두리(bo/neutral/b20% → 같은 회색 --bo-hierarchy-quaternary)","params":[{"name":"code","type":"'kr'|'us'|'jp'|'cn'","optional":false,"desc":"","control":"select","options":["kr","us","jp","cn"],"defaultSrc":"'kr'","default":"kr"},{"name":"size","type":"number","optional":true,"desc":"","control":"number","defaultSrc":"24","default":24}],"source":"primitives/flag"},"ImageTile":{"description":"정사각 사진 칸 (이미지가 없으면 회색 칸)","params":[{"name":"src","type":"string","optional":true,"desc":"이미지 URL","control":"text","defaultSrc":null}],"source":"primitives/image-tile"},"Input":{"description":"검색/텍스트 입력 (h44, radius 12)","params":[{"name":"state","type":"'enabled'|'focused'|'disabled'","optional":true,"desc":"focused 는 정적 시안용(실제 포커스 시 자동 적용)","control":"select","options":["enabled","focused","disabled"],"defaultSrc":"'enabled'","default":"enabled"},{"name":"validation","type":"'normal'|'filled'|'invalid'","optional":true,"desc":"","control":"select","options":["normal","filled","invalid"],"defaultSrc":null},{"name":"value","type":"string","optional":true,"desc":"","control":"text","defaultSrc":"''","default":""},{"name":"placeholder","type":"string","optional":true,"desc":"","control":"text","defaultSrc":"'검색어를 입력하세요.'","default":"검색어를 입력하세요."},{"name":"icon","type":"string|null","optional":true,"desc":"리딩 아이콘 (기본 search, null = 없음 — 팝업 이름 입력)","control":"object","defaultSrc":"'search'","default":"search"},{"name":"clearable","type":"boolean","optional":true,"desc":"값이 있을 때 지우기 버튼 (기본 true)","control":"boolean","defaultSrc":"true","default":true}],"source":"primitives/input"},"Pill":{"description":"회색 둥근 태그 (Figma chip/tag2-base, 출석부 InfoBar '보강' 7062:38227)","params":[{"name":"label","type":"string","optional":false,"desc":"","control":"text","defaultSrc":"''","default":""}],"source":"primitives/pill"},"Ratio":{"description":"비율 표시 — 라벨 + 진한 값 + 연한 \"/전체\".","params":[{"name":"label","type":"string","optional":true,"desc":"앞 문구 (콜론까지 포함하지 않음)","control":"text","defaultSrc":"''","default":""},{"name":"value","type":"number|string","optional":false,"desc":"","control":"text","defaultSrc":"0","default":0},{"name":"total","type":"number|string","optional":false,"desc":"","control":"text","defaultSrc":"0","default":0}],"source":"primitives/ratio"},"Reaction":{"description":"이모지 리액션 버튼","params":[{"name":"emoji","type":"string","optional":true,"desc":"문자 이모지 (기본 👍)","control":"text","defaultSrc":"'👍'","default":"👍"},{"name":"icon","type":"string","optional":true,"desc":"이모지 대신 쓸 아이콘 에셋명 (예: emoji-grin)","control":"text","defaultSrc":null},{"name":"count","type":"number","optional":true,"desc":"누른 사람 수 (없으면 숫자 생략)","control":"number","defaultSrc":null},{"name":"selected","type":"boolean","optional":true,"desc":"내가 누른 리액션 (파란 테두리)","control":"boolean","defaultSrc":"false","default":false},{"name":"add","type":"boolean","optional":true,"desc":"리액션 추가 버튼(웃는 얼굴 +) — 다른 인자는 무시","control":"boolean","defaultSrc":"false","default":false}],"source":"primitives/reaction"},"SelectCheck":{"description":"원형 선택 표시 — 목록에서 여러 명 고르기 (대화 멤버 초대)","params":[{"name":"checked","type":"boolean","optional":true,"desc":"","control":"boolean","defaultSrc":"false","default":false},{"name":"label","type":"string","optional":true,"desc":"스크린리더용 이름","control":"text","defaultSrc":"'선택'","default":"선택"},{"name":"attrs","type":"Record<string,string|number|boolean>","optional":true,"desc":"","control":"object","defaultSrc":null}],"source":"primitives/select-check"},"SwipeAction":{"description":"스와이프 액션 (Message list swipe 19:8837)","params":[{"name":"label","type":"string","optional":true,"desc":"글자 (아이콘이 있으면 aria-label 로만 씀)","control":"text","defaultSrc":"''","default":""},{"name":"icon","type":"string","optional":true,"desc":"흰 아이콘 에셋명 (예: pin-20-white)","control":"text","defaultSrc":null},{"name":"tone","type":"'neutral'|'strong'|'danger'|'info'","optional":true,"desc":"neutral=회색(읽음·알림) · strong=연회색(차단) · danger=빨강(나가기) · info=파랑(고정)","control":"select","options":["neutral","strong","danger","info"],"defaultSrc":"'neutral'","default":"neutral"}],"source":"primitives/swipe-action"},"Toast":{"description":"토스트 (Notice_guide_secondary 37:14852 — \"저장되었습니다\"). 화면에 띄울 때는 Screen({ toast })","params":[{"name":"label","type":"string","optional":true,"desc":"","control":"text","defaultSrc":"'저장되었습니다'","default":"저장되었습니다"},{"name":"icon","type":"string|null","optional":true,"desc":"앞 아이콘 에셋명 (null = 아이콘 없음)","control":"object","defaultSrc":"'check'","default":"check"}],"source":"primitives/toast"},"AlertItem":{"description":"알림 목록 행 — 강의명 · 시간 / 알림 제목, 아래 구분선 강의명 글자색: Figma 는 tx/hierarchy/quinary(3.2:1) — 흰 배경 대비 규칙(CLAUDE.md)에 따라 quaternary 사용","params":[{"name":"course","type":"string","optional":true,"desc":"강의명 (한 줄, 넘치면 말줄임)","control":"text","defaultSrc":"'창의코딩-모두의파이썬 (2025-2-2)'","default":"창의코딩-모두의파이썬 (2025-2-2)"},{"name":"time","type":"string","optional":true,"desc":"시간 (\"오후12:56\")","control":"text","defaultSrc":"'오후12:56'","default":"오후12:56"},{"name":"title","type":"string","optional":true,"desc":"알림 제목 (한 줄, 넘치면 말줄임)","control":"text","defaultSrc":"'[학습이론 1 행동주의]새 과제가 등록되었습니다.'","default":"[학습이론 1 행동주의]새 과제가 등록되었습니다."},{"name":"divider","type":"boolean","optional":true,"desc":"아래 구분선","control":"boolean","defaultSrc":"true","default":true}],"source":"blocks/alert-item"},"ListItem":{"description":"목록 한 줄 — 왼쪽 아이콘(20) 또는 국기(24) · 라벨 · 오른쪽 › / ✓","params":[{"name":"label","type":"string","optional":false,"desc":"","control":"text","defaultSrc":"''","default":""},{"name":"icon","type":"string","optional":true,"desc":"20px 아이콘 (reply-20, edit-20 …)","control":"text","defaultSrc":null},{"name":"flag","type":"'kr'|'us'|'jp'|'cn'","optional":true,"desc":"국기 (언어 선택)","control":"select","options":["kr","us","jp","cn"],"defaultSrc":null},{"name":"trailing","type":"'chevron'|'check'","optional":true,"desc":"chevron = 다음 화면, check = 선택됨(파란 ✓)","control":"select","options":["chevron","check"],"defaultSrc":null},{"name":"tone","type":"'default'|'muted'|'danger'","optional":true,"desc":"default = 진한 회색(메뉴) · muted = 한 단계 연한 회색(설정 목록) · danger = 빨강(삭제·나가기)\n빨강 글자: Figma tx/semantic/nega-primary(3.8:1) → 대비 규칙에 따라 nega-secondary","control":"select","options":["default","muted","danger"],"defaultSrc":"'default'","default":"default"},{"name":"size","type":"'md'|'sm'","optional":true,"desc":"md = 44px · 15M, sm = 36px · 14M (언어 선택 시트)","control":"select","options":["md","sm"],"defaultSrc":"'md'","default":"md"},{"name":"attrs","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":null}],"source":"blocks/list-item"},"BottomSheet":{"description":"바텀시트 — 손잡이 · (가운데 제목) · 내용. 화면에 띄울 때는 Screen({ overlay: Dim({ content, align: 'bottom' }) })","params":[{"name":"title","type":"string","optional":true,"desc":"가운데 제목 ('대화방 설정')","control":"text","defaultSrc":"''","default":""},{"name":"tone","type":"'white'|'subtle'","optional":true,"desc":"white = 흰 시트(길게 누르기 메뉴), subtle = 연회색 시트(설정 · 번역 — 안에 흰 목록)","control":"select","options":["white","subtle"],"defaultSrc":"'white'","default":"white"},{"name":"items","type":"{icon?:string,label:string,tone?:'default'|'muted'|'danger'}[]","optional":true,"desc":"간단 메뉴 → ListItem 목록","control":"object","defaultSrc":"[]","default":[]},{"name":"content","type":"string|string[]","optional":true,"desc":"직접 구성할 때 (EmojiBar, ListGroup, Button …)","control":"object","defaultSrc":null},{"name":"gap","type":"number","optional":true,"desc":"내용 사이 간격 (기본 16)","control":"number","defaultSrc":"16","default":16}],"source":"blocks/bottom-sheet"},"FriendRow":{"description":"사람 선택 행 — 아바타 48 + 이름(학번) / 오른쪽 슬롯 (선택 체크 등)","params":[{"name":"name","type":"string","optional":false,"desc":"예: '김연아(2251****)'","control":"text","defaultSrc":"'김연아(2251****)'","default":"김연아(2251****)"},{"name":"avatar","type":"string","optional":true,"desc":"avatar-01~07 또는 URL","control":"text","defaultSrc":"'avatar-03'","default":"avatar-03"},{"name":"icon","type":"string","optional":true,"desc":"아바타 대신 48px 아이콘 + 굵은 라벨 (대화 멤버 '초대하기' = plus-circle-48)","control":"text","defaultSrc":null},{"name":"right","type":"string","optional":true,"desc":"오른쪽 슬롯 (SelectCheck 등)","control":"text","defaultSrc":"''","default":""},{"name":"selected","type":"boolean","optional":true,"desc":"고른 행 (연회색 바탕)","control":"boolean","defaultSrc":"false","default":false},{"name":"disabled","type":"boolean","optional":true,"desc":"이미 멤버라 고를 수 없음 (흐린 이름)","control":"boolean","defaultSrc":"false","default":false},{"name":"attrs","type":"Record<string,string|number|boolean>","optional":true,"desc":"","control":"object","defaultSrc":null}],"source":"blocks/friend-row"},"SelectAllRow":{"description":"\"전체 선택 34명\" + 원형 선택 표시 숫자 글자색: Figma tx/coursmos/primary(4.3:1) → 대비 규칙에 따라 coursmos-secondary","params":[{"name":"label","type":"string","optional":true,"desc":"","control":"text","defaultSrc":"'전체 선택'","default":"전체 선택"},{"name":"count","type":"number|string","optional":true,"desc":"","control":"text","defaultSrc":"34","default":34},{"name":"checked","type":"boolean","optional":true,"desc":"","control":"boolean","defaultSrc":"false","default":false}],"source":"blocks/select-all-row"},"ChatGroupCard":{"description":"강의 묶음 카드 — 강의명 + 인원 + › / (펼치면) 구분 라벨 + 사람 목록 인원 숫자 글자색: Figma 는 tx/coursmos/primary(4.3:1) — 대비 규칙에 따라 coursmos-secondary","params":[{"name":"title","type":"string","optional":false,"desc":"강의명 (넘치면 말줄임)","control":"text","defaultSrc":"'강의명이 길어지면 이렇게 처리하면 좋겠습니다'","default":"강의명이 길어지면 이렇게 처리하면 좋겠습니다"},{"name":"count","type":"number|string","optional":true,"desc":"인원 (\"34명\"). 없으면 생략","control":"text","defaultSrc":"34","default":34},{"name":"label","type":"string","optional":true,"desc":"목록 위 구분 라벨 ('학습자')","control":"text","defaultSrc":"'학습자'","default":"학습자"},{"name":"members","type":"{name:string,avatar?:string,right?:string}[]","optional":true,"desc":"있으면 아래에 FriendRow 목록","control":"object","defaultSrc":null},{"name":"sections","type":"{label:string,members:object[]}[]","optional":true,"desc":"여러 묶음 (대화 상대 선택: '교수자' · '학습자') — members 대신","control":"object","defaultSrc":null},{"name":"selectAll","type":"{count:number,checked?:boolean}","optional":true,"desc":"제목 아래 '전체 선택 N명' 줄","control":"object","defaultSrc":null},{"name":"chevron","type":"boolean","optional":true,"desc":"오른쪽 › 버튼 (기본 true)","control":"boolean","defaultSrc":"true","default":true}],"source":"blocks/chat-group-card"},"ChatMessage":{"description":"채팅 메시지 (chating-message 80:20270) 회색 보조 글자: Figma tx/hierarchy/quinary → 대비 규칙에 따라 quaternary. 답장 대상 이름 info-primary → info-secondary","params":[{"name":"kind","type":"'message'|'system'|'reply'","optional":true,"desc":"message = 기본, system = 나감·초대 안내('김연아님이 대화방에서 나갔습니다.' — 시간·읽음·리액션 없음), reply = 답장(인용 + 본문)","control":"select","options":["message","system","reply"],"defaultSrc":"'message'","default":"message"},{"name":"state","type":"'default'|'pressed'|'blocked'","optional":true,"desc":"pressed = 길게 누른 메시지(연회색 바탕), blocked = 차단한 사람(흐리게)","control":"select","options":["default","pressed","blocked"],"defaultSrc":"'default'","default":"default"},{"name":"reactions","type":"{emoji?:string,icon?:string,count:number,selected?:boolean}[]","optional":true,"desc":"기본 = Figma 이모지 이미지 2개","control":"object","defaultSrc":"REACTIONS"},{"name":"read","type":"number|null","optional":true,"desc":"읽음 수 (null = 표시 안 함)","control":"object","defaultSrc":"4","default":4},{"name":"quote","type":"{to:string,text:string}","optional":true,"desc":"reply 인용 — '@to 에게 답장' + 원문","control":"object","defaultSrc":null},{"name":"link","type":"string","optional":true,"desc":"본문 아래 링크 (밑줄 파란 글자)","control":"text","defaultSrc":null},{"name":"name","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":"'김연아'","default":"김연아"},{"name":"time","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":"'오후 05:00'","default":"오후 05:00"},{"name":"text","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":"'안녕하세요.'","default":"안녕하세요."},{"name":"avatar","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":"'avatar-03'","default":"avatar-03"},{"name":"addReaction","type":"boolean","optional":true,"desc":"","undocumented":true,"control":"boolean","defaultSrc":"true","default":true}],"source":"blocks/chat-message"},"ChatDate":{"description":"채팅 날짜 구분선 (chat-date 79:18832) — 가는 선 가운데 테두리 알약","params":[{"name":"label","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":"'오늘'","default":"오늘"}],"source":"blocks/chat-message"},"ChatNotice":{"description":"채팅방 공지 — 제목 한 줄 · 날짜 | 작성자 · 펼치기. open 이면 회색 머리 + 본문 날짜·작성자 글자색: Figma tx/hierarchy/quinary → 대비 규칙에 따라 quaternary","params":[{"name":"title","type":"string","optional":false,"desc":"","control":"text","defaultSrc":"'시험기간 2025년 4월 10~13일 입니다 시험기간 2025년 4월 10~13일 입니다.'","default":"시험기간 2025년 4월 10~13일 입니다 시험기간 2025년 4월 10~13일 입니다."},{"name":"date","type":"string","optional":true,"desc":"","control":"text","defaultSrc":"'2025.08.18'","default":"2025.08.18"},{"name":"author","type":"string","optional":true,"desc":"","control":"text","defaultSrc":"'이지영(2451****)'","default":"이지영(2451****)"},{"name":"body","type":"string","optional":true,"desc":"본문 (줄바꿈 유지)","control":"text","defaultSrc":"'시험기간 2025년 4월 10~13일 입니다.\\n\\n동영상 시청 중 끊김과 관련하여 안내 말씀드립니다.'","default":"시험기간 2025년 4월 10~13일 입니다.\\n\\n동영상 시청 중 끊김과 관련하여 안내 말씀드립니다."},{"name":"open","type":"boolean","optional":true,"desc":"","control":"boolean","defaultSrc":"false","default":false}],"source":"blocks/chat-notice"},"ChatReplyBar":{"description":"답장 중 바 — \"↳ @이름 에게 답장\" / 원문 한 줄 / 닫기 글자색: Figma 이름 tx/semantic/info-primary · 원문 tx/hierarchy/quinary → 대비 규칙에 따라 info-secondary · quaternary","params":[{"name":"to","type":"string","optional":false,"desc":"답장 대상 이름 (앞에 @ 붙음)","control":"text","defaultSrc":"'유비온'","default":"유비온"},{"name":"text","type":"string","optional":false,"desc":"원문 (한 줄, 넘치면 말줄임)","control":"text","defaultSrc":"'과거 몇차례 잔디를 통해서 일하는 사람들에게는 ‘R&R을 넘어선'","default":"과거 몇차례 잔디를 통해서 일하는 사람들에게는 ‘R&R을 넘어선"}],"source":"blocks/chat-reply-bar"},"ClassEditRow":{"description":"내 강의실 편집 행 — 공개 토글(눈) · 강의명/교수 · 순서 변경 손잡이 공개 토글은 Figma status_toggle_icon(46:9178): 공개 = 열린 눈, 비공개 = 감긴 눈 → IconButton 40","params":[{"name":"title","type":"string","optional":true,"desc":"강의명 (한 줄, 넘치면 말줄임)","control":"text","defaultSrc":"'2025년 폭력예방교육(메디컬 교원 대상)'","default":"2025년 폭력예방교육(메디컬 교원 대상)"},{"name":"professor","type":"string","optional":true,"desc":"","control":"text","defaultSrc":"'홍길동 교수'","default":"홍길동 교수"},{"name":"visible","type":"boolean","optional":true,"desc":"공개 여부 (aria-pressed 로 남김)","control":"boolean","defaultSrc":"true","default":true},{"name":"attrs","type":"Record<string,string|number|boolean>","optional":true,"desc":"행 추가 속성 (예: { 'data-id': 3 })","control":"object","defaultSrc":null}],"source":"blocks/class-edit-row"},"CourseCard":{"description":"강의 카드 (Card-class-base 5:12819)","params":[{"name":"layout","type":"'grid'|'list'","optional":true,"desc":"grid=156×176, list=320×68","control":"select","options":["grid","list"],"defaultSrc":"'grid'","default":"grid"},{"name":"color","type":"'blue'|'yellow'|'orange'|'green'|'purple'","optional":true,"desc":"썸네일 패턴 색","control":"select","options":["blue","yellow","orange","green","purple"],"defaultSrc":"'blue'","default":"blue"},{"name":"title","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":"'물리학수업'","default":"물리학수업"},{"name":"professor","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":"'홍길동 교수'","default":"홍길동 교수"}],"source":"blocks/course-card"},"DateStrip":{"description":"날짜 줄 (DateStrip 7062:38201) — 62×60 날짜 칸을 가로로 나열, 가운데 정렬(양 끝은 잘림). 달이 바뀌는 날짜에만 월을 함께 표기(\"11/2\"), 오늘은 가운데에 두는 것이 Figma 규칙입니다.","params":[{"name":"items","type":"{label:string,date:string}[]","optional":true,"desc":"위 줄(요일·'오늘') / 아래 줄(날짜)","control":"object","defaultSrc":"DEFAULT_DAYS"},{"name":"selected","type":"number","optional":true,"desc":"선택 칸 인덱스 (파란 칸)\n각 칸은 data-index 속성을 가집니다.","control":"number","defaultSrc":"3","default":3}],"source":"blocks/date-strip"},"DeadlineCard":{"description":"마감 학습 카드 (Card 20:10467 — 오늘 마감 학습)","params":[{"name":"module","type":"string","optional":true,"desc":"모듈 아이콘 (module-vod · module-vod-28 · module-url-28)","control":"text","defaultSrc":"'module-vod'","default":"module-vod"},{"name":"faded","type":"boolean","optional":true,"desc":"캐러셀 양옆 카드 (흰 80%)","control":"boolean","defaultSrc":"false","default":false},{"name":"label","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":"'오늘 마감 학습'","default":"오늘 마감 학습"},{"name":"remain","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":"'3시간 남았어요'","default":"3시간 남았어요"},{"name":"title","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":"'학습이론 2: 경험주의'","default":"학습이론 2: 경험주의"},{"name":"course","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":"'물리학수업'","default":"물리학수업"}],"source":"blocks/deadline-card"},"Dropdown":{"description":"드롭다운 메뉴 (Header message-open 의 more-dropdown, 79:18854)","params":[{"name":"items","type":"{icon?:string,label:string,value?:string,checked?:boolean}[]","optional":true,"desc":"value 를 주면 data-value 로, checked 를 주면 선택형 메뉴(menuitemradio, aria-checked)로 그립니다.","control":"object","defaultSrc":"[]","default":[]},{"name":"style","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":"''","default":""}],"source":"blocks/dropdown"},"EmojiBar":{"description":"이모지 6개를 가로로 고르게 나열 (28px Apple 이모지 이미지, Figma 와 같은 그림)","params":[{"name":"emojis","type":"[string,string][]","optional":true,"desc":"[에셋 이름(emoji-…의 뒤), 라벨]","control":"object","defaultSrc":"EMOJIS"}],"source":"blocks/emoji-bar"},"EmptyState":{"description":"빈 화면·오류 안내 — 그림 + (제목) + 문구 + (버튼). 가운데 정렬 문구 글자색: Figma tx/hierarchy/quinary → 대비 규칙에 따라 quaternary","params":[{"name":"text","type":"string","optional":true,"desc":"안내 문구","control":"text","defaultSrc":"'차단된 대화방이 없습니다.'","default":"차단된 대화방이 없습니다."},{"name":"title","type":"string","optional":true,"desc":"제목 (오류 화면 '연결이 불안정해요'). 있으면 그림·글·버튼 사이 20, 문구 14R","control":"text","defaultSrc":"''","default":""},{"name":"icon","type":"string","optional":true,"desc":"그림 에셋 (기본 block-chatting · 오류 illust-network-error)","control":"text","defaultSrc":"'block-chatting'","default":"block-chatting"},{"name":"iconSize","type":"number[]","optional":true,"desc":"[가로, 세로] — Figma 칸 크기","control":"object","defaultSrc":"[35.49, 35.28]"},{"name":"action","type":"string","optional":true,"desc":"아래 버튼 슬롯 (예: Button({ label: '다시 시도하기', variant: 'outline', size: 'xl' }))","control":"text","defaultSrc":"''","default":""}],"source":"blocks/empty-state"},"InfoBar":{"description":"정보 줄 (SubRow 7062:38223 — \"10-30 (금) 09:00 [1교시] (보강)  변경 ›\")","params":[{"name":"label","type":"string","optional":false,"desc":"왼쪽 주 텍스트","control":"text","defaultSrc":"'10-30 (금) 09:00'","default":"10-30 (금) 09:00"},{"name":"chips","type":"{label:string,variant?:'box'|'pill'}[]","optional":true,"desc":"box=Chip({ tone: 'label' })(chip/times), pill=Pill(chip/tag2-base)","control":"object","defaultSrc":"[{ label: '1교시', variant: 'box' }, { label: '보강', variant: 'pill' }]"},{"name":"action","type":"{label:string,icon?:string,attrs?:object}|false","optional":true,"desc":"오른쪽 Button(ghost, sm)","control":"object","defaultSrc":"{ label: '변경', icon: 'chevron-right' }"}],"source":"blocks/info-bar"},"ListGroup":{"description":"라벨 + ListItem 묶음 라벨 글자색: Figma tx/hierarchy/quinary → 대비 규칙에 따라 quaternary","params":[{"name":"label","type":"string","optional":true,"desc":"위 작은 제목 ('대화방 관리')","control":"text","defaultSrc":"''","default":""},{"name":"items","type":"object[]","optional":false,"desc":"ListItem 인자 배열","control":"object","defaultSrc":"[]","default":[]},{"name":"card","type":"boolean","optional":true,"desc":"true = 흰 카드 안에 구분선으로 묶음, false = 한 줄씩 그대로(흰 줄)","control":"boolean","defaultSrc":"true","default":true},{"name":"size","type":"'md'|'sm'","optional":true,"desc":"행 크기 (sm = 언어 선택 시트)","control":"select","options":["md","sm"],"defaultSrc":"'md'","default":"md"}],"source":"blocks/list-group"},"MediaViewer":{"description":"미디어 뷰어 — 회색 화면(이미지 또는 동영상 재생 버튼) + 아래 내려받기 줄","params":[{"name":"type","type":"'video'|'image'","optional":true,"desc":"video = 가운데 재생 버튼","control":"select","options":["video","image"],"defaultSrc":"'video'","default":"video"},{"name":"src","type":"string","optional":true,"desc":"이미지 URL (없으면 회색 화면)","control":"text","defaultSrc":null}],"source":"blocks/media-viewer"},"MemberRow":{"description":"사람 행 (LearnerRows › Row 7062:38271) — 이름(15B, 5글자 넘으면 말줄임) + › / 보조 텍스트(학번) / 오른쪽 슬롯","params":[{"name":"name","type":"string","optional":false,"desc":"","control":"text","defaultSrc":"'홍길동'","default":"홍길동"},{"name":"sub","type":"string","optional":true,"desc":"이름 아래 보조 텍스트","control":"text","defaultSrc":"'202080187'","default":"202080187"},{"name":"chevron","type":"boolean","optional":true,"desc":"이름 옆 › (상세 보기)","control":"boolean","defaultSrc":"true","default":true},{"name":"right","type":"string","optional":true,"desc":"오른쪽 슬롯 (예: ToggleGroup)","control":"text","defaultSrc":"''","default":""},{"name":"avatar","type":"string","optional":true,"desc":"아바타 에셋/URL (Figma 출석부에는 없음, 다른 목록용 선택 옵션)","control":"text","defaultSrc":null},{"name":"attrs","type":"Record<string,string|number|boolean>","optional":true,"desc":"행 요소 추가 속성","control":"object","defaultSrc":null}],"source":"blocks/member-row"},"MenuList":{"description":"메뉴 목록 — 행 사이 구분선이 있는 카드형 목록 (더보기 탭)","params":[{"name":"items","type":"{icon?:string,label:string,value?:string,valueTone?:'info'|'muted',trailing?:string,attrs?:object}[]","optional":true,"desc":"icon: 왼쪽 20px 아이콘 · value: 오른쪽 값(언어 '한국어' = info, 버전 '1.0.0' = muted)\ntrailing: 오른쪽 아이콘 (기본 회색 › chevron-right-16-gray, 외부 링크는 link-external-20)","control":"object","defaultSrc":"MORE_ITEMS"},{"name":"tone","type":"'white'|'gray'","optional":true,"desc":"white = 흰 카드 + 테두리(more_menu), gray = 회색 바탕(more_externel_menu)","control":"select","options":["white","gray"],"defaultSrc":"'white'","default":"white"}],"source":"blocks/menu-list"},"MessageInput":{"description":"메시지 입력 필드 (pill) — Footer 'message input' 내부","params":[{"name":"placeholder","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":"'메세지를 입력하세요.'","default":"메세지를 입력하세요."},{"name":"value","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":"''","default":""}],"source":"blocks/message-input"},"MessageItem":{"description":"메시지 목록 아이템","params":[{"name":"option","type":"'dm'|'group'","optional":true,"desc":"","control":"select","options":["dm","group"],"defaultSrc":"'dm'","default":"dm"},{"name":"state","type":"'enabled'|'focused'|'update'|'block'","optional":true,"desc":"update=새 메시지 하이라이트, focused=눌림, block=차단/나간 대화","control":"select","options":["enabled","focused","update","block"],"defaultSrc":"'enabled'","default":"enabled"},{"name":"swipe","type":"'left'|'right'|null","optional":true,"desc":"스와이프 액션 노출","control":"select","options":["left","right"],"defaultSrc":"null","default":null},{"name":"muted","type":"boolean","optional":true,"desc":"알림 끔 아이콘","control":"boolean","defaultSrc":"true","default":true},{"name":"pinned","type":"boolean","optional":true,"desc":"고정 아이콘","control":"boolean","defaultSrc":"true","default":true},{"name":"name","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":"option === 'group' ? '김연아, 이상화, 봉준호, 손흥민, 박지성' : '긴 대화방명은 말줄임표를 사용하여 한줄로 표기'"},{"name":"preview","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":"state === 'block' ? '대화방을 나갔습니다.' : option === 'group' ? '안녕하세요~' : '과거 몇차례 잔디를 통해서 일하는 사...'"},{"name":"avatar","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":"'avatar-04'","default":"avatar-04"},{"name":"more","type":"number","optional":true,"desc":"","undocumented":true,"control":"number","defaultSrc":"5","default":5},{"name":"unread","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":"option === 'group' ? 10 : 1"}],"source":"blocks/message-item"},"ModuleItem":{"description":"학습 모듈 아이템 (Learning module-base 21:10764)","params":[{"name":"dday","type":"number","optional":false,"desc":"남은 일수 — 3 이하면 강조(파란 칩)","control":"number","defaultSrc":"4","default":4},{"name":"module","type":"string","optional":true,"desc":"28px 모듈 아이콘","control":"text","defaultSrc":"'module-vod-28'","default":"module-vod-28"},{"name":"title","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":"'1-2. [과제] IoT 기술이 적용된 산업 사례 조사 보고서'","default":"1-2. [과제] IoT 기술이 적용된 산업 사례 조사 보고서"},{"name":"course","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":"'사물인터넷과 4차산업사회'","default":"사물인터넷과 4차산업사회"}],"source":"blocks/module-item"},"PopoverAlert":{"description":"고정 메시지 팝오버 — 핀 · 보낸 사람(+시간) / 내용 · 펼치기 그림자: Figma 0 4 6 -1 → 이 시스템의 0 오프셋 그림자 --shadow-md","params":[{"name":"name","type":"string","optional":false,"desc":"","control":"text","defaultSrc":"'김연아'","default":"김연아"},{"name":"time","type":"string","optional":true,"desc":"열림에서만 표시","control":"text","defaultSrc":"'오전 05:00'","default":"오전 05:00"},{"name":"text","type":"string","optional":false,"desc":"닫힘 = 한 줄 말줄임, 열림 = 전체","control":"text","defaultSrc":"'과거 몇차례 잔디를 통해서 일하는 사람들에게는 ‘R&R을 넘어서는 역량‘이 중요하다고 언급했습니다.'","default":"과거 몇차례 잔디를 통해서 일하는 사람들에게는 ‘R&R을 넘어서는 역량‘이 중요하다고 언급했습니다."},{"name":"open","type":"boolean","optional":true,"desc":"","control":"boolean","defaultSrc":"false","default":false}],"source":"blocks/popover-alert"},"Popup":{"description":"팝업 다이얼로그 (popup 80:22498)","params":[{"name":"actions","type":"{label:string,tone?:'default'|'danger'|'primary'}[]","optional":true,"desc":"","control":"object","defaultSrc":"[{ label: '취소' }, { label: '삭제', tone: 'danger' }]"},{"name":"body","type":"string","optional":true,"desc":"본문 텍스트 (HTML 원하면 content 사용)","control":"text","defaultSrc":"'메시지를 모두에게서 삭제할까요?'","default":"메시지를 모두에게서 삭제할까요?"},{"name":"title","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":"'메시지 삭제'","default":"메시지 삭제"},{"name":"content","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":null}],"source":"blocks/popup"},"SettingCard":{"description":"채팅방 설정 카드 — 제목 줄(아이콘 · 제목 · 개수 / 오른쪽) + 내용 개수 글자색: Figma tx/hierarchy/quinary → 대비 규칙에 따라 quaternary","params":[{"name":"title","type":"string","optional":false,"desc":"","control":"text","defaultSrc":"'사진/동영상'","default":"사진/동영상"},{"name":"icon","type":"string","optional":true,"desc":"24px 제목 아이콘 (file-img-24 · file-info-24 · link-24 · pin-24-blue)","control":"text","defaultSrc":null},{"name":"count","type":"number|string","optional":true,"desc":"제목 옆 개수 ('대화 멤버 5')","control":"text","defaultSrc":null},{"name":"more","type":"string|false","optional":true,"desc":"오른쪽 '모두 보기 ›' 라벨. false 면 없음","control":"object","defaultSrc":"'모두 보기'","default":"모두 보기"},{"name":"aside","type":"string","optional":true,"desc":"오른쪽 슬롯 (more 대신, 예: IconButton)","control":"text","defaultSrc":"''","default":""},{"name":"heading","type":"'lg'|'md'","optional":true,"desc":"lg = 16SB(기본), md = 15B · 높이 36(멤버 초대 카드)","control":"select","options":["lg","md"],"defaultSrc":"'lg'","default":"lg"},{"name":"children","type":"string|string[]","optional":true,"desc":"내용 (Grid(ImageTile …), FriendRow 목록 …)","control":"object","defaultSrc":"''","default":""},{"name":"list","type":"boolean","optional":true,"desc":"내용이 사람 목록일 때 — 아래 여백 8 (Figma member · member_add)","control":"boolean","defaultSrc":"false","default":false}],"source":"blocks/setting-card"},"ShareLinkCard":{"description":"링크 카드 (156×180) — 위 미리보기 / 제목 · 사이트명 / 주소","params":[{"name":"title","type":"string","optional":false,"desc":"","control":"text","defaultSrc":"'[공유]유비온_발표자료 입니다'","default":"[공유]유비온_발표자료 입니다"},{"name":"site","type":"string","optional":true,"desc":"","control":"text","defaultSrc":"'유비온_발표자료'","default":"유비온_발표자료"},{"name":"url","type":"string","optional":true,"desc":"","control":"text","defaultSrc":"'www.ubion.co.kr'","default":"www.ubion.co.kr"},{"name":"image","type":"string","optional":true,"desc":"미리보기 이미지 URL (없으면 회색 칸)","control":"text","defaultSrc":null}],"source":"blocks/share-card"},"ShareFileCard":{"description":"문서 카드 — 파일 아이콘 40 · 이름 / 크기 · 내려받기 크기 글자색: Figma tx/hierarchy/quinary → 대비 규칙에 따라 quaternary","params":[{"name":"name","type":"string","optional":false,"desc":"","control":"text","defaultSrc":"'문서명 문서명 문서명 문서명 문서명 문서명'","default":"문서명 문서명 문서명 문서명 문서명 문서명"},{"name":"size","type":"string","optional":true,"desc":"","control":"text","defaultSrc":"'16.7MB'","default":"16.7MB"},{"name":"icon","type":"string","optional":true,"desc":"파일 아이콘 에셋 (file-ppt-40 …)","control":"text","defaultSrc":"'file-ppt-40'","default":"file-ppt-40"}],"source":"blocks/share-card"},"StartChat":{"description":"대화 시작 안내 — 1:1 이면 큰 아바타(56), 단체면 겹친 아바타(36) + \"+N\"","params":[{"name":"names","type":"string[]","optional":true,"desc":"상대 이름들 (1명 = 기본, 2명 이상 = 단체)","control":"object","defaultSrc":"['홍길동']"},{"name":"avatars","type":"string[]","optional":true,"desc":"아바타 에셋 (단체는 앞 3개만 표시)","control":"object","defaultSrc":"['avatar-05']"},{"name":"more","type":"number","optional":true,"desc":"단체에서 \"+N\" (기본: 이름 수 - 표시한 아바타 수)","control":"number","defaultSrc":null}],"source":"blocks/start-chat"},"StatGrid":{"description":"상태별 개수 줄 (SessionStrip 7062:38229 — 출석 현황 & 미처리) 아이콘+라벨 / 숫자를 가로로 균등 배치. 숫자가 0이면 누를 수 없고, linked 면 0이 아닌 칸에 › 를 붙입니다.","params":[{"name":"items","type":"{label:string,count:number|string,icon?:string,value?:string}[]","optional":true,"desc":"","control":"object","defaultSrc":"[\n    { label: '출석', count: 0, icon: 'status-present', value: 'present' },\n    { label: '결석', count: 0, icon: 'status-absent', value: 'absent' },\n    { label: '지각', count: 0, icon: 'status-late', value: 'late' },\n    { label: '조퇴', count: 0, icon: 'status-early', value: 'early' },\n    { label: '지각조퇴', count: 0, icon: 'status-lateearly-muted', value: 'lateearly' },\n  ]"},{"name":"linked","type":"boolean","optional":true,"desc":"칸을 눌러 목록으로 이동할 수 있음(Active 상태)","control":"boolean","defaultSrc":"false","default":false},{"name":"footer","type":"string","optional":true,"desc":"아래 구분선 줄 슬롯 (예: 처리 현황 + Checkbox)\n각 칸: data-value, data-count","control":"text","defaultSrc":null}],"source":"blocks/stat-grid"},"ChipTabs":{"description":"필 형태 칩 탭 (정규강좌/자율강좌/교육프로그램)","params":[{"name":"items","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":"['정규강좌', '자율강좌', '교육프로그램']"},{"name":"active","type":"number","optional":true,"desc":"","undocumented":true,"control":"number","defaultSrc":"0","default":0}],"source":"blocks/tabs"},"SegmentedControl":{"description":"세그먼트 컨트롤 (회색 트랙 + 흰 선택 칸)","params":[{"name":"items","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":"['정규강좌', '자율강좌', '교육프로그램']"},{"name":"active","type":"number","optional":true,"desc":"","undocumented":true,"control":"number","defaultSrc":"0","default":0}],"source":"blocks/tabs"},"LineTabs":{"description":"라인 탭 (하단 인디케이터, 채팅방 설정 등) — 스타일은 토큰 기반 추정","params":[{"name":"items","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":"['사진', '파일', '링크']"},{"name":"active","type":"number","optional":true,"desc":"","undocumented":true,"control":"number","defaultSrc":"0","default":0}],"source":"blocks/tabs"},"Tag":{"description":"선택 태그 (con-base — 받는 사람 선택 칩)","params":[{"name":"size","type":"'md'|'lg'","optional":true,"desc":"md=40, lg=44","control":"select","options":["md","lg"],"defaultSrc":"'md'","default":"md"},{"name":"avatar","type":"string|false","optional":true,"desc":"아바타 에셋/URL. false 면 아이콘형","control":"object","defaultSrc":"'avatar-03'","default":"avatar-03"},{"name":"closable","type":"boolean","optional":true,"desc":"","control":"boolean","defaultSrc":"true","default":true},{"name":"label","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":"'label'","default":"label"},{"name":"icon","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":"'plus'","default":"plus"}],"source":"blocks/tag"},"ToggleGroup":{"description":"토글 그룹 (리스트 SessionStrip 7062:38277 · 상태 스펙 default/selected/unselected/active) 버튼 여러 개 중 하나를 고르는 단일 선택. 고르면 선택 버튼만 tone 색 테두리, 나머지는 흐려집니다.","params":[{"name":"items","type":"{value:string,label:string,icon?:string,iconOff?:string,tone?:'info'|'nega'|'posi'|'warn'|'neutral'}[]","optional":false,"desc":"icon: 기본/선택 아이콘, iconOff: 다른 버튼이 선택됐을 때(흐린 상태) 아이콘","control":"object","defaultSrc":"[\n    { value: 'present', label: '출석', icon: 'status-present', iconOff: 'status-present-off', tone: 'info' },\n    { value: 'absent', label: '결석', icon: 'status-absent', iconOff: 'status-absent-off', tone: 'nega' },\n    { value: 'late', label: '지각', icon: 'status-late', iconOff: 'status-late-off', tone: 'posi' },\n  ]"},{"name":"value","type":"string|null","optional":true,"desc":"선택 값. null 이면 아무것도 고르지 않은 기본 상태","control":"object","defaultSrc":"null","default":null},{"name":"overflow","type":"{icon?:string,label?:string,open?:boolean,items:{value:string,label:string,icon?:string,tone?:string}[]}","optional":true,"desc":"⋯ 버튼과 메뉴. value 가 overflow 항목이면 ⋯ 자리에 그 아이콘을 tone 테두리로 보여 줍니다(출석부 조퇴·지각조퇴).","control":"object","defaultSrc":null},{"name":"label","type":"string","optional":true,"desc":"그룹 aria-label (예: '홍길동 출결')","control":"text","defaultSrc":"''","default":""},{"name":"attrs","type":"Record<string,string|number|boolean>","optional":true,"desc":"그룹 요소 추가 속성 (예: { 'data-row': 3 })\n버튼: data-value=\"값\" aria-pressed, ⋯ 버튼: data-overflow aria-expanded, 메뉴 항목: data-value aria-checked","control":"object","defaultSrc":null}],"source":"blocks/toggle-group"},"WeekPicker":{"description":"주간 날짜 선택 (Date picker 24:12363)","params":[{"name":"days","type":"{w:string,d:number|string,dot?:boolean}[]","optional":true,"desc":"","control":"object","defaultSrc":null},{"name":"selected","type":"number","optional":true,"desc":"선택 인덱스","control":"number","defaultSrc":"0","default":0}],"source":"blocks/week-picker"},"DeadlineCarousel":{"description":"마감 카드 슬라이드 (가운데 카드 + 양옆 미리보기)","params":[{"name":"cards","type":"object[]","optional":true,"desc":"DeadlineCard 인자 배열. 첫 장이 가운데, 두 장 이상이면 양옆에 흐린 카드","control":"object","defaultSrc":"[{}]"}],"source":"sections/deadline-carousel"},"Footer":{"description":"하단 고정 영역","params":[{"name":"type","type":"'empty'|'button'|'count-button'|'button-pair'|'message-input'|'message-block'","optional":true,"desc":"","control":"select","options":["empty","button","count-button","button-pair","message-input","message-block"],"defaultSrc":"'button'","default":"button"},{"name":"secondary","type":"{label?:string,icon?:string,iconRight?:string,attrs?:object}","optional":true,"desc":"button-pair 왼쪽 보조 버튼","control":"object","defaultSrc":null},{"name":"attrs","type":"object","optional":true,"desc":"주 버튼 추가 속성(id·type·data-*) — button · count-button · button-pair","control":"object","defaultSrc":null},{"name":"disabled","type":"boolean","optional":true,"desc":"주 버튼 비활성 — button · count-button · button-pair","control":"boolean","defaultSrc":"false","default":false},{"name":"label","type":"string","optional":true,"desc":"버튼 라벨","control":"text","defaultSrc":null},{"name":"count","type":"number|string","optional":true,"desc":"count-button 의 숫자","control":"text","defaultSrc":"2","default":2},{"name":"prefix","type":"string","optional":true,"desc":"count-button 숫자 앞 문구 (기본 '총', 빈 문자열이면 생략) 예: '미체크'","control":"text","defaultSrc":"'총'","default":"총"},{"name":"unit","type":"string","optional":true,"desc":"count-button 숫자 뒤 단위 (기본 '명') 예: '건', '개'","control":"text","defaultSrc":"'명'","default":"명"},{"name":"caption","type":"string","optional":true,"desc":"message-block 안내 문구","control":"text","defaultSrc":"'차단 친구와는 대화할 수 없습니다.'","default":"차단 친구와는 대화할 수 없습니다."},{"name":"safe","type":"boolean","optional":true,"desc":"message-input 아래에 홈 표시줄 여백(26) — 채팅방 기본 화면은 86, 시트·답장 바가 있을 때는 60","control":"boolean","defaultSrc":"false","default":false},{"name":"placeholder","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":null}],"source":"sections/footer"},"Header":{"description":"메인 탭 헤더 (h68, Head/20B)","params":[{"name":"variant","type":"'home'|'class'|'class_list'|'message'|'message-open'|'more'","optional":true,"desc":"","control":"select","options":["home","class","class_list","message","message-open","more"]},{"name":"title","type":"string","optional":true,"desc":"","control":"text"},{"name":"caret","type":"boolean","optional":true,"desc":"학기 선택 ▼","control":"boolean"},{"name":"actions","type":"{icon:string,size?:36|40,active?:boolean,label?:string}[]","optional":true,"desc":"","control":"object"},{"name":"menu","type":"{icon?:string,label:string}[]","optional":true,"desc":"열린 드롭다운","control":"object"}],"source":"sections/header"},"AppHeader":{"description":"서브 페이지 헤더 (h56, 하단 보더)","params":[{"name":"type","type":"'default'|'popup_pull'|'page'|'page_chat'|'photo-viewer'","optional":true,"desc":"","control":"select","options":["default","popup_pull","page","page_chat","photo-viewer"],"defaultSrc":"'page'","default":"page"},{"name":"title","type":"string","optional":true,"desc":"","control":"text","defaultSrc":"''","default":""},{"name":"subtitle","type":"string","optional":true,"desc":"photo-viewer 날짜","control":"text","defaultSrc":"''","default":""},{"name":"right","type":"string|null","optional":true,"desc":"오른쪽 아이콘 이름. null 이면 빈 자리. 생략하면 type 기본값","control":"object","defaultSrc":null},{"name":"titleIcon","type":"string","optional":true,"desc":"타이틀 오른쪽 16px 아이콘 (스마트 출석부의 동기화 'refresh-16')","control":"text","defaultSrc":null}],"source":"sections/header"},"Stack":{"description":"숫자 하나 | [세로, 가로] | [위, 오른쪽, 아래, 왼쪽] → CSS 값 */ const box = (v) => (v == null ? null : (Array.isArray(v) ? v : [v]).map(len).join(' ')); const ALIGN = { start: 'flex-start', center: 'center', end: 'flex-end', stretch: 'stretch', between: 'space-between' }; function frame({ tag = 'div', base, mods = [], vars = {}, children, className = '' }) { const style = Object.entries(vars).filter(([, v]) => v != null).map(([k, v]) => `--lxp-${k}:${v}`).join(';'); return `<${tag} class=\"${cx(base, ...mods, className)}\"${style ? ` style=\"${style}\"` : ''}>${slot(children)}</${tag}>`; } /** 쌓기 — 세로(기본) 또는 가로로 나열하고 간격·여백을 줍니다.","params":[{"name":"children","type":"string|string[]","optional":false,"desc":"","control":"object","defaultSrc":"''","default":""},{"name":"gap","type":"number|number[]","optional":true,"desc":"아이 사이 간격(px). [세로, 가로] 도 가능","control":"object","defaultSrc":null},{"name":"pad","type":"number|number[]","optional":true,"desc":"안쪽 여백(px). 숫자 | [세로, 가로] | [위, 오른쪽, 아래, 왼쪽]","control":"object","defaultSrc":null},{"name":"direction","type":"'column'|'row'","optional":true,"desc":"","control":"select","options":["column","row"],"defaultSrc":"'column'","default":"column"},{"name":"align","type":"'start'|'center'|'end'|'stretch'","optional":true,"desc":"교차축 정렬","control":"select","options":["start","center","end","stretch"],"defaultSrc":null},{"name":"justify","type":"'start'|'center'|'end'|'between'","optional":true,"desc":"주축 정렬","control":"select","options":["start","center","end","between"],"defaultSrc":null},{"name":"tag","type":"'section'|'ul'","optional":true,"desc":"감싸는 태그 (없으면 div)","control":"select","options":["section","ul"],"defaultSrc":null},{"name":"fill","type":"boolean","optional":true,"desc":"스크롤 영역 높이를 꽉 채움 (justify: 'end' 와 함께 = 채팅처럼 아래부터 쌓기)","control":"boolean","defaultSrc":"false","default":false}],"source":"layout/stack"},"Grid":{"description":"격자 — 같은 폭의 칸을 열 단위로 나열합니다 (예: 강의 카드 2열).","params":[{"name":"cols","type":"number","optional":false,"desc":"열 수","control":"number","defaultSrc":"2","default":2},{"name":"colWidth","type":"number","optional":true,"desc":"칸 폭(px). 없으면 남는 폭을 똑같이 나눔","control":"number","defaultSrc":null},{"name":"gap","type":"number|number[]","optional":true,"desc":"[세로, 가로]","control":"object","defaultSrc":null},{"name":"justify","type":"'start'|'center'|'end'","optional":true,"desc":"격자 전체의 가로 정렬","control":"select","options":["start","center","end"],"defaultSrc":null},{"name":"children","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":"''","default":""},{"name":"pad","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":null}],"source":"layout/stack"},"Surface":{"description":"바탕 구역 — 흰색/연회색 바탕을 깔고 Stack 처럼 쌓습니다.","params":[{"name":"tone","type":"'white'|'subtle'","optional":true,"desc":"white=흰 바탕, subtle=연회색 바탕(--bg-hierarchy-primary-subtle)","control":"select","options":["white","subtle"],"defaultSrc":"'white'","default":"white"},{"name":"fill","type":"boolean","optional":true,"desc":"스크롤 영역 높이를 꽉 채움 (화면 전체 바탕용)\n나머지 인자(gap, pad, direction, align, justify)는 Stack 과 같습니다.","control":"boolean","defaultSrc":"false","default":false},{"name":"children","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":"''","default":""},{"name":"gap","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":null},{"name":"pad","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":null},{"name":"direction","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":"'column'","default":"column"},{"name":"align","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":null},{"name":"justify","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":null},{"name":"tag","type":"string","optional":true,"desc":"","undocumented":true,"control":"text","defaultSrc":null}],"source":"layout/stack"},"Section":{"description":"섹션 — 제목 줄(제목 + 개수 + 오른쪽 보조)과 그 아래 내용을 세로로 묶습니다. 바깥 간격은 갖지 않습니다. 위아래 여백은 pad 로 이 섹션이 정합니다.","params":[{"name":"title","type":"string","optional":false,"desc":"","control":"text","defaultSrc":"''","default":""},{"name":"count","type":"number|string","optional":true,"desc":"제목 옆 개수 상자 (홈 \"이번 주 학습 6\")","control":"text","defaultSrc":null},{"name":"aside","type":"string","optional":true,"desc":"제목 줄 오른쪽 슬롯 (예: Button xs)","control":"text","defaultSrc":"''","default":""},{"name":"children","type":"string|string[]","optional":true,"desc":"내용","control":"object","defaultSrc":"''","default":""},{"name":"gap","type":"number|number[]","optional":true,"desc":"제목과 내용 사이 간격 (기본 12)","control":"object","defaultSrc":null},{"name":"pad","type":"number|number[]","optional":true,"desc":"섹션 안쪽 여백","control":"object","defaultSrc":null},{"name":"size","type":"'lg'|'sm'","optional":true,"desc":"lg = 20B 제목(홈), sm = 12SB 작은 제목(내 강의실 편집 '숨김 강의', 간격 4)","control":"select","options":["lg","sm"],"defaultSrc":"'lg'","default":"lg"}],"source":"sections/section"},"TabBar":{"description":"하단 탭바 (h82)","params":[{"name":"active","type":"'home'|'class'|'message'|'more'","optional":true,"desc":"","control":"select","options":["home","class","message","more"],"defaultSrc":"'home'","default":"home"},{"name":"badges","type":"Record<string, number|string>","optional":true,"desc":"예: { message: 11 }","control":"object","defaultSrc":"{ message: 11 }"},{"name":"newDots","type":"string[]","optional":true,"desc":"예: ['more']","control":"object","defaultSrc":"[]","default":[]},{"name":"items","type":"typeof TABS","optional":true,"desc":"커스텀 탭","control":"object","defaultSrc":"TABS"}],"source":"sections/tab-bar"},"StatusBar":{"description":"iOS 상태바 (Figma 24:13152)","params":[],"source":"layout/screen"},"Screen":{"description":"360×780 모바일 화면 조립 — 시안/아이디에이션 진입점","params":[{"name":"header","type":"string","optional":true,"desc":"Header()/AppHeader() 결과","control":"text","defaultSrc":"''","default":""},{"name":"body","type":"string|string[]","optional":true,"desc":"스크롤 영역 내용","control":"object","defaultSrc":"''","default":""},{"name":"bottom","type":"string","optional":true,"desc":"TabBar()/Footer() 결과 (하단 고정)","control":"text","defaultSrc":"''","default":""},{"name":"overlay","type":"string","optional":true,"desc":"Dim+Popup 등 최상단 레이어 (화면 전체를 덮어 아래 터치를 막음)","control":"text","defaultSrc":"''","default":""},{"name":"fab","type":"string","optional":true,"desc":"Fab() 결과. 하단(탭바) 위 오른쪽에 떠 있음 (메시지 '새 대화')","control":"text","defaultSrc":"''","default":""},{"name":"toast","type":"string","optional":true,"desc":"Toast() 결과. 하단(bottom) 바로 위 가운데에 떠 있고 스크롤·터치에 영향 없음","control":"text","defaultSrc":"''","default":""},{"name":"bg","type":"'default'|'white'|'sky'","optional":true,"desc":"sky=홈 블루 그라디언트","control":"select","options":["default","white","sky"],"defaultSrc":"'default'","default":"default"},{"name":"statusBar","type":"boolean","optional":true,"desc":"","control":"boolean","defaultSrc":"true","default":true}],"source":"layout/screen"},"Dim":{"description":"딤(어두운 막) + 내용. Screen({ overlay }) 에 넣습니다","params":[{"name":"content","type":"string","optional":true,"desc":"Popup · BottomSheet · Dropdown 등","control":"text","defaultSrc":"''","default":""},{"name":"align","type":"'center'|'bottom'","optional":true,"desc":"center = 팝업, bottom = 바텀시트","control":"select","options":["center","bottom"],"defaultSrc":"'center'","default":"center"}],"source":"layout/screen"}};
global.LXP_DOCS = DOCS_BY_FN;
global.LXP_FMT = fmt;
global.LXP_STORIES = normalize(FILES, DOCS_BY_FN);
})(typeof window !== 'undefined' ? window : globalThis);
