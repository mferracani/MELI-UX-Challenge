/* ============================================
   MELI UX Challenge — Motion Controller
   IntersectionObserver, scroll reveals, count-up
   ============================================ */

(function () {
  'use strict';

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── Scroll Reveal ──
  function initScrollReveal() {
    if (prefersReducedMotion) {
      // Show everything immediately
      document.querySelectorAll('.reveal').forEach(el => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });
  }

  // ── Count-Up Animation ──
  function animateCountUp(element) {
    const target = element.getAttribute('data-count');
    const suffix = element.getAttribute('data-suffix') || '';
    const prefix = element.getAttribute('data-prefix') || '';
    const duration = prefersReducedMotion ? 0 : 1200;

    // Handle special values like percentages
    const isNegative = target.startsWith('-');
    const numericValue = parseFloat(target.replace(/[^0-9.]/g, ''));
    const isDecimal = target.includes('.');

    if (duration === 0) {
      element.textContent = prefix + target + suffix;
      return;
    }

    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      let currentValue;
      if (isDecimal) {
        currentValue = (numericValue * eased).toFixed(1);
      } else {
        currentValue = Math.round(numericValue * eased);
      }

      element.textContent = prefix + (isNegative ? '-' : '') + currentValue + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = prefix + target + suffix;
      }
    }

    requestAnimationFrame(update);
  }

  function initCountUp() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCountUp(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('[data-count]').forEach(el => {
      observer.observe(el);
    });
  }

  // ── Init ──
  function init() {
    initScrollReveal();
    initCountUp();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
