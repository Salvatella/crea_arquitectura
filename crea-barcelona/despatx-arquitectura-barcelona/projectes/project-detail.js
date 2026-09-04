(() => {
  const years = {
    'club-petanca.html': '2005',
    'aparcament-vall-palau.html': '2006',
    'aparcament-laguna-lanao.html': '2008',
    'escola-sadako.html': '2015',
    'celler-nou-plus.html': '2020',
    'oficines-breda.html': '2019',
    'oficines-mexic.html': '2018',
    'rp-economistes.html': '2017',
    'casa-assutzena.html': '2016',
    'casa-la-quadra.html': '2015',
    'casa-la-selva.html': '2003',
    'casa-petunia.html': '2018',
    'casa-valldoreix.html': '2003',
    'habitatges-ab.html': '2017',
    'reforma-homer.html': '2022',
    'casa-jove-marina.html': '2019',
    'clinica-del-remei.html': '2016',
    'clinica-dexme-midlife.html': '2025',
    'dexeus-hospital-general-de-catalunya.html': '2022',
    'dexeus-hospital-viamed-tarragona.html': '2025',
  };
  const filename = window.location.pathname.split('/').pop();
  const year = years[filename];
  const facts = document.querySelector('.project-facts');

  if (year && facts) {
    const location = Array.from(facts.children).find((fact) => fact.querySelector('dt')?.textContent.trim() === 'Localització.');
    const yearFact = `<div><dt>Any.</dt><dd>${year}</dd></div>`;
    if (location) location.insertAdjacentHTML('afterend', yearFact);
    else facts.insertAdjacentHTML('beforeend', yearFact);
  }

  if (filename === 'habitatges-ab.html') {
    const gallery = document.querySelector('#gallery');
    if (gallery) {
      gallery.setAttribute('aria-label', 'Galeria d’AB.');
      gallery.querySelectorAll('img').forEach((image) => image.setAttribute('alt', 'AB'));
    }
  }

  if (filename === 'habitatges-ag.html') {
    const gallery = document.querySelector('#gallery');
    if (gallery) {
      gallery.setAttribute('aria-label', 'Galeria d’Habitatges AG.');
      gallery.querySelectorAll('img').forEach((image) => image.setAttribute('alt', 'Habitatges AG'));
    }
  }

  if (filename === 'casa-troana.html') {
    const topRow = document.querySelector('.troana-gallery__top');
    if (topRow && !document.querySelector('.troana-gallery__plan')) {
      topRow.insertAdjacentHTML('afterend', '<div class="troana-gallery__plan"><figure><img loading="lazy" src="../../../imgs/enviament_1_2026-05-09/enviament_1_2025-05-09/crea_web_residencial/2023_casa_troana/troana_planta_baixa.jpg" alt="Planta baixa de la Casa TROANA"></figure></div>');
    }
  }

  document.querySelectorAll('.project-next__top').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      history.replaceState(null, '', window.location.pathname + window.location.search);
    });
  });
})();
