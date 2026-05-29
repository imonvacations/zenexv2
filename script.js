// ZENEX site — header scroll state + reveal-on-scroll
(function () {
  'use strict';

  // ---------- Header background on scroll ----------
  const header = document.getElementById('siteHeader');
  let lastScroll = -1;
  function onScroll() {
    const y = window.scrollY;
    if (y === lastScroll) return;
    lastScroll = y;
    if (header) header.classList.toggle('scrolled', y > 20);
  }
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---------- Theme toggle (light / dark) ----------
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const root = document.documentElement;
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('zenex-theme', next); } catch (e) {}
    });
  }

  // ---------- Reveal on scroll ----------
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('in'));
  }

  // ---------- Smooth anchor scroll honoring sticky header offset ----------
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const headerH = header ? header.getBoundingClientRect().height : 0;
      const y = target.getBoundingClientRect().top + window.scrollY - headerH - 8;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });
})();
