# Platzi Store V2 🤖
Platzi Store es la aplicación que se armará durante el curso de Angular de [Platzi](https://platzi.com/cursos/angular/)

## Componentes principales
* ***src/app/app.component.html*** - El index del proyecto.
* ***src/app/app.module.ts*** - Contenedor donde se indican los módulos que se van a usar en el proyecto.
* ***angular.json*** - Incluye todas las configuraciones y componentes que se le instalen a la aplicación.
* ***app.module*** - Es donde se importan los módulos que va a usar la aplicación (Ej. FormsModule, AppRoutingModule, etc.).

### Equivalencias de códigos
* ***Data binding*** (Ojo: Hay que importar 'FormsModule')
```
[(ngModel)]="title" | v-model="title"
```

* ***Data binding - Equivalencia con Vue***
```
<img [src]="product.image" [alt]="product.title">   | Angular
<img :src="product.image" alt:="product.title">     | Vue
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

### Componentes y Decoradores
Un decorador le indica a Angular que tipo de rol va cumplir, es decir, indica si un componente va a ser un *PIPE*, un *SERVICIO*, o un *COMPONENTE*
```js
/*-------------------------------------------------------------------
 ESTRUCTURA BÁSICA DE UN COMPONENTE
-------------------------------------------------------------------*/

// Librerias necesarias para el componete (using en C#)
import { Component } from '@angular/core';      

// Decorador
@Component({                                
  selector: 'app-product',                  // Así se manda a llamar el coponente dentro de otro módulo
  templateUrl: './product.component.html'   // Parte visual del componente (El archivo *.aspx dentro de asp.net)
})

export class ProductComponent {
}
```

Ojo, los componentes se tienen que importar dentro del ***app.module.ts*** para que puedan ser utilizados.
```js
import { ProductComponent } from './components/product.component';
//...
//...
//...
@NgModule({
  declarations: [
    //...
    //...
    //...
    ProductComponent, // Componente personalizado
  ],
//...
//...
//...
})
```

Dentro de otro módulo, se puede usar el componente creado, usando el valor dado en la valiable ***selector*** dentro del decorador. Ya que se vuelve un elemento html
```html
<app-product></app-product>
```



### Inputs (Propiedades)
Un componente para recibir parametos usa inputs (props en Vue)
```js
export class ProductComponent {
  @Input() product: Product;
}
```

Dentro del componente padre, se hace referencia al input de la siguente forma
```html
export class ProductComponent {
  <app-product [product]="produtoValores"></app-product>
}
```

### Outputs (Eventos)
Para que un componente padre reciba datos desde un componente hijo, se ocupan los eventos. Para eso, se tiene que importar los valores ***Output y EventEmitter***.

Para declarar un output se tendria que hacer lo siguente:
```js
/* Dentro del archivo de la ts */
import { Component, Input, Output, EventEmitter } from '@angular/core'; // Importar los elementso necesarios.
...
...
...

export class ProductComponent {
  ...
  @Output() productClicked: EventEmitter<any> = new EventEmitter();     // Declaración del output
...
  addCart() {                                                           // Método que se dispara al momento de ejecutar un evento
    console.log('Añadir al carrito');
    this.productClicked.emit(this.product.id);                          // Variable que mandá al padre
  }
}

```

Dentro de la parte de la vista se declara de la siguente forma:
```html
<!--<button (evento)="método a ejecutar">Agregar al carrito</button>-->
<button (click)="addCart()">Agregar al carrito</button>
```

Dentro del padre, la ejecución se recibe de la siguente forma:
```js
/* Dentro del archivo de la ts */

export class AppComponent {
  ...
  ...
  ...
  clickProduct(id: number) {                                              // Evento que se ejecutará al momento de disparar el evento dentro del hijo
    console.log('product');
    console.log(id);
  }
}
```

De lado de la vista, se declara de la siguiente forma
```html
<!--<componente (Output declarado)="método a ejecutar($event)">Agregar al carrito</componente>-->
<app-product (productClicked)="clickProduct($event)" [product]="product"></app-product>
```

## Comandos básicos
* Iniciar una instancia de servidor local
```
ng serve              | Inicia servidor sobre localhost:4200
ng serve --port XXXX  | Inicia servidor sobre localhost:XXXX
```

* Compila la aplicación para subirla a un entordo productivo
```
ng build --prod       | Ser crea el compilado sobre la carpeta /dist listo para subir a producción
```

* Crear un elemento de forma autómatica
```
ng g [tipo de elemento | c = Componente | p = pipe | d = directiva | s = servicio | m = módulo | g = guardian] [nombre del elemento]
ng g c cart
```

* Revisa el código para evitar las malas practicas. Por ejemplo, errores de nomenclatura de variables, etc.
```
ng lint
```

## Pipes
Son mascaras que le pueden aplicar a una variable. Equivalente a los ***Filtros*** en ***Vue.js***

Se usan de la siguiente manera:
```html
<!-- 
<h3>{{ Variable | Nombre del Pipe }}</h3>  
-->
<h3>{{ product.title | uppercase }}</h3>
```

## Directivas
Sirven para modificar el dom de un elemento en especifico
```html
<!-- 
<h3 NombreDelHighlight>Bla bla bla</h3>  
-->
<h3 appHighlight>Bla bla bla</h3>  
```

## Ruteo
Es acceder a secciones de la aplicación a traves de rutas. Tal como se hace en Vue.js (global.asax en asp.net)

Las rutas se definen dentro del archivo ***app-routing.module***. La forma de agregar un componente a la tabla de ruteo es la siguiente:

```js
import { ProductComponent } from './components/product.component';

const routes: Routes = [
  /* Ruta "inicial" cuando viene vacio el path (OJO! Este hace una redirección al path que se indique) */
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  /* Instanciación de la ruta */
  {
    path: '/home',
    component: ProductComponent,
  },
  /* Instanciación de la ruta con un parametro */
  {
    path: 'products/:id',
    component: ProductDetailComponent,
  },
  /* Path cuando no se encuentra una ruta. (OJO! Tambien se puede redirección a algun componente, como en el path: '') */
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
```

Para renderizar correctamente los elementos del ruteo, dentro del ***app.component*** se tiene agregar el elemento ***router-outlet***
```html
<router-outlet></router-outlet>
```

Para acceder a las rutas creadas se puede acceder haciendo uso del ***routerLink*** de la siguente manera:
```html
<!-- 
<a  [routerLink]="['/routePath']"   
    routerLinkActive="Clase que se le va aplicar cuando el link este 'activo'"
    > XXXXXX </a>
-->
<nav>
  <a [routerLink]="['/home']" routerLinkActive="active">Inicio</a>
</nav>

<!-- 
<a  [routerLink]="['/routePath', Parámetros]"   
    routerLinkActive="Clase que se le va aplicar cuando el link este 'activo'"
    > XXXXXX </a>
-->
<nav>
  <a [routerLink]="['/products', product.id]">Ver detalle</a>
</nav>
```


## Modulos especiales
Una de las caracterisicas de Angular es la facilidad de modularizar la aplicación en componetes.

Esistes algunos módulos especiales:

* ***core***    - Guarda todos los servicio o componentes que vamos a ocupar en todos los demás modulos (Ej. El servicio de autenticación, ya que solo existe un módulo de autenticación).
* ***shared***  - Guarda los componentes y servicios compartidos.

## Lazy Loading
Es una técnica que permite fragmentar el código para que cargue más rapido.

Un archivo de Javascript, para que sea util para el navegador debe pasar por 4 pasos:
1. Descargar
2. Parsear
3. Compilar
4. Ejecutar

![Pasos de Javascript](https://developers.google.com/web/updates/2018/08/images/web-performance-made-easy/js-processing.png?hl=es)

Las estádisticas dicen que el 77% de sitios tardan 10 segundos en cargar, y lazy loading nos ayuda a reducir este tiempo de descarga.

Para poder utilizar ***Lazy Loading*** es necesario ***modularizar*** la aplicación. Ver la carpeta de HOME para ver la modularización del componente.

***CADA MÓDULO GENERADO DEBE CONTAR CON SU PROPIO ROUTER***

### Shared Module
Es un componente que contiene los elementos que pueden ser compartidos entre los módulos.

### Core Module
Es un componente que tiene elementos que pueden ser usados en otros elementos. 

La diferencia en el ***Shared Module*** y el ***Core Module*** radica en que el ***Shared Module*** tiene que ser importado para poder usar los elementos encapsulados en el, y el ***Core Module***, se "importa" de forma automatica.

Una buena práctica puede ser, todas las cuestiones de artefactos graficos pueden estar en el ***Shared*** y todo lo relacionado a servicios pueden estar en el ***Core***

## Guardianes
Los guardianes nos ayudan a ponerle una capa de seguridad a la aplicación para permitir o negar el acceso a una sección de la aplicación.

Existen 4 tipos de guards que podemos usar:
* ***CanActivate***: Mira si el usuario puede acceder a una página determinada.

* ***CanActivateChild***: Mira si el usuario puede acceder a las páginas hijas de una determinada ruta.

* ***CanDeactivate***: Mira si el usuario puede salir de una página, es decir, podemos hacer que aparezca un mensaje, por ejemplo, de comfirmación, si el usuario tiene cambios sin guardar.

* ***CanLoad***: Sirve para evitar que la aplicación cargue los módulos perezosamente si el usuario no está autorizado a hacerlo.

Para más detalle de los Guardianes, puedes entrar [aquí](https://codingpotions.com/angular-seguridad).

## Material Design
[Material Design](https://material.angular.io/) es el lenguaje de diseño de las interfaces de Google, y como Angular es una implemntación de Google, la instalación se hace de la siguiente manera:

´´´
ng add @angular/material
´´´

