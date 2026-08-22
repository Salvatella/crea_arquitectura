# Auditoría global — Watchhouse Clone

Fecha auditoría original: 19 de agosto de 2026  
Última actualización: 22 de agosto de 2026  
Alcance: revisión estática de estructura, enlaces, recursos, formularios, accesibilidad, SEO y JavaScript.

Cada incidencia tiene un identificador (`R#` resuelto, `P#` pendiente, `D#` decisión) y la lista de rutas/recursos afectados.

Abreviaturas de idioma usadas en las rutas:

- `CA` = `watchhouse-clone/despatx-arquitectura-barcelona/`
- `ES` = `watchhouse-clone/despacho-arquitectura-barcelona/`
- `EN` = `watchhouse-clone/architecture-studio-barcelona/`

## Resumen

La base del sitio está bien planteada como web estática y las tres versiones de idioma están operativas a nivel de estructura. **Los dos bloqueantes previos al lanzamiento (R1, R2) ya están resueltos.** Quedan pendientes mejoras de SEO (P1), jerarquía de encabezados (P2), mantenimiento multilingüe (P3), rutas con entidades HTML (P4) y dependencia de la fuente Balto (P5).

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

### R3 — Enlace de salto al contenido

96 de 100 archivos HTML incluyen `href="#MainContent"`. Los 4 restantes no son páginas navegables y no requieren acción:

- `CA/_featured-collections.html`
- `ES/_featured-collections.html`
- `EN/_featured-collections.html`
- `watchhouse-clone/index.html` (redirección a CA)

## 🟠 Pendiente

### P1 — SEO multilingüe incompleto

Estado a 22 ago 2026 (sobre 100 archivos HTML).

**P1.a — Falta `meta description` (70 archivos).**
Las páginas principales (inicio, consultoría, nosotros, conceptos, índice de proyectos y legales) sí la tienen. Falta en:

- Fichas de proyecto: 22 por idioma → `CA/projectes/**/*.html`, `ES/proyectos/**/*.html`, `EN/proyectos/**/*.html` (todas menos `casa-assutzena` y `celler-nou-plus`, que ya la tienen).
- Fragmentos: `CA/_featured-collections.html`, `ES/_featured-collections.html`, `EN/_featured-collections.html`.
- Raíz: `watchhouse-clone/index.html` (opcional; es solo redirección).

**P1.b — Falta `canonical` (90 archivos, 30 por idioma).**
Solo lo incluyen las 9 páginas legales y `watchhouse-clone/index.html`. Falta en todo lo demás: portada, consultoría, nosotros, conceptos, índice de proyectos, las 24 fichas y `_featured-collections.html` de cada idioma (`CA/**`, `ES/**`, `EN/**`).

**P1.c — No hay `hreflang` (0 archivos).**
Ninguna página relaciona sus equivalentes CA/ES/EN.

Impacto: Google entiende peor cada página y las versiones lingüísticas compiten entre sí.

✅ Acción: descripción única por ficha, `canonical` por página y bloque `hreflang` (ca/es/en + `x-default`) enlazando equivalentes.

### P2 — Jerarquía de encabezados

- Sin `<h1>` (0): `CA/index.html`, `ES/index.html`, `EN/index.html`.
- Con seis `<h1>` (debería ser uno): `CA/conceptes/index.html`, `ES/conceptes/index.html`, `EN/conceptes/index.html`.

✅ Acción: un único `<h1>` por página; el resto a `<h2>`/`<h3>` según jerarquía.

### P3 — Mantenimiento multilingüe

Tres árboles HTML completos (`CA/`, `ES/`, `EN/`) y contenido común duplicado en `watchhouse-clone/shared/`. Cada cambio común debe repetirse ×3; riesgo de desincronización.

✅ Acción: lista de comprobación para cambios globales; a medio plazo, plantillas o generación estática desde contenido común.

### P4 — Rutas de recursos con entidades HTML

RESUELTO. Ver R4 en la sección de resueltos.

### P5 — Fuente Balto desde CDN externo

`watchhouse-clone/shared/general-styles.css` (líneas 6 y 14) carga Balto desde `https://watchhouse.com/cdn/shop/...`. Dependencia de un dominio de terceros: si cambia o se retira, la tipografía cae al fallback Arial sin aviso.

✅ Acción: autoalojar `Balto-Book.otf` y `Balto-Medium.otf` en `watchhouse-clone/shared/` y actualizar los `@font-face`.

## ⚪ Decisiones

### D1 — Validación nativa de formularios (se mantiene el estado actual)

Los 6 formularios (rutas en R1) usan `novalidate` y `type="email"` en el campo de correo. Ninguno incluye `required`; toda la validación depende de `watchhouse-clone/shared/site.js`.

Reglas en JS: `name` obligatorio (mín. 2 caracteres), `email` obligatorio con patrón, `message` obligatorio, `phone` opcional.

Decisión (22 ago 2026): no se añade `required` ni se retira `novalidate`. La validación seguirá dependiendo de `site.js`. Riesgo asumido: si el JS falla o tarda, no hay validación nativa de respaldo.

## 🟢 Comprobaciones correctas

- Los 19 archivos JavaScript pasan la comprobación sintáctica.
- No se han detectado imágenes sin atributo `alt`.
- No hay IDs HTML duplicados dentro de una misma página.
- Todas las páginas incluyen `lang`, `charset` y `viewport`.
- Los enlaces externos con `target="_blank"` usan `rel="noreferrer"`.
- Validación de formularios centralizada y multilingüe (CA/ES/EN) en `watchhouse-clone/shared/site.js`.

## 📋 Orden de prioridad recomendado (22 ago 2026)

1. **P1** — SEO: `meta description` en fichas, `canonical` por página, `hreflang` entre CA/ES/EN.
2. **P2** — Jerarquía de `<h1>` en portadas y Conceptos.
3. **P3** — Mantenibilidad multilingüe.
4. **P5** — Autoalojar la fuente Balto.

Resueltos: R1, R2, R3, R4. Decisión cerrada: D1.

## Límites de esta auditoría

Revisión estática y local. No incluye Lighthouse, pruebas responsive en dispositivos reales, cabeceras de seguridad del servidor, indexación en producción ni envío real de formularios.
