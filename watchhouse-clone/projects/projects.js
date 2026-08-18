(() => {
  const filters = Array.from(document.querySelectorAll('.project-filter'));
  const cards = Array.from(document.querySelectorAll('.project-card'));
  const emptyState = document.querySelector('.projects-empty');

  const setFilter = (category) => {
    let visibleCount = 0;

    cards.forEach((card) => {
      const isVisible = category === 'all' || card.dataset.category === category;
      card.closest('li').hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    filters.forEach((button) => {
      const isActive = button.dataset.filter === category;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });

    emptyState?.classList.toggle('is-visible', visibleCount === 0);
  };

  filters.forEach((button) => {
    button.addEventListener('click', () => setFilter(button.dataset.filter));
  });

  // Aplica el filtre indicat a la URL (?filter=residencial) en carregar la pàgina.
  const requested = new URLSearchParams(window.location.search).get('filter');
  const known = filters.map((button) => button.dataset.filter);

  if (requested && known.includes(requested) && requested !== 'all') {
    setFilter(requested);
  }
})();
