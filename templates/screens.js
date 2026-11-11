// 화면 템플릿 — Figma 시안을 컴포넌트로 재조립한 예시이자 새 시안의 출발점.
// 홈 · 내강의실 · 메시지 · 채팅 · 스마트 출석부(교수자)
// 사용: <script src="lxp.js"></script><script src="templates/screens.js"></script>
//       el.innerHTML = LXP_SCREENS.home();
(function (global) {
  const L = global.LXP;

  const weekModules = [
    { title: '학습이론 2: 경험주의', course: '물리학수업', dday: 3, module: 'module-vod-28' },
    { title: '3-1. 스마트 팜 기술 도입 현황 및 효과 분석', course: '사물인터넷과 4차산업사회', dday: 3, module: 'module-url-28' },
    { title: '1-2. [과제] IoT 기술이 적용된 산업 사례 조사 보고서', course: '사물인터넷과 4차산업사회', dday: 4, module: 'module-vod-28' },
    { title: '학습이론 3: 구성주의', course: '물리학수업', dday: 5, module: 'module-vod-28' },
  ];

  const courses = [
    { title: '물리학수업', professor: '홍길동 교수', color: 'blue' },
    { title: '사물인터넷과 4차산업사회', professor: '김철수 교수', color: 'yellow' },
    { title: '데이터 시각화 기초', professor: '이영희 교수', color: 'orange' },
    { title: '창의적 문제해결', professor: '박민수 교수', color: 'green' },
    { title: '교육공학 개론', professor: '최지은 교수', color: 'purple' },
    { title: '학습과학의 이해', professor: '정우성 교수', color: 'blue' },
  ];

  const screens = {
    /** 홈 — 오늘 마감 (Figma 5:11840) */
    home: () => L.Screen({
      bg: 'sky',
      header: L.Header({ variant: 'home' }),
      body: [
        L.Stack({ gap: 12, pad: [4, 0, 0, 0], children: [
          L.WeekPicker({ selected: 0 }),
          L.DeadlineCarousel({ cards: [{}, { title: '3-1. 스마트 팜 기술', course: '사물인터넷과 4차산업사회' }] }),
        ] }),
        L.Section({ title: '이번 주 학습', count: weekModules.length, pad: [28, 0, 24, 0],
          children: L.Stack({ gap: 8, pad: [0, 16], children: weekModules.map(L.ModuleItem) }) }),
      ],
      bottom: L.TabBar({ active: 'home' }),
    }),

    /** 내 강의실 — 카드형 (Figma 5:11985) */
    classGrid: () => L.Screen({
      header: L.Header({ variant: 'class' }),
      body: L.Stack({ gap: 16, pad: [4, 0, 24, 0], children: [
        L.ChipTabs({ active: 0 }),
        L.Stack({ direction: 'row', justify: 'end', pad: [0, 20], children: L.Button({ label: '내 강의실 편집', variant: 'secondary', size: 'xs', icon: 'settings' }) }),
        L.Grid({ cols: 2, colWidth: 156, gap: [16, 8], justify: 'center', children: courses.map((c) => L.CourseCard(c)) }),
      ] }),
      bottom: L.TabBar({ active: 'class' }),
    }),

    /** 내 강의실 — 목록형 (Figma 25:13526) */
    classList: () => L.Screen({
      header: L.Header({ variant: 'class_list' }),
      body: L.Stack({ gap: 16, pad: [4, 0, 24, 0], children: [
        L.SegmentedControl({ active: 0 }),
        L.Stack({ gap: 8, pad: [0, 20], children: courses.map((c) => L.CourseCard({ ...c, layout: 'list' })) }),
      ] }),
      bottom: L.TabBar({ active: 'class' }),
    }),
  };

  // ---------------------------------------------------------------- 스마트 출석부 (교수자)
  // Figma 4.5 LXP App 작업장 ZRoFjuXczoq30fVbJMNsVP › 확정안 7054:14428
  const ROLL = [
    ['홍길동', '202080187'], ['남궁길동', '202080214'], ['제갈길동이', '202080233'], ['박길동', '202080251'],
    ['선우온누리', '202080278'], ['송길동', '202080296'], ['정길동', '202080305'], ['황보민준', '202080322'],
  ];
  const ROLL_MAIN = [
    { value: 'present', label: '출석', icon: 'status-present', iconOff: 'status-present-off', tone: 'info' },
    { value: 'absent', label: '결석', icon: 'status-absent', iconOff: 'status-absent-off', tone: 'nega' },
    { value: 'late', label: '지각', icon: 'status-late', iconOff: 'status-late-off', tone: 'posi' },
  ];
  const ROLL_EXTRA = [
    { value: 'early', label: '조퇴', icon: 'status-early', tone: 'warn' },
    { value: 'lateearly', label: '지각조퇴', icon: 'status-lateearly', tone: 'neutral' },
  ];
  const ROLL_STATS = [['present', '출석', 'status-present'], ['absent', '결석', 'status-absent'], ['late', '지각', 'status-late'],
    ['early', '조퇴', 'status-early'], ['lateearly', '지각조퇴', 'status-lateearly-muted']];

  /**
   * 스마트 출석부 화면. 인터랙션용으로도 그대로 씁니다(상태를 바꿔 다시 호출).
   * @param {object} o
   * @param {(string|null)[]} [o.statuses] 학생별 상태(present|absent|late|early|lateearly|null)
   * @param {{name:string,id:string}[]} [o.students] @param {number} [o.day] 선택 날짜 인덱스
   * @param {boolean} [o.onlyTodo] 미처리만 보기 @param {number} [o.menu] ⋯ 메뉴가 열린 행 인덱스(-1 없음)
   * @param {number} [o.total] 처리 현황 분모(기본 학생 수) @param {string} [o.overlay]
   */
  function rollBook({ statuses = [], students = ROLL.map(([name, id]) => ({ name, id })), day = 3, onlyTodo = false, menu = -1, total, overlay = '' } = {}) {
    const st = students.map((s, i) => ({ ...s, i, s: statuses[i] || null }));
    const count = (k) => st.filter((x) => x.s === k).length;
    const todo = count(null);
    const done = st.length - todo;
    const rows = st.filter((x) => !onlyTodo || !x.s);
    return L.Screen({
      bg: 'white',
      header: L.AppHeader({ type: 'page', title: '스마트 출석부', titleIcon: 'refresh-16', right: 'search' }),
      body: L.Surface({ tone: 'subtle', fill: true, pad: [0, 0, 81, 0], children: [
        L.Surface({ tone: 'white', gap: 12, pad: [16, 16, 12, 16], children: [L.DateStrip({ selected: day }), L.InfoBar({})] }),
        L.StatGrid({
          linked: done > 0,
          items: ROLL_STATS.map(([value, label, icon]) => ({ value, label, icon, count: count(value) })),
          footer: [
            L.Ratio({ label: '처리 현황', value: done, total: total ?? st.length }),
            done > 0 ? L.Checkbox({ checked: onlyTodo, count: todo, id: 'roll-only-todo' }) : '',
          ],
        }),
        L.Surface({ tone: 'white', pad: [8, 0, 0, 0], children: rows.map((x) => L.MemberRow({
          name: x.name, sub: x.id, attrs: { 'data-row': x.i },
          right: L.ToggleGroup({ items: ROLL_MAIN, value: x.s, label: `${x.name} 출결`, overflow: { items: ROLL_EXTRA, open: menu === x.i, label: '조퇴 · 지각조퇴' } }),
        })) }),
      ] }),
      bottom: L.Footer({ type: 'button-pair', label: '출결 일괄 처리', secondary: { label: '자동출결', iconRight: 'check-circle' } }),
      overlay,
    });
  }
  screens.rollBook = rollBook;
  /** 스마트 출석부 — 진입 (Figma 7062:38197) */
  screens.rollBookEntry = () => rollBook({ total: 40 });
  /** 스마트 출석부 — 출석체크 진행중 (Figma 7062:38718) */
  screens.rollBookChecking = () => rollBook({ statuses: ['present', 'absent', 'late', null, 'present', 'early', 'lateearly', 'present'], menu: 3, total: 40 });

  // ---------------------------------------------------------------- 더보기 · 홈 > 알림 · 오류 (Figma 5:11764 · 24:12858 · 5:12102)
  const MORE = [
    { icon: 'user-20', label: '개인정보 수정' }, { icon: 'bell-20', label: '알림 설정' },
    { icon: 'globe-20', label: '언어 설정', value: '한국어', valueTone: 'info' },
  ];
  const MORE_2 = [
    { icon: 'announcement-20', label: '시스템 공지' }, { icon: 'mail-20', label: '문의하기' },
    { icon: 'info-circle-20', label: '버전 정보', value: '1.0.0' },
    { icon: 'user-plus-20', label: '다른 계정으로 로그인' }, { icon: 'log-out-20', label: '로그아웃' },
  ];
  /** 더보기 (Figma 5:11764) */
  screens.more = () => L.Screen({
    header: L.Header({ variant: 'more' }),
    body: L.Stack({ gap: 12, pad: [0, 20, 40], children: [
      L.MenuList({ tone: 'gray', items: [{ label: '외부링크 메뉴', trailing: 'link-external-20' }] }),
      L.MenuList({ items: MORE }),
      L.MenuList({ items: MORE_2 }),
    ] }),
    bottom: L.TabBar({ active: 'more' }),
  });

  /** 홈 > 알림 (Figma 24:12858) */
  screens.alerts = () => L.Screen({
    bg: 'white',
    header: L.AppHeader({ type: 'popup_pull', title: '알림' }),
    body: L.Stack({ gap: 3, children: Array.from({ length: 6 }, () => L.AlertItem({})) }),
  });

  /** 네트워크 오류 (Figma 5:12102) — 상태바 없음 */
  screens.networkError = () => L.Screen({
    bg: 'white', statusBar: false,
    body: L.Stack({ align: 'center', pad: [100, 0, 0], children: L.EmptyState({
      icon: 'illust-network-error', iconSize: [200, 200],
      title: '연결이 불안정해요', text: '네트워크 상태를 확인 후 다시 시도해 주세요.',
      action: L.Button({ label: '다시 시도하기', variant: 'outline', size: 'xl' }),
    }) }),
  });

  // ---------------------------------------------------------------- 내 강의실 편집 (Figma 25:13606 · 25:13723 · 25:13663)
  /**
   * 내 강의실 편집
   * @param {'default'|'changed'|'saved'} [state] default = 저장 비활성, changed = 순서·공개 바꿈(저장 활성), saved = 저장 토스트
   */
  function classEdit(state = 'default') {
    const row = (title, visible) => L.ClassEditRow({ title, professor: '홍길동 교수', visible });
    return L.Screen({
      bg: 'white',
      header: L.AppHeader({ type: 'popup_pull', title: '내 강의실 편집' }),
      body: L.Stack({ gap: 12, pad: [12, 0, 24], children: [
        L.SegmentedControl({ active: 0 }),
        L.Stack({ gap: 16, pad: [0, 20], children: [
          L.Stack({ children: [row('2025년 폭력예방교육(메디컬 교원 대상)', true), row('2025년 폭력예방교육(메디컬 교원 대상)', true)] }),
          L.Divider({}),
          L.Section({ size: 'sm', title: '숨김 강의', children: L.Stack({ children: [row('물리학수업', false), row('물리학수업 2', false)] }) }),
        ] }),
      ] }),
      bottom: L.Footer({ type: 'button', label: '저장하기', disabled: state !== 'changed' }),
      toast: state === 'saved' ? L.Toast({ label: '저장되었습니다' }) : '',
    });
  }
  screens.classEdit = classEdit;
  /** 내 강의실 편집 (Figma 25:13606) */
  screens.classEditDefault = () => classEdit('default');
  /** 내 강의실 편집 - 순서 변경 (Figma 25:13723) */
  screens.classEditChanged = () => classEdit('changed');
  /** 내 강의실 편집 - 저장 완료 (Figma 25:13663) */
  screens.classEditSaved = () => classEdit('saved');

  // ---------------------------------------------------------------- 메시지 (Figma 메뉴탭 > 메시지 69:22329)
  const LONG = '과거 몇차례 잔디를 통해서 일하는 사람들에게는 ‘R&R을 넘어서는 역량‘이 중요하다고 언급했습니다. 이를 바꿔 설명하면, ‘경계 없는 협업 능력‘이 조직 성과를 결정하는 아주 중요한 요소라는 뜻이기도 합니다. 오늘의 주제는 ‘일의 경계’입니다. 굳은 날씨에도 일에 대한 열정 하나로 빗줄기를 뚫고 모니터 앞에 앉아 계신 여러분들을 응원하며 오늘 글을 바칩니다. :-)';
  const SHARE = '안녕하세요. 과거 몇차례 잔디를 통해서 일하는 사람들에게는 ‘R&R을 넘어서는 역량’이 중요하다고 언급했었는데요, 관련 아티클 ‘경계 없는 협업 능력’이 올라와 공유드립니다. 관심있으신 분들은 한번 살펴보세요.';
  const GROUP = '김연아, 이상화, 봉준호, 손흥민, 박지성';
  const PREVIEW = '과거 몇차례 잔디를 통해서 일하는 사...';
  const rows = () => [
    L.MessageItem({ name: '김연아', preview: PREVIEW, avatar: 'avatar-04', unread: 0, muted: false }),
    L.MessageItem({ preview: PREVIEW, avatar: 'avatar-04', unread: 1 }),
    L.MessageItem({ option: 'group', avatar: 'avatar-02', unread: 10, pinned: false }),
    L.MessageItem({ name: '봉준호', preview: PREVIEW, avatar: 'avatar-04', unread: 1, muted: false, pinned: false }),
  ];
  const msgList = ({ header = L.Header({ variant: 'message' }), top = '', list = rows() } = {}) => L.Screen({
    header, body: [top, ...list], bottom: L.TabBar({ active: 'message' }), fab: L.Fab({}),
  });

  /** 메시지 목록 (Figma 5:11732) */
  screens.messages = () => msgList();
  /** 메시지 — 더보기 메뉴 열림 (Figma 49:16515) */
  screens.messagesMenu = () => msgList({ header: L.Header({ variant: 'message-open' }) });
  /** 메시지 — 오른쪽으로 밀기: 읽음·차단·나가기 (Figma 57:19407) */
  screens.messagesSwipeRight = () => msgList({ list: [L.MessageItem({ swipe: 'right', name: '김연아', preview: '감사합니다.', avatar: 'avatar-03', unread: 10, muted: false, pinned: false }), ...rows()] });
  /** 메시지 — 왼쪽으로 밀기: 고정·알림 (Figma 57:19618) */
  screens.messagesSwipeLeft = () => msgList({ list: [L.MessageItem({ swipe: 'left', name: '김연아', preview: '감사합니다.', avatar: 'avatar-03', unread: 10, muted: false }), ...rows()] });
  /** 메시지 — 검색 (Figma 49:16365) */
  screens.messagesSearch = () => msgList({ top: L.Stack({ pad: [0, 20, 8], children: L.Input({}) }) });
  /** 메시지 — 대화방 없음 (Figma 49:16549) */
  screens.messagesEmpty = () => L.Screen({
    header: L.Header({ variant: 'message' }),
    body: L.Stack({ align: 'center', pad: [40, 0, 0], children: L.EmptyState({ icon: 'illust-message-send', iconSize: [140, 140], text: '새로운 메시지를 시작해보세요.' }) }),
    bottom: L.TabBar({ active: 'message' }), fab: L.Fab({}),
  });
  /** 차단 대화 관리 (Figma 49:16399) */
  screens.blockedChats = () => L.Screen({
    bg: 'white',
    header: L.AppHeader({ type: 'page', title: '차단 대화 관리' }),
    body: L.Stack({ pad: [8, 0, 0], children: [
      L.MessageItem({ state: 'block', name: '홍길동', avatar: 'avatar-03' }),
      L.MessageItem({ state: 'block', name: '김연아', preview: '감사합니다.', avatar: 'avatar-03' }),
    ] }),
  });
  /** 차단 대화 관리 — 대화방 없음 (Figma 49:16510) */
  screens.blockedChatsEmpty = () => L.Screen({
    bg: 'white',
    header: L.AppHeader({ type: 'page', title: '차단 대화 관리' }),
    body: L.Stack({ align: 'center', pad: [195, 0, 0], children: L.EmptyState({}) }),
  });

  // 대화방 만들기 (Figma 49:16181 · 80:19381 · 80:19346 · 80:19307 · 83:16891)
  const pick = (name, avatar, checked, extra = {}) => ({ name, avatar, selected: checked, right: L.SelectCheck({ checked, label: name }), ...extra });
  const userCard = (checks = []) => L.ChatGroupCard({
    title: '물리학실험실 2 [001]', count: null, chevron: false, selectAll: { count: 34 },
    sections: [
      { label: '교수자', members: [pick('김교수(2251****)', 'avatar-01', false)] },
      { label: '학습자', members: [['학습자1(2251****)', 'avatar-03'], ['원슈타인(2251****)', 'avatar-04'], ['강동원(2251****)', 'avatar-05'], ['신세경(2251****)', 'avatar-02'], ['한소희(2251****)', 'avatar-06']].map(([n, a], i) => pick(n, a, checks.includes(i))) },
    ],
  });
  const createChat = (top, children, bottom) => L.Screen({
    bg: 'white',
    header: L.AppHeader({ type: 'popup_pull', title: '대화방 생성' }),
    body: [top || '', L.Stack({ gap: 16, pad: [16, 20, 24], children })],
    bottom,
  });
  const back = () => L.Stack({ direction: 'row', children: L.Button({ label: '이전', variant: 'ghost', size: 'sm', icon: 'chevron-left' }) });
  const tags = (list) => L.Stack({ direction: 'row', gap: 6, pad: [16, 20], children: list.map(([label, avatar]) => L.Tag({ label, avatar: avatar || false, icon: null })) });

  /** 대화방 생성 — 강의 선택 (Figma 49:16181) */
  screens.createChat = () => createChat('', [L.Input({}), L.Stack({ gap: 8, children: [
    L.ChatGroupCard({}), L.ChatGroupCard({ title: '물리학실험실 3' }), L.ChatGroupCard({ title: '물리학실험실 4' }),
  ] })]);
  /** 대화방 생성 — 학습자 검색 (Figma 80:19381) */
  screens.createChatSearch = () => createChat('', [L.Input({ value: '김연아' }), L.Stack({ gap: 8, children: [
    L.ChatGroupCard({ title: '물리학실험실 2 [001]', count: null, members: [{ name: '김연아(2251****)', avatar: 'avatar-03' }] }),
    L.ChatGroupCard({ title: '물리학실험실 3 [002]', count: null, members: [{ name: '김연아(2251****)', avatar: 'avatar-03' }] }),
  ] })]);
  /** 대화방 생성 — 대화 상대 선택 (Figma 80:19346) */
  screens.createChatUsers = () => createChat('', [L.Input({}), L.Stack({ gap: 8, children: [back(), userCard()] })]);
  /** 대화방 생성 — 2명 선택됨 (Figma 80:19307) */
  screens.createChatSelected = () => createChat(
    tags([['학습자1', 'avatar-03'], ['학습자2', 'avatar-03']]),
    [L.Input({}), L.Stack({ gap: 8, children: [back(), userCard([0, 1])] })],
    L.Footer({ type: 'count-button', count: 2 }),
  );
  /** 대화 멤버 초대 (Figma 83:16891) */
  screens.inviteMembers = () => L.Screen({
    bg: 'white',
    header: L.AppHeader({ type: 'popup_pull', title: '대화 멤버 초대' }),
    body: [tags([['물리학실험실 전체'], ['강동원', 'avatar-05'], ['신세경', 'avatar-02']]), L.Stack({ gap: 14, pad: [16, 20, 24], children: [
      L.Input({}),
      L.SettingCard({ heading: 'md', title: '물리학실험실 2 [001]', more: false, list: true, aside: L.IconButton({ icon: 'caret-up-18', size: 32, label: '접기' }), children: L.Stack({ gap: 8, children: [L.SelectAllRow({}), L.Stack({ children: [
        L.FriendRow({ name: '학습자3(2251****)', avatar: 'avatar-03', disabled: true }),
        L.FriendRow({ name: '원슈타인(2251****)', avatar: 'avatar-04', right: L.SelectCheck({}) }),
        L.FriendRow({ name: '강동원(2251****)', avatar: 'avatar-05', selected: true, right: L.SelectCheck({ checked: true }) }),
        L.FriendRow({ name: '신세경(2251****)', avatar: 'avatar-02', selected: true, right: L.SelectCheck({ checked: true }) }),
        L.FriendRow({ name: '한소희', avatar: 'avatar-06', selected: true, right: L.SelectCheck({ checked: true }) }),
      ] })] }) }),
    ] })],
    bottom: L.Footer({ type: 'count-button', count: 12 }),
  });

  // 대화방 (Figma 78:16455 …) — 메시지는 아래부터 쌓임
  const room = ({ title = GROUP, messages = [], bottom = L.Footer({ type: 'message-input', safe: true }), overlay = '' } = {}) => L.Screen({
    bg: 'white',
    header: L.AppHeader({ type: 'page_chat', title }),
    body: L.Stack({ fill: true, justify: 'end', gap: 12, pad: [8, 20], children: messages }),
    bottom, overlay,
  });
  const groupTalk = (pressed) => [
    L.ChatMessage({ name: '이병헌', avatar: 'avatar-04', text: LONG }),
    L.ChatMessage({ name: '박진영', avatar: 'avatar-05', text: SHARE, state: pressed ? 'pressed' : 'default' }),
    L.ChatMessage({ name: '김연아', text: '네 감사합니다.' }),
    L.ChatDate({}),
  ];
  const groupNotice = () => [
    L.ChatMessage({ name: '박진영', avatar: 'avatar-05', text: SHARE }),
    L.ChatMessage({ name: '김연아', text: '네 감사합니다.' }),
    L.ChatDate({}),
    L.ChatMessage({ kind: 'system', name: '김연아', text: '김연아님이 고교수님, 고학생님을 초대하였습니다.' }),
    L.ChatMessage({ kind: 'system', name: '이상화', avatar: 'avatar-02', text: '이상화님이 대화방에서 나갔습니다.' }),
    L.ChatMessage({ name: '고교수', avatar: 'avatar-01', read: null, text: '네 감사합니다.', reactions: [], addReaction: false }),
  ];
  const startGroup = () => [L.StartChat({ names: ['이지영', '강태윤', '현동기', '손흥민', '박지성'], avatars: ['avatar-03', 'avatar-04', 'avatar-02'], more: 5 })];

  /** 대화방 — 1:1 대화 중 (Figma 78:16455) */
  screens.chat = () => room({ title: '김연아', messages: [
    L.ChatDate({}),
    L.ChatMessage({ read: null }),
    L.ChatMessage({ time: '오후 05:01', read: null, text: LONG }),
  ] });
  /** 대화방 — 1:1 첫 대화 (Figma 78:16501) */
  screens.chatStartDm = () => room({ title: '홍길동', messages: [L.StartChat({ names: ['홍길동'], avatars: ['avatar-05'] })] });
  /** 대화방 — 단체 첫 대화 (Figma 78:16593) */
  screens.chatStartGroup = () => room({ messages: startGroup() });
  /** 대화방 — 초대·나감 안내 (Figma 78:16626) */
  screens.chatSystem = () => room({ messages: groupNotice() });
  /** 대화방 — 단체 대화 (Figma 80:23163) */
  screens.chatGroup = () => room({ messages: groupTalk(false) });
  /** 대화방 — 메시지 누름 (Figma 82:26361) */
  screens.chatPressed = () => room({ messages: groupTalk(true) });
  /** 대화방 — 차단한 사람 (Figma 78:16530) */
  screens.chatBlocked = () => room({ title: '홍길동', messages: [L.ChatDate({}), L.ChatMessage({})], bottom: L.Footer({ type: 'message-block' }) });
  /** 대화방 — 답장 중 (Figma 112:17166) — 키보드는 OS 화면이라 그리지 않음 */
  screens.chatReplying = () => room({
    messages: [L.ChatMessage({ name: '이병헌', avatar: 'avatar-04', text: LONG })],
    bottom: [L.ChatReplyBar({ to: '이병헌', text: LONG }), L.Footer({ type: 'message-input' })],
  });
  /** 대화방 — 답장 메시지 (chating-message reply) */
  screens.chatReplied = () => room({ messages: [
    L.ChatMessage({ name: '이병헌', avatar: 'avatar-04', text: LONG }),
    L.ChatMessage({ kind: 'reply', time: '오전 05:00', quote: { to: '박진영', text: LONG }, text: '[[서울] 안전및조직관리사례연구 (HART3002 (1)) [2학기]] 유비온8 applied for TA position 471:', link: 'https://ecampus.smu.ac.kr/local/ubassistant/approve.php?id=86570' }),
  ] });
  const lpItems = (mine) => [{ icon: 'reply-20', label: '메시지 답장' }, ...(mine ? [{ icon: 'pin-20', label: '공지 등록' }, { icon: 'trash-20-red', label: '메시지 삭제', tone: 'danger' }] : [])];
  const longPress = (mine) => L.Dim({ align: 'bottom', content: L.BottomSheet({ content: L.Stack({ gap: 8, children: [L.EmojiBar({}), L.Divider({}), L.Stack({ gap: mine ? 4 : 0, children: lpItems(mine).map(L.ListItem) })] }) }) });
  /** 대화방 — 내 메시지 길게 누름 (Figma 80:21389) */
  screens.chatLongPressMine = () => room({ messages: groupNotice(), bottom: L.Footer({ type: 'message-input' }), overlay: longPress(true) });
  /** 대화방 — 다른 사람 메시지 길게 누름 (Figma 80:21995) */
  screens.chatLongPressOther = () => room({ messages: groupNotice(), bottom: L.Footer({ type: 'message-input' }), overlay: longPress(false) });
  /** 대화방 — 메시지 삭제 팝업 (Figma 82:26057) */
  screens.chatDelete = () => room({ messages: groupNotice(), bottom: L.Footer({ type: 'message-input' }), overlay: L.Dim({ content: L.Popup({}) }) });
  /** 대화방 — 이름 변경 팝업 (Figma 78:16694) — 키보드는 그리지 않음 */
  screens.chatRename = () => room({ messages: startGroup(), overlay: L.Dim({ content: L.Popup({
    title: '대화방 이름 변경', body: '', content: L.Input({ icon: null, clearable: false, value: GROUP }),
    actions: [{ label: '취소' }, { label: '확인', tone: 'primary' }],
  }) }) });
  /** 대화방 — 고정 메시지 닫힘 · 열림 (Figma 82:25753 · 82:26769) */
  const pinned = (open) => room({ messages: groupTalk(false).slice(0, 3), overlay: L.Stack({ pad: [108, 12, 0], children: L.PopoverAlert({ open, text: open ? LONG : undefined }) }) });
  screens.chatPinned = () => pinned(false);
  screens.chatPinnedOpen = () => pinned(true);
  /** 대화방 설정 시트 (Figma 78:16396) */
  screens.chatSettingsSheet = () => room({ messages: startGroup(), bottom: L.Footer({ type: 'message-input' }), overlay: L.Dim({ align: 'bottom', content: L.BottomSheet({
    tone: 'subtle', title: '대화방 설정', gap: 20, content: L.Stack({ gap: 32, children: [
      L.ListGroup({ label: '메시지 번역', card: false, items: [{ icon: 'translate-20', label: '번역 언어 선택', tone: 'muted', trailing: 'chevron' }] }),
      L.ListGroup({ label: '대화방 관리', items: [{ icon: 'edit-20', label: '대화방 이름 변경', tone: 'muted' }, { icon: 'bell-setting-20', label: '대화방 알림 끄기', tone: 'muted' }, { icon: 'settings-20', label: '대화방 관리', tone: 'muted' }] }),
      L.ListItem({ icon: 'log-out-20-red', label: '대화방 나가기', tone: 'danger' }),
    ] }),
  }) }) });

  // 대화방 관리 · 기록 (Figma 80:23898 · 80:24116 · 80:23946 · 80:24008 …)
  const files = () => [
    L.SettingCard({ icon: 'file-img-24', title: '사진/동영상', children: L.Grid({ cols: 4, gap: 8, pad: [0, 20], children: [1, 2, 3, 4].map(() => L.ImageTile({})) }) }),
    L.SettingCard({ icon: 'file-info-24', title: '문서' }),
    L.SettingCard({ icon: 'link-24', title: '링크' }),
    L.SettingCard({ icon: 'pin-24-blue', title: '공지' }),
  ];
  const members = (list) => L.SettingCard({ title: '대화 멤버', count: list.length, more: false, list: true, children: list.map(([name, avatar]) => L.FriendRow({ name, avatar })) });
  const settings = (cards, buttons, overlay = '') => L.Screen({
    bg: 'white',
    header: L.AppHeader({ type: 'page', title: '대화방 관리' }),
    body: L.Stack({ fill: true, justify: 'between', gap: 24, pad: [16, 20, 32], children: [L.Stack({ gap: 8, children: cards }), buttons] }),
    overlay,
  });
  const groupMembers = [['초대하기'], ['학습자3(2251****)', 'avatar-03'], ['이병헌(2251****)', 'avatar-04'], ['유비온(2251****)', 'avatar-07'], ['신세경(2251****)', 'avatar-06'], ['강동원(2251****)', 'avatar-05']];
  const groupCards = () => [...files(), L.SettingCard({ title: '대화 멤버', count: 5, more: false, list: true, children: [L.FriendRow({ icon: 'plus-circle-48', name: '초대하기' }), ...groupMembers.slice(1).map(([name, avatar]) => L.FriendRow({ name, avatar }))] })];
  const leaveAll = () => L.Button({ label: '대화방 나가기', variant: 'outline', tone: 'danger', block: true });
  /** 대화방 관리 — 1:1 (Figma 80:24116) */
  screens.chatSettingsDm = () => settings([...files(), members([['김연아(나)(2251****)', 'avatar-03'], ['이병헌(2251****)', 'avatar-04']])],
    L.Grid({ cols: 2, colWidth: 120, justify: 'between', children: [L.Button({ label: '대화방 차단', variant: 'outline' }), L.Button({ label: '대화방 나가기', variant: 'outline', tone: 'danger' })] }));
  /** 대화방 관리 — 단체 (Figma 80:23898) */
  screens.chatSettingsGroup = () => settings(groupCards(), leaveAll());
  /** 대화방 관리 — 나가기 팝업 (Figma 80:23946) */
  screens.chatSettingsLeave = () => settings(groupCards(), leaveAll(), L.Dim({ content: L.Popup({
    title: '대화방 나가기', body: '대화방명이 길어지는 경우에는 말줄임처리...\n대화방을 나가시겠습니까?', actions: [{ label: '취소' }, { label: '나가기', tone: 'danger' }],
  }) }));

  const HISTORY = ['사진/동영상', '문서', '링크', '공지'];
  const history = (active, body) => L.Screen({
    bg: 'white',
    header: L.AppHeader({ type: 'popup_pull', title: '대화방 기록' }),
    body: [L.LineTabs({ items: HISTORY, active }), body],
  });
  const dated = (children, gap = 8) => L.Section({ size: 'sm', title: '2026.01.21', gap, children });
  /** 대화방 기록 — 사진/동영상 (Figma 80:24008) */
  screens.historyPhotos = () => history(0, L.Grid({ cols: 3, colWidth: 100, gap: [12, 10], justify: 'center', pad: [16, 0], children: Array.from({ length: 15 }, () => L.ImageTile({})) }));
  /** 대화방 기록 — 문서 (Figma 80:24040) */
  screens.historyDocs = () => history(1, L.Stack({ gap: 20, pad: [16, 20], children: [1, 2, 3].map(() => dated(L.Stack({ gap: 8, children: [L.ShareFileCard({}), L.ShareFileCard({})] }))) }));
  /** 대화방 기록 — 링크 (Figma 80:24084) */
  screens.historyLinks = () => history(2, L.Stack({ gap: 20, pad: [16, 20], children: [
    dated(L.Grid({ cols: 2, gap: 8, children: [L.ShareLinkCard({}), L.ShareLinkCard({})] })),
    dated(L.Grid({ cols: 2, gap: [12, 8], children: [L.ShareLinkCard({}), L.ShareLinkCard({}), L.ShareLinkCard({}), L.ShareLinkCard({})] })),
  ] }));
  /** 대화방 기록 — 공지 (Figma 80:24104) */
  screens.historyNotices = () => history(3, L.Stack({ pad: [8, 0, 0], children: [L.ChatNotice({ open: true }), L.ChatNotice({ open: true }), L.ChatNotice({}), L.ChatNotice({})] }));
  /** 사진·동영상 뷰어 (Figma 80:24028) */
  screens.photoViewer = () => L.Screen({
    bg: 'white',
    header: L.AppHeader({ type: 'photo-viewer', title: '발신 유저명', subtitle: '2026.01.21' }),
    body: L.MediaViewer({}),
  });

  global.LXP_SCREENS = screens;
})(typeof window !== 'undefined' ? window : globalThis);
