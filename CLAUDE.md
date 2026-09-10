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
- [ ] 7단계: Contact 폼 UX — 산출: `<form novalidate>`, 필수값·이메일 형식 검증(`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`), 필드 근처 에러 메시지, preventDefault + 성공 메시지 / 검증: 빈 제출 차단, 잘못된 이메일 차단, 정상 시 성공 메시지 (logs/step_7_form.txt)
- [ ] 8단계: GitHub API 연동 — 산출: fetch+async/await, `sort=updated`, `EXCLUDED_REPOS` filter, map으로 카드 렌더(이름·설명·링크, `description ?? '설명 없음'`), 로딩/성공/에러(재시도)/빈 상태, try/catch, 403 처리 / 검증: 정상 로드·네트워크 차단 시 에러 UI·재시도 동작·배열 `[]` 강제로 빈 상태 확인 (logs/step_8_api.txt)
- [ ] 9단계: 상태 흐름 정리 + 배포 + README — 산출: "이벤트→상태→렌더링" 3종 주석/문서화, GitHub Pages 배포, README 필수 4항목 채움, 스크린샷 3종 / 검증: 배포 URL에서 전체 기능 동작, README 4항목 대조 (logs/step_9_deploy.txt)
- [ ] (보너스) `prefers-color-scheme` 시스템 다크 모드 감지 — 6단계에 얹는다. 나머지 3개는 미채택

## 완료 단계 요약
-

## 에러 & 해결 기록
-

## 미션 특이사항
- 보너스는 **`prefers-color-scheme`만 채택**(2026.09.10). 필터링·타이핑 효과·폼 실제 전송은 비용 대비 실익이 없어 버렸다
- **ref.md와 명세가 부딪히면 명세를 따른다** — ref.md는 "그림자: 없음(플랫)"인데 명세 §4-3은 카드 `box-shadow`를 필수로 요구한다. 카드에 기본부터 그림자를 넣고 hover에서 강화한다. 모서리 `0`·웜 아이보리·폰트 대비는 충돌하지 않으므로 ref 그대로 간다
- **Font Awesome 미사용** — 명세 §6이 허용하지만 필수가 아니다. 아이콘 자리를 CSS·문자로 처리하면 외부 요청이 0이 되고 ref의 대문자 아웃라인 톤에도 맞다
- 기준값 자유지만 README 명시 필수: 스크롤탑 노출 300px / 네비 스타일 변경 60px / Intersection Observer threshold 0.2. 권장값으로 구현한 뒤 직접 튜닝하므로 세 값을 `js/main.js` 상단 상수로 모은다(`SCROLL_TOP_THRESHOLD`·`NAV_SCROLL_THRESHOLD`·`OBSERVER_THRESHOLD`). 최종값 확정 시한은 9단계 README 작성 전

### 확정 사항 (❓ 질문 목록 답변, 2026.09.10 — 근거는 `이해_B1-1.md`)
| 항목 | 확정 |
|---|---|
| GitHub 아이디 | `soy7yos` |
| 카드 열 수 | 모바일 1 / 태블릿·데스크톱 2 — 미디어 쿼리가 아니라 `repeat(auto-fit, minmax(320px, 1fr))`로 유도 |
| 카드 필드·정렬 | 이름 + 설명 + repo 링크, `?sort=updated` |
| 표시 repo | **개수 제한 없음**, `EXCLUDED_REPOS = ['B2-1']`로 제외 → 현재 `E1_1`·`E1_2`·`E1_3`·`B1-1` 4장 |
| Hero CTA | Contact 섹션으로 스크롤 |
| 프로필 이미지 | 이니셜 플레이스홀더 `images/profile.svg` — 로컬 생성, 투명 배경 + 검정 이니셜. 다크 모드는 CSS `filter: invert(1)`로 반전. 나중에 실제 사진으로 파일만 교체 |
| 이메일 검증 | `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` |
| 팔레트·폰트 | ✅ 확정 — 아래 `### 디자인 토큰 확정` 참조 (2026.09.10) |
| 다크 모드 색 | 라이트 완성 후 결정. `[data-theme="dark"]` 블록은 3단계에서 빈 채로 미리 생성 |
| 콘텐츠 언어 | 영문 제목(대문자) + 한국어 본문. ref 디자인이 대문자·넓은 자간 라틴 제목을 전제하고 한글엔 그 효과가 없다 |
| 이름 표기 | **`soy`** — 로고·Hero·Footer 전부 통일. 실명은 쓰지 않는다 |
| About 형태 | 스펙 시트(라벨 + 한두 줄) — ref의 라벨-값 구조와 맞다. 경력 서술 블록은 빼기로 결정. 본문 문장은 ⏳ 별도 세션에서 확정 |
| 아이콘 | Font Awesome **미사용**. 햄버거는 `span` 3개, 스크롤탑은 `↑`, 테마 토글은 `LIGHT`/`DARK` 텍스트, GitHub는 대문자 텍스트 링크 |

### 디자인 토큰 확정 (2026.09.10)
참고 사이트에서 추출한 값. **원본 `ref/ref.md`는 `.gitignore`로 제외돼 GitHub에 안 올라가므로 여기에 옮겨 적는다** — 3단계에서 `:root`를 쓸 때 이 표가 근거다.

| 토큰 | 값 | 출처 |
|---|---|---|
| `--bg` | `#F5F3EF` (웜 아이보리) | ref.md |
| `--text` | `#1A1A1A` | ref.md |
| `--muted` | `#8A8A8A` | ref.md |
| `--radius` | `0` — 각지게 | ref.md |
| `--font-head` | `'Archivo Black', sans-serif` | 확정 |
| `--font-body` | `'IBM Plex Sans KR', sans-serif` (300/400/600) | 확정 |
| 간격 스케일 | 8px 기반 `8 / 16 / 24 / 48 / 96`. 섹션 상하 96px(데스크톱)·48px(모바일), 요소 간 24px | ref.md의 "48px+ / 24px+"를 수치화 |
| `--shadow` | 카드 기본 상태부터 적용, hover에서 강화 | 명세 §4-3 |

톤 요약: 웜톤 흑백 + 넓은 여백 + 극단적 폰트 대비 + 반듯한 그리드 = 편집 디자인(잡지) 느낌. 제목은 아주 굵게·자간 넓게·대문자, 본문은 얇고 작게·회색.

### 구현 시 함정
- **`<input type="email">` + 자체 검증 충돌** — 브라우저 기본 검증이 먼저 걸려 `submit` 핸들러가 안 돈다. 그러면 요구사항 §6의 "입력 필드 근처 에러 메시지" 대신 브라우저 툴팁이 뜬다. `<form novalidate>`로 기본 검증을 끄고 JS가 전담
- **`description`이 전부 `null`** — 실측(2026.09.10) public repo 5개 모두 비어 있다. `repo.description ?? '설명 없음'` 폴백 없으면 카드에 `null`이 찍힌다. GitHub에서 Description을 채워도 폴백은 남긴다
- **빈 상태는 자연 발생하지 않음** — repo가 0개가 될 일이 없다. 8단계에서 배열을 잠깐 `[]`로 강제해 확인하고 그 사실을 `logs/step_8_api.txt`에 남긴다(평가 질문 대비)
- **개수 제한(`slice`)을 쓰지 않는 이유** — 갱신순 상위 N개로 자르면 `B2-1` 작업 재개 시 그게 맨 위로 올라와 평가 대상인 `B1-1`이 잘린다. 제외 목록은 뺄 것만 적으므로 B3·B4가 생겨도 코드를 안 건드린다. 카드가 8장을 넘기면 그때 `slice` 추가
