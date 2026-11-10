// 화면 템플릿 — Figma 시안을 컴포넌트로 재조립한 예시이자 새 시안의 출발점.
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
      body: `
        <div style="display:flex;flex-direction:column;gap:12px;padding-top:4px">
          ${L.WeekPicker({ selected: 0 })}
          ${L.DeadlineCarousel({ cards: [{}, { title: '3-1. 스마트 팜 기술', course: '사물인터넷과 4차산업사회' }] })}
        </div>
        <section style="display:flex;flex-direction:column;gap:12px;padding:28px 0 24px">
          <div class="lxp-section-title"><span class="lxp-section-title__text">이번 주 학습</span><span class="lxp-section-title__count">${weekModules.length}</span></div>
          <div style="display:flex;flex-direction:column;gap:8px;padding:0 16px">${weekModules.map(L.ModuleItem).join('')}</div>
        </section>`,
      bottom: L.TabBar({ active: 'home' }),
    }),

    /** 내 강의실 — 카드형 (Figma 5:11985) */
    classGrid: () => L.Screen({
      header: L.Header({ variant: 'class' }),
      body: `
        <div style="display:flex;flex-direction:column;gap:16px;padding:4px 0 24px">
          ${L.ChipTabs({ active: 0 })}
          <div style="display:flex;justify-content:flex-end;padding:0 20px">${L.Button({ label: '내 강의실 편집', variant: 'secondary', size: 'xs', icon: 'settings' })}</div>
          <div style="display:grid;grid-template-columns:repeat(2,156px);gap:16px 8px;justify-content:center">${courses.map((c) => L.CourseCard(c)).join('')}</div>
        </div>`,
      bottom: L.TabBar({ active: 'class' }),
    }),

    /** 내 강의실 — 목록형 (Figma 25:13526) */
    classList: () => L.Screen({
      header: L.Header({ variant: 'class_list' }),
      body: `
        <div style="display:flex;flex-direction:column;gap:16px;padding:4px 0 24px">
          ${L.SegmentedControl({ active: 0 })}
          <div style="display:flex;flex-direction:column;gap:8px;padding:0 20px">${courses.map((c) => L.CourseCard({ ...c, layout: 'list' })).join('')}</div>
        </div>`,
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
      body: `<div style="padding:8px 12px">
        ${L.ChatDate({ label: '2026년 1월 21일 수요일' })}
        ${L.ChatMessage({})}
        ${L.ChatMessage({ name: '이상화', avatar: 'avatar-04', time: '오후 05:02', read: 3, text: '다들 과제 진행 상황 공유해주세요!', reactions: [] , addReaction: false })}
        ${L.ChatMessage({ name: '봉준호', avatar: 'avatar-02', time: '오후 05:10', read: 2, text: '저는 2장까지 정리했어요. 오늘 밤에 올릴게요.', reactions: [{ count: 2 }] })}
      </div>`,
      bottom: L.Footer({ type: 'message-input' }),
    }),

    /** 메시지 삭제 팝업 (오버레이 예시) */
    chatDelete: () => L.Screen({
      bg: 'white',
      header: L.AppHeader({ type: 'page_chat', title: '김연아' }),
      body: `<div style="padding:8px 12px">${L.ChatMessage({})}</div>`,
      bottom: L.Footer({ type: 'message-input' }),
      overlay: L.Dim({ content: L.Popup({}) }),
    }),
  };

  global.LXP_SCREENS = screens;
})(typeof window !== 'undefined' ? window : globalThis);
