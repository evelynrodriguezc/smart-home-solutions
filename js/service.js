(function () {
  'use strict';

  /* Light layers: whichever step sits in the middle of the screen sets
     how many layers of the room are on (0 = dark, 3 = fully lit). */
  const section = document.querySelector('[data-layers]');
  if (!section) return;

  const steps = section.querySelectorAll('[data-layer-step]');
  const legend = section.querySelectorAll('[data-legend]');

  /* Numbers that change with each step: data-steps="v0,v1,v2,v3" */
  const counters = [...section.querySelectorAll('[data-steps]')].map((el) => ({
    el, vals: el.dataset.steps.split(',').map(Number), dec: Number(el.dataset.decimals || 0), cur: null, raf: 0
  }));
  const animateTo = (c, to) => {
    cancelAnimationFrame(c.raf);
    const from = c.cur == null ? to : c.cur, t0 = performance.now(), dur = 1200;
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      c.cur = from + (to - from) * e;
      c.el.textContent = c.cur.toFixed(c.dec);
      if (p < 1) c.raf = requestAnimationFrame(tick);
    };
    c.raf = requestAnimationFrame(tick);
  };

  /* Typed phrases (voice page): data-type-step="n" types its text when step n is active */
  const typed = [...section.querySelectorAll('[data-type-step]')];
  typed.forEach((el) => { el.dataset.full = el.textContent.trim(); });
  // the language switch rewrites the text: keep the typed phrase in sync
  document.addEventListener('i18n:applied', () => typed.forEach((el) => {
    clearInterval(el._t);
    el.dataset.full = el.textContent.trim();
  }));
  const typeOut = (el) => {
    clearInterval(el._t);
    const full = el.dataset.full; let i = 0; el.textContent = '';
    el._t = setInterval(() => { el.textContent = full.slice(0, ++i); if (i >= full.length) clearInterval(el._t); }, 38);
  };

  const setActive = (n) => {
    counters.forEach((c) => animateTo(c, c.vals[Math.min(n, c.vals.length - 1)]));
    typed.forEach((el) => { if (Number(el.dataset.typeStep) === n && section.dataset.active !== String(n)) typeOut(el); });
    section.dataset.active = String(n);
    steps.forEach((s) => s.classList.toggle('is-active', Number(s.dataset.layerStep) === n));
    legend.forEach((l) => l.classList.toggle('is-on', Number(l.dataset.legend) <= n));
  };

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) setActive(Number(e.target.dataset.layerStep)); });
  }, {
    // on phones the photo is pinned at the top, so read steps lower on screen
    rootMargin: window.matchMedia('(max-width: 991px)').matches ? '-62% 0px -32% 0px' : '-45% 0px -45% 0px'
  });
  steps.forEach((s) => io.observe(s));

  // No motion: show the finished, fully lit room
  if (!document.documentElement.classList.contains('motion') ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    io.disconnect();
    setActive(3);
    steps.forEach((s) => s.classList.add('is-active'));
  }
})();
