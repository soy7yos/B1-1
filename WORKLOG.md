# WORKLOG

## 2026-09-15

### 23:47  [요약] — About 이미지 그림자·호버 확대 재설계, 스크롤탑 기준값 조정
- 시도: About 스크린샷 2장에 그림자 추가, 호버 확대를 왼쪽상단 기준 제자리 확대(scale(2))에서 화면 중앙 고정 + 이미지별 차등 크기로 재설계, Skills 모바일 강제 줄바꿈 제거, 스크롤탑 노출 기준값 조정
- 발견: `content:url()`로 확대 이미지를 그리면 width만 반영되고 height는 원본 그대로 남아 세로로 찌그러짐(→ background-image+aspect-ratio로 대체). `#about`의 기존 스크롤 등장 애니메이션(`.fade-in`)이 `transform: translateY(0)`을 써서(값이 0이어도) 자손 `position:fixed`의 containing block을 가로채 화면이 아니라 섹션 기준으로 팝업이 어긋남(→ `.fade-in`을 margin-top 방식으로 전환, 시각 효과는 동일). 이 미리보기 브라우저 도구 자체가 `position:fixed` 요소를 스크린샷에 정확히 합성 못 해 `getBoundingClientRect`/computed style 수치로 대신 검증함
- 결정: `.thumb img`에 `box-shadow: var(--shadow)`(다크모드에서 옅어지는 건 기존 스크린샷 다크모드 이슈와 동일 선상으로 인지 후 수용, 사용자가 라이트/다크 목업 보고 선택). 호버 확대는 `.thumb::after`(원본 `<img>` 비변경)로 화면 중앙 고정 팝업, 최종 크기 mybrain 60vw·myledger 45vw(처음 제안 90/55에서 사용자 요청으로 축소, 둘 다 원본 해상도 상한 유지). Skills는 768px 미만에서 `.skills-break` `display:none`으로 자연 줄바꿈(375px 4줄·414px 3줄 확인, 데스크톱 7/6 균형 유지). `SCROLL_TOP_THRESHOLD`는 300 → 600(About 진입 전, Hero 구간 후반에서 노출 — "About 아래쪽에서" 요청엔 1200~1400이 더 맞지만 사용자가 600 선택)
- 다음: `/st 9 시작`(상태 흐름 정리+배포+README) 여전히 미착수

### 16:44  [요약] — 다크모드 스크롤탑·Projects 2열 CSS 버그 수정
- 시도: 배포 페이지 직접 확인 중 나온 버그 2건(다크모드 스크롤탑 화살표 안 보임, Projects 카드가 3열로 깔림) 수정 + 캡션 요구사항 여부 확인
- 발견: `#scroll-top`은 `button` 기본 색상을 상속해 `color: var(--text)`가 빠져 있었음(다른 버튼류엔 있었는데 이것만 누락). `.projects-grid` 2열 강제 규칙을 처음엔 불변 `.projects-grid` 정의보다 앞(768px nav 미디어쿼리 블록)에 넣어 같은 특이도인 뒤 규칙에 덮여 무효화됨 — 파일 순서를 뒤로 옮겨 해결. 캡션은 요구사항에 근거 없음(alt만 요구), About 두 이미지 alt는 이미 `data-alt`로 확정돼 있음
- 결정: `css/style.css`에 `#scroll-top { color: var(--text) }` 추가, `.projects-grid[hidden]` 규칙 뒤에 `@media (min-width:768px){ .projects-grid{ grid-template-columns: repeat(2,1fr) } }` 추가. 로컬 정적 서버(`python3 -m http.server`)로 다크모드·데스크톱(1280px)·모바일(375px) 3개 폭 브라우저 확인. `images/wide.png`(예시 파일)는 그대로 둠
- 다음: BUILT 스크린샷(`images/built-notes.png`·`built-ledger.png`) 도착 시 alt 문구 재검토 후 placeholder를 `<img>`로 교체 — 9단계(배포+README) 진행 시 같이. `/st 9 시작`은 아직 미착수
