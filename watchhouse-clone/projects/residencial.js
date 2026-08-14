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
    'casa-valldoreix': {
      title: 'Casa VALLDOREIX.', place: 'Sant Cugat del Vallès · Vallès Occidental', year: '2003',
      lead: "La reforma integral d'una casa suburbana que conserva la seva essència domèstica i aire noucentista.",
      body: ["Projecte de reforma integral d'una casa unifamiliar aïllada. La intervenció buida l'edificació original i n'amplia el volum, mantenint-ne l'essència domèstica i conservant alguns trets d'aire noucentista.", "La proposta actualitza la volumetria i la façana, incorporant nous elements contemporanis sense esborrar completament el caràcter de la casa original. L'interior es reorganitza per generar espais més oberts, funcionals i lluminosos, amb un joc de doble espai a la zona comuna."],
      facts: [['Projecte i direcció.', 'José Luis de la Fuente i Cristina Casabona, arquitectes'], ['Localització.', 'Sant Cugat del Vallès, Vallès Occidental']],
      folder: '2003. Casa VALLDOREIX/', images: ['front_valldoreix.png', 'inside_peak_valldoreix.png', 'fachada_despres.png', 'fachada_abans.png', 'torre_despres.png', 'torre abans.png', 'step4_interior_valldoreix_1.png', 'step4_interior_valldoreix_2.png', 'Valldoreix foto 2a.avif', 'Valldoreix foto 5_JPG.avif', 'Valldoreix foto 6_JPG.avif', 'Valldoreix foto 6_JPG.jpg', 'Valldoreix foto 7_JPG.avif']
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
