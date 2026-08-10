(() => {
  const main = document.querySelector('#MainContent');
  if (!main) return;

  main.className = 'team-page';
  main.innerHTML = `
    <section class="team-page__intro" aria-labelledby="about-title">
      <p>CREA Arquitectura · Barcelona</p>
      <h1 id="about-title">Nosaltres.</h1>
      <p class="team-page__lead">Dues mirades complementàries per pensar, projectar i acompanyar l'arquitectura.</p>
    </section>

    <section class="team-half-banners" aria-label="Equip CREA Arquitectura">
      <article class="team-half-banner" data-team-carousel>
        <div class="team-half-banner__media" aria-label="Retrats de Jose">
          <img class="is-active" src="../imgs/team/jose/jose1.png" alt="Jose, CREA Arquitectura">
          <img src="../imgs/team/jose/jose2.png" alt="Jose, CREA Arquitectura">
          <img src="../imgs/team/jose/jose3.png" alt="Jose, CREA Arquitectura">
        </div>
        <div class="team-half-banner__overlay">
          <h2><a href="https://es.linkedin.com/in/jos%C3%A9-luis-de-la-fuente-atance-50340a2b" target="_blank" rel="noreferrer">José Luis de la Fuente Atance.</a></h2>
          <div class="team-half-banner__copy">
            <p>Experiència en projectes d'arquitectura, direcció de projectes, gestió d'equips multidisciplinaris, coordinació de projectes i direcció d'obres de gran volum.</p>
            <p>Objectiu clar en la recerca i el desenvolupament d'arquitectura i construcció sostenibles, i en la reutilització i la rehabilitació com a eines de creixement i desenvolupament.</p>
          </div>
        </div>
      </article>

      <article class="team-half-banner" data-team-carousel>
        <div class="team-half-banner__media" aria-label="Retrats de Cris">
          <img class="is-active" src="../imgs/team/cristina/cristina_1.png" alt="Cris, CREA Arquitectura">
          <img src="../imgs/team/cristina/cristina_2.png" alt="Cris, CREA Arquitectura">
          <img src="../imgs/team/cristina/cristina_3.png" alt="Cris, CREA Arquitectura">
        </div>
        <div class="team-half-banner__overlay">
          <h2><a href="https://es.linkedin.com/in/cristina-casabona-ferr%C3%A9-53585733" target="_blank" rel="noreferrer">Cristina Casabona Ferré.</a></h2>
          <div class="team-half-banner__copy">
            <p>Arquitecta tècnica, realització de projectes i seguiment d'obra.</p>
            <p>Experiència en coordinació d'equips i logística en muntatges d'exposicions i moviments d'art.</p>
            <p>Experiència en coordinació d'equips en la conservació preventiva de peces en exposicions temporals i/o permanents.</p>
            <p>Experiència en programes informàtics: Word, Excel, AutoCAD i programes d'amidaments PRESTO i TCQ. Idiomes: català, castellà i anglès bàsic.</p>
          </div>
        </div>
      </article>
    </section>`;

  document.querySelectorAll('[data-team-carousel]').forEach((carousel, carouselIndex) => {
    const images = Array.from(carousel.querySelectorAll('.team-half-banner__media img'));
    let activeIndex = carouselIndex % images.length;

    const setActive = (index) => {
      activeIndex = index % images.length;
      images.forEach((image, imageIndex) => {
        image.classList.toggle('is-active', imageIndex === activeIndex);
        image.setAttribute('aria-hidden', String(imageIndex !== activeIndex));
      });
    };

    setActive(activeIndex);
    window.setInterval(() => setActive(activeIndex + 1), 3000);
  });
})();
