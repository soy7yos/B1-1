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
- 평가문항.md: 없음 — 추후 등록
- 개인 repo: https://github.com/myCodyssey/B1-1 (public)
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

- [ ] (`/us`가 채움)

## 단계별 진행 상황
`/us`가 채우고 `/st N 완료`가 체크한다. 1 step = 1 커밋 = 1 로그 = 30~90분.

- [ ] (`/us` 2단계 분해가 채움)

## 완료 단계 요약
-

## 에러 & 해결 기록
-

## 미션 특이사항
- 보너스(선택): 프로젝트 필터링 / 타이핑 효과 / 폼 실제 전송(Formspree·EmailJS) / 시스템 다크 모드 감지(`prefers-color-scheme`)
- 기준값 자유지만 README 명시 필수: 스크롤탑 노출 300px / 네비 스타일 변경 60px / Intersection Observer threshold 0.2
