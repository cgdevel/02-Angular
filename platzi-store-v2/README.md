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
