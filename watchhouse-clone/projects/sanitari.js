(() => {
  const base = '../imgs/Enviament 1 2026-05-09/Enviament 1 2025-05-09/CREA Web SANITARI/';
  const projects = {
    'clinica-del-remei': {
      title: 'Clínica del REMEI.', heading: 'Clínica del<br>REMEI', place: 'Barcelona · Barcelonès', year: '2016',
      lead: 'Noves consultes externes per modernitzar un edifici hospitalari de referència, amb llum natural, colors i textures càlides.',
      body: ["Projecte de reforma interior englobat dins d'una transformació general paulatina funcional i d'imatge d'un edifici hospitalari de referència a la ciutat de Barcelona.", 'Partint d’un edifici existent amb una traça estructural molt moderna, tot i superar una antiguitat de 40 anys, es modernitza i s’adapta l’ús d’espais per aconseguir unes noves consultes externes, potenciant l’ús de la llum natural, l’ús de colors i textures naturals per a crear ambients càlids i de tall modern.'],
      facts: [['Projecte i direcció.', 'José Luis de la Fuente, arquitecte'], ['Enginyeria instal·lacions.', 'BCNOVA TÈCNICS, Julio Flores, enginyer'], ['Client.', 'CLÍNICA DEL REMEI'], ['Localització.', 'Barcelona, Barcelonès']],
      folder: '2016. clínica del REMEI/', images: Array.from({ length: 11 }, (_, i) => `remei_${String(i + 1).padStart(2, '0')}.jpg`)
    },
    'casa-jove-marina': {
      title: 'Casa JOVE MARINA.', heading: 'Casa JOVE<br>MARINA', place: 'Barcelona · Barcelonès', year: '2019',
      lead: 'La reforma d’un hospital de dia que genera una imatge més jove, transparent i propera als seus usuaris.',
      body: ["Projecte de reforma interior d'un equipament sanitari d'hospital de dia. Edifici antic de planta baixa i pis.", 'Mantenint l’estructura i la façana s’aboquen tots els esforços en redissenyar una distribució funcional per a un programa complex i crear una nova imatge més jove i desenfadada, en homenatge als usuaris de l’entitat, aportant traces de naturalitat i transparències controlades que ajudin a fer com a propis els espais a les persones que hi treballen i a les que són ateses.', 'Únicament es manté com a element interior l’escala de marbre que comunica les dues plantes, com a referència a l’origen de l’edificació i buscant el contrast amb els nous elements i textures més actuals.'],
      facts: [['Projecte i direcció.', 'José Luis de la Fuente, arquitecte'], ['Interiorisme.', 'AQUIDOS Architecture & Urbanism'], ['Enginyeria instal·lacions.', 'BCNOVA TÈCNICS, Julio Flores, enginyer'], ['Client.', 'Fundació Sant Pere Claver'], ['Localització.', 'Barcelona, Barcelonès']],
      folder: '2019. Casa JOVE MARINA/', images: Array.from({ length: 6 }, (_, i) => `casa_jove_marina_${String(i + 1).padStart(2, '0')}.jpg`)
    },
    'dexeus-hospital-general-de-catalunya': {
      title: 'DEXEUS Hospital General de Catalunya.', heading: 'DEXEUS Hospital<br>General de Catalunya', place: 'Sant Cugat del Vallès · Vallès Occidental', year: '2022',
      lead: 'Una reforma integral de ginecologia que simplifica el funcionament de l’hospital i crea una atmosfera càlida i confortable.',
      body: ['Projecte de reforma integral de l’àrea de ginecologia d’un gran hospital.', 'Mantenint l’estructura de distribució amb un eix principal, es planteja una intervenció que juga amb els espais per simplificar el funcionament i generar uns ambients càlids i confortables, fugint de la fredor d’un hospital.'],
      facts: [['Projecte i direcció.', 'José Luis de la Fuente, arquitecte'], ['Enginyeria instal·lacions.', 'BCNOVA TÈCNICS, Montse Elías, enginyera'], ['Client.', 'Dexeus Dona'], ['Localització.', 'Sant Cugat del Vallès, Vallès Occidental']],
      folder: '2022. DEXEUS Hospital General de Catalunya/', images: [...Array.from({ length: 7 }, (_, i) => `dexeus_hgc_${String(i + 1).padStart(2, '0')}.jpg`), ...Array.from({ length: 4 }, (_, i) => `dexeus_hgc_${String(i + 8).padStart(2, '0')}.png`)]
    },
    'clinica-dexme-midlife': {
      title: 'Clínica DEXME-MIDLIFE.', heading: 'Clínica<br>DEXME-MIDLIFE', place: 'Barcelona · Barcelonès', year: '2025',
      lead: 'Un centre de salut i imatge per a la dona, concebut com un espai natural, càlid i acollidor.',
      body: ['Projecte d’un nou centre dedicat a la salut i imatge de la dona a les etapes de la menopausa.', 'Espai exclusiu de tractament i acolliment amb un aparcament privat per la clínica. Objectiu clar de crear un ambient interior càlid i natural, amb materials i textures que fugen d’un espai sanitari per convertir-se en un lloc confortable que generi sensació d’acolliment i tracte proper a les usuàries.'],
      facts: [['Projecte i direcció.', 'José Luis de la Fuente, arquitecte'], ['Interiorisme.', 'AQUIDOS Architecture & Urbanism'], ['Enginyeria instal·lacions.', 'BCNOVA TÈCNICS, Montserrat Elías, enginyera'], ['Clients.', 'DEXEUS DONA i MESOESTETIC'], ['Localització.', 'Barcelona, Barcelonès']],
      folder: '2025. clínica DEXME-MIDLIFE/', images: [...Array.from({ length: 7 }, (_, i) => `dexme_midlife_${String(i + 1).padStart(2, '0')}.jpg`), 'dexme_midlife_12.png', 'dexme_midlife_13.png']
    },
    'dexeus-hospital-viamed-tarragona': {
      title: 'DEXEUS Hospital Viamed Tarragona.', heading: 'DEXEUS Hospital<br>Viamed Tarragona', place: 'Tarragona · Tarragonès', year: '2025',
      lead: 'Ginecologia i laboratori de fecundació in-vitro com un centre independent, funcional i acollidor dins d’un gran hospital privat.',
      body: ['Projecte integrat dins d’un gran nou hospital privat, per l’àrea de ginecologia i laboratori de fecundació in-vitro, com un centre independent dins del centre sanitari, presentant un disseny funcional amb un estil natural per un ambient càlid i acollidor, que posa a la pacient en el lloc més important de tot el seu funcionament.'],
      facts: [['Projecte i direcció.', 'José Luis de la Fuente, arquitecte'], ['Enginyeria instal·lacions.', 'BCNOVA TÈCNICS, Montse Elías, enginyera'], ['Client.', 'Dexeus Dona'], ['Localització.', 'Tarragona, Tarragonès']],
      folder: '2025. DEXEUS Hospital Viamed TARRAGONA/',
      landscapeImages: ['dexeus_tarragona_07.png', 'dexeus_tarragona_08.png'],
      images: ['dexeus_tarragona_01.png', 'dexeus_tarragona_02.png', 'dexeus_tarragona_03.png', 'dexeus_tarragona_04.png', 'dexeus_tarragona_05.png', 'dexeus_tarragona_06.png']
    }
  };
  const project = projects[new URLSearchParams(window.location.search).get('project')] || projects['clinica-del-remei'];
  const imagePath = (file) => encodeURI(base + project.folder + file);
  const image = (file, eager = false) => `<figure><img ${eager ? '' : 'loading="lazy"'} src="${imagePath(file)}" alt="${project.title.replace('.', '')}"></figure>`;
  const landscapeImages = project.landscapeImages || [];
  const middle = Math.ceil(project.images.length / 2);
  const left = project.images.slice(0, middle - 1);
  const hero = project.images[middle - 1];
  const right = project.images.slice(middle);
  document.title = `${project.title} | Crea Arquitectura.`;
  document.querySelector('#MainContent').innerHTML = `
    <section class="project-intro" aria-labelledby="project-title"><div class="project-intro__copy"><p class="project-intro__eyebrow">Sanitari · ${project.year}</p><h1 id="project-title">${project.heading}</h1><p class="project-intro__place">${project.place}</p></div><a class="project-intro__scroll" href="#gallery">Descobrir el projecte <span aria-hidden="true">↓</span></a></section>
    <section class="project-story" aria-label="Descripció del projecte"><div class="project-story__lead"><p>${project.lead}</p></div><div class="project-story__body">${project.body.map((text) => `<p>${text}</p>`).join('')}</div><dl class="project-facts">${project.facts.map(([term, definition]) => `<div><dt>${term}</dt><dd>${definition}</dd></div>`).join('')}</dl></section>
    ${landscapeImages.length ? `<section id="gallery" class="project-landscape-gallery" aria-label="Vistes panoràmiques de ${project.title}">${landscapeImages.map((file) => `<figure><img src="${imagePath(file)}" alt="${project.title.replace('.', '')}"></figure>`).join('')}</section>` : ''}
    <section id="${landscapeImages.length ? 'project-gallery' : 'gallery'}" class="sticky-gallery" aria-label="Galeria de ${project.title}"><div class="sticky-gallery__column sticky-gallery__column--left">${left.map(image).join('')}</div><div class="sticky-gallery__column sticky-gallery__column--center">${image(hero, true)}<div class="sticky-gallery__caption"><span>01 — ${String(project.images.length + landscapeImages.length).padStart(2, '0')}</span><span>${project.title}</span></div></div><div class="sticky-gallery__column sticky-gallery__column--right">${right.map(image).join('')}</div></section>
    <nav class="project-next" aria-label="Navegació de projectes"><a href="./" class="project-next__back">← Tots els projectes</a><a href="#site-header" class="project-next__top">Tornar a l'inici ↑</a></nav>`;
})();
