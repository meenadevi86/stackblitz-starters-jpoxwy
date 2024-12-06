import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    // API call to retrieve list of products
    return this.http.get<any[]>('/api/products'); 
  }

  getProduct(id: number) {
    // API call to get details of single product by ID
    return this.http.get<any>(`/api/products/${id}`);
  }

}
