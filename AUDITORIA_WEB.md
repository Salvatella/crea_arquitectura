# Auditoría global — Watchhouse Clone

Fecha: 19 de agosto de 2026  
Alcance: revisión estática de estructura, enlaces, recursos, formularios, accesibilidad, SEO y JavaScript.  
Estado: no se han realizado modificaciones durante esta auditoría.

## Resumen

La base del sitio está bien planteada como web estática y las tres versiones de idioma están operativas a nivel de estructura. Hay, no obstante, dos incidencias importantes que conviene resolver antes de publicar, además de mejoras de SEO, accesibilidad y mantenimiento.

## 🔴 Errores a corregir antes de publicar

### Formularios con redirección a `127.0.0.1`

Se han detectado 6 formularios con el campo oculto `_next` apuntando a `http://127.0.0.1:5641/...`.

Tras enviar un formulario en producción, la persona visitante sería redirigida a una dirección local inexistente. Afecta a las páginas de Consultoría y Nosotros en catalán, castellano e inglés.

Ejemplos:

- `watchhouse-clone/despacho-arquitectura-barcelona/consultoria/index.html`
- `watchhouse-clone/architecture-studio-barcelona/nosaltres/index.html`

✅ Acción recomendada: sustituir cada valor `_next` por la URL definitiva de producción correspondiente o por una solución de redirección compatible con el proveedor de formularios.

### Enlaces vacíos con `href="#"`

Hay 615 apariciones de `href="#"`. No son 615 fallos independientes: se trata de bloques de plantilla repetidos entre páginas e idiomas.

Incluyen:

- Tarjetas sociales del pie de página.
- Enlaces legales: aviso legal, política de privacidad y cookies.
- Iconos de LinkedIn en las fichas de equipo.

Estos enlaces no llevan a contenido real y, al pulsarlos, desplazan la página al inicio.

✅ Acción recomendada: enlazar a destinos reales. Si una sección no va a existir, eliminar el enlace o convertirlo en un elemento no interactivo. Los enlaces legales deben estar publicados antes del lanzamiento.

## 🟠 Warnings y mejoras recomendadas

### SEO multilingüe incompleto

- 70 de 91 archivos HTML no tienen `meta description`; el grupo principal son las fichas de proyecto.
- 90 páginas no tienen etiqueta `canonical`.
- No se han encontrado etiquetas `hreflang` para relacionar las versiones CA, ES y EN.

Impacto: Google puede entender peor el propósito de cada página y competir entre versiones lingüísticas equivalentes.

✅ Acción recomendada: añadir una descripción única en cada ficha, una URL canónica por página y enlaces `hreflang` entre sus equivalentes en catalán, castellano e inglés.

### Jerarquía de encabezados

- Las tres páginas de inicio no incluyen un `<h1>`.
- Cada página de Conceptos contiene seis `<h1>`.

Esto no afecta al diseño visual, pero reduce la claridad semántica para buscadores y tecnologías de asistencia.

✅ Acción recomendada: mantener un único `<h1>` por página; convertir los demás títulos en `<h2>` o niveles posteriores según la jerarquía.

### Formularios dependientes de JavaScript

Los 6 formularios utilizan `novalidate`, por lo que la comprobación de campos depende del JavaScript compartido.

El comportamiento actual es correcto con JavaScript, pero si este falla, está bloqueado o tarda en cargar, no hay una validación nativa de respaldo.

✅ Acción recomendada: mantener la validación personalizada y añadir también atributos HTML nativos como `required` y `type="email"`.

### Accesibilidad de navegación

24 páginas no contienen un enlace para saltar directamente al contenido principal.

✅ Acción recomendada: incorporar un enlace visualmente oculto al inicio que permita a quien navega con teclado ir a `<main>`.

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

## 📋 Orden de prioridad recomendado

1. 🔴 Sustituir las redirecciones `127.0.0.1` de todos los formularios.
2. 🔴 Resolver o retirar los enlaces `href="#"`, especialmente los legales.
3. 🟠 Completar SEO: descripciones, canónicas y `hreflang`.
4. 🟠 Corregir la jerarquía de `<h1>` y añadir el enlace de salto al contenido.
5. 🟡 Mejorar la mantenibilidad multilingüe y normalizar rutas de recursos.

## Límites de esta auditoría

La revisión ha sido estática y local. No incluye medición de rendimiento con Lighthouse, prueba de diseño responsive en dispositivos reales, encabezados de seguridad del servidor, indexación en producción ni envío real de formularios.
