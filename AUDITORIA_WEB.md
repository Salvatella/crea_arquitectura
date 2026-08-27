# Auditoría global — CREA Barcelona

Fecha auditoría original: 19 de agosto de 2026  
Última actualización: 22 de agosto de 2026  
Alcance: revisión estática de estructura, enlaces, recursos, formularios, accesibilidad, SEO y JavaScript.

Cada incidencia tiene un identificador (`R#` resuelto, `P#` pendiente, `D#` decisión) y la lista de rutas/recursos afectados.

Abreviaturas de idioma usadas en las rutas:

- `CA` = `crea-barcelona/despatx-arquitectura-barcelona/`
- `ES` = `crea-barcelona/despacho-arquitectura-barcelona/`
- `EN` = `crea-barcelona/architecture-studio-barcelona/`

## Resumen

La base del sitio está bien planteada como web estática y las tres versiones de idioma están operativas a nivel de estructura. **Los dos bloqueantes previos al lanzamiento (R1, R2) ya están resueltos.** La dependencia de la fuente Balto (antes P5) también se ha resuelto (R6, autoalojada). Quedan pendientes solo mejoras de SEO aplazadas hasta tener dominio final (`canonical` P1.b, `hreflang` P1.c).

## ✅ Resuelto (verificado 22 ago 2026)

### R1 — Formularios con redirección a `127.0.0.1`

Los 6 formularios ya no apuntan a `http://127.0.0.1:5641/...`. Todos los campos ocultos `_next` usan la URL de producción equivalente. Verificación: `0` apariciones de `127.0.0.1` en HTML.

Rutas afectadas (ya corregidas):

- `CA/consultoria/index.html`
- `CA/nosaltres/index.html`
- `ES/consultoria/index.html`
- `ES/nosaltres/index.html`
- `EN/consultoria/index.html`
- `EN/nosaltres/index.html`

### R2 — Enlaces vacíos con `href="#"`

`0` apariciones de `href="#"` en todo el sitio. Los enlaces del pie (sociales, legales) y los iconos de equipo apuntan ahora a destinos reales o se han retirado. Las páginas legales están publicadas en los tres idiomas:

- `CA/legal/avis-legal/`, `CA/legal/politica-privacitat/`, `CA/legal/politica-cookies/`
- `ES/legal/aviso-legal/`, `ES/legal/politica-privacidad/`, `ES/legal/politica-cookies/`
- `EN/legal/legal-notice/`, `EN/legal/privacy-policy/`, `EN/legal/cookie-policy/`

### R4 — Rutas de recursos con entidades HTML (antes P4)

Normalizadas a `snake_case` ASCII todas las carpetas del árbol `imgs/enviament_1_2026-05-09/...` (minúsculas, sin acentos, sin puntos, espacios → `_`; se mantienen los guiones de fechas). Se renombraron 317 archivos (`git mv`, conservando la jerarquía) y se reescribieron las referencias en 79 archivos HTML/JS en sus tres codificaciones anteriores (cruda, `%xx`, `&#nnn;`).

Verificación: 801 referencias al árbol comprobadas, `0` rotas. `0` rutas con `%20`/`%C3`/`&#`/espacios en todo el sitio.

Hallazgo adicional corregido: la versión inglesa (`EN/proyectos/index.html` y `EN/conceptes/index.html`) tenía 10 referencias a carpetas con el nombre traducido al inglés (p. ej. `2003. VALLDOREIX Home`, `2005. PETANCA Club`) que **nunca existieron en disco** — enlaces rotos previos a P4. Se han redirigido a las carpetas reales normalizadas.

### R5 — Traducciones de fichas ES/EN (revisión 22 ago 2026)

- **EN**: nombres de proyecto de `<title>`, `<h1>`, `alt` y etiqueta de galería alineados al grid (fuente de verdad); `title == h1` en las 24 fichas; eyebrow `Residencial` → `Residential`; alts descriptivos que quedaban en español/catalán traducidos (`celler-nou-plus`, `casa-assutzena`); nombres de fundación unificados al oficial catalán `Fundació` (se eliminó el español `Fundación`).
- **ES**: cuerpo de `casa-assutzena` y `casa-petunia` estaba en catalán → traducido; etiqueta de galería `Galeria de` → `Galería de` (21 fichas); alts catalanes de `casa-assutzena` → español; genéricos catalanes `Cases` → `Casas` y `Habitatges` → `Viviendas` en fichas, grid, home, featured y `home.js` (incluidas las variantes con `<br>` en los `<h1>`); alts catalanes del home (`façana`, `jardí`) → español.
- Pendiente/decisión abierta: `Celler NOU PLUS` se mantiene en ES por ser nombre comercial de la bodega (y del cliente). Cambiar a `Bodega` solo si se confirma.
- Lorem ipsum intacto (`casa-troana`, `cases-age`, `cases-sh10`, `habitatges-ag`).

### R6 — Fuente Balto autoalojada (antes P5)

`crea-barcelona/shared/general-styles.css` ya no carga Balto desde `https://watchhouse.com/cdn/shop/...`. Se descargaron `Balto-Book.otf` (98.792 B) y `Balto-Medium.otf` (112.012 B) a `crea-barcelona/shared/` y los dos `@font-face` apuntan a rutas locales (`./Balto-Book.otf`, `./Balto-Medium.otf`) con `format("opentype")`. Eliminada la dependencia del dominio de terceros.

Verificación: `0` referencias a fuentes Balto en `watchhouse.com/cdn`; solo las 2 rutas locales.

### R3 — Enlace de salto al contenido

96 de 100 archivos HTML incluyen `href="#MainContent"`. Los 4 restantes no son páginas navegables y no requieren acción:

- `CA/_featured-collections.html`
- `ES/_featured-collections.html`
- `EN/_featured-collections.html`
- `crea-barcelona/index.html` (redirección a CA)

## 🟠 Pendiente

### P1 — SEO multilingüe incompleto

Estado a 22 ago 2026 (sobre 100 archivos HTML).

- **P1.a — `meta description`: RESUELTO.** Las 100 páginas tienen descripción única. Fichas con texto real derivadas del `project-story__lead` (en su idioma, ≤160 car); las 4 fichas Lorem × 3 idiomas usan plantilla factual (nombre + categoría + CREA Arquitectura); `_featured-collections` y la raíz usan la descripción del home de su idioma. Es contenido puro sin dominio → válido también en producción.
- **P1.b — `canonical`: PENDIENTE, aplazado.** Requiere URL absoluta. El sitio está en un enlace provisional de GitHub Pages sin dominio final conocido; se hará en un pase automatizado cuando exista el dominio, para no rehacerlo ni indexar la URL provisional.
- **P1.c — `hreflang`: PENDIENTE, aplazado.** Igual que P1.b (URL absoluta). Base ya disponible en el `language-bar` de cada página.

Nota: `noindex` provisional descartado por el usuario (no es un dominio público, sin interés SEO por ahora).

**P1.a — Falta `meta description` (70 archivos).**
Las páginas principales (inicio, consultoría, nosotros, conceptos, índice de proyectos y legales) sí la tienen. Falta en:

- Fichas de proyecto: 22 por idioma → `CA/projectes/**/*.html`, `ES/proyectos/**/*.html`, `EN/proyectos/**/*.html` (todas menos `casa-assutzena` y `celler-nou-plus`, que ya la tienen).
- Fragmentos: `CA/_featured-collections.html`, `ES/_featured-collections.html`, `EN/_featured-collections.html`.
- Raíz: `crea-barcelona/index.html` (opcional; es solo redirección).

**P1.b — Falta `canonical` (90 archivos, 30 por idioma).**
Solo lo incluyen las 9 páginas legales y `crea-barcelona/index.html`. Falta en todo lo demás: portada, consultoría, nosotros, conceptos, índice de proyectos, las 24 fichas y `_featured-collections.html` de cada idioma (`CA/**`, `ES/**`, `EN/**`).

**P1.c — No hay `hreflang` (0 archivos).**
Ninguna página relaciona sus equivalentes CA/ES/EN.

Impacto: Google entiende peor cada página y las versiones lingüísticas compiten entre sí.

✅ Acción: descripción única por ficha, `canonical` por página y bloque `hreflang` (ca/es/en + `x-default`) enlazando equivalentes.




## ⚪ Decisiones

### D1 — Validación nativa de formularios (se mantiene el estado actual)

Los 6 formularios (rutas en R1) usan `novalidate` y `type="email"` en el campo de correo. Ninguno incluye `required`; toda la validación depende de `crea-barcelona/shared/site.js`.

Reglas en JS: `name` obligatorio (mín. 2 caracteres), `email` obligatorio con patrón, `message` obligatorio, `phone` opcional.

Decisión (22 ago 2026): no se añade `required` ni se retira `novalidate`. La validación seguirá dependiendo de `site.js`. Riesgo asumido: si el JS falla o tarda, no hay validación nativa de respaldo.

## 🟢 Comprobaciones correctas

- Los 19 archivos JavaScript pasan la comprobación sintáctica.
- No se han detectado imágenes sin atributo `alt`.
- No hay IDs HTML duplicados dentro de una misma página.
- Todas las páginas incluyen `lang`, `charset` y `viewport`.
- Los enlaces externos con `target="_blank"` usan `rel="noreferrer"`.
- Validación de formularios centralizada y multilingüe (CA/ES/EN) en `crea-barcelona/shared/site.js`.

## 📋 Orden de prioridad recomendado (22 ago 2026)

1. **P1.b / P1.c** — `canonical`, `hreflang` y `sitemap.xml` (aplazados hasta tener dominio final).

Nota: **P1.a** (`meta description`), **P2** (`<h1>`) y **P5** (fuente Balto, ahora R6) ya resueltos; ver sus secciones.

Resueltos: R1, R2, R3, R4, R5, R6. Decisión cerrada: D1.

## Límites de esta auditoría

Revisión estática y local. No incluye Lighthouse, pruebas responsive en dispositivos reales, cabeceras de seguridad del servidor, indexación en producción ni envío real de formularios.
