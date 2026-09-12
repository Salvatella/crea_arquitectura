(() => {
  const guideOpeningDelay = 650;
  const guideMoveDuration = 650;
  const openingTimers = new WeakMap();

  const scrollByStep = (viewport, direction) => {
    const steps = Array.from(viewport.querySelectorAll('.product-guide-step'));
    if (!steps.length) return;

    const currentIndex = steps.reduce((closest, step, index) => (
      Math.abs(step.offsetLeft - viewport.scrollLeft) < Math.abs(steps[closest].offsetLeft - viewport.scrollLeft)
        ? index
        : closest
    ), 0);
    const targetIndex = Math.max(0, Math.min(steps.length - 1, currentIndex + direction));

    steps[targetIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  };

  document.querySelectorAll('.product-guide-scroll-wrapper').forEach((wrapper) => {
    const trigger = wrapper.querySelector('[data-open-guide]');
    const intro = wrapper.querySelector('.concept-intro');
    const viewport = wrapper.querySelector('.product-guide__steps-viewport');
    const previous = wrapper.querySelector('[data-guide-prev]');
    const next = wrapper.querySelector('[data-guide-next]');
    if (!trigger || !viewport) return;

    const layout = wrapper.closest('.content-for-layout');
    const guides = Array.from(document.querySelectorAll('.product-guide-scroll-wrapper'));

    const previewOtherGuideMove = () => {
      if (!layout) return [];

      const hadExpandedLayout = layout.classList.contains('has-expanded');
      const hasPrimaryGuide = Boolean(layout.querySelector('.is-primary-guide'));
      const currentPositions = new Map(guides.map((guide) => [guide, guide.getBoundingClientRect()]));

      if (!hasPrimaryGuide) wrapper.classList.add('is-primary-guide');
      layout.classList.add('has-expanded');

      const targetPositions = new Map(guides.map((guide) => [guide, guide.getBoundingClientRect()]));

      if (!hasPrimaryGuide) wrapper.classList.remove('is-primary-guide');
      if (!hadExpandedLayout) layout.classList.remove('has-expanded');

      return guides.filter((guide) => guide !== wrapper).flatMap((guide) => {
        const current = currentPositions.get(guide);
        const target = targetPositions.get(guide);
        const deltaX = guide.id === 'rehabilita' ? 0 : target.left - current.left;
        const deltaY = target.top - current.top;
        if (!deltaX && !deltaY) return [];

        return guide.animate([
          { transform: 'translate(0, 0)' },
          { transform: `translate(${deltaX}px, ${deltaY}px)` },
        ], {
          duration: guideMoveDuration,
          easing: 'cubic-bezier(.22,.61,.36,1)',
          fill: 'forwards',
        });
      });
    };

    // The Rehabilitar guide uses one full viewport-wide frame per step.  The
    // measured value avoids percentage widths being resolved against the
    // max-content track instead of the visible carousel area.
    const syncRehabilitarStepWidth = () => {
      if (wrapper.id === 'rehabilita') {
        viewport.style.setProperty('--rehabilitar-step-width', `${viewport.clientWidth}px`);
      }
    };

    new ResizeObserver(syncRehabilitarStepWidth).observe(viewport);

    trigger.addEventListener('click', () => {
      guides.forEach((guide) => {
        window.clearTimeout(openingTimers.get(guide));
        if (guide === wrapper) return;
        guide.classList.remove('is-expanded');
        guide.classList.remove('is-opening');
        guide.querySelector('[data-open-guide]')?.setAttribute('aria-expanded', 'false');
      });

      const guideMoveAnimations = previewOtherGuideMove();
      wrapper.classList.add('is-opening');
      trigger.setAttribute('aria-expanded', 'true');
      const openingTimer = window.setTimeout(() => {
        guideMoveAnimations.forEach((animation) => animation.cancel());
        if (!layout?.querySelector('.is-primary-guide')) {
          wrapper.classList.add('is-primary-guide');
        }
        layout?.classList.add('has-expanded');
        wrapper.classList.remove('is-opening');
        wrapper.classList.add('is-expanded');
        // El recorrido de Rehabilitar está dispuesto de forma invertida: el
        // primer ejemplo visual queda al extremo derecho del track.
        if (wrapper.querySelector('.product-guide--reversed')) {
          window.requestAnimationFrame(() => {
            syncRehabilitarStepWidth();
            viewport.scrollLeft = viewport.scrollWidth - viewport.clientWidth;
          });
        }
        wrapper.scrollIntoView({ block: 'start', behavior: 'auto' });
        window.setTimeout(() => viewport.focus({ preventScroll: true }), 350);
      }, guideOpeningDelay);
      openingTimers.set(wrapper, openingTimer);
    });

    // En el recorrido invertido (Rehabilitar) las flechas se giran para que
    // la flecha derecha avance al siguiente paso, igual que en Reutilizar.
    const stepDir = wrapper.querySelector('.product-guide--reversed') ? -1 : 1;
    previous?.addEventListener('click', () => scrollByStep(viewport, -stepDir));
    next?.addEventListener('click', () => scrollByStep(viewport, stepDir));

  });
})();
