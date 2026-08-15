(() => {
  const base = '../imgs/Enviament 1 2026-05-09/Enviament 1 2025-05-09/CREA Web EQUIPAMENTS/';
  const projects = {
    'club-petanca': {
      title: 'Club PETANCA.', place: 'Santa Coloma de Gramenet · Barcelonès', year: '2005',
      lead: 'La seu social d’un petit club esportiu, concebuda de manera cooperativa amb els seus usuaris.',
      body: ['Projecte d’equipament com a seu social d’un club esportiu de petites dimensions, concebut de forma cooperativa amb els usuaris amb resultats satisfactoris per tots els intervinents.'],
      facts: [['Projecte i direcció.', 'José Luis de la Fuente, arquitecte'], ['Col·laboració.', 'Vanessa Campos, arquitecta'], ['Client.', 'Ajuntament de Santa Coloma de Gramenet'], ['Localització.', 'Santa Coloma de Gramenet, Barcelonès']],
      folder: '2005. Club PETANCA/', images: ['club_petanca_01.jpg', 'club_petanca_02.jpg']
    },
    'escola-sadako': {
      title: 'Escola SADAKO.', place: 'Barcelona · Barcelonès', year: '2015',
      lead: 'Una reforma en diverses fases d’una escola de referència, concebuda per a noves maneres d’ensenyar i aprendre.',
      body: ['Projecte de reforma en vàries fases d’una escola de referència. La proposta llegeix el projecte educatiu en clau de programa que demana espais oberts, transparents i polifuncionals, i adaptats a les noves formes d’ensenyar i aprendre.', 'Els nous espais i solucions proposades busquen la naturalitat i la simplicitat com la millor manera d’arribar als veritables protagonistes que són les nenes i els nens.'],
      facts: [['Projecte.', 'Tuomo Jauhiainen i José Luis de la Fuente, arquitectes'], ['Client.', 'Privat'], ['Localització.', 'Barcelona, Barcelonès']],
      folder: '2015. Escola SADAKO/', images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => `sadako_${number}.png`)
    },
    'aparcament-laguna-lanao': {
      title: 'Aparcament LAGUNA LANAO.', place: 'Barcelona · Barcelonès', year: '2017',
      lead: 'Un aparcament públic que transforma un antic edifici industrial en una nova plaça verda.',
      body: ['Projecte d’un aparcament públic substituint un antic edifici industrial en desús, solucionat en diferents nivells adaptats a una topografia de pendent molt pronunciada, i proporcionant una nova plaça pública verda sobre la coberta, urbanitzada posteriorment.'],
      facts: [['Projecte i direcció.', 'Jordi Nadal, Josep Puigdengoles i José Luis de la Fuente, arquitectes'], ['Col·laboració.', 'NOLAC ENGINYERS, estructura'], ['Client.', 'Ajuntament de Barcelona'], ['Localització.', 'Barcelona, Barcelonès']],
      folder: '2017. Aparcament LAGUNA LANAO/', images: ['aparcament_laguna_lanao_01.jpg', 'aparcament_laguna_lanao_02.jpg', 'laguna_12.png', 'laguna_13.png', 'laguna_14.png', 'laguna_15.png', 'laguna_16.png']
    },
    'aparcament-vall-palau': {
      title: 'Aparcament VALL PALAU.', place: 'Sant Andreu de la Barca · Baix Llobregat', year: '2006',
      lead: 'Un aparcament públic i una plaça verda que connecten barris i resolen una necessitat urbana.',
      body: ['Projecte d’un aparcament públic i urbanització d’una plaça verda com element de connexió entre barris i solució funcional a un problema d’aparcament.'],
      facts: [['Projecte i direcció.', 'Jordi Nadal, Josep Puigdengoles i José Luis de la Fuente, arquitectes'], ['Col·laboració.', 'NOLAC ENGINYERS, estructura'], ['Client.', 'Ajuntament de Sant Andreu de la Barca'], ['Localització.', 'Sant Andreu de la Barca, Baix Llobregat']],
      folder: '2006. Aparcament VALL PALAU/', images: ['vallpalau_1.png', 'vallpalau_2.png', 'vallpalau_3.png', 'vallpalau_4.png', 'vallpalau_5.png', 'vallpalau_6.png', 'vallpalau_7.png']
    }
  };
  const project = projects[new URLSearchParams(window.location.search).get('project')] || projects['club-petanca'];
  const imagePath = (file) => encodeURI(base + project.folder + file);
  const image = (file, eager = false) => `<figure><img ${eager ? '' : 'loading="lazy"'} src="${imagePath(file)}" alt="${project.title.replace('.', '')}"></figure>`;
  const middle = Math.ceil(project.images.length / 2);
  const left = project.images.slice(0, middle - 1);
  const hero = project.images[middle - 1];
  const right = project.images.slice(middle);
  document.title = `${project.title} | Crea Arquitectura.`;
  document.querySelector('#MainContent').innerHTML = `
    <section class="project-intro" aria-labelledby="project-title"><div class="project-intro__copy"><p class="project-intro__eyebrow">Equipaments · ${project.year}</p><h1 id="project-title">${project.title.replace('.', '').replace(' ', '<br>')}</h1><p class="project-intro__place">${project.place}</p></div><a class="project-intro__scroll" href="#gallery">Descobrir el projecte <span aria-hidden="true">↓</span></a></section>
    <section class="project-story" aria-label="Descripció del projecte"><div class="project-story__lead"><p>${project.lead}</p></div><div class="project-story__body">${project.body.map((text) => `<p>${text}</p>`).join('')}</div><dl class="project-facts">${project.facts.map(([term, definition]) => `<div><dt>${term}</dt><dd>${definition}</dd></div>`).join('')}</dl></section>
    <section id="gallery" class="sticky-gallery ${project.images.length <= 2 ? 'sticky-gallery--compact' : ''}" aria-label="Galeria de ${project.title}"><div class="sticky-gallery__column sticky-gallery__column--left">${left.map(image).join('')}</div><div class="sticky-gallery__column sticky-gallery__column--center">${image(hero, true)}</div><div class="sticky-gallery__column sticky-gallery__column--right">${right.map(image).join('')}</div></section>
    <nav class="project-next" aria-label="Navegació de projectes"><a href="./" class="project-next__back">← Tots els projectes</a><a href="#site-header" class="project-next__top">Tornar a l'inici ↑</a></nav>`;
})();
