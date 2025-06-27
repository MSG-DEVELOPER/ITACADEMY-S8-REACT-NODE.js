# ITACADEMY-S7-REACT


# 🎬 MovieZone – React App

## 📄 Descripción

MovieZone es una aplicación web desarrollada en **React** que permite explorar una galería de películas protegida por autenticación. La app gestiona rutas públicas y privadas, haciendo uso de **React Router** y **Firebase Authentication** para garantizar que solo usuarios registrados puedan acceder a determinadas secciones.

El diseño está completamente personalizado con **styled-components**, proporcionando una experiencia visual limpia y moderna.

## 🚀 Aprendizajes

>Creación de rutas privadas y redirección inteligente con **React Router v7.**

>Autenticación de usuarios con **Firebase Authentication.**

>Persistencia de sesión mediante **Redux Toolkit.**

 >Componentes estilizados con **styled-components.**

 >Formularios gestionados con **React Hook Form.**

 >Manejo de operaciones asincrónicas (como llamadas a APIs externas) mediante el *middleware* **Redux Thunk** 

## 💻 Tecnologías Utilizadas


- Vite (dev server rápido)

- React v19.1.0

- TypeScript 5.x

- Redux Toolkit & React Redux

- React Router DOM v7.6.1

- Firebase v11 (Auth)

- React Hook Form

- Styled-components v6

- lucide-react (iconos)

 



## 📋 Requisitos Técnicos

 ✅ Node.js (versión 18 o superior)

✅ npm (versión 9 o superior)

 ✅ Navegador moderno (Chrome, Firefox, Edge...)

 ✅ Editor de código como VSCode (opcional, pero recomendado)

✅ Cuenta en Firebase para obtener credenciales de autenticación (puedes crear una gratis en https://firebase.google.com/)

✅ Claves API de The Movie Database (TMDb) para poder consumir su API de películas y series. Regístrate y obtén tu API Key gratuita.
 > Nota: Las claves de Firebase y TMDb deben configurarse en un archivo .env para que la aplicación funcione correctamente.

 ## 🛠️ Instalación

**1**. Clona este repositorio
```
 https://github.com/MSG-DEVELOPER/ITACADEMY-S7-REACT-API.git
```
**2**. Una vez dentro del directorio del proyecto, instala dependencias con
 ```
 $ npm install
```
**3**.Configura las variables de entorno siguiendo las instrucciones en la sección ⚙️ Configuración de variables de entorno.

**4**. Levanta el servidor usando Vite:
```
$ npm run dev
```

## ⚙️ Configuración de variables de entorno

Para ejecutar este proyecto es necesario configurar las variables de entorno con las claves y credenciales necesarias.

1. Copia el archivo `.env.example` y renómbralo a `.env` en la raíz del proyecto.

2. Reemplaza los valores en `.env` por tus claves reales de Firebase y API Authorization.

3. Guarda los cambios.



## 🤝 Contribuciones
¡Las contribuciones son bienvenidas! Para proponer mejoras:

Haz un fork del repositorio.

Crea una nueva rama con tu mejora:
git checkout -b feature/nueva-funcionalidad

Realiza los cambios y súbelos:
git commit -m "Añadida nueva funcionalidad"
git push origin feature/nueva-funcionalidad

Abre un Pull Request en GitHub.

 ¡Gracias por visitar este proyecto!
