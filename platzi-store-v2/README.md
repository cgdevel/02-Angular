# Platzi Store V2 🤖
Platzi Store es la aplicación que se armará durante el curso de Angular de [Platzi](https://platzi.com/cursos/angular/)

## Componentes principales
* ***src/app/app.component.html*** - El index del proyecto.
* ***src/app/app.module.ts*** - Contenedor donde se indican los módulos que se van a usar en el proyecto.

### Equivalencias de códigos
* ***Data binding***
```
[(ngModel)]="title" | v-model="title" 
```

* ***String interpolation***. Es usar código javascript dentro del Front. Se usa igual que en Vue.
```
<h1> {{ Codigo Javascript }} </h1>
```

## Conceptos básicos
* Una vista esta divida en los siguientes elementos
```
Componente.component.html - Es el front del componente
Componente.component.ts   - Es el archivo encargado de la logica
Componente.component.scss - Es el archivo encargado del diseño
```
