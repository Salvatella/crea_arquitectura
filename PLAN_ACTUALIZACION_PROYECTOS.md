# Plan de actualización de proyectos

## Contexto y fuente de trabajo

Los textos y los recursos recibidos en `Enviament_2`, incluidos los proyectos nuevos, se han reunido dentro de la carpeta de **Enviament 1** en `crea-barcelona/imgs`. Esa ubicación será la fuente operativa para aplicar los cambios al sitio.

Antes de crear una ficha nueva, se comprobará si el proyecto ya existe con otro nombre, en otra categoría o en alguno de los tres idiomas. Una diferencia de nomenclatura no convierte un proyecto en una alta nueva.

Fuentes de prioridad:

1. Comentarios generales del cliente, cuando indiquen una corrección concreta.
2. Textos y fichas técnicas entregados con los proyectos.
3. Contenido actual de la web, solo cuando no haya información nueva.

## Paso 1 — Actualizar fichas existentes con texto

Objetivo: aplicar cambios de contenido y de ficha técnica en los proyectos que ya tienen explicación publicada.

- Comparar el texto actual con el material entregado.
- Conservar lo que sigue siendo válido y sustituir o ampliar únicamente lo que ha cambiado.
- Actualizar, cuando proceda: proyecto y dirección, dirección de obra, colaboradores, ingeniería, cliente, localización y año.
- Cuando no se facilite el nombre del cliente, utilizar `Cliente: Particular`.
- Aplicar la modificación de forma coherente en catalán, castellano e inglés.
- Mantener sin traducir nombres propios, empresas e instituciones.
- Aplicar los comentarios específicos del cliente aunque contradigan una ficha Word; por ejemplo, eliminar el apartado de Interiorismo de Casa Jove Marina.

**Criterio de cierre:** texto, créditos y ficha técnica revisados en las tres versiones; sin cambios de rutas, imágenes o estructura no relacionados.

## Paso 2 — Completar fichas existentes sin explicación y normalizar nombres

Objetivo: incorporar los textos recibidos en proyectos cuya ficha ya existe, pero no tenía explicación real o mostraba Lorem ipsum. No se crearán como proyectos nuevos.

Proyectos identificados para este paso:

- Casa Troana
- Cases AGE
- Cases SH10
- Habitatges AG

Para cada proyecto:

- Sustituir Lorem ipsum o la falta de descripción por el texto entregado.
- Completar los datos técnicos disponibles.
- Normalizar el nombre según la nueva entrega en catalán, castellano e inglés.
- Actualizar el título HTML, `h1`, tarjeta de proyectos, metadatos, enlaces entre idiomas, navegación, etiquetas de galería y textos alternativos que contengan el nombre sustituido.
- Mantener la ruta técnica solo si cambiarla afectaría enlaces existentes; el nombre visible y el SEO deben reflejar la denominación nueva.

**Criterio de cierre:** cada ficha conserva sus enlaces e imágenes y contiene una descripción real en los tres idiomas, sin Lorem ipsum.

## Paso 3 — Identificar y crear únicamente proyectos realmente nuevos

Objetivo: separar las altas reales de los proyectos existentes con un nombre distinto.

**Estado: completado el 28 de agosto de 2026.** Se han creado las veintiuna fichas (siete proyectos en CA/ES/EN), conectado las tarjetas y las colecciones destacadas, y verificado las rutas de imágenes, navegación y selector de idioma.

### Fichas de detalle que se crearán en este paso

- **Habitatges Comerç / Viviendas Comerç**, **Escola Cultura Pràctica**, **Biblioteca Olesa**, **Centre Encuny**, **Rehabilitació CAVALLERS**, **Casa BP** y **Oficines GRAMEPARK** son altas reales. Las siete disponen ahora de ficha de detalle, tarjeta y enlaces CA/ES/EN.

- Inventariar las carpetas y recursos incorporados en `crea-barcelona/imgs/Enviament 1`.
- Cruzar cada proyecto con las fichas existentes y sus equivalencias de nombre en los tres idiomas.
- Registrar cada alta real con: categoría, título en CA/ES/EN, descripción disponible, ficha técnica, imágenes, planos y vídeo.
- Crear para cada alta confirmada sus tres páginas de detalle, tarjeta del índice, enlaces entre idiomas, filtros, metadatos y estilos específicos si hacen falta.
- Comprobar rutas de recursos, galería, navegación y selector de idioma.

**Criterio de cierre:** ningún proyecto existente se duplica; cada proyecto nuevo tiene sus tres versiones enlazadas y todos los recursos cargan correctamente.

## Verificación final

- Revisar que no queden textos de muestra.
- Verificar los nombres visibles y los metadatos de los tres idiomas.
- Comprobar fichas técnicas, clientes y créditos contra la fuente entregada.
- Verificar enlaces, imágenes, planos, vídeos y selector de idioma.
- Actualizar el inventario de proyectos con el resultado de cada paso.

## Paso 4 — Reordenar el menú de navegación

Objetivo: cambiar solamente el orden de los elementos de navegación, conservando exactamente la distribución actual, el `flex`, los estilos, los espaciados y el comportamiento responsive.

**Estado: completado y ajustado el 30 de agosto de 2026.** Management y obra se ha retirado exclusivamente de la navegación principal. Sus filtros, enlaces de pie y las tres páginas temporales se conservan. Consultoría se muestra como Serveis / Servicios / Services, incluidos título y metadatos de su página.

Nuevo orden visual, de izquierda a derecha:

1. Proyectos
2. Nosotros
3. Serveis / Servicios / Services

Se aplicará en las tres versiones lingüísticas y en todas las páginas que comparten la navegación:

- Catalán: `Projectes`, `Nosaltres`, `Serveis`.
- Castellano: `Proyectos`, `Nosotros`, `Servicios`.
- Inglés: `Projects`, `About us`, `Services`.

No se modificarán las clases, contenedores, reglas CSS ni el alineamiento actual.

### Página temporal existente: Management y Obra

Se mantienen las páginas `404 Not Found` de Management y Obra, en catalán, castellano e inglés, accesibles por sus rutas directas pero sin enlace desde el navbar. Seguirán siendo temporales mientras se prepara su contenido definitivo y deberán:

- Mantener la identidad visual, tipografía, cabecera, pie y composición del sitio actual.
- Comunicar claramente que el contenido aún no está disponible.
- Incluir una acción para volver a Proyectos o a la página de inicio.
- Conservar sus enlaces internos y selector de idioma.

### Renombrado de Consultoría

La sección y el enlace actuales de Consultoría se conservarán técnicamente, pero su nombre visible se actualizará en todas las páginas y metadatos relacionados:

- Catalán: `Serveis`.
- Castellano: `Servicios`.
- Inglés: `Services`.

Se revisarán títulos de página, `h1`, navegación, migas de pan si existen, selector de idioma, textos alternativos y metadatos para asegurar que cada versión muestra su denominación correcta.

**Criterio de cierre:** el menú mantiene el mismo aspecto y comportamiento en escritorio y móvil, con el nuevo orden aplicado de forma consistente en todo el sitio.

## Paso 5 — Revisar imágenes nuevas de Enviament_2

Objetivo: comprobar si la entrega incluye imágenes nuevas para proyectos que ya existen y preparar su incorporación sin sustituir ni perder recursos válidos.

- Inventariar las imágenes de cada proyecto en la entrega y compararlas con las ya utilizadas en `crea-barcelona/imgs`.
- Identificar imágenes nuevas, duplicadas y sustituidas.
- Repasar las imágenes ya publicadas de cada proyecto: comprobar proporciones, encuadre, orden y distribución de cada galería; ajustar la composición cuando una imagen panorámica, vertical o de formato singular requiera más espacio.
- Revisar los comentarios generales asociados a imágenes; por ejemplo, las fotografías nuevas de Celler Nou Plus y la reorganización de dos fotos de fachada de Casa La Selva.
- Determinar para cada recurso nuevo su destino: portada, galería, plano, vídeo enlazado o archivo sin publicar.
- Incorporar únicamente las imágenes aprobadas, con rutas válidas, carga diferida y textos alternativos adecuados en los tres idiomas.

**Criterio de cierre:** cada imagen nueva queda clasificada y, cuando se incorpore, se visualiza correctamente sin romper galerías ni duplicar recursos existentes.
