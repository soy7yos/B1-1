// 5단계에서 인터랙션 로직 채움 — 1단계는 연결 확인용 빈 파일

// 기준값 상수 — README 명시 필수(§4-5). 권장값으로 시작, 9단계 전 최종 튜닝
const SCROLL_TOP_THRESHOLD = 300; // 스크롤탑 버튼 노출 기준
const NAV_SCROLL_THRESHOLD = 60;  // 네비 스타일 변경 기준
const OBSERVER_THRESHOLD = 0.2;   // 6단계 Intersection Observer용, 여기서 미리 선언만

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
