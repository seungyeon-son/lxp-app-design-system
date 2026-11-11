// UBION LXP App Design System — 엔트리 (계층 구조: docs/architecture.md)
// ESM:   import { Screen, Header, TabBar } from './src/index.js'
// 번들:  <script src="dist/lxp.js"></script> → window.LXP.Screen(...)
export { esc, cx, slot, htmlAttrs } from './core/html.js';
export { asset, Icon, iconNames, setAssetBase } from './core/assets.js';
// 2층 요소
export { Avatar, AvatarGroup } from './components/primitives/avatar.js';
export { Badge } from './components/primitives/badge.js';
export { Button, IconButton } from './components/primitives/button.js';
export { Checkbox } from './components/primitives/checkbox.js';
export { Chip } from './components/primitives/chip.js';
export { Input } from './components/primitives/input.js';
export { Reaction } from './components/primitives/reaction.js';
export { Toast } from './components/primitives/toast.js';
// 3층 블록
export { BottomSheet } from './components/blocks/bottom-sheet.js';
export { ChatMessage, ChatDate } from './components/blocks/chat-message.js';
export { CourseCard } from './components/blocks/course-card.js';
export { DateStrip } from './components/blocks/date-strip.js';
export { DeadlineCard } from './components/blocks/deadline-card.js';
export { Dropdown } from './components/blocks/dropdown.js';
export { InfoBar } from './components/blocks/info-bar.js';
export { MemberRow } from './components/blocks/member-row.js';
export { MessageInput } from './components/blocks/message-input.js';
export { MessageItem } from './components/blocks/message-item.js';
export { ModuleItem } from './components/blocks/module-item.js';
export { Popup } from './components/blocks/popup.js';
export { StatGrid } from './components/blocks/stat-grid.js';
export { ChipTabs, SegmentedControl, LineTabs } from './components/blocks/tabs.js';
export { Tag } from './components/blocks/tag.js';
export { ToggleGroup } from './components/blocks/toggle-group.js';
export { WeekPicker } from './components/blocks/week-picker.js';
// 4층 영역
export { DeadlineCarousel } from './components/sections/deadline-carousel.js';
export { Footer } from './components/sections/footer.js';
export { Header, AppHeader } from './components/sections/header.js';
export { TabBar, TAB_ITEMS } from './components/sections/tab-bar.js';
// 틀
export { StatusBar, Screen, Dim } from './components/layout/screen.js';
