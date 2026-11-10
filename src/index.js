// UBION LXP App Design System — 엔트리
// ESM:   import { Screen, Header, TabBar } from './src/index.js'
// 번들:  <script src="dist/lxp.js"></script> → window.LXP.Screen(...)
export { esc, cx, slot, htmlAttrs } from './core/html.js';
export { asset, Icon, iconNames, setAssetBase } from './core/assets.js';
export { Button, IconButton } from './components/button.js';
export { StatusBar, Header, AppHeader, TabBar, Dropdown, TAB_ITEMS } from './components/navigation.js';
export { Input, MessageInput, Footer } from './components/input.js';
export { ChipTabs, SegmentedControl, LineTabs } from './components/tabs.js';
export { Chip, Badge, Avatar, AvatarGroup, Tag, Toast, StatGrid, InfoBar, MemberRow } from './components/display.js';
export { DateStrip, ToggleGroup, Checkbox } from './components/control.js';
export { CourseCard, DeadlineCard, DeadlineCarousel, ModuleItem, WeekPicker } from './components/learning.js';
export { MessageItem, ChatMessage, Reaction, ChatDate } from './components/message.js';
export { Popup, BottomSheet, Screen, Dim } from './components/overlay.js';
