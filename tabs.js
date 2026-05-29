// ZENEX · tab switching for the §01 service cards + §02 detail panels
(function () {
  'use strict';

  const tabs = document.querySelectorAll('[data-target]');
  const panels = document.querySelectorAll('.detail-panel');
  const detailsSection = document.getElementById('details');
  const header = document.getElementById('siteHeader');

  if (!tabs.length || !panels.length) return;

  // Map of target -> panel element
  const panelByTarget = {};
  panels.forEach((p) => { panelByTarget[p.getAttribute('data-panel')] = p; });

  function activate(target, opts) {
    opts = opts || {};

    // Update every tab (service cards + sub-tabs both carry data-target)
    tabs.forEach((el) => {
      const on = el.getAttribute('data-target') === target;
      el.classList.toggle('is-active', on);
      el.setAttribute('aria-selected', on ? 'true' : 'false');
      // Manage tabindex so keyboard focus moves to the active tab in each group
      if (el.hasAttribute('tabindex')) {
        el.setAttribute('tabindex', on ? '0' : '-1');
      }
    });

    // Show only the active panel
    panels.forEach((p) => {
      const on = p.getAttribute('data-panel') === target;
      p.classList.toggle('is-active', on);
      if (on) {
        p.removeAttribute('hidden');
        // Restart fade-in animation
        p.style.animation = 'none';
        // Trigger reflow then unset to replay
        void p.offsetWidth;
        p.style.animation = '';
      } else {
        p.setAttribute('hidden', '');
      }
    });

    if (opts.scroll) {
      // Scroll to the sub-tab bar (the "scheme"), not the section heading,
      // so users land directly on the schematics — not the §02 title.
      const scrollTarget = document.querySelector('.detail-tabs') || detailsSection;
      if (scrollTarget) {
        const offset = header ? header.getBoundingClientRect().height : 0;
        const y = scrollTarget.getBoundingClientRect().top + window.scrollY - offset - 18;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }

    // Persist for refresh (optional nicety)
    try { sessionStorage.setItem('zenex.activeTab', target); } catch (e) { /* ignore */ }
  }

  // -------- Click handlers --------
  tabs.forEach((t) => {
    t.addEventListener('click', (e) => {
      const target = t.getAttribute('data-target');
      if (!target || !panelByTarget[target]) return;
      // Only scroll when the click came from a service card (in §01).
      const fromServiceCard = t.classList.contains('service');
      activate(target, { scroll: fromServiceCard });
    });

    // Keyboard support — Enter / Space activates, arrows move within group
    t.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        t.click();
        return;
      }
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        // Find siblings in the same tablist
        const list = t.closest('[role="tablist"]');
        if (!list) return;
        const siblings = Array.from(list.querySelectorAll('[data-target]'));
        const idx = siblings.indexOf(t);
        if (idx < 0) return;
        const next = e.key === 'ArrowRight'
          ? siblings[(idx + 1) % siblings.length]
          : siblings[(idx - 1 + siblings.length) % siblings.length];
        if (next) {
          e.preventDefault();
          next.focus();
          next.click();
        }
      }
    });
  });

  // -------- Boot: honor sessionStorage, otherwise leave the default 'web' --------
  try {
    const saved = sessionStorage.getItem('zenex.activeTab');
    if (saved && panelByTarget[saved] && saved !== 'web') {
      activate(saved, { scroll: false });
    }
  } catch (e) { /* ignore */ }
})();
