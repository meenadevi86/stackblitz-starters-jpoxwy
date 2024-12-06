import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts()
      .subscribe(products => {
        this.products = products;
      });
  }

  addToCart(product) {
    // Emit event to update cart
  }

  removeFromCart(product) {
   // Emit event to update cart 
  }

}
