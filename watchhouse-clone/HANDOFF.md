# Relevo del proyecto CREA Arquitectura

## Objetivo actual

Completar la versión inglesa del sitio estático sin modificar las versiones catalana ni castellana. El catalán es el idioma por defecto.

## Estructura

```text
watchhouse-clone/
├─ index.html                                  # redirige al catalán por defecto
├─ imgs/                                       # imágenes compartidas
├─ shared/
│  ├─ general-styles.css                        # estilos comunes y footer
│  ├─ site.js
│  └─ styles/
│     ├─ home.css
│     ├─ conceptes.css
│     ├─ consultoria.css
│     ├─ nosaltres.css
│     ├─ projects.css
│     └─ project-detail-base.css
├─ despatx-arquitectura-barcelona/             # catalán
├─ despacho-arquitectura-barcelona/            # castellano
└─ architecture-studio-barcelona/              # inglés
```

En ambos idiomas, la estructura es equivalente:

```text
<idioma>/
├─ index.html
├─ home.js
├─ conceptes/
├─ consultoria/
├─ nosaltres/
└─ projectes | proyectos/
   ├─ index.html
   ├─ projects.js
   ├─ residencial/
   ├─ equipaments | equipamientos/
   ├─ sanitaris | sanitarios/
   └─ oficines-industrial | oficinas-industrial/
```

## Decisiones ya tomadas

- La raíz `watchhouse-clone/index.html` redirige a `despatx-arquitectura-barcelona/`; por tanto el catalán es el idioma inicial.
- La barra de idioma enlaza Català y Castellano con su página equivalente, también en todas las fichas de proyecto.
- English enlaza con su página equivalente desde las tres versiones.
- Los detalles de proyecto son páginas HTML estáticas.
- Cada detalle tiene su CSS propio junto al HTML, dentro de su carpeta de categoría. Los estilos compartidos están en `shared/styles/project-detail-base.css`.
- El fondo del footer usa el fondo general de la web; solo las páginas de detalle usan el color de papel específico.
- `Celler Nou Plus` pertenece a `oficinas-industrial`.
- No traducir automáticamente nombres propios, nombres comerciales, instituciones oficiales, topónimos oficiales ni Lorem ipsum.

## Traducción castellana: estado

### Terminada

- Barra de idiomas y accesibilidad común.
- Textos repetidos de cabecera, pie y newsletter.
- Página de inicio: metadatos, bloques de equipo, cifras, consultoría, conceptos y textos alternativos.
- Página de Consultoría: contenidos, acordeones y formulario.
- Página de Nosotros: presentación, biografías y formulario.
- Página de Conceptos: interfaz, introducciones, carruseles, textos principales y textos alternativos.
- Índice de Proyectos: metadatos, descripción, filtros, estado vacío, categorías y nombres descriptivos de tarjetas.
- Fichas residenciales con contenido real: Casa La Selva, Casa La Quadra, Casa Assutzena, Casa Valldoreix y Reforma Homer.
- Etiquetas técnicas repetidas en todas las fichas: navegación, créditos, accesibilidad, footer y newsletter.

### Verificaciones completadas

- Se han traducido los textos narrativos pendientes de las fichas de equipamientos, sanitarios y oficinas e industrial indicadas en el relevo anterior.
- Las portadas del grid de proyectos castellano vuelven a cargar correctamente.
- Se han corregido las rutas de imágenes de las fichas castellanas afectadas: Aparcamiento Laguna Lanao, Aparcamiento Vall Palau, Escuela Sadako, Oficinas Breda, Oficinas Mèxic y RP Economistes.
- Las referencias de imágenes de todas las fichas de proyectos en castellano han sido comprobadas y apuntan a archivos existentes.
- Se han comprobado visualmente la navegación, filtros, galerías y el cambio Català/Castellano; todo funciona correctamente.

### Traducción castellana completada

Los fragmentos residuales de las fichas residenciales Reforma HOMER y Edificio ARCADI BALAGUER ya se han traducido al castellano, incluidas sus etiquetas de accesibilidad.

## Versión inglesa: estado

### Terminada

- Estructura completa en `architecture-studio-barcelona/`, creada a partir de la versión castellana.
- Selector de idioma funcional en las tres versiones, con enlaces a la página equivalente.
- Interfaz común inglesa: navegación, accesibilidad, pie, newsletter, navegación de proyectos y etiquetas técnicas repetidas.

### Pendiente

- Traducir los contenidos específicos de Inicio, Consultoría, Nosotros, Conceptos, índice de Proyectos y las fichas de proyecto.

### Lorem ipsum

No traducir ni reemplazar el texto de prueba. Las fichas residenciales que lo contienen son:

```text
residencial/cases-age.html
residencial/casa-troana.html
residencial/cases-sh10.html
residencial/habitatges-ag.html
```

## Forma recomendada de continuar

1. Abrir una ficha pendiente y traducir el contenido de `.project-story__lead` y `.project-story__body` al castellano natural.
2. Traducir también los campos factuales que aún estén en catalán (`Client`, `Clients`, etc.), sin tocar personas, empresas ni topónimos oficiales.
3. Revisar los textos alternativos de imágenes de la misma ficha.
4. Mantener rutas, clases CSS, IDs, atributos `data-*` y nombres de archivo sin cambios.
5. Al terminar cada categoría, buscar palabras catalanas restantes con `rg` dentro de esa carpeta y revisar los resultados manualmente.

## Archivos de estilos relevantes

```text
shared/general-styles.css
shared/styles/project-detail-base.css
shared/styles/conceptes.css
despatx-arquitectura-barcelona/projectes/<categoria>/<proyecto>.css
despacho-arquitectura-barcelona/proyectos/<categoria>/<proyecto>.css
```

## Nota sobre cambios anteriores

- `conceptes.css` fue reorganizado con los `@media` al final y sin alterar el diseño.
- En Rehabilitar se eliminó un fondo gris semitransparente no deseado de la zona de imagen.
- El carrusel invertido de Rehabilitar inicia desde el extremo correcto.
