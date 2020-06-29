import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product.model';
import { ProductsService } from './../../../core/service/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productos: Product[];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productos = this.productsService.getAllProducts();
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }
}
