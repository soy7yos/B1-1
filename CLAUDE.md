# 미션 CLAUDE.md — B1-1

## 미션 정보
- 번호: B1-1
- 이름: 나를 소개하는 웹페이지 처음부터 만들기
- 필수/선택: 필수
- 배정 시간: 80h
- 단계: 2단계 AI 도구학습
- 산출물 유형: A (개인 코드 repo + 배포 URL)

## 파일
`요구사항_`·`이해_`·`평가준비_`·`평가문항.md`는 **Drive 전용** — 미션 `.gitignore`가 제외하므로 GitHub에는 안 올라간다.

- 요구사항 md: `요구사항_B1-1.md` (원본 `AI_Tools_B1-B7_missions.md` 70–328줄)
- 이해 md: `이해_B1-1.md` (`/us`가 생성 — 3단계 개념학습 교재)
- 평가문항.md: `평가문항.md` (4개 항목, 총 17문) — 2026.09.10 등록
- 개인 repo: https://github.com/soy7yos/B1-1 (public) — 구 myCodyssey/B1-1에서 이동
- 팀 repo: 해당 없음

## 선행 미션 산출물
- 없음
- 확보 여부: [x]

## 금지·제한 (미션 명세 원문 그대로)
- React·Vue·jQuery·Bootstrap·Tailwind 등 외부 라이브러리 전면 금지. 순수 HTML/CSS/JS만.
- 예외 허용: Font Awesome(아이콘), Google Fonts(웹 폰트)
- `var` 금지 → `const`/`let`
- HTML `onclick` 금지 → `addEventListener`
- 인라인 스타일 `style="..."` 금지
- JS는 `defer`로 연결
- 최신 Chrome 기준 동작
- GitHub API 무인증 시간당 60회 제한 — 403 시 에러 UI

## 시크릿
- 없음 (GitHub API 무인증 호출)

## README 필수 항목
`/us`가 요구사항 전문에서 뽑아 채우고, `/ex`가 5기준 점검표 ⑤에서 대조한다. 명세가 지목한 항목이 빠지면 감점이 아니라 요구사항 미충족이다.

- [ ] (요구사항 §4-5(3)) 스크롤 탑 버튼 노출 기준값 (권장 300px)
- [ ] (요구사항 §4-5(4)) 네비게이션 스타일 변경 기준값 (권장 60px)
- [ ] (요구사항 §4-5(6)) Intersection Observer threshold (권장 0.2)
- [ ] (요구사항 §4-10) 프로젝트 설명 · 사용 기술 · 배포 URL · 스크린샷(데스크톱/모바일/다크모드)

## 단계별 진행 상황
`/us`가 채우고 `/st N 완료`가 체크한다. 1 step = 1 커밋 = 1 로그 = 30~90분.

- [ ] 1단계: 프로젝트 뼈대 — 산출: index.html·css/style.css·js/main.js·images/ / 검증: Live Server로 빈 페이지 뜨고 css·js 연결 확인(콘솔 에러 없음) (logs/step_1_skeleton.txt)
- [ ] 2단계: HTML 시맨틱 구조 — 산출: 6개 섹션 마크업(header/nav/main/section/footer), nav 앵커 링크, 이미지 alt, 폼 label for-id / 검증: 아웃라인 검사·nav 링크 클릭 시 해당 섹션 이동 (logs/step_2_html.txt)
- [ ] 3단계: CSS 변수·기본 레이아웃 — 산출: :root 변수, [data-theme="dark"] 변수, nav Flexbox, Projects Grid(auto-fit·minmax) / 검증: 데스크톱 폭에서 로고 좌·메뉴 우, 카드 격자 배치 (logs/step_3_css_layout.txt)
- [ ] 4단계: 반응형 — 산출: 모바일 퍼스트 + 768px·1024px 미디어 쿼리, 모바일 nav 숨김+햄버거 노출, hover·transition·box-shadow / 검증: 창 너비 줄이며 3개 구간 배치 전환 확인 (logs/step_4_responsive.txt)
- [ ] 5단계: JS 기반 + 인터랙션 1~4 — 산출: defer 연결, 햄버거 토글, 부드러운 스크롤, 스크롤 탑 버튼, 네비 스타일 변경 / 검증: 4개 각각 동작, var·onclick 없음 확인 (logs/step_5_interaction_core.txt)
- [ ] 6단계: 다크 모드 + 스크롤 애니메이션 — 산출: 테마 토글 + localStorage 저장·복원, Intersection Observer 페이드인 / 검증: 토글 후 새로고침해도 유지, 스크롤 시 구역 등장 (logs/step_6_theme_scroll.txt)
- [ ] 7단계: Contact 폼 UX — 산출: 필수값·이메일 형식 검증, 필드 근처 에러 메시지, preventDefault + 성공 메시지 / 검증: 빈 제출 차단, 잘못된 이메일 차단, 정상 시 성공 메시지 (logs/step_7_form.txt)
- [ ] 8단계: GitHub API 연동 — 산출: fetch+async/await, map으로 카드 렌더, 로딩/성공/에러(재시도)/빈 상태, try/catch, 403 처리 / 검증: 정상 로드·네트워크 차단 시 에러 UI·재시도 동작 (logs/step_8_api.txt)
- [ ] 9단계: 상태 흐름 정리 + 배포 + README — 산출: "이벤트→상태→렌더링" 3종 주석/문서화, GitHub Pages 배포, README 필수 4항목 채움, 스크린샷 3종 / 검증: 배포 URL에서 전체 기능 동작, README 4항목 대조 (logs/step_9_deploy.txt)
- [ ] (보너스) 프로젝트 필터링 / 타이핑 효과 / 폼 실제 전송 / prefers-color-scheme — 택하는 것만

## 완료 단계 요약
-

## 에러 & 해결 기록
-

## 미션 특이사항
- 보너스(선택): 프로젝트 필터링 / 타이핑 효과 / 폼 실제 전송(Formspree·EmailJS) / 시스템 다크 모드 감지(`prefers-color-scheme`)
- 기준값 자유지만 README 명시 필수: 스크롤탑 노출 300px / 네비 스타일 변경 60px / Intersection Observer threshold 0.2
