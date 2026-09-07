# B1-1 — 나를 소개하는 웹페이지

순수 HTML/CSS/JavaScript(외부 라이브러리 없음)로 처음부터 만든 반응형 포트폴리오 웹사이트. "사용자 이벤트 → 상태 변경 → DOM 렌더링" 흐름을 결과물로 확인하는 것이 목표다. (Codyssey AI 올인원 2기 · 2단계 AI 도구학습)

## 배포 URL
- (GitHub Pages 배포 후 기입)

## 사용 기술
- HTML5 — 시맨틱 마크업
- CSS3 — CSS 변수(`:root`), Flexbox, Grid, 미디어 쿼리(모바일 퍼스트)
- Vanilla JavaScript (ES6+) — `fetch`/`async·await`, Intersection Observer, `localStorage`
- 외부 리소스: Font Awesome(아이콘), Google Fonts(웹 폰트) — 명세 허용 범위

## 로컬 실행
VS Code + Live Server 확장으로 `index.html` 실행.

## 구현 기능
(구현 완료 후 확정 — 요구사항 §2·§4 기준)
- 반응형 레이아웃 (모바일 / 768px 태블릿 / 1024px 데스크톱)
- 섹션: Hero · About · Skills · Projects · Contact · Footer
- 다크 모드 토글 (localStorage 유지)
- 햄버거 메뉴 · 부드러운 스크롤 · 스크롤 탑 버튼 · 네비 스타일 변경 · 스크롤 애니메이션
- GitHub API 연동 Projects — 로딩 / 성공 / 에러(재시도) / 빈 상태
- Contact 폼 유효성 검사 (필수값 · 이메일 형식)

## 기준값 (자유 변경 항목 — 명세상 README 명시 필수)
- 스크롤 탑 버튼 노출: 스크롤 300px 이상
- 네비게이션 배경 변경: 스크롤 60px 이상
- Intersection Observer threshold: 0.2

## 스크린샷
- (데스크톱 / 모바일 / 다크모드 — 완료 후 추가)
