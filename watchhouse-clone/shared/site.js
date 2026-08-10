(() => {
  const existingFooter = document.querySelector('footer');
  const footer = existingFooter || document.createElement('footer');

  footer.id = 'site-footer';
  footer.className = 'site-footer';
  footer.innerHTML = `
    <div class="site-footer__overlay">
      <div class="site-footer__social">
        <div class="newsletter-form">
          <div class="newsletter-form__header">
            <p class="newsletter-form__title" title="Projectes, idees i novetats">Projectes, idees i novetats.</p>
            <div class="newsletter-form__description"><p>Una mirada periòdica al nostre treball, als processos i als espais que transformem.</p></div>
          </div>
          <form method="post" action="#" class="contact-form">
            <div class="newsletter-form__field">
              <div>
                <label class="visually-hidden" for="newsletter-email">Correu electrònic</label>
                <input id="newsletter-email" class="newsletter-form__input" name="contact[email]" placeholder="Correu electrònic" type="email">
              </div>
              <button class="newsletter-form__submit" type="submit" title="Subscriure's" aria-label="Subscriure's">
                <svg class="icon__arrow icon__arrow--right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M13.996 6.192c.32-.321.84-.321 1.161 0l5.227 5.227c.321.32.321.84 0 1.161l-5.227 5.227a.821.821 0 1 1-1.161-1.161l3.825-3.825H3.375v-1.643h14.446l-3.825-3.825a.82.82 0 0 1 0-1.161"></path></svg>
              </button>
            </div>
          </form>
        </div>
        <ul class="social-links">
          <li><a href="#">Instagram.</a></li>
          <li><a href="#">LinkedIn.</a></li>
        </ul>
      </div>
      <div class="site-footer__columns">
        <div class="footer-column">
          <button class="footer-column__heading footer-column__heading--image" type="button">
            <span>CREA.</span>
            <svg class="icon__plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11.25H21V12.75H3V11.25ZM12.75 3V21H11.25V3H12.75Z"></path></svg>
          </button>
          <div class="footer-column__content"><ul>
            <li><a class="footer-column__link" href="../nosaltres/">Nosaltres</a></li>
            <li><a class="footer-column__link" href="../conceptes/">Conceptes</a></li>
            <li><a class="footer-column__link" href="../consultoria/">Consulting</a></li>
          </ul></div>
        </div>
        <div class="footer-column">
          <button class="footer-column__heading" type="button"><span>Projectes.</span><svg class="icon__plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11.25H21V12.75H3V11.25ZM12.75 3V21H11.25V3H12.75Z"></path></svg></button>
          <div class="footer-column__content"><ul>
            <li><a class="footer-column__link" href="../projects/">Residencial</a></li>
            <li><a class="footer-column__link" href="../projects/">Sanitari</a></li>
            <li><a class="footer-column__link" href="../projects/">Rehabilitació</a></li>
            <li><a class="footer-column__link" href="../projects/">Interiors</a></li>
          </ul></div>
        </div>
        <div class="footer-column">
          <button class="footer-column__heading" type="button"><span>Contacte.</span><svg class="icon__plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11.25H21V12.75H3V11.25ZM12.75 3V21H11.25V3H12.75Z"></path></svg></button>
          <div class="footer-column__content"><ul>
            <li><a class="footer-column__link" href="#">Barcelona</a></li>
            <li><a class="footer-column__link" href="mailto:info@creaarquitectura.com">Correu electrònic</a></li>
            <li><a class="footer-column__link" href="#">LinkedIn</a></li>
          </ul></div>
        </div>
      </div>
      <div class="site-footer__posts footer-social-posts">
        <div class="footer-social-posts__grid">
          <a class="footer-social-post" href="#"><img src="../imgs/hero_banner_imgs/2016. Casa ASSUTZENA/Ass34 Foto web 02 CUINA-EXTERIOR.jpg" alt="Projecte CREA" draggable="false"></a>
          <a class="footer-social-post" href="#"><img src="../imgs/hero_banner_imgs/2018 Oficines MÈXIC/Me17 Foto web 6.jpg" alt="Projecte CREA" draggable="false"></a>
          <a class="footer-social-post" href="#"><img src="../imgs/hero_banner_imgs/2018. Casa PETÚNIA/Petúnia 27 (3).jpg" alt="Projecte CREA" draggable="false"></a>
          <a class="footer-social-post" href="#"><img src="../imgs/hero_banner_imgs/2023. Casa TROANA/SVB008.jpg" alt="Projecte CREA" draggable="false"></a>
        </div>
        <a class="footer-social-posts__handle" href="#">@creaarquitectura</a>
      </div>
      <div class="site-footer__misc">
        <p class="site-footer__copy">© <a href="../home/" title="CREA Arquitectura">CREA Arquitectura</a> 2026</p>
        <div class="site-footer__links">
          <a class="site-footer__misc-light" href="#">Terms</a>
          <a class="site-footer__misc-light" href="#">Privacy</a>
          <a class="site-footer__misc-light" href="#">Cookies</a>
        </div>
      </div>
    </div>`;

  // The markup below is a historical WatchHouse fallback. Mark this page so it
  // does not replace the CREA version above.
  document.documentElement.dataset.creaFooter = 'true';
  if (!existingFooter) document.body.append(footer);
})();

(() => {
  if (document.documentElement.dataset.creaFooter === 'true') return;

  const footerMarkup = `
    <img src="https://watchhouse.com/cdn/shop/files/39f0dfbe8ae7c8cf405c1bb6b072c5b293742c82.jpg?v=1770803088&amp;width=2880" alt="" class="site-footer__background" draggable="false">
    <div class="site-footer__overlay">
      <div class="site-footer__social">
        <div class="newsletter-form">
          <div class="newsletter-form__header">
            <p class="newsletter-form__title" title="Our emails. Your inbox">Our emails. Your inbox.</p>
            <div class="newsletter-form__description"><p>New origins. Seasonal menus. Upcoming events. And 10% off, when you subscribe.</p></div>
          </div>
          <form method="post" action="https://watchhouse.com/contact#contact_form" class="contact-form">
            <div class="newsletter-form__field">
              <div><label class="visually-hidden" for="newsletter-email">Email address</label><input id="newsletter-email" class="newsletter-form__input" name="contact[email]" placeholder="Email address" type="email"></div>
              <button class="newsletter-form__submit" type="submit" title="Submit" aria-label="Submit email">
                <svg class="icon__arrow icon__arrow--right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M13.996 6.192c.32-.321.84-.321 1.161 0l5.227 5.227c.321.32.321.84 0 1.161l-5.227 5.227a.821.821 0 1 1-1.161-1.161l3.825-3.825H3.375v-1.643h14.446l-3.825-3.825a.82.82 0 0 1 0-1.161"></path></svg>
              </button>
            </div>
          </form>
        </div>
        <ul class="social-links"><li><a href="https://www.facebook.com/watchhouse/" target="_blank" rel="noreferrer">Facebook.</a></li><li><a href="https://www.instagram.com/watchhouse/" target="_blank" rel="noreferrer">Instagram.</a></li><li><a href="https://uk.linkedin.com/company/watchhouse" target="_blank" rel="noreferrer">LinkedIn.</a></li></ul>
      </div>
      <div class="site-footer__columns">
        <div class="footer-column">
          <button class="footer-column__heading footer-column__heading--image" type="button"><span class="visually-hidden">WatchHouse</span><img src="https://watchhouse.com/cdn/shop/files/logo-white.svg?v=1761845122&amp;width=104" alt="WatchHouse" draggable="false"><svg class="icon__plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11.25H21V12.75H3V11.25ZM12.75 3V21H11.25V3H12.75Z"></path></svg></button>
          <div class="footer-column__content"><ul><li><a class="footer-column__link" href="https://watchhouse.com/pages/about">Story</a></li><li><a class="footer-column__link" href="https://watchhouse.com/blogs/spotlight">Journal</a></li><li><a class="footer-column__link" href="https://watchhouse.com/pages/careers">Careers</a></li><li><a class="footer-column__link" href="https://watchhouse.com/pages/media-pr">Media &amp; PR</a></li><li><a class="footer-column__link" href="https://watchhouse.com/pages/franchise">Franchise</a></li></ul></div>
        </div>
        <div class="footer-column">
          <button class="footer-column__heading" type="button"><span>Houses.</span><svg class="icon__plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11.25H21V12.75H3V11.25ZM12.75 3V21H11.25V3H12.75Z"></path></svg></button>
          <div class="footer-column__content"><ul><li><a class="footer-column__link" href="https://watchhouse.com/pages/visit">Visit us</a></li><li><a class="footer-column__link" href="https://watchhouse.com/pages/app">App</a></li><li><a class="footer-column__link" href="https://watchhouse.com/pages/brunch-menu">Menu</a></li><li><a class="footer-column__link" href="https://watchhouse.com/pages/events">Private hire</a></li></ul></div>
        </div>
        <div class="footer-column">
          <button class="footer-column__heading" type="button"><span>Help &amp; Info.</span><svg class="icon__plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11.25H21V12.75H3V11.25ZM12.75 3V21H11.25V3H12.75Z"></path></svg></button>
          <div class="footer-column__content"><ul><li><a class="footer-column__link" href="https://watchhouse.com/pages/faqs">FAQs</a></li><li><a class="footer-column__link" href="https://watchhouse.com/blogs/brewing-guides">Brew guides</a></li><li><a class="footer-column__link" href="https://watchhouse.com/pages/coffee-delivery-shipping">Shipping</a></li><li><a class="footer-column__link" href="https://watchhouse.com/pages/returns">Returns</a></li><li><a class="footer-column__link" href="https://watchhouse.com/pages/contact">Contact</a></li></ul></div>
        </div>
      </div>
      <div class="site-footer__posts">
        <div class="footer-social-posts__grid">
          <a class="footer-social-post" href="https://www.instagram.com/watchhouse/" target="_blank" rel="noreferrer"><img src="https://watchhouse.com/cdn/shop/files/WH_Footer_P4.jpg?v=1775384428&amp;width=180" alt="" draggable="false"></a>
          <a class="footer-social-post" href="https://www.instagram.com/watchhouse/" target="_blank" rel="noreferrer"><img src="https://watchhouse.com/cdn/shop/files/WH_Footer_P2.jpg?v=1775384428&amp;width=180" alt="" draggable="false"></a>
          <a class="footer-social-post" href="https://www.instagram.com/watchhouse/" target="_blank" rel="noreferrer"><img src="https://watchhouse.com/cdn/shop/files/WH_Footer_P3.jpg?v=1775384428&amp;width=180" alt="" draggable="false"></a>
          <a class="footer-social-post" href="https://www.instagram.com/watchhouse/" target="_blank" rel="noreferrer"><img src="https://watchhouse.com/cdn/shop/files/Screenshot_2026-04-28_at_09.28.41.png?v=1777364962&amp;width=180" alt="" draggable="false"></a>
        </div>
        <a class="footer-social-posts__handle" href="https://www.instagram.com/watchhouse/" target="_blank" rel="noreferrer">@watchhouse</a>
      </div>
      <div class="site-footer__misc"><p class="site-footer__copy">© <a href="https://watchhouse.com/">WatchHouse</a> 2026</p><div class="site-footer__links"><a class="site-footer__misc-light" href="https://watchhouse.com/policies/terms-of-service">Terms</a><a class="site-footer__misc-light" href="https://watchhouse.com/policies/privacy-policy">Privacy</a><a class="site-footer__misc-light" href="https://watchhouse.com/pages/cookies">Cookies</a></div></div>
    </div>`;

  let footer = document.querySelector('footer');
  if (!footer) {
    footer = document.createElement('footer');
    document.body.append(footer);
  }
  footer.id = 'site-footer';
  footer.className = 'site-footer';
  footer.innerHTML = footerMarkup;
})();

(() => {
  const header = document.querySelector('.main-header');
  const nav = header?.querySelector('.nav-menu');
  const menuButton = header?.querySelector('.main-header__menu-button');
  const languageButtons = Array.from(header?.querySelectorAll('.language-bar__button') || []);
  const items = Array.from(header?.querySelectorAll('.nav-menu__item') || []).map((item) => {
    const trigger = item.querySelector('.nav-menu__link[aria-controls]');
    const menu = trigger ? document.getElementById(trigger.getAttribute('aria-controls')) : null;
    return trigger && menu ? { item, trigger, menu } : null;
  }).filter(Boolean);

  if (!header || !nav || !menuButton) return;

  const isMobile = () => window.matchMedia('(max-width: 767px)').matches;

  const setMenuOpen = (entry, open) => {
    entry.item.classList.toggle('is-open', open);
    entry.trigger.setAttribute('aria-expanded', String(open));
    entry.menu.setAttribute('aria-hidden', String(!open));
    entry.menu.querySelectorAll('a').forEach((link) => {
      link.tabIndex = open ? 0 : -1;
    });
  };

  const closeDropdowns = (except = null) => {
    items.forEach((entry) => {
      if (entry !== except) setMenuOpen(entry, false);
    });
  };

  const closeNavigation = () => {
    nav.classList.remove('is-open');
    menuButton.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    closeDropdowns();
  };

  items.forEach((entry) => {
    entry.item.addEventListener('mouseenter', () => {
      if (!isMobile()) {
        closeDropdowns(entry);
        setMenuOpen(entry, true);
      }
    });

    entry.item.addEventListener('mouseleave', () => {
      if (!isMobile()) setMenuOpen(entry, false);
    });

    entry.item.addEventListener('focusin', () => {
      if (!isMobile()) {
        closeDropdowns(entry);
        setMenuOpen(entry, true);
      }
    });

    entry.trigger.addEventListener('click', (event) => {
      event.preventDefault();
      const open = !entry.item.classList.contains('is-open');
      closeDropdowns(entry);
      setMenuOpen(entry, open);
    });
  });

  menuButton.addEventListener('click', () => {
    const open = !nav.classList.contains('is-open');
    nav.classList.toggle('is-open', open);
    menuButton.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });

  languageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      languageButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });
    });
  });

  document.addEventListener('click', (event) => {
    if (!header.contains(event.target)) closeNavigation();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeNavigation();
  });

  window.addEventListener('resize', () => {
    if (!isMobile()) {
      nav.classList.remove('is-open');
      menuButton.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });

  closeDropdowns();
})();

(() => {
  const footerItems = Array.from(document.querySelectorAll('.footer-column'));
  const desktopQuery = window.matchMedia('(min-width: 768px)');

  footerItems.forEach((item) => {
    const button = item.querySelector('.footer-column__heading');
    const content = item.querySelector('.footer-column__content');

    if (!button || !content) return;

    button.setAttribute('aria-expanded', String(desktopQuery.matches));

    button.addEventListener('click', () => {
      if (desktopQuery.matches) return;

      const isOpen = item.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(isOpen));
      content.style.maxHeight = isOpen ? `${content.scrollHeight}px` : '0px';
    });
  });

  desktopQuery.addEventListener('change', ({ matches }) => {
    footerItems.forEach((item) => {
      const button = item.querySelector('.footer-column__heading');
      const content = item.querySelector('.footer-column__content');

      if (!button || !content) return;

      item.classList.remove('is-open');
      button.setAttribute('aria-expanded', String(matches));
      content.style.removeProperty('max-height');

      if (!matches) content.style.maxHeight = '0px';
    });
  });
})();
