(() => {
  document.querySelectorAll('editorial-gallery').forEach((gallery) => {
    const slides = Array.from(gallery.querySelectorAll('[data-gallery-slide]'));
    const pagination = gallery.querySelector('.editorial-gallery__pagination');

    if (!slides.length || !pagination) return;

    const buttons = slides.map((_, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.dataset.galleryIndex = String(index);
      button.textContent = String(index + 1).padStart(2, '0');
      button.setAttribute('aria-label', `Mostrar imatge ${index + 1}`);
      return button;
    });

    const setActive = (index) => {
      slides.forEach((slide, slideIndex) => {
        const active = slideIndex === index;
        slide.classList.toggle('is-active', active);
        slide.setAttribute('aria-hidden', String(!active));
      });

      buttons.forEach((button, buttonIndex) => {
        if (buttonIndex === index) button.setAttribute('aria-current', 'true');
        else button.removeAttribute('aria-current');
      });
    };

    buttons.forEach((button) => {
      button.addEventListener('click', () => setActive(Number(button.dataset.galleryIndex)));
    });

    pagination.replaceChildren(...buttons);
    setActive(0);
  });
})();
