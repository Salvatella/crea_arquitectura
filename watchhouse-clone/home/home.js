(() => {
  const section = document.querySelector('#hero_banner_1');

  if (!section) return;

  const slides = Array.from(section.querySelectorAll('[data-hero-slide]'));
  const thumbs = Array.from(section.querySelectorAll('[data-hero-thumb]'));
  const bullets = Array.from(section.querySelectorAll('[data-hero-go-to]'));
  const interval = 3500;
  let activeIndex = 0;
  let startedAt = performance.now();
  let isPaused = false;
  let pausedAt = null;
  let rafId = null;

  const pause = () => {
    if (!isPaused) {
      isPaused = true;
      pausedAt = performance.now();
    }
  };

  const resume = () => {
    if (isPaused && pausedAt !== null) {
      startedAt += performance.now() - pausedAt;
      pausedAt = null;
    }
    isPaused = false;
  };

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
      pause();
    });
  });

  section.addEventListener('mouseenter', () => {
    pause();
  });

  section.addEventListener('mouseleave', () => {
    resume();
  });

  setActive(0);
  rafId = requestAnimationFrame(tick);

  window.addEventListener('pagehide', () => {
    if (rafId) cancelAnimationFrame(rafId);
  });
})();

// Count-up de #studio-figures quan entra al viewport.
(() => {
  const figures = document.querySelector('#studio-figures');

  if (!figures) return;

  const counters = Array.from(figures.querySelectorAll('[data-count-to]'));

  if (!counters.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const setFinal = () => {
    counters.forEach((el) => {
      el.textContent = el.dataset.countTo;
    });
  };

  if (reduceMotion || !('IntersectionObserver' in window)) {
    setFinal();
    return;
  }

  const duration = 1400;
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  const run = () => {
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = easeOut(progress);

      counters.forEach((el) => {
        const target = Number(el.dataset.countTo);
        el.textContent = String(Math.round(eased * target));
      });

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        run();
        observer.disconnect();
      }
    });
  }, { threshold: 0.4 });

  observer.observe(figures);
})();
