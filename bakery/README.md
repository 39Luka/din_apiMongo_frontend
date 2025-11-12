# Panadería 
El proyecto actual trata de una página web para una panadería.

Actualmente se ha desarrollado la primera sección donde aparecen los diferentes productos que ofrece la panadería.


## Justificaciones de accesibilidad, usabilidad y buenas prácticas

### Accesibilidad

- Se ha utilizado una jerarquía semántica adecuada con etiquetas HTML5 como main, section, header, article y figure, etiquetas aria, arialabelledby, tabindex y textos alternativos descriptivos a las imágenes para mejorar la accesibilidad.
  
![Imagen de Card](docs/img/roles_aria_tab_1.png)

![Imagen de Sección](docs/img/roles_aria_tab_2.png)

![Navegación por teclado](docs/img/navegacion_tab.png)

- Se ha añadido un enlace "skip to main content" para facilitar la navegación a usuarios de lectores de pantalla.
  
![Imagen de Skip link](docs/img/skip_to_main_content.png)

![Imagen de Skip link en la web](docs/img/skip_to_main_content_web.png)

- Se ha comprobado que la página puede ser leida por un lector de pantallas con la extensión Read Aloud.
  
![Imagen de Read Aloud](docs/img/read_aloud.png)

### Usabilidad
- Se ha implementado un diseño responsivo para adaptarse a diferentes tamaños de pantalla.
  
![Imagen de diseño responsivo](docs/img/responsive.png)

![Imagen de diseño responsivo en web](docs/img/responsive_web.png)

### Buenas prácticas
- Se ha organizado el proyecto con una estructura Types-Base.
  
![Imagen de estructura de carpetas](docs/img/estructura_proyecto.png)

- Se han desarrollado componentes reutilizables como Card y Sección.
  
[Link a Card](src/components/Card.jsx)

[Link a Sección](src/components/Seccion.jsx)

- Se ha utilizado Tailwind CSS para el diseño, extrayendo los colores y estilos mediante Anima y retocando las clases generadas.
  
[Link a Index](src/assets/styles/index.css)

[Link a Theme](src/assets/styles/theme.css)

- Se ha mantenido un código limpio y bien comentado para facilitar el mantenimiento y la comprensión del proyecto.
  
- Se ha utilizado control de versiones con Git para gestionar los cambios en el proyecto.
  

## Sitios usados
Para la busqueda de imágenes se han utilizado los siguientes sitios:
- pexels.com
- freepik

Para el alojamiento de las imágenes se ha utilizado:
- imgbb.com