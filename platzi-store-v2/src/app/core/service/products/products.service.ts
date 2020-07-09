import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Cliente para poder usar las peticiones HTTP (Servicios)
import { Product } from './../../../product.model';

import { environment } from '../../../../environments/environment'; // Linkeo al archivo Enviroment

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    private http: HttpClient
  ) {}

  getAllProducts() {
    return this.http.get<Product[]>(`${environment.url_api}`);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${environment.url_api}/${id}`);
  }

  createProduct(product: Product){
    return this.http.post(`${environment.url_api}`, product);
  }
}
