# Bakery++ 🥐
Una aplicación web moderna y funcional para una panadería artesanal, diseñada con un enfoque en la accesibilidad y la mantenibilidad.

---

## 🚀 Despliegue y Acceso

El proyecto ha sido distribuido en múltiples entornos para asegurar su disponibilidad en diferentes plataformas:

- **API Backend**: Desplegada en **Render**. Es el núcleo de la aplicación, gestionando la base de datos MongoDB y las peticiones de los clientes.
- **Frontend Web**: Alojado en **Vercel**. Permite el acceso inmediato a la aplicación desde cualquier navegador moderno.
- **App de Escritorio**: Empaquetada con **Electron**. El ejecutable `.exe` resultante permite el uso de la aplicación como una herramienta nativa del sistema.

### 🛠️ Configuración de Entornos
Se ha implementado una gestión robusta de **variables de entorno** (`.env`). Esto permite que la aplicación detecte automáticamente si se encuentra en un entorno de desarrollo o de producción, ajustando las URLs de conexión a la API de forma transparente para el usuario final.

---

## 🖥️ Web vs Escritorio: Reflexión Técnica

### ¿Qué ventajas tiene el despliegue web frente al de escritorio?
El despliegue web ofrece una **accesibilidad inmediata**, ya que no requiere procesos de descarga ni instalación por parte del usuario. Además, garantiza que todos los usuarios utilicen siempre la **versión más actualizada**, eliminando la necesidad de gestionar parches o actualizaciones manuales. Desde el punto de vista del desarrollo, permite un soporte **multiplataforma real** con un único despliegue.

### ¿Por qué Electron no sustituye a una web?
Aunque Electron permite convertir una web en una app nativa, conlleva un mayor **consumo de recursos del sistema** (memoria RAM y almacenamiento en disco) debido a que incluye una instancia motorizada de Chromium. Su uso se justifica principalmente cuando la aplicación requiere **capacidades que están restringidas en el navegador**, como el acceso directo al sistema de archivos local, integración con hardware específico o notificaciones nativas avanzadas gestionadas por el sistema operativo.

---

## 🎨 Arquitectura y Calidad Técnica (RA 5 & RA 7)

Para asegurar la escalabilidad del proyecto, se han aplicado patrones de diseño que van más allá de una implementación básica:

- **Arquitectura de Servicios Centralizada**: Se ha creado un `apiClient.js` mediante Axios que centraliza la configuración de la API y gestiona automáticamente la inyección del token JWT en las cabeceras de las peticiones protegidas.
- **Abstracción con Hooks Genéricos**: La lógica de los formularios y la gestión de archivos se ha unificado en un hook reutilizable `useForm.js`. Esto reduce la duplicación de código y asegura un comportamiento consistente en Login, Registro y Administración.
- **Optimización de Rendimiento (Code Splitting)**: Se utiliza `React.lazy` y `Suspense` para dividir el código en fragmentos. Esto permite que el navegador solo descargue el código de la página que el usuario está visitando en ese momento.
- **Resiliencia de la Interfaz**: La implementación de un `ErrorBoundary` global evita que un fallo inesperado en un componente provoque el cierre total de la aplicación, ofreciendo siempre una salida segura y amigable al usuario.
- **Estandarización Estética (BEM)**: Todo el sistema de estilos se rige por la metodología BEM, facilitando la lectura del CSS y evitando conflictos de nombres entre diferentes componentes.

---

## ♿ Accesibilidad, Usabilidad y Mejores Prácticas

### Accesibilidad (A11y)
- **HTML Semántico**: Uso estructurado de etiquetas como `<main>`, `<section>`, `<header>`, `<article>` y `<figure>`.
- **ARIA y Landmarks**: Implementación de atributos ARIA para facilitar la navegación con lectores de pantalla.
- **Navegación por Teclado**: La aplicación es totalmente operable mediante teclado, incluyendo un enlace de "Saltar al contenido principal".
![Vista de la App](docs/images/app-home.png)

### Usabilidad (UX/UI)
- **Diseño Responsivo**: Adaptación fluida a diferentes resoluciones bajo un enfoque "mobile-first".
- **Navegación Intuitiva**: Estructura de menús y acciones clara para minimizar la curva de aprendizaje.

---

## 📦 Primeros Pasos

### Instalación
```bash
npm install
```

### Ejecución en Desarrollo
```bash
# Para la versión Web
npm run dev

# Para la versión de Escritorio (Electron)
npm run electron-dev
```

## Créditos
- **Recursos Visuales**: [Pexels](https://pexels.com) y [Freepik](https://freepik.com).
- **Alojamiento de Imágenes**: [ImgBB](https://imgbb.com).