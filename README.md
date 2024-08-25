# AUJ App

## Descripción

App de presentación personal para el grupo de trabajo de aplicaciónes móviles de AUJ. Con esta app quería mostrar mis habilidades de desarrollo de aplicaciones móviles, gestión de trabajo, manejo de herramientas principales de diseño y desarrollo (incluído el control de versiónes con Git/GitHub e incorporación de contribuidores al proyecto, trabajo en equípo).

* Pantalla Home: punto de entrada a la aplicación, el usuario puede arrastrar mi foto y al final tiene que tocar el logo de AUJ para seguir adelante
* Pantalla Why AUJ: descripción de los puntos más atractivos de ser parte de AUJ, todo lo que signifíca pertenecer a la comunidad y los grupos de trabajo
* Pantalla Why Me: descripción de mis puntos fuertes como miembro de un equipo y desarrolladora en general
* Pantalla Links: links de interés para saber más sobre mí (LinkedIn, GitHub, CodePen y portafolio)

La aplicación está pensada tanto para iOS como Android.

## Stack Tecnológico

* React Native (Expo framework)
* Native Wind (TailwindCSS para React Native)

Y además:
* Figma
* GitHub
* VSCode
* Xcode
* Android Studio

## Pasos del desarrollo de la app

1. Creación de la base del proyecto. Utilizo el framework Expo que es la manera más recomendada para trabajar con React Native. Añado `--template blank` para tener el mínimo necesario de dependencias para empezar el proyecto.

2. Instalación y configuración de ESLint y Prettier. Son mis herramientas preferidas para debugear y formatear el código.

3. Instalación y configuración de Native Wind - herramienta fácil y atractiva para el manejo de estilos.

4. Se añaden las imágenes del diseño creado en [Figma](https://www.figma.com/design/iPsol109dArZ3jmjV07nnH/auj-app?node-id=0-1&t=UmenwPpIuLONNN1G-0).

5. Instalación y configuración necesaria para usar Poppins (fuente moderna y agradable sans serif) de Google Fonts.

6. Instalación y configuración de Expo Router para el manejo de rutas de la app.

7. Creación de una issue para escribir el fichero CONTRIBUTING.md para definir el proceso de posible contribución al proyecto.

8. Desarrollo de los screens de la app y la barra de navegación por tabs.

9. Se revisa y acepta el PR de una contribuidora para la resolución del punto 7. Se añade el fichero CONTRIBUTING.md al proyecto.

10. Realización de pruebas manuales en iOS (iPhone 15) y Android (Pixel 4 API 35). Solución alternativa para Android: uso de elevation e instalación de paquete de Google Fonts.

11. Se añade la funcionalidad para arrastrar la foto en el Home screen utilizando React Native Gesture Handler.

## Inicio Rápido

Sigue estos pasos para configurar el proyecto localmente en tu máquina.

**Prerrequisitos**

Asegúrate de tener instalados los siguientes programas en tu máquina:

-   [Git](https://git-scm.com/)
-   [Node.js](https://nodejs.org/en)
-   [npm](https://www.npmjs.com/)

**Clonar el Repositorio**

```
git clone https://github.com/katiaku/auj-app
cd calm-mate
```

**Instalación**

Instala las dependencias del proyecto usando npm:

```
npm install
```

**Ejecutar el Proyecto**

```
npx expo start
```

**Expo Go**

Descarga la aplicación [Expo Go](https://expo.dev/go) en tu dispositivo, luego úsala para escanear el código QR desde la Terminal y ejecutar la aplicación.

**Simulador de iOS**

Navega a la [documentación de Expo](https://docs.expo.dev/workflow/ios-simulator/) para aprender cómo instalar y ejecutar tu aplicación en un simulador de iOS para desarrollo local.

**Emulador de Android**

Navega a la [documentación de Expo](https://docs.expo.dev/workflow/android-studio-emulator/) para aprender cómo instalar y ejecutar tu aplicación en un emulador de Android para desarrollo local.
