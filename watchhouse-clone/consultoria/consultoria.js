(() => {
  const items = Array.from(document.querySelectorAll('.consulting-accordion'));
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const finish = (content, hideAfter) => {
    content.style.height = '';
    content.style.opacity = '';
    content.style.transition = '';
    if (hideAfter) content.hidden = true;
  };

  const closeItem = (item) => {
    const trigger = item.querySelector('.consulting-accordion__trigger');
    const content = item.querySelector('.consulting-accordion__content');
    item.classList.remove('is-open');
    trigger.setAttribute('aria-expanded', 'false');

    if (content.hidden || reducedMotion) {
      content.hidden = true;
      return;
    }

    content.style.height = `${content.scrollHeight}px`;
    content.style.opacity = '1';
    content.getBoundingClientRect();
    content.style.transition = 'height 280ms ease, opacity 180ms ease';
    requestAnimationFrame(() => {
      content.style.height = '0px';
      content.style.opacity = '0';
    });
    content.addEventListener('transitionend', () => finish(content, true), { once: true });
  };

  const openItem = (item) => {
    const trigger = item.querySelector('.consulting-accordion__trigger');
    const content = item.querySelector('.consulting-accordion__content');
    item.classList.add('is-open');
    trigger.setAttribute('aria-expanded', 'true');
    content.hidden = false;

    if (reducedMotion) return;

    content.style.height = '0px';
    content.style.opacity = '0';
    content.getBoundingClientRect();
    content.style.transition = 'height 320ms ease, opacity 220ms ease 70ms';
    requestAnimationFrame(() => {
      content.style.height = `${content.scrollHeight}px`;
      content.style.opacity = '1';
    });
    const onOpenEnd = (event) => {
      if (event.propertyName !== 'height') return;
      content.removeEventListener('transitionend', onOpenEnd);
      finish(content, false);
    };
    content.addEventListener('transitionend', onOpenEnd);
  };

  items.forEach((item) => {
    const trigger = item.querySelector('.consulting-accordion__trigger');
    const content = item.querySelector('.consulting-accordion__content');

    trigger.addEventListener('click', () => {
      const willOpen = trigger.getAttribute('aria-expanded') !== 'true';

      items.forEach((otherItem) => {
        if (otherItem !== item) closeItem(otherItem);
      });

      if (willOpen) {
        openItem(item);
      } else {
        closeItem(item);
      }
    });
  });

  document.querySelector('.consulting-contact__form')?.addEventListener('submit', (event) => event.preventDefault());
})();
