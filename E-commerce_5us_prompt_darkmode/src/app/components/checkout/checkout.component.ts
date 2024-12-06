import { Component } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  cartItems: CartItem[];

  constructor() {
    // fetch cart items
  }

  submitOrder() {
    // handle form submission
    // call API to place order
    // redirect to confirmation
  }

}
