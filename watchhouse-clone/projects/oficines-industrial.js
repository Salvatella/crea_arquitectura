(() => {
  const base = '../imgs/Enviament 1 2026-05-09/Enviament 1 2025-05-09/CREA Web OFICINES i INDUSTRIAL/';
  const projects = {
    'rp-economistes': {
      title: 'Oficines RP ECONOMISTES.', heading: 'RP<br>ECONOMISTES', place: 'Reus · Baix Camp', year: '2017',
      lead: 'La nova seu d’una consultoria econòmica i financera jove, concebuda com un ambient tranquil, innovador i rigorós.',
      body: ["Encàrrec per a reformar un espai interior i convertir-lo en la nova seu d'una consultoria econòmica i financera formada per un equip jove i dinàmic.", 'Es crea un ambient tranquil i relaxat, que reflecteix innovació però a la vegada seriositat. La llum natural es converteix en un element protagonista que es busca o es tamisa en funció de l’espai i el seu caràcter, mitjançant grans finestrals o fusteries interiors de nou disseny.'],
      facts: [['Projecte i direcció.', 'José Luis de la Fuente, arquitecte'], ['Client.', 'RP ECONOMISTES'], ['Localització.', 'Reus, Baix Camp']],
      folder: '2017 Oficines RP ECONOMISTES/', images: Array.from({ length: 6 }, (_, i) => `rp_economistes_${String(i + 1).padStart(2, '0')}.jpg`)
    },
    'oficines-mexic': {
      title: 'Oficines MÈXIC.', heading: 'Oficines<br>MÈXIC', place: 'Barcelona · Barcelonès', year: '2018',
      lead: 'Una planta semiindustrial transformada en unes oficines obertes, funcionals i amb caràcter propi.',
      body: ['Es tracta d’un atractiu encàrrec per a convertir tota la planta d’un edifici semi-industrial en les noves instal·lacions de les oficines dels Serveis Centrals de la Fundació Sant Pere Claver.', 'Les noves oficines conviuen amb un disseny que recorda l’ambient industrial mitjançant els materials i els colors escollits, amb un intencionat caràcter desenfadat però funcional.', 'Es resol mitjançant el sistema d’open space aprofitant la llum natural de les dues façanes per a les zones de treball i creant una illa central tancada amb vidre per a les sales de reunions, provocant dobles circulacions i visuals completes de tot l’àmbit.', 'Els espais servidors ocupen una franja paral·lela i s’identifiquen amb un canvi de textures i llums.'],
      facts: [['Projecte i direcció.', 'José Luis de la Fuente, arquitecte'], ['Enginyeria instal·lacions.', 'BCNOVA TÈCNICS, Julio Flores, enginyer'], ['Client.', 'Fundació Sant Pere Claver'], ['Localització.', 'Barcelona, Barcelonès']],
      folder: '2018 Oficines MÈXIC/', images: Array.from({ length: 12 }, (_, i) => `mexic_${String(i + 1).padStart(2, '0')}.jpg`)
    },
    'oficines-breda': {
      title: 'Oficines BREDA.', heading: 'Oficines<br>BREDA', place: 'Barcelona · Barcelonès', year: '2019',
      lead: 'Un gran local administratiu i assistencial que guanya transparència, llum i lleugeresa.',
      body: ['Projecte de condicionament d’un gran local en dues plantes per diferents usos administratius i assistencials per un sol client, amb certa complexitat en accessibilitat i alçada lliure, que despulla els sostres i busca el màxim de transparència i visual tot mantenint la intimitat requerida en alguns dels espais. Es projecta un espai jove i senzill, descarregant al màxim l’ambient d’elements pesats.'],
      facts: [['Projecte i direcció.', 'José Luis de la Fuente, arquitecte'], ['Enginyeria instal·lacions.', 'BCNOVA TÈCNICS, Julio Flores, enginyer'], ['Client.', 'Fundació Salut i Comunitat'], ['Localització.', 'Barcelona, Barcelonès']],
      folder: '2019 Oficines BREDA/', images: Array.from({ length: 11 }, (_, i) => `breda_${String(i + 1).padStart(2, '0')}.jpg`)
    }
  };
  const project = projects[new URLSearchParams(window.location.search).get('project')] || projects['rp-economistes'];
  const imagePath = (file) => encodeURI(base + project.folder + file);
  const image = (file, eager = false) => `<figure><img ${eager ? '' : 'loading="lazy"'} src="${imagePath(file)}" alt="${project.title.replace('.', '')}"></figure>`;
  const middle = Math.ceil(project.images.length / 2);
  const left = project.images.slice(0, middle - 1);
  const hero = project.images[middle - 1];
  const right = project.images.slice(middle);
  document.title = `${project.title} | Crea Arquitectura.`;
  document.querySelector('#MainContent').innerHTML = `
    <section class="project-intro" aria-labelledby="project-title"><div class="project-intro__copy"><p class="project-intro__eyebrow">Oficines i industrial · ${project.year}</p><h1 id="project-title">${project.heading}</h1><p class="project-intro__place">${project.place}</p></div><a class="project-intro__scroll" href="#gallery">Descobrir el projecte <span aria-hidden="true">↓</span></a></section>
    <section class="project-story" aria-label="Descripció del projecte"><div class="project-story__lead"><p>${project.lead}</p></div><div class="project-story__body">${project.body.map((text) => `<p>${text}</p>`).join('')}</div><dl class="project-facts">${project.facts.map(([term, definition]) => `<div><dt>${term}</dt><dd>${definition}</dd></div>`).join('')}</dl></section>
    <section id="gallery" class="sticky-gallery" aria-label="Galeria de ${project.title}"><div class="sticky-gallery__column sticky-gallery__column--left">${left.map(image).join('')}</div><div class="sticky-gallery__column sticky-gallery__column--center">${image(hero, true)}<div class="sticky-gallery__caption"><span>01 — ${String(project.images.length).padStart(2, '0')}</span><span>${project.title}</span></div></div><div class="sticky-gallery__column sticky-gallery__column--right">${right.map(image).join('')}</div></section>
    <nav class="project-next" aria-label="Navegació de projectes"><a href="./" class="project-next__back">← Tots els projectes</a><a href="#site-header" class="project-next__top">Tornar a l'inici ↑</a></nav>`;
})();
