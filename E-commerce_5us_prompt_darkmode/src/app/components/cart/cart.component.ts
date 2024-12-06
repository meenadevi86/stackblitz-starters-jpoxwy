import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getCartItems();
  }

  getCartItems() {
    // Get cart items from CartService
    this.cartService.getCartItems().subscribe(items => {
      // Display cart items
    });
  }

  addToCart(product) {
    // Add product to cart using CartService
    this.cartService.addToCart(product).subscribe(() => {
      this.getCartItems();
    }); 
  }

  removeFromCart(product) {
    // Remove product from cart using CartService 
    this.cartService.removeFromCart(product).subscribe(() => {
      this.getCartItems();
    });
  }

  updateQuantity(product, quantity) {
    // Update product quantity in cart using CartService
    this.cartService.updateCartItemQuantity(product, quantity).subscribe(() => {
      this.getCartItems();  
    });
  }

  applyDiscount(code) {
    // Apply discount code using CartService
    this.cartService.applyDiscount(code).subscribe(() => {
      this.getCartItems();
    });
  }

  getTotal() {
    // Get total cart value from CartService
    return this.cartService.getTotal(); 
  }

  checkout() {
    // Checkout cart using CartService
    this.cartService.checkout().subscribe();
  }

}
