(function () {
  'use strict';

  const root = document.documentElement;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Page intro: on the home page wait for the hero photo, elsewhere go now ── */
  const heroImg = document.getElementById('heroImg');
  const start = () => requestAnimationFrame(() => root.classList.add('is-loaded'));
  if (!heroImg || heroImg.complete) start();
  else {
    heroImg.addEventListener('load', start, { once: true });
    heroImg.addEventListener('error', start, { once: true });
  }
  setTimeout(start, 2500); // never leave the intro hidden if the image is slow

  /* ── Dimmer: drag (or arrow keys) to set the light level of the hero photo ── */
  const dimmer = document.querySelector('[data-dimmer]');
  if (dimmer) {
    const stage = dimmer.closest('.hero__right');
    const track = dimmer.querySelector('.dimmer__rail');
    const label = dimmer.querySelector('[data-dimmer-value]');
    let value = 80;

    const render = (v) => {
      value = Math.max(0, Math.min(100, v));
      const lvl = value / 100;
      dimmer.style.setProperty('--level', lvl);
      stage.style.setProperty('--dim', (0.12 + lvl * 1.1).toFixed(3)); // 80% ≈ the photo as shot
      // Saturation tops out at the original; above 80% the extra light is warm,
      // otherwise brightening pushes the cool ceiling and walls toward blue.
      stage.style.setProperty('--sat', Math.min(1, 0.45 + lvl * 0.7).toFixed(3));
      stage.style.setProperty('--warm', Math.max(0, (lvl - 0.8) * 1.25).toFixed(3));
      label.textContent = `${Math.round(value)}%`;
      track.setAttribute('aria-valuenow', String(Math.round(value)));
    };

    // Relative drag: grabbing anywhere doesn't jump the level, it nudges it
    let startY = 0, startValue = 0;
    const fromPointer = (e) => {
      const h = track.getBoundingClientRect().height;
      render(startValue + ((startY - e.clientY) / h) * 100);
    };
    const markUsed = () => dimmer.classList.add('is-used');

    stage.dataset.dimmable = '';
    stage.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      e.preventDefault(); // no text selection / native image drag while dimming
      stage.setPointerCapture(e.pointerId);
      dimmer.classList.add('is-dragging');
      markUsed();
      startY = e.clientY;
      startValue = value;
    });
    stage.addEventListener('pointermove', (e) => {
      if (dimmer.classList.contains('is-dragging')) fromPointer(e);
    });
    const stop = () => dimmer.classList.remove('is-dragging');
    stage.addEventListener('pointerup', stop);
    stage.addEventListener('pointercancel', stop);
    track.addEventListener('keydown', (e) => {
      const step = e.shiftKey ? 10 : 5;
      const keys = { ArrowUp: step, ArrowRight: step, ArrowDown: -step, ArrowLeft: -step, PageUp: 20, PageDown: -20 };
      if (e.key in keys) { e.preventDefault(); markUsed(); render(value + keys[e.key]); }
      else if (e.key === 'Home') { e.preventDefault(); markUsed(); render(0); }
      else if (e.key === 'End') { e.preventDefault(); markUsed(); render(100); }
    });

    // Lights-on intro: the dimmer itself rises from dark to 80%
    if (reduce) render(80);
    else {
      render(4);
      const rise = () => {
        const t0 = performance.now();
        const step = (now) => {
          if (dimmer.classList.contains('is-used')) return; // user grabbed it mid-intro
          const p = Math.min(1, (now - t0) / 1600);
          render(4 + 76 * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      const waitForLoad = () => root.classList.contains('is-loaded') ? setTimeout(rise, 250) : requestAnimationFrame(waitForLoad);
      waitForLoad();
    }
  }

  /* ── Mask reveals: a fully clipped element has no visible area, so
     IntersectionObserver never fires on it. Watch the parent instead. ── */
  const maskIO = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      maskIO.unobserve(entry.target);
      entry.target.querySelectorAll(':scope > .reveal-mask').forEach((m) => m.classList.add('visible'));
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.reveal-mask').forEach((m) => maskIO.observe(m.parentElement));

  if (reduce) return;

  /* ── Count-up for the stats band ── */
  const countIO = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      countIO.unobserve(entry.target);
      const el = entry.target;
      const to = Number(el.dataset.count);
      const t0 = performance.now();
      const step = (now) => {
        const p = Math.min(1, (now - t0) / 1600);
        el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      };
      el.textContent = '0';
      requestAnimationFrame(step);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('[data-count]').forEach((el) => countIO.observe(el));

  /* ── Parallax on the CTA photo ── */
  const ctaBand = document.querySelector('.cta-band');
  const ctaBg = ctaBand && ctaBand.querySelector('.cta-band__bg');
  if (ctaBg) {
    let ticking = false;
    const update = () => {
      ticking = false;
      const r = ctaBand.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.bottom < 0 || r.top > vh) return;
      const progress = (vh - r.top) / (vh + r.height); // 0 → 1 while it crosses the screen
      ctaBg.style.transform = `translate3d(0, ${(progress - 0.5) * -18}%, 0)`;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }
})();
