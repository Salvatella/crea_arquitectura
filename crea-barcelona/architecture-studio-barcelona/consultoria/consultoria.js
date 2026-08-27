(() => {
  const items = Array.from(document.querySelectorAll('.consulting-accordion'));

  const setOpen = (item, open) => {
    const trigger = item.querySelector('.consulting-accordion__trigger');
    item.classList.toggle('is-open', open);
    trigger.setAttribute('aria-expanded', String(open));
  };

  items.forEach((item) => {
    const trigger = item.querySelector('.consulting-accordion__trigger');
    trigger.addEventListener('click', () => {
      const willOpen = !item.classList.contains('is-open');
      // Single-open accordion: collapse siblings, then toggle this one.
      items.forEach((other) => setOpen(other, false));
      setOpen(item, willOpen);
    });
  });
})();
