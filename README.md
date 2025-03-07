# English Version. (Web Development 2025) 

Here you will find all the exercises/topics of the class Web Development I, January-June 2025.

### How to start a Vite-TypeScript project?

1. Open the terminal in Visual Studio Code and run ```npm create vite@latest```.
2. You must give a name to the project, for the moment you must write the name with the Kebab Case format. **Example: vite-typescript**.
3. And in the next step, it says to select a Framework, you will choose the **option 1: Vanilla.** 4.
4. Subsequently select the language **TypeScript**.

The project will be created. Once created:

5. Enter the project folder.
6. Install the Node JS modules, run the command ``npm i or npm install``.
7. Finally run the local server, with the command ```npm run dev```.

> [!WARNING]
> It is important to have a Github account to be able to upload files to the repositories.

## Upload changes to Github

1. INIT repository with ```git init```. At each step PRESS the ENTER key after entering a command to save the changes and continue.
2. CHECK with ```git status``` that nothing has been uploaded yet, the red letters indicate files that have not yet been uploaded.
3. ADD the files that we are going to upload to our remote repository with ```git add .``` or you can also upload by file, for example ```git add <file_name>```.
4. CHECK changes again with ```git status``` and now you should see the added files in green.
5. DO a commit with the command ```git commit -m 'Your custom message here'``` which is the message that goes with the files to be uploaded to the repository. 
6. In case you don't have any mail and username associated with you
   - You MUST run the following command ```git config --global user.mail <your-email@example.com>```. In ```<your-email@example.com>``` you must put your school or personal email without the ```<``` and ```>```.
   - Subsequently, run the command ```git config --global user.name <name-in-github>``` and in ```<name-in-github>``` go the name you have registered in Github without the ```<``` and ```>```.
7. Then, type ```git branch -M main``` to upload in the main branch your project.
8. Then type ```git remote add origin <url>``` and enter the url of the repository where the files will be hosted.
9. Now EXECUTE the command ```git push -u origin main``` to host the files to the repository on Github.
10. Check the repository page and verify the uploaded files.

### Short steps without explanation

```
1. git init
2. git status
3. git add . o git add <file_name>
4. git commit -m 'Tu mensaje personalizado aquí'
5. git config --global user.mail <your-email@example.com>
6. git config --global user.name <nombre-en-github>
7. git branch -M main
8. git remote add origin <url>
9. git push -u origin main
```
## Errors that can occur when uploading your files.
```
To https://github.com/user_name/repository_name.git
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/user_name/repository_name.git'
hint: Updates were rejected because the remote contains work that you do not
hint: have locally. This is usually caused by another repository pushing to
hint: the same ref. If you want to integrate the remote changes, use
hint: 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```
### To correct them, you must do the following:
* ```git fetch origin main:tmp```
* ```git rebase tmp```
* ```git push -u origin main```<br>
By executing the above commands, ONE BY ONE, the error should be solved and when you do the **push** (above command) you should get the following message:
```
Enumerating objects: 47, done.
Counting objects: 100% (47/47), done.
Delta compression using up to 12 threads
Compressing objects: 100% (42/42), done.
Writing objects: 100% (46/46), 22.24 KiB | 2.22 MiB/s, done.
Total 46 (delta 9), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (9/9), done.
To https://github.com/nombre_usuario/nombre_repositorio.git
   6011bba..211e63f  main -> main
branch 'main' set up to track 'origin/main'.
```

## Clone a repository

When you create a repository, it exists as a remote repository. You can clone your repository to create a local copy on your computer and synchronize it between the two locations.

### Steps to clone a repository.

1. On the Github site, open the repository you want to clone, and above the list of files is a green button that says ``<<>Code```.
2. You will see the link(url) of your repository, and copy it to the clipboard.
3. Then open the terminal in Git Bash or VSCode.
4. Locate the folder where you want the repository to be cloned.
5. Then enter the following clone command ```git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY```.
6. The entire repository will have been copied.


# Versión en español.

## Desarrollo-Web

Aquí van a ir todos los ejercicios/temas de la clase Desarrollo Web I, enero-junio 2025.

### ¿Cómo iniciar un proyecto en Vite-TypeScript?

1. Abre la terminal en Visual Studio Code y ejecuta ```npm create vite@latest```
2. Debes ponerle un nombre al proyecto, por el momento debes escribir el nombre con el formato Kebab Case. **Ejemplo: vite-typescript**
3. Y en el siguiente paso, dice que seleccionemos un Framework, elegimos la **opción 1: Vanilla.**
4. Posteriormente seleccionamos el lenguaje **TypeScript**

El proyecto se creará. Una vez finalizado:

5. Ingresa a la carpeta del proyecto.
6. Instala los módulos de Node JS, ejecuta el comando ```npm i o npm install```
7. Por último ejecuta el servidor local, con el comando ```npm run dev```

> [!WARNING]
>  Es importante tener una cuenta en Github para poder subir archivos a los repositorios.

## Subir cambios a Github

1. INICIALIZA repositorio con ```git init```. En cada paso PRESIONA la tecla ENTER después de poner algún comando para que se guarden los cambios y se pueda continuar.
2. REVISA con ```git status``` que aún no tenemos nada subido, las letras en color rojo indican que son los archivos que aún no se han subido.
3. AGREGA los archivos que vamos a subir a nuestro repositorio remoto con ```git add .``` o también se puede subir por achivo, por ejemplo ```git add <file_name>```.
4. VUELVE a revisar cambios con ```git status``` y ahora se deben de ver de color verde los archivos agregados.
5. HAZ un commit con el comando ```git commit -m 'Tu mensaje personalizado aquí'``` que es el mensaje que va con los archivos que se van a subir al repositorio. 
6. En caso de que no tengas ningún correo y nombre de usuario asociado
   - DEBES ejecutar el siguiente comando ```git config --global user.mail <your-email@example.com>```. En **```<your-email@example.com>```** Debes colocar tu correo del   instituto o personal sin el ```<``` ni ```>```.
   - Posteriormente, ejecuta el comando ```git config --global user.name <nombre-en-github>``` y en **```<nombre-en-github>```** va el nombre que tienes registrado en Github sin el ```<``` ni ```>```..
7. Luego, escribe ```git branch -M main``` para que se suba en la rama principal tu proyecto.
8. Posteriormente escribe ```git remote add origin <url>``` e ingresamos la url del repositorio a donde se van a alojar los archivos.
9. Ahora EJECUTA el comando ```git push -u origin main``` para alojar los archivos al repositorioe en Github.
10. Revisa el repositorio en la página y verifica los archivos subidos.

### Pasos breves sin explicación
```
1. git init
2. git status
3. git add . o git add <file_name>
4. git commit -m 'Tu mensaje personalizado aquí'
5. git config --global user.mail <your-email@example.com>
6. git config --global user.name <nombre-en-github>
7. git branch -M main
8. git remote add origin <url>
9. git push -u origin main
```
## Errores que pueden ocurrir al querer subir tus archivos.
```
To https://github.com/nombre_usuario/nombre_repositorio.git
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/nombre_usuario/nombre_repositorio.git'
hint: Updates were rejected because the remote contains work that you do not
hint: have locally. This is usually caused by another repository pushing to
hint: the same ref. If you want to integrate the remote changes, use
hint: 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```
### Para corregirlos, debes hacer lo siguiente:
* ```git fetch origin main:tmp```
* ```git rebase tmp```
* ```git push -u origin main```<br>
Al ejecutar los comandos anteriores, UNO POR UNO, debe solucionarse el error y al hacer el **push** (comando anterior) te debe de cargar el siguiente mensaje:
```
Enumerating objects: 47, done.
Counting objects: 100% (47/47), done.
Delta compression using up to 12 threads
Compressing objects: 100% (42/42), done.
Writing objects: 100% (46/46), 22.24 KiB | 2.22 MiB/s, done.
Total 46 (delta 9), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (9/9), done.
To https://github.com/nombre_usuario/nombre_repositorio.git
   6011bba..211e63f  main -> main
branch 'main' set up to track 'origin/main'.
```

## Clonar un repositorio

Al crear un repositorio, existe como un repositorio remoto. Puedes clonar tu repositorio para crear una copia local en tu computadora y sincronizarla entre las dos
ubicaciones.

### Pasos para clonar un repositorio

1. En el sitio de Github, abre el repositorio que deseas clonar, y arriba de la lista de archivos está un botón de color verde que dice ```<>Code```.
2. Te va a aparecer el link(url) de tu repositorio, y lo copias en el portapapeles.
3. Posteriormente abre la terminal en Git Bash o VSCode
4. Ubica la carpeta en la que quieres que se clone el repositorio.
5. Luego ingresas el siguiente comando de clonación ```git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY```
6. Se te habrá copiado todo el repositorio.

