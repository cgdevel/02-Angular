# Introducción a ANGULAR
Framework de desarrollo web hecho por GOOGLE. Esta se hace en una sola página (*SPA*) y se hace de forma asincrona, reactiva y casí instantanea. Es exclusivamente para el front.

## Elementos
* ***(Node.Js)[https://nodejs.org/es/]*** - Base para el framework
* ***Instalación del (cliente)[https://angular.io/]***
```
npm i -g @angular/cli
```

## Conceptos nuevos
* ***Typescript***
Es un subconjunto basado en Javascript y EcmaScript. Ayuda a la programación orientada a objetos en proyectos Javascript grandes.
Permite ayudar a tipar los valores de las variables.
OJO! = Aunque TypeScript es compative con Javascript, hay que compilarlo para que quede un archivo *js*

## Comandos básicos
Para crear un nuevo proyecto
```
ng new NombreProyectoNuevo
```

Iniciar un servidor local con instancia de Angular (En equivalente a IIS Express). Se crea sobre el puerto 4200
```
ng serve
npm run serve
```

Creación de un componente de forma automática
```
ng g c NombreComponente
```

Creación de un servicio de forma automática
```
ng g s NombreServicio
```

Re-instalación de los modulos usados en un proyecto
```
npm install
```

Revisión de versiones instaladas
```
ng --vesion
```