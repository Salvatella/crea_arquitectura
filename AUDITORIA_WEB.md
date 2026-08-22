# Auditoría global — Watchhouse Clone

Fecha auditoría original: 19 de agosto de 2026  
Última actualización: 22 de agosto de 2026  
Alcance: revisión estática de estructura, enlaces, recursos, formularios, accesibilidad, SEO y JavaScript.

## Resumen

La base del sitio está bien planteada como web estática y las tres versiones de idioma están operativas a nivel de estructura. **Los dos bloqueantes previos al lanzamiento ya están resueltos.** Quedan pendientes mejoras de SEO, jerarquía de encabezados, validación nativa de formularios y mantenimiento multilingüe.

## ✅ Resuelto desde la auditoría original (verificado 22 ago 2026)

### Formularios con redirección a `127.0.0.1` — RESUELTO

Los 6 formularios ya no apuntan a `http://127.0.0.1:5641/...`. Todos los campos ocultos `_next` usan ahora la URL de producción equivalente, por ejemplo:

- `.../despatx-arquitectura-barcelona/consultoria/#contacte`
- `.../despacho-arquitectura-barcelona/nosaltres/#contacte`
- `.../architecture-studio-barcelona/consultoria/#contacte`

Verificación: `0` apariciones de `127.0.0.1` en HTML.

### Enlaces vacíos con `href="#"` — RESUELTO

`0` apariciones de `href="#"` en todo el sitio. Los enlaces del pie (sociales, legales) y los iconos de equipo apuntan ahora a destinos reales o se han retirado. Las páginas legales (aviso legal, privacidad, cookies) están publicadas en los tres idiomas.

### Enlace de salto al contenido — RESUELTO en la práctica

96 de 100 archivos HTML incluyen el enlace `href="#MainContent"`. Los 4 restantes no son páginas navegables: 3 son fragmentos parciales `_featured-collections.html` y 1 es la raíz `index.html` (redirección). No requieren acción.

## 🟠 Warnings y mejoras recomendadas (pendientes)

### SEO multilingüe incompleto — PARCIAL

Estado a 22 ago 2026 (sobre 100 archivos HTML):

- 70 archivos siguen sin `meta description`. Las páginas principales (inicio, consultoría, nosotros, conceptos, índice de proyectos y legales) sí la tienen; el grupo pendiente son las fichas de proyecto en los tres idiomas y los fragmentos `_featured-collections.html`.
- 90 páginas siguen sin `canonical`. Solo lo incluyen las 9 páginas legales y la raíz `index.html`.
- Siguen sin encontrarse etiquetas `hreflang` para relacionar las versiones CA, ES y EN (0 archivos).

Impacto: Google puede entender peor el propósito de cada página y competir entre versiones lingüísticas equivalentes.

✅ Acción recomendada: añadir una descripción única en cada ficha, una URL canónica por página y enlaces `hreflang` entre sus equivalentes en catalán, castellano e inglés.

### Jerarquía de encabezados — SIN CAMBIOS

- Las tres páginas de inicio siguen sin incluir un `<h1>`.
- Cada página de Conceptos sigue conteniendo seis `<h1>`.

Esto no afecta al diseño visual, pero reduce la claridad semántica para buscadores y tecnologías de asistencia.

✅ Acción recomendada: mantener un único `<h1>` por página; convertir los demás títulos en `<h2>` o niveles posteriores según la jerarquía.

### Formularios dependientes de JavaScript — SIN CAMBIOS (decisión: mantener)

Los 6 formularios (Consultoría y Nosotros en CA/ES/EN) usan `novalidate` y `type="email"` en el campo de correo. Ninguno incluye `required`; toda la validación depende del JavaScript compartido `shared/site.js`.

Reglas de validación en JS: `name` obligatorio (mín. 2 caracteres), `email` obligatorio con patrón, `message` obligatorio, `phone` opcional.

El comportamiento es correcto con JavaScript activo. Si el JS falla, está bloqueado o tarda en cargar, no hay validación nativa de respaldo.

Decisión (22 ago 2026): se mantiene el comportamiento actual, sin añadir `required` ni retirar `novalidate`. La validación seguirá dependiendo de `site.js`.

### Mantenimiento de idiomas

El sitio contiene tres árboles HTML completos: catalán, castellano e inglés. Es válido para un sitio estático, pero cada cambio común debe repetirse en todos los idiomas y existe riesgo de desincronización.

✅ Acción recomendada: documentar una lista de comprobación para cambios globales. A medio plazo, valorar plantillas o generación estática desde contenido común.

### Nombres de rutas con entidades HTML

Algunos recursos usan entidades HTML dentro del nombre de carpeta, por ejemplo `&#192;` o `&#199;`.

El navegador las resuelve, pero ciertas herramientas de auditoría estática pueden interpretarlas como rutas inexistentes.

✅ Acción recomendada: normalizar progresivamente los nombres de recursos con caracteres ASCII o codificación URL coherente.

## 🟢 Comprobaciones correctas

- Los 19 archivos JavaScript pasan la comprobación sintáctica.
- No se han detectado imágenes sin atributo `alt`.
- No hay IDs HTML duplicados dentro de una misma página.
- Todas las páginas incluyen `lang`, `charset` y `viewport`.
- Los enlaces externos con `target="_blank"` usan `rel="noreferrer"`, que incluye la protección equivalente a `noopener`.
- La validación de formularios está centralizada y adapta correctamente los mensajes a catalán, castellano e inglés en `watchhouse-clone/shared/site.js`.

## 📋 Orden de prioridad recomendado (actualizado 22 ago 2026)

Bloqueantes previos (`_next` a `127.0.0.1` y `href="#"`) ya resueltos. Pendiente:

1. 🟠 Completar SEO: `meta description` en las fichas de proyecto, `canonical` por página y `hreflang` entre equivalentes CA/ES/EN.
2. 🟠 Corregir la jerarquía de `<h1>`: añadir un único `<h1>` en las tres portadas; reducir los seis `<h1>` de Conceptos a uno.
3. 🟡 Mejorar la mantenibilidad multilingüe y normalizar rutas de recursos con entidades HTML.
4. 🟡 Valorar autoalojar la fuente Balto (hoy depende del CDN externo `watchhouse.com`).

Nota: la validación nativa de formularios (`required` / retirar `novalidate`) se ha descartado por decisión; se mantiene la validación por JavaScript.

## Límites de esta auditoría

La revisión ha sido estática y local. No incluye medición de rendimiento con Lighthouse, prueba de diseño responsive en dispositivos reales, encabezados de seguridad del servidor, indexación en producción ni envío real de formularios.
