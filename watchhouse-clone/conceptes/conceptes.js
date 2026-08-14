// Horizontal scroll-driven guides and requirements toggles.

(function () {
  const BREAKPOINT = 1024;
  const GUIDE_VH   = 0.96; // guide height as fraction of viewport height

  // Requirements panel toggle (mobile only)
  function initRequirementsToggle() {
    const btn  = document.querySelector('.product-guide-requirements__header');
    const body = document.getElementById('requirements-body');
    if (!btn || !body) return;

    btn.addEventListener('click', () => {
      if (window.innerWidth >= BREAKPOINT) return;
      const isOpen = body.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Init a single guide instance
  function initGuideInstance(wrapper, instanceIndex) {
    const guide    = wrapper.querySelector('.product-guide');
    const track    = wrapper.querySelector('.product-guide-steps__track');
    const viewport = wrapper.querySelector('.product-guide__steps-viewport');
    const steps    = wrapper.querySelectorAll('.product-guide-step');
    const header   = document.getElementById('site-header');

    if (!guide || !track || !steps.length) return;

    let active       = false;
    let scrollAmount = 0;
    let maxTranslate = 0;
    // Vertical offset where this instance's scroll range begins.
    // Second guide starts after the first guide's scroll space.
    let scrollStart  = 0;

    function setup() {
      if (window.innerWidth < BREAKPOINT) {
        wrapper.style.height  = '';
        guide.style.top       = '';
        guide.style.height    = '';
        track.style.transform = '';
        active = false;
        return;
      }

      active = true;

      const headerH = header ? header.offsetHeight : 0;
      guide.style.top    = headerH + 'px';
      const guideH       = Math.round(window.innerHeight * GUIDE_VH - headerH);
      guide.style.height = guideH + 'px';

      scrollAmount        = guideH * steps.length;
      wrapper.style.height = (guideH + scrollAmount) + 'px';

      // Begin the horizontal movement only when this guide actually reaches
      // the page viewport. Using the accumulated wrapper heights ignored the
      // header above the first guide, so it loaded already translated.
      scrollStart = wrapper.getBoundingClientRect().top + window.scrollY;

      // Steps have mixed widths (hero/duo 90%, normal 72%), so a per-step
      // multiply is wrong. Slide by the real overflow: full track content
      // width minus the visible viewport width.
      const viewportW = viewport ? viewport.clientWidth : guide.clientWidth;
      maxTranslate = Math.max(0, track.scrollWidth - viewportW);
    }

    const reversed = guide.classList.contains('product-guide--reversed');

    function update() {
      if (!active) return;
      const localScroll = window.scrollY - scrollStart;
      const progress    = Math.min(1, Math.max(0, localScroll / scrollAmount));
      // Reversed guide starts at last step and slides back to first
      const translate   = reversed
        ? (-maxTranslate + progress * maxTranslate)
        : (-progress * maxTranslate);
      track.style.transform = 'translate3d(' + translate.toFixed(2) + 'px,0,0)';
    }

    setup();
    update();

    return { setup, update };
  }

  // Initialize every horizontal guide instance.
  function initAllGuides() {
    const wrappers = document.querySelectorAll('.product-guide-scroll-wrapper');
    if (!wrappers.length) return;

    const instances = Array.from(wrappers).map((w, i) => initGuideInstance(w, i));

    function updateAll() { instances.forEach(inst => inst && inst.update()); }
    function setupAll()  { instances.forEach(inst => inst && inst.setup());
                           updateAll(); }

    window.addEventListener('scroll', updateAll, { passive: true });
    window.addEventListener('resize', setupAll,  { passive: true });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initRequirementsToggle();
    initAllGuides();
  });
})();
