(() => {
  const header = document.querySelector('.main-header');
  const nav = header?.querySelector('.nav-menu');
  const menuButton = header?.querySelector('.main-header__menu-button');
  const languageButtons = Array.from(header?.querySelectorAll('.language-bar__button') || []);
  const items = Array.from(header?.querySelectorAll('.nav-menu__item') || []).map((item) => {
    const trigger = item.querySelector('.nav-menu__link[aria-controls]');
    const menu = trigger ? document.getElementById(trigger.getAttribute('aria-controls')) : null;
    return trigger && menu ? { item, trigger, menu } : null;
  }).filter(Boolean);

  if (!header || !nav || !menuButton) return;

  const isMobile = () => window.matchMedia('(max-width: 767px)').matches;

  const setMenuOpen = (entry, open) => {
    entry.item.classList.toggle('is-open', open);
    entry.trigger.setAttribute('aria-expanded', String(open));
    entry.menu.setAttribute('aria-hidden', String(!open));
    entry.menu.querySelectorAll('a').forEach((link) => {
      link.tabIndex = open ? 0 : -1;
    });
  };

  const closeDropdowns = (except = null) => {
    items.forEach((entry) => {
      if (entry !== except) setMenuOpen(entry, false);
    });
  };

  const closeNavigation = () => {
    nav.classList.remove('is-open');
    menuButton.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    closeDropdowns();
  };

  items.forEach((entry) => {
    entry.item.addEventListener('mouseenter', () => {
      if (!isMobile()) {
        closeDropdowns(entry);
        setMenuOpen(entry, true);
      }
    });

    entry.item.addEventListener('mouseleave', () => {
      if (!isMobile()) setMenuOpen(entry, false);
    });

    entry.item.addEventListener('focusin', () => {
      if (!isMobile()) {
        closeDropdowns(entry);
        setMenuOpen(entry, true);
      }
    });

    entry.trigger.addEventListener('click', (event) => {
      event.preventDefault();
      const open = !entry.item.classList.contains('is-open');
      closeDropdowns(entry);
      setMenuOpen(entry, open);
    });
  });

  menuButton.addEventListener('click', () => {
    const open = !nav.classList.contains('is-open');
    nav.classList.toggle('is-open', open);
    menuButton.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });

  languageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      languageButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });
    });
  });

  document.addEventListener('click', (event) => {
    if (!header.contains(event.target)) closeNavigation();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeNavigation();
  });

  window.addEventListener('resize', () => {
    if (!isMobile()) {
      nav.classList.remove('is-open');
      menuButton.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });

  closeDropdowns();
})();

(() => {
  const footerItems = Array.from(document.querySelectorAll('.footer-column'));
  const desktopQuery = window.matchMedia('(min-width: 768px)');

  footerItems.forEach((item) => {
    const button = item.querySelector('.footer-column__heading');
    const content = item.querySelector('.footer-column__content');

    if (!button || !content) return;

    button.setAttribute('aria-expanded', String(desktopQuery.matches));

    button.addEventListener('click', () => {
      if (desktopQuery.matches) return;

      const isOpen = item.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(isOpen));
      content.style.maxHeight = isOpen ? `${content.scrollHeight}px` : '0px';
    });
  });

  desktopQuery.addEventListener('change', ({ matches }) => {
    footerItems.forEach((item) => {
      const button = item.querySelector('.footer-column__heading');
      const content = item.querySelector('.footer-column__content');

      if (!button || !content) return;

      item.classList.remove('is-open');
      button.setAttribute('aria-expanded', String(matches));
      content.style.removeProperty('max-height');

      if (!matches) content.style.maxHeight = '0px';
    });
  });
})();
