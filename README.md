# SkateTrack

**SkateTrack** es una aplicación móvil especializada para patinadores, creada para ayudar a los usuarios a registrar sus actividades, conectar con otros patinadores y mejorar su rendimiento mediante métricas y retos personalizados. Este proyecto forma parte del curso de **Fundamentos de Ingeniería de Software** y se gestiona bajo metodologías ágiles (SCRUM).

## Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Arquitectura y Tecnologías](#arquitectura-y-tecnologías)
- [Instalación y Uso](#instalación-y-uso)

## Descripción

SkateTrack es una aplicación creada con **React** y **Vite** que se propone revolucionar la forma en la que los patinadores registran y analizan sus actividades. La app ofrece funcionalidades especializadas como:
- Registro en tiempo real de velocidad, distancia y tipo de patinaje.
- Sistema de Kudos que permite a los usuarios reconocer logros de otros.
- Integración con dispositivos wearables (por ejemplo, lectura de datos desde Google Fit).
- Comunidad en línea para compartir experiencias, logros y retos.

## Características

- **Registro de Actividades:** Permite llevar el control de cada sesión de patinaje, con datos en tiempo real y clasificación por tipo de patinaje (urbano, artístico, velocidad).
- **Sistema de Kudos:** Facilita la interacción social permitiendo a los usuarios dar reconocimientos a las actividades de sus compañeros.
- **Conexión con Wearables:** Integración planificada con APIs de Google Fit o similares para la recogida automática de datos biométricos.
- **Comunidad y Perfil de Usuario:** Visualización de logros, un sistema de clubes y funcionalidades para fomentar la interacción entre patinadores.

## Arquitectura y Tecnologías

- **Frontend:** [React](https://reactjs.org/) con la plantilla [Vite](https://vitejs.dev/), que garantiza una alta velocidad de desarrollo y rendimiento en la compilación.
- **Backend e Integraciones:** Se planea desarrollar una API REST para la integración de datos y sincronización con dispositivos wearables.  
- **Base de Datos:** (En construcción) Se buscará implementar un diseño modular y normalizado que soporte el crecimiento del sistema y las necesidades del ecosistema de patinaje.
- **Metodología:** Gestión del proyecto con **SCRUM** utilizando Azure DevOps para el seguimiento de épicas, features y tareas.

## Instalación y Uso

### Prerrequisitos

- [Node.js](https://nodejs.org/) (v14 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

### Pasos para clonar y ejecutar el proyecto

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/tu_usuario/skatetrack.git
   cd skatetrack
