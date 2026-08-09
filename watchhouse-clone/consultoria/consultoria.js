(() => {
  document.querySelectorAll('.contact-form').forEach((form) => {
    form.addEventListener('submit', (event) => event.preventDefault());
  });
})();
