# Desarrollo-Web

Aquí van a ir todos los ejercicios/temas de la clase Desarrollo Web I, enero-junio 2025.

## ¿Cómo iniciar un proyecto en Vite-TypeScript?

1. Abre la terminal en Visual Studio Code y ejecuta ```npm create vite@latest```
2. Debes ponerle un nombre al proyecto, por el momento debes escribir el nombre con el formato Kebab Case. **Ejemplo: vite-typescript**
3. Y en el siguiente paso, dice que seleccionemos un Framework, elegimos la **opción 1: Vanilla.**
4. Posteriormente seleccionamos el lenguaje **TypeScript**

El proyecto se creará. Una vez finalizado:

5. Ingresa a la carpeta del proyecto.
6. Instala los módulos de Node JS, ejecuta el comando ```npm i o npm install```
7. Por último ejecuta el servidor local, con el comando ```npm run dev```

> **Nota:** Es importante tener una cuenta en Github antes de realizar los siguientes pasos.

## Subir cambios a Github

1. INICIALIZA repositorio con ```git init```. En cada paso PRESIONA la tecla ENTER después de poner algún comando para que se guarden los cambios y se pueda continuar.
2. REVISA con ```git status``` que aún no tenemos nada subido, las letras en color rojo indican que son los archivos que aún no se han subido.
3. AGREGA los archivos que vamos a subir a nuestro repositorio remoto con ```git add .``` o también se puede subir por achivo, por ejemplo ```git add <file_name>```.
4. VUELVE a revisar cambios con ```git status``` y ahora se deben de ver de color verde los archivos agregados.
5. HAZ un commit con el comando ```git commit -m 'Tu mensaje personalizado aquí'``` que es el mensaje que va con los archivos que se van a subir al repositorio. 
6. En caso de que no tengas ningún correo asociado
   - DEBES ejecutar el siguiente comando ```git config --global user.mail <your-email@example.com>```. En **<your-email@example.com>** Debes colocar tu correo del   instituto o personal sin el ```<``` ni ```>```.
   - Posteriormente, ejecuta el comando ```git config --global user.name <nombre-en-github>``` y en **<nombre-en-github>** va el nombre que tienes registrado en Github.
7. Luego, escribe ```git branch -M main``` para que se suba en la rama principal tu proyecto.
8. Posteriormente escribe ```git remote add origin <url>``` ingresamos la url del repositorio a donde se van a alojar los archivos.
9. 

### Pasos breves sin explicación
1. ```git init```
2. ```git status```
3. ```git add .``` o ```git add <file_name>```
4. ```git commit -m 'Tu mensaje personalizado aquí'```
