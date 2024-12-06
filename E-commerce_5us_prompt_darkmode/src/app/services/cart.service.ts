import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  // API to add item to cart
  addToCart(productId: number, quantity: number) {
    // Logic to add product to cart 
  }

  // API to get cart items
  getCartItems() {
    // Logic to retrieve cart items
  }

  // API to update item quantity
  updateCartItemQuantity(productId: number, quantity: number) {
    // Logic to update quantity 
  }

  // API to calculate total price
  calculateTotal() {
    // Logic to calculate total price
  }

  // API to apply discount
  applyDiscount(discountCode: string) {
    // Logic to verify and apply discount
  }

  // API to remove item from cart
  removeFromCart(productId: number) {
    // Logic to remove product  
  }

}
