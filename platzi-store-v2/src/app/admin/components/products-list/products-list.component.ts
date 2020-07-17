import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product.model';
import { ProductsService } from './../../../core/service/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  productos: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe((p) => {
      console.log(p);
      this.productos = p;
    });
  }

  deleteProduct(index: number, id: string) {
    this.productsService.deleteProduct(id).subscribe((rta) => {
      this.fetchProducts();
    });
  }
}
