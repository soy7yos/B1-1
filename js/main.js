// 이 파일이 구현하는 "이벤트 → 상태 → 렌더링" 흐름 3종 — 각 위치는 아래 해당 블록 참고
// ① 다크 모드: click(테마 토글) → data-theme 속성값 → CSS가 전체 화면 색 재적용 (applyTheme 근처)
// ② API 연동: 페이지 로드 → 로딩/성공/에러/빈 상태 → Projects 영역 렌더링 (loadProjects·renderProjects 근처)
// ③ 폼 검증: submit → 필드별 에러 유무 → 에러 메시지 표시/숨김 (contactForm submit 리스너 근처)

// 기준값 상수
const SCROLL_TOP_THRESHOLD = 600; // 스크롤탑 버튼 노출 기준
const NAV_SCROLL_THRESHOLD = 30;  // 네비 스타일 변경 기준
const OBSERVER_THRESHOLD = 0.25;  // Intersection Observer 페이드인 발동 기준

const nav = document.querySelector('header nav');
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');
const scrollTopBtn = document.getElementById('scroll-top');

// 햄버거 토글 — CSS는 .nav-links.open만 다루므로 JS는 클래스·aria만 담당
hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

// nav-links 링크 클릭 시 모바일 메뉴 닫기 — 스크롤 자체는 CSS scroll-behavior:smooth가 처리(네이티브 기능, JS 불필요)
navLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});

// 스크롤 이벤트 하나로 스크롤탑 노출 + 네비 스타일 변경 둘 다 처리 — 리스너 중복 등록 안 함
window.addEventListener('scroll', () => {
  scrollTopBtn.hidden = window.scrollY < SCROLL_TOP_THRESHOLD;
  nav.classList.toggle('scrolled', window.scrollY > NAV_SCROLL_THRESHOLD);
});

// 스크롤탑 버튼 — window.scrollTo도 CSS scroll-behavior:smooth를 따라간다
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0 });
});

// 다크 모드 — localStorage에 사용자가 고른 값만 저장, 없으면 시스템 설정 감지
const THEME_KEY = 'theme';
const themeToggle = document.querySelector('.theme-toggle');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  // 버튼 안 LIGHT/DARK 표시는 CSS가 data-theme을 보고 처리 — JS는 상태만 바꾼다
  themeToggle.setAttribute('aria-label', theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환');
}

const savedTheme = localStorage.getItem(THEME_KEY);
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(savedTheme ?? (systemDark ? 'dark' : 'light'));

themeToggle.addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem(THEME_KEY, next); // 시스템 감지값은 저장 안 함 — 사용자가 직접 누른 선택만 다음 방문에 우선
});

// 스크롤 애니메이션 — 섹션이 뷰포트에 20%(OBSERVER_THRESHOLD) 들어오면 한 번만 페이드인
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      sectionObserver.unobserve(entry.target); // 매번 재관찰할 이유 없음 — 한 번 등장하면 끝
    }
  });
}, { threshold: OBSERVER_THRESHOLD });

document.querySelectorAll('main section').forEach((section) => {
  section.classList.add('fade-in'); // 클래스를 JS로 붙여야 JS 꺼진 브라우저에서도 콘텐츠가 숨겨지지 않음
  sectionObserver.observe(section);
});

// Contact 폼 — 필수값 + 이메일 형식 검증. 인풋마다 상태 객체 안 만들고 매 제출 시 DOM에서 직접 읽는다(폼이 3칸뿐이라 그걸로 충분)
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const contactForm = document.querySelector('#contact form');
const successMessage = document.getElementById('success-message');

function setError(fieldId, message) {
  document.getElementById(`${fieldId}-error`).textContent = message;
}

contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); // 기본 동작(새로고침)을 막아야 여기서 계속 처리 가능

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // 필드마다 에러를 먼저 지우고 다시 채운다 — 이전 제출의 에러가 남아있지 않도록
  setError('name', name === '' ? '이름을 입력해 주세요.' : '');
  setError('email', email === '' ? '이메일을 입력해 주세요.' : !EMAIL_PATTERN.test(email) ? '이메일 형식이 올바르지 않습니다.' : '');
  setError('message', message === '' ? '메시지를 입력해 주세요.' : '');

  const hasError = name === '' || email === '' || !EMAIL_PATTERN.test(email) || message === '';
  if (hasError) {
    successMessage.hidden = true;
    return;
  }

  contactForm.hidden = true; // 실제 전송은 안 함(학습용) — 폼을 숨기고 성공 메시지만 노출
  successMessage.hidden = false;
});

// GitHub API 연동
const GITHUB_USER = 'soy7yos';
const EXCLUDED_REPOS = ['B2-1']; // 진행 중인 repo는 평가 대상(B1-1)을 밀어내지 않도록 제외 목록으로 거른다
const projectsStatus = document.getElementById('projects-status');
const projectsGrid = document.getElementById('projects-grid');

function renderProjects(repos) {
  if (repos.length === 0) {
    projectsGrid.hidden = true;
    projectsStatus.hidden = false;
    projectsStatus.textContent = '표시할 프로젝트가 없습니다.';
    return;
  }

  projectsGrid.textContent = ''; // 재시도 시 이전 카드가 중복되지 않도록 비우고 다시 그림
  const cards = repos.map(({ name, description, html_url }) => {
    // 카드 골격은 DOM API로, 남이 지은 값(description)은 textContent로 — repo description에 <> 등이 섞여도 마크업으로 해석 안 되게
    const card = document.createElement('article');
    card.className = 'card';
    const title = document.createElement('h3');
    title.textContent = name;
    const desc = document.createElement('p');
    desc.textContent = description ?? '설명 없음'; // 실측상 전부 null이라 폴백 필수
    const link = document.createElement('a');
    link.href = html_url;
    link.textContent = '보기';
    card.append(title, desc, link);
    return card;
  });
  projectsGrid.append(...cards);

  projectsStatus.hidden = true;
  projectsGrid.hidden = false;
}

async function loadProjects() {
  projectsStatus.hidden = false;
  projectsStatus.textContent = '불러오는 중...';
  projectsGrid.hidden = true;

  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated`);
    if (!response.ok) {
      // 403 = 무인증 시간당 60회 제한 초과. 다른 실패도 같은 에러 UI로 묶는다 — 원인별로 나눠봐야 사용자가 할 수 있는 건 재시도뿐
      throw new Error(`GitHub API 응답 실패: ${response.status}`);
    }
    const repos = await response.json();
    const visible = repos.filter((repo) => !EXCLUDED_REPOS.includes(repo.name));
    renderProjects(visible);
  } catch (error) {
    projectsGrid.hidden = true;
    projectsStatus.hidden = false;
    projectsStatus.textContent = ''; // 재시도 버튼을 매번 새로 붙이므로 이전 상태 비움
    projectsStatus.append('프로젝트를 불러올 수 없습니다. ');
    const retryBtn = document.createElement('button');
    retryBtn.type = 'button';
    retryBtn.textContent = '다시 시도';
    retryBtn.addEventListener('click', loadProjects);
    projectsStatus.appendChild(retryBtn);
  }
}

loadProjects();
