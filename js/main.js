// 5단계에서 인터랙션 로직 채움 — 1단계는 연결 확인용 빈 파일

// 기준값 상수 — README 명시 필수(§4-5). 권장값으로 시작, 9단계 전 최종 튜닝
const SCROLL_TOP_THRESHOLD = 300; // 스크롤탑 버튼 노출 기준
const NAV_SCROLL_THRESHOLD = 30;  // 네비 스타일 변경 기준
const OBSERVER_THRESHOLD = 0.25;   // 6단계 Intersection Observer용, 여기서 미리 선언만

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

// 다크 모드 — localStorage에 사용자가 고른 값만 저장, 없으면 시스템 설정 감지(보너스: prefers-color-scheme)
const THEME_KEY = 'theme';
const themeToggle = document.querySelector('.theme-toggle');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  themeToggle.textContent = theme === 'dark' ? 'DARK' : 'LIGHT';
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

// Contact 폼 — 필수값 + 이메일 형식 검증. 인풋마다 상태 객체 안 만들고 매 제출 시 DOM에서 직접 읽는다(폼이 3칸뿐이라 그걸로 충분, 상태 관리 라이브러리 급의 문제가 아님)
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이해_B1-1.md에서 확정한 정규식 그대로
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
