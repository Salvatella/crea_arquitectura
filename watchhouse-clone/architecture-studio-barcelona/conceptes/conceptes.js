(() => {
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
      wrapper.classList.add('is-expanded');
      trigger.setAttribute('aria-expanded', 'true');
      // El recorrido de Rehabilitar está dispuesto de forma invertida: el
      // primer ejemplo visual queda al extremo derecho del track.
      if (wrapper.querySelector('.product-guide--reversed')) {
        window.requestAnimationFrame(() => {
          syncRehabilitarStepWidth();
          viewport.scrollLeft = viewport.scrollWidth - viewport.clientWidth;
        });
      }
      window.setTimeout(() => {
        if (intro) intro.hidden = true;
        wrapper.scrollIntoView({ block: 'start', behavior: 'auto' });
      }, 520);
      window.setTimeout(() => viewport.focus({ preventScroll: true }), 350);
    }, { once: true });

    previous?.addEventListener('click', () => scrollByStep(viewport, -1));
    next?.addEventListener('click', () => scrollByStep(viewport, 1));

    viewport.addEventListener('wheel', (event) => {
      if (event.shiftKey || !event.deltaY) return;
      event.preventDefault();
      viewport.scrollLeft += event.deltaY;
    }, { passive: false });

    viewport.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollByStep(viewport, -1);
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollByStep(viewport, 1);
      }
    });

    let startX = 0;
    let startScroll = 0;
    let dragging = false;
    viewport.addEventListener('pointerdown', (event) => {
      dragging = true;
      startX = event.clientX;
      startScroll = viewport.scrollLeft;
      viewport.setPointerCapture(event.pointerId);
      viewport.classList.add('is-dragging');
    });
    viewport.addEventListener('pointermove', (event) => {
      if (dragging) viewport.scrollLeft = startScroll - (event.clientX - startX);
    });
    const stopDragging = () => {
      dragging = false;
      viewport.classList.remove('is-dragging');
    };
    viewport.addEventListener('pointerup', stopDragging);
    viewport.addEventListener('pointercancel', stopDragging);
  });
})();
