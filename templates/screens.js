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

    /** 메시지 목록 (Figma 5:11732) */
    messages: () => L.Screen({
      header: L.Header({ variant: 'message' }),
      body: [
        L.MessageItem({ option: 'dm', state: 'update', name: '김연아', preview: '과제 제출 기한이 언제까지인가요?', avatar: 'avatar-05', unread: 2 }),
        L.MessageItem({ option: 'group', name: '물리학수업 1조', preview: '자료 공유드립니다~', avatar: 'avatar-03', more: 5, unread: 10 }),
        L.MessageItem({ option: 'dm', name: '이상화', preview: '감사합니다.', avatar: 'avatar-04', unread: 0, muted: false, pinned: false }),
        L.MessageItem({ option: 'dm', name: '봉준호', preview: '내일 수업 자료 확인 부탁드려요', avatar: 'avatar-02', unread: 1, muted: false }),
        L.MessageItem({ option: 'dm', state: 'block', name: '홍길동', avatar: 'avatar-03' }),
      ].join(''),
      bottom: L.TabBar({ active: 'message' }),
    }),

    /** 채팅방 (Figma 78:16455) */
    chat: () => L.Screen({
      bg: 'white',
      header: L.AppHeader({ type: 'page_chat', title: '김연아, 이상화, 봉준호, 손흥민, 박지성' }),
      body: L.Stack({ pad: [8, 12], children: [
        L.ChatDate({ label: '2026년 1월 21일 수요일' }),
        L.ChatMessage({}),
        L.ChatMessage({ name: '이상화', avatar: 'avatar-04', time: '오후 05:02', read: 3, text: '다들 과제 진행 상황 공유해주세요!', reactions: [], addReaction: false }),
        L.ChatMessage({ name: '봉준호', avatar: 'avatar-02', time: '오후 05:10', read: 2, text: '저는 2장까지 정리했어요. 오늘 밤에 올릴게요.', reactions: [{ count: 2 }] }),
      ] }),
      bottom: L.Footer({ type: 'message-input' }),
    }),

    /** 메시지 삭제 팝업 (오버레이 예시) */
    chatDelete: () => L.Screen({
      bg: 'white',
      header: L.AppHeader({ type: 'page_chat', title: '김연아' }),
      body: L.Stack({ pad: [8, 12], children: L.ChatMessage({}) }),
      bottom: L.Footer({ type: 'message-input' }),
      overlay: L.Dim({ content: L.Popup({}) }),
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

  global.LXP_SCREENS = screens;
})(typeof window !== 'undefined' ? window : globalThis);
