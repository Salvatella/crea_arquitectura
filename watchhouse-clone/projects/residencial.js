(() => {
  const base = '../imgs/Enviament 1 2026-05-09/Enviament 1 2025-05-09/CREA Web RESIDENCIAL/';
  const projects = {
    'casa-la-selva': {
      title: 'Casa LA SELVA.', place: 'La Selva del Camp · Baix Camp', year: '2003',
      lead: "Una intervenció acurada en una masia centenària, integrada en el paisatge rural.",
      body: ["Treball d'intervenció en un edifici centenari, una masia que havia funcionat com a mas pairal i centre d'una gran extensió agrícola. L'encàrrec exigia mantenir la imatge de casa tradicional integrada en el paisatge, conservant l'interior modern i funcional.", "La proposta va suposar fer un buidat interior total, fent un treball molt acurat de substitució d'una estructura tradicional de parets de pedra per una estructura moderna d'acer que permetia grans llums i estances de grans dimensions. El resultat és una casa còmoda i acollidora que respecta i respira l'entorn rural."],
      facts: [['Projecte i direcció.', 'José Luis de la Fuente i Cristina Casabona, arquitectes'], ['Localització.', 'La Selva del Camp, Baix Camp']],
      folder: '2003. Casa LA SELVA/', images: ['SC Foto web 09.png', 'contrapicat_casa_selva.png', 'SC Foto web 01.png', 'SC Foto web 02.png', 'selva_22.png', 'selva_23.png', 'selva_24.png', 'selva_25.png', 'selva_26.png', 'selva_27.png', 'selva_28.png', 'selva_29.png']
    },
    'casa-la-quadra': {
      title: 'Casa LA QUADRA.', place: 'Bràfim · Alt Camp', year: '2015',
      lead: "La reforma d'una antiga quadra per convertir-la en una casa d'estiu oberta, contemporània i honesta.",
      body: ["Projecte de reforma d’una casa situada en un entorn rural, a partir d’un antic edifici que havia estat utilitzat com a quadra per a animals i paller.", "La proposta parteix del respecte per la memòria de l’edifici existent. Es conserven, consoliden i posen en valor els elements estructurals originals que li donen caràcter. Es projecta una zona de dia oberta, moderna i desenfadada, amb formigó, fusta, maó i ferro sense revestir, que afavoreix la continuïtat entre l’interior i l’exterior."],
      facts: [['Projecte i direcció.', 'José Luis de la Fuente i Cristina Casabona, arquitectes'], ['Localització.', 'Bràfim, Alt Camp']],
      folder: '2015. Casa LA QUADRA/2015. Casa_LA_QUADRA(editades)/', images: ['la_quadra_01.png', 'la_quadra_02.png', 'la_quadra_03.png']
    },
    'reforma-homer': {
      title: 'Reforma HOMER.', place: 'Barcelona · Barcelonès', year: '2019',
      lead: "Una intervenció renovadora sobre un pis antic, transformat en dos habitatges compactes i funcionals.",
      body: ["Projecte de reforma d'un habitatge a Barcelona. Una intervenció renovadora sobre un pis antic de grans dimensions, dividit en dos habitatges simètrics, compactes i funcionals.", "La proposta ordena l'habitatge en una seqüència lineal d'espais, aprofitant la llum natural i afavorint la ventilació creuada entre façana i pati interior. Un interior net i contemporani, on la cuina oberta, els paraments blancs i la paret de maó vist conviuen amb la llum projectada des del balcó."],
      facts: [['Projecte i direcció.', 'José Luis de la Fuente i Cristina Casabona, arquitectes'], ['Localització.', 'Barcelona, Barcelonès']],
      folder: '2019. Reforma HOMER/', images: ['general_homer_1.png', 'cuina_homer_1.png', 'cuina_homer_2.png', 'cuina_homer_3.png', 'general_homero_2.png', 'general_homer_1_complete.png', 'Ho13 Fotos 2022-06-09 Fotos Óscar (1).JPG', 'Ho13 Fotos 2022-06-09 Fotos Óscar (5).JPG', 'Ho13 Fotos 2022-06-09 Fotos Óscar (8).JPG']
    },
    'casa-troana': {
      title: 'Casa TROANA.', place: 'Residencial', year: '2023',
      lead: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      body: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, mi vitae ultrices finibus, mauris augue facilisis justo, at feugiat nulla arcu a nisi.', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'],
      facts: [['Projecte i direcció.', 'José Luis de la Fuente i Cristina Casabona, arquitectes'], ['Any.', '2023']],
      folder: '2023. Casa TROANA/', images: ['troana_01.jpg', 'troana_02.jpg', 'troana_03.jpg', 'troana_04.jpg', 'troana_05.jpg', 'troana_06.jpg', 'troana_07.jpg', 'troana_08.jpg', 'troana_09.jpg', 'troana_10.jpg', 'troana_11.jpg', 'troana_12.png']
    },
    'cases-age': {
      title: 'Cases AGE.', place: 'Residencial', year: '2023',
      lead: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      body: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, mi vitae ultrices finibus, mauris augue facilisis justo, at feugiat nulla arcu a nisi.', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'],
      facts: [['Projecte i direcció.', 'José Luis de la Fuente i Cristina Casabona, arquitectes'], ['Any.', '2023']],
      folder: '2023. Cases AGE/', images: [1, 3, 5, 6, 8, 9, 10, 13, 14, 15, 16, 17, 18, 19, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 36, 38, 41, 42, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53].map((number) => `baixa_${String(number).padStart(3, '0')}.jpg`)
    },
    'casa-petunia': {
      title: 'Casa PETÚNIA.', place: 'Castelldefels · Baix Llobregat', year: '2018',
      lead: 'Una casa unifamiliar aïllada que aprofita una orientació privilegiada al sud i les vistes sobre el mar.',
      body: ['Projecte per a una casa unifamiliar aïllada.', 'Ubicació privilegiada amb orientació a sud i magnífiques vistes sobre el mar. Es gestiona la transició entre el públic i el privat amb una implantació adaptada al terreny.'],
      facts: [['Projecte i direcció.', 'José Luis de la Fuente i Cristina Casabona, arquitectes'], ['Col·laboració projecte instal·lacions.', 'BCNOVA TÈCNICS enginyeria'], ["Direcció d'execució i control de qualitat.", 'Gustavo Díaz, arquitecte tècnic'], ['Localització.', 'Castelldefels, Baix Llobregat']],
      folder: '2018. Casa PETÚNIA/', images: ['Petunia_ia.png', 'Petúnia 27 (1).jpg', 'Petúnia 27 (1).png', 'Petúnia 27 (2).jpg', 'Petúnia 27 (3).jpg', 'Petúnia 27 (4).jpg', 'Petúnia 27 (5).jpg', 'Petúnia 27 (6).jpg']
    },
    'habitatges-ab': {
      title: 'Edifici ARCADI BALAGUER.', place: 'Castelldefels · Baix Llobregat', year: '2017',
      lead: 'Un edifici urbà de 12 habitatges, locals i aparcament, amb una clara voluntat d’integrar-se a l’entorn.',
      body: ["Projecte urbà d'un edifici per a 12 habitatges, locals i aparcament. La intervenció suposa l'enderroc de part de l'edificació existent, rehabilitació d'una estructura d'acer molt interessant i una remunta de quatre plantes per configurar el nou conjunt.", "Imatge d'un edifici innovador amb un marcat interès per integrar-se a l'entorn."],
      facts: [['Projecte i direcció.', 'En col·laboració amb Tuomo Jauhiainen, arquitecte'], ['Col·laboració projecte instal·lacions.', 'BCNOVA TÈCNICS enginyeria'], ["Direcció d'execució i control de qualitat.", 'Gustavo Díaz, arquitecte tècnic'], ['Localització.', 'Castelldefels, Baix Llobregat']],
      folder: '2017. Habitatges AB/', images: ['hab_ab_01.webp', 'hab_ab_02.webp', 'hab_ab_03.webp', 'hab_ab_04.jpg', 'hab_ab_04.webp', 'hab_ab_05.jpg', 'hab_ab_05.webp', 'hab_ab_06.webp', 'hab_ab_08.webp', 'hab_ab_09.webp', 'hab_ab_10.webp', 'hab_ab_22.webp', 'hab_ab_23.webp', 'hab_ab_24.webp', 'hab_ab_25.webp', 'hab_ab_26.webp', 'hab_ab_27.webp', 'hab_ab_31.webp']
    },
    'casa-valldoreix': {
      title: 'Casa VALLDOREIX.', place: 'Sant Cugat del Vallès · Vallès Occidental', year: '2003',
      lead: "La reforma integral d'una casa suburbana que conserva la seva essència domèstica i aire noucentista.",
      body: ["Projecte de reforma integral d'una casa unifamiliar aïllada. La intervenció buida l'edificació original i n'amplia el volum, mantenint-ne l'essència domèstica i conservant alguns trets d'aire noucentista.", "La proposta actualitza la volumetria i la façana, incorporant nous elements contemporanis sense esborrar completament el caràcter de la casa original. L'interior es reorganitza per generar espais més oberts, funcionals i lluminosos, amb un joc de doble espai a la zona comuna."],
      facts: [['Projecte i direcció.', 'José Luis de la Fuente i Cristina Casabona, arquitectes'], ['Localització.', 'Sant Cugat del Vallès, Vallès Occidental']],
      folder: '2003. Casa VALLDOREIX/', images: ['front_valldoreix.png', 'inside_peak_valldoreix.png', 'fachada_despres.png', 'fachada_abans.png', 'torre_despres.png', 'torre abans.png', 'step4_interior_valldoreix_1.png', 'step4_interior_valldoreix_2.png', 'Valldoreix foto 6_JPG.avif', 'Valldoreix foto 7_JPG.avif', 'valldo_9.webp']
    }
  };
  const slug = new URLSearchParams(window.location.search).get('project');
  const project = projects[slug] || projects['casa-la-selva'];
  const imagePath = (image) => encodeURI(base + project.folder + image);
  const image = (file, eager = false) => `<figure><img ${eager ? '' : 'loading="lazy"'} src="${imagePath(file)}" alt="${project.title.replace('.', '')}"></figure>`;
  const middle = Math.ceil(project.images.length / 2);
  const left = project.images.slice(0, middle - 1);
  const hero = project.images[middle - 1];
  const right = project.images.slice(middle);
  document.title = `${project.title} | Crea Arquitectura.`;
  document.querySelector('#MainContent').innerHTML = `
    <section class="project-intro" aria-labelledby="project-title"><div class="project-intro__copy"><p class="project-intro__eyebrow">Residencial · ${project.year}</p><h1 id="project-title">${project.title.replace('.', '').replace(' ', '<br>')}</h1><p class="project-intro__place">${project.place}</p></div><a class="project-intro__scroll" href="#gallery">Descobrir el projecte <span aria-hidden="true">↓</span></a></section>
    <section class="project-story" aria-label="Descripció del projecte"><div class="project-story__lead"><p>${project.lead}</p></div><div class="project-story__body">${project.body.map((text) => `<p>${text}</p>`).join('')}</div><dl class="project-facts">${project.facts.map(([term, definition]) => `<div><dt>${term}</dt><dd>${definition}</dd></div>`).join('')}</dl></section>
    <section id="gallery" class="sticky-gallery" aria-label="Galeria de ${project.title}"><div class="sticky-gallery__column sticky-gallery__column--left">${left.map(image).join('')}</div><div class="sticky-gallery__column sticky-gallery__column--center">${image(hero, true)}<div class="sticky-gallery__caption"><span>01 — ${String(project.images.length).padStart(2, '0')}</span><span>${project.title}</span></div></div><div class="sticky-gallery__column sticky-gallery__column--right">${right.map(image).join('')}</div></section>
    <nav class="project-next" aria-label="Navegació de projectes"><a href="./" class="project-next__back">← Tots els projectes</a><a href="#site-header" class="project-next__top">Tornar a l'inici ↑</a></nav>`;
})();
