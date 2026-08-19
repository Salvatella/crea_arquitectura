(() => {
  const section = document.querySelector('#hero_banner_1');

  if (!section) return;

  const heroSelections = {
    selection1: [
      ['Casas AGE', 'baixa_031.jpg', 'proyectos/residencial/cases-age.html'],
      ['Aparcamiento Laguna Lanao', 'equipaments-laguna-lanao-01.jpg', 'proyectos/equipamientos/aparcament-laguna-lanao.html'],
      ['Celler Nou Plus', 'oficines-celler-nou-plus-01.jpg', 'proyectos/oficinas-industrial/celler-nou-plus.html'],
      ['Oficinas Mèxic', 'oficines-mexic-01.jpg', 'proyectos/oficinas-industrial/oficines-mexic.html'],
      ['Casa Assutzena', 'residencial-assutzena-01.jpg', 'proyectos/residencial/casa-assutzena.html'],
      ['Casa Petúnia', 'residencial-petunia-01.jpg', 'proyectos/residencial/casa-petunia.html'],
      ['Casa Troana', 'residencial-troana-01.jpg', 'proyectos/residencial/casa-troana.html'],
    ],
    selection2: [
      ['Casas AGE', 'residencial-cases-age-033.jpg', 'proyectos/residencial/cases-age.html'],
      ['Celler Nou Plus', 'oficines-celler-nou-plus-03.jpg', 'proyectos/oficinas-industrial/celler-nou-plus.html', 50],
      ['Casa Assutzena', 'residencial-assutzena-02.jpg', 'proyectos/residencial/casa-assutzena.html', 30],
      ['Casa Troana', 'residencial-troana-04.jpg', 'proyectos/residencial/casa-troana.html'],
      ['Dexeus Hospital General de Catalunya', 'sanitari-dexeus-hgc-10.png', 'proyectos/sanitarios/dexeus-hospital-general-de-catalunya.html', 5],
      ['Clínica Dexme-Midlife', 'sanitari-dexme-midlife-02.jpg', 'proyectos/sanitarios/clinica-dexme-midlife.html', 50],
      ['Dexeus Hospital General de Catalunya', 'dexeus_hgc_08.png', 'proyectos/sanitarios/dexeus-hospital-general-de-catalunya.html', 40],
    ],
  };
  const heroItems = Math.random() < 0.5 ? heroSelections.selection1 : heroSelections.selection2;

  const imageBasePath = '../imgs/hero_banner_imgs/';
  const slider = section.querySelector('[data-hero-slider]');
  const pagination = section.querySelector('#hero-banner-pagination');
  const thumbnails = section.querySelector('#hero-banner-thumbnails');

  slider.innerHTML = heroItems.map(([title, image, href, verticalPosition = 100], index) => `
    <div class="hero-banner__slide${index === 0 ? ' is-active' : ''}" data-hero-slide data-index0="${index}" aria-hidden="${index !== 0}">
      <a class="hero-banner__link" href="${href}" title="${title}."></a>
      <img src="${imageBasePath}${image}" alt="${title}" class="hero-banner__primary-media" style="object-position: center ${verticalPosition}%" draggable="false">
    </div>
  `).join('');

  pagination.innerHTML = heroItems.map((_, index) => `
    <button class="hero-banner__pagination-button${index === 0 ? ' is-active' : ''}" type="button" data-hero-go-to="${index}"${index === 0 ? ' aria-current="true"' : ''}>
      ${String(index + 1).padStart(2, '0')}
    </button>
  `).join('');

  thumbnails.innerHTML = heroItems.map(([title, , href], index) => `
    <div class="hero-banner-thumbnail${index === 0 ? ' is-active' : ''}" data-hero-thumb data-index0="${index}">
      <div class="hero-banner-thumbnail__content">
        <p class="hero-banner-thumbnail__title">${title}.</p>
        <div class="hero-banner-thumbnail__footer">
          <div class="hero-banner__progress"></div>
          <a class="hero-banner-thumbnail__cta" href="${href}" data-mouseover="">Ver el proyecto</a>
        </div>
      </div>
    </div>
  `).join('');

  const slides = Array.from(section.querySelectorAll('[data-hero-slide]'));
  const thumbs = Array.from(section.querySelectorAll('[data-hero-thumb]'));
  const bullets = Array.from(section.querySelectorAll('[data-hero-go-to]'));
  const interval = 3500;
  const autoAdvance = false;
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
    if (autoAdvance && !isPaused && slides.length > 1) {
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

  const duration = 2100;
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
