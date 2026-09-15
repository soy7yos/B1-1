# WORKLOG

## 2026-09-15

### 16:44  [요약] — 다크모드 스크롤탑·Projects 2열 CSS 버그 수정
- 시도: 배포 페이지 직접 확인 중 나온 버그 2건(다크모드 스크롤탑 화살표 안 보임, Projects 카드가 3열로 깔림) 수정 + 캡션 요구사항 여부 확인
- 발견: `#scroll-top`은 `button` 기본 색상을 상속해 `color: var(--text)`가 빠져 있었음(다른 버튼류엔 있었는데 이것만 누락). `.projects-grid` 2열 강제 규칙을 처음엔 불변 `.projects-grid` 정의보다 앞(768px nav 미디어쿼리 블록)에 넣어 같은 특이도인 뒤 규칙에 덮여 무효화됨 — 파일 순서를 뒤로 옮겨 해결. 캡션은 요구사항에 근거 없음(alt만 요구), About 두 이미지 alt는 이미 `data-alt`로 확정돼 있음
- 결정: `css/style.css`에 `#scroll-top { color: var(--text) }` 추가, `.projects-grid[hidden]` 규칙 뒤에 `@media (min-width:768px){ .projects-grid{ grid-template-columns: repeat(2,1fr) } }` 추가. 로컬 정적 서버(`python3 -m http.server`)로 다크모드·데스크톱(1280px)·모바일(375px) 3개 폭 브라우저 확인. `images/wide.png`(예시 파일)는 그대로 둠
- 다음: BUILT 스크린샷(`images/built-notes.png`·`built-ledger.png`) 도착 시 alt 문구 재검토 후 placeholder를 `<img>`로 교체 — 9단계(배포+README) 진행 시 같이. `/st 9 시작`은 아직 미착수
