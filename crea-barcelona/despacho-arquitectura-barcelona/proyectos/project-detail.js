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
    facts.insertAdjacentHTML('beforeend', `<div><dt>Año.</dt><dd>${year}</dd></div>`);
  }

  document.querySelectorAll('.project-next__top').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      history.replaceState(null, '', window.location.pathname + window.location.search);
    });
  });
})();
