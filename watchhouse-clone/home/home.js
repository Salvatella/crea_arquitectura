(() => {
  const section = document.querySelector('#hero_banner_1');

  if (!section) return;

  const slides = Array.from(section.querySelectorAll('[data-hero-slide]'));
  const thumbs = Array.from(section.querySelectorAll('[data-hero-thumb]'));
  const bullets = Array.from(section.querySelectorAll('[data-hero-go-to]'));
  const interval = 6000;
  let activeIndex = 0;
  let startedAt = performance.now();
  let isPaused = false;
  let rafId = null;

  const setActive = (index) => {
    activeIndex = (index + slides.length) % slides.length;
    startedAt = performance.now();
    section.style.setProperty('--progress', '0%');

    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === activeIndex;
      slide.classList.toggle('is-active', isActive);
      slide.setAttribute('aria-hidden', String(!isActive));
    });

    thumbs.forEach((thumb, thumbIndex) => {
      thumb.classList.toggle('is-active', thumbIndex === activeIndex);
    });

    bullets.forEach((bullet, bulletIndex) => {
      const isActive = bulletIndex === activeIndex;
      bullet.classList.toggle('is-active', isActive);
      if (isActive) {
        bullet.setAttribute('aria-current', 'true');
      } else {
        bullet.removeAttribute('aria-current');
      }
    });
  };

  const tick = (now) => {
    if (!isPaused && slides.length > 1) {
      const elapsed = now - startedAt;
      const progress = Math.min(elapsed / interval, 1);
      const percent = `${(progress * 100).toFixed(1)}%`;
      section.style.setProperty('--progress', percent);

      if (progress >= 1) {
        setActive(activeIndex + 1);
      }
    }

    rafId = requestAnimationFrame(tick);
  };

  bullets.forEach((bullet) => {
    bullet.addEventListener('click', () => {
      setActive(Number(bullet.dataset.heroGoTo));
    });
  });

  thumbs.forEach((thumb) => {
    thumb.addEventListener('mouseenter', () => {
      setActive(Number(thumb.dataset.index0));
      isPaused = true;
    });
  });

  section.addEventListener('mouseenter', () => {
    isPaused = true;
  });

  section.addEventListener('mouseleave', () => {
    isPaused = false;
    startedAt = performance.now();
  });

  setActive(0);
  rafId = requestAnimationFrame(tick);

  window.addEventListener('pagehide', () => {
    if (rafId) cancelAnimationFrame(rafId);
  });
})();
