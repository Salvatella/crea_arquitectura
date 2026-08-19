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

// Validació client-side dels formularis de contacte (consultoria i nosaltres).
(() => {
  const forms = Array.from(
    document.querySelectorAll('.consulting-contact__form, .about-contact-form__form')
  );

  if (!forms.length) return;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const language = document.documentElement.lang.toLowerCase().split('-')[0];
  const messages = {
    ca: {
      nameRequired: 'Escriu el teu nom i cognoms.',
      nameShort: 'El nom és massa curt.',
      emailRequired: 'Escriu el teu correu electrònic.',
      emailInvalid: 'El correu no té un format vàlid (ex. nom@domini.com).',
      phoneShort: 'El telèfon ha de tenir com a mínim 9 xifres.',
      messageRequired: 'Explica’ns breument en què et podem ajudar.',
    },
    es: {
      nameRequired: 'Escribe tu nombre y apellidos.',
      nameShort: 'El nombre es demasiado corto.',
      emailRequired: 'Escribe tu correo electrónico.',
      emailInvalid: 'El correo no tiene un formato válido (p. ej., nombre@dominio.com).',
      phoneShort: 'El teléfono debe tener al menos 9 dígitos.',
      messageRequired: 'Cuéntanos brevemente cómo podemos ayudarte.',
    },
    en: {
      nameRequired: 'Enter your full name.',
      nameShort: 'Your name is too short.',
      emailRequired: 'Enter your email address.',
      emailInvalid: 'Enter a valid email address (e.g. name@example.com).',
      phoneShort: 'Phone number must have at least 9 digits.',
      messageRequired: 'Briefly tell us how we can help.',
    },
  };
  const copy = messages[language] || messages.ca;

  // Retorna missatge d'error o null si el camp és vàlid.
  const validators = {
    name(value) {
      if (!value.trim()) return copy.nameRequired;
      if (value.trim().length < 2) return copy.nameShort;
      return null;
    },
    email(value) {
      if (!value.trim()) return copy.emailRequired;
      if (!emailPattern.test(value.trim())) return copy.emailInvalid;
      return null;
    },
    phone(value) {
      // Opcional: només es valida si l'usuari escriu alguna cosa.
      if (!value.trim()) return null;
      const digits = value.replace(/\D/g, '');
      if (digits.length < 9) return copy.phoneShort;
      return null;
    },
    message(value) {
      if (!value.trim()) return copy.messageRequired;
      return null;
    },
  };

  let uid = 0;

  forms.forEach((form) => {
    const fields = Array.from(form.querySelectorAll('input[name], textarea[name]'))
      .filter((el) => validators[el.name])
      .map((el) => {
        const label = el.closest('label') || el.parentElement;
        const error = document.createElement('span');
        error.className = 'field-error';
        error.hidden = true;
        error.id = `field-error-${(uid += 1)}`;
        error.setAttribute('aria-live', 'polite');
        label.appendChild(error);
        el.setAttribute('aria-describedby', error.id);
        return { el, error };
      });

    const showError = (field, message) => {
      if (message) {
        field.error.textContent = message;
        field.error.hidden = false;
        field.el.classList.add('is-invalid');
        field.el.setAttribute('aria-invalid', 'true');
      } else {
        field.error.hidden = true;
        field.el.classList.remove('is-invalid');
        field.el.removeAttribute('aria-invalid');
      }
      return !message;
    };

    const validateField = (field) => showError(field, validators[field.el.name](field.el.value));

    fields.forEach((field) => {
      // Valida en sortir del camp; neteja l'error mentre s'escriu si ja era vàlid.
      field.el.addEventListener('blur', () => validateField(field));
      field.el.addEventListener('input', () => {
        if (field.el.classList.contains('is-invalid')) validateField(field);
      });
    });

    form.addEventListener('submit', (event) => {
      let firstInvalid = null;
      fields.forEach((field) => {
        const ok = validateField(field);
        if (!ok && !firstInvalid) firstInvalid = field.el;
      });

      if (firstInvalid) {
        event.preventDefault();
        firstInvalid.focus();
      }
    });
  });
})();
