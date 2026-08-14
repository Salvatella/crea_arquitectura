(() => {
  document.querySelectorAll('[data-team-carousel]').forEach((carousel, carouselIndex) => {
    const images = Array.from(carousel.querySelectorAll('.team-half-banner__media img'));
    let activeIndex = carouselIndex % images.length;

    const setActive = (index) => {
      activeIndex = index % images.length;
      images.forEach((image, imageIndex) => {
        image.classList.toggle('is-active', imageIndex === activeIndex);
        image.setAttribute('aria-hidden', String(imageIndex !== activeIndex));
      });
    };

    setActive(activeIndex);
    window.setInterval(() => setActive(activeIndex + 1), 3000);
  });
})();
