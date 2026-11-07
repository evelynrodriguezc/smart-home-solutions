(function () {
  'use strict';

  /* Light layers: whichever step sits in the middle of the screen sets
     how many layers of the room are on (0 = dark, 3 = fully lit). */
  const section = document.querySelector('[data-layers]');
  if (!section) return;

  const steps = section.querySelectorAll('[data-layer-step]');
  const legend = section.querySelectorAll('[data-legend]');

  const setActive = (n) => {
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
