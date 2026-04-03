/* ============================================
   MELI UX Challenge — Route Nav Controller
   Vertical roadmap sidebar: section tracking,
   visited states, progress line fill & smooth scroll
   ============================================ */

(function () {
  'use strict';

  const routeNav   = document.getElementById('route-nav');
  const lineFill   = document.getElementById('route-line-fill');
  const nodes      = document.querySelectorAll('.route-nav__node[data-section]');
  const sections   = ['hero', 'brief', 'problema', 'investigar', 'solucion', 'diseno', 'impacto'];

  let activeIndex  = 0;

  // ── Map section id → node index ──
  const sectionIndexMap = {};
  sections.forEach((id, i) => { sectionIndexMap[id] = i; });

  // ── Update node states ──
  function setActive(index) {
    if (index === activeIndex && nodes[index]?.classList.contains('is-active')) return;
    activeIndex = index;

    nodes.forEach((node, i) => {
      node.classList.remove('is-active', 'is-visited');
      if (i < index)       node.classList.add('is-visited');
      else if (i === index) node.classList.add('is-active');
    });

    updateLineFill(index);
  }

  // ── Animate the vertical fill line ──
  function updateLineFill(activeIdx) {
    if (!lineFill || !nodes.length) return;
    const total = nodes.length - 1; // exclude "soon" node
    // Fill goes from 0% (first node) to 100% (last real node)
    const pct = total > 0 ? (activeIdx / total) * 100 : 0;
    lineFill.style.height = pct + '%';
  }

  // ── Intersection Observer: track which section is in viewport ──
  function initSectionTracking() {
    const targets = sections
      .map(id => document.getElementById(id))
      .filter(Boolean);

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id    = entry.target.id;
            const index = sectionIndexMap[id];
            if (index !== undefined) setActive(index);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -45% 0px'
      }
    );

    targets.forEach(el => observer.observe(el));
  }

  // ── Smooth scroll on node click ──
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetEl = document.querySelector(this.getAttribute('href'));
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ── Hide nav when footer is visible ──
  function initFooterHide() {
    const footer = document.querySelector('.site-footer');
    if (!footer || !routeNav) return;

    const footerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            routeNav.classList.add('is-hidden');
          } else {
            routeNav.classList.remove('is-hidden');
          }
        });
      },
      { threshold: 0.05 }
    );

    footerObserver.observe(footer);
  }

  // ── Init ──
  function init() {
    if (!routeNav) return;
    // Set first node active on load
    setActive(0);
    initSectionTracking();
    initSmoothScroll();
    initFooterHide();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
