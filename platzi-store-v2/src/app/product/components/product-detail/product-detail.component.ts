import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from './../../../core/service/products/products.service';
import { Product } from './../../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      console.log(id);
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id).subscribe((p) => {
      console.log(p);
      this.product = p;
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: '333',
      title: 'Nuevo desde Angular',
      image: 'assets/images/hoodie.png',
      description: 'Nuevo producto POST desde Angular',
      price: 3000,
    };

    this.productsService
      .createProduct(newProduct)
      .subscribe((product) => console.log(product));
  }
}
