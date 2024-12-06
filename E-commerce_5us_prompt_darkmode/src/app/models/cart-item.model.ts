/**
 * Interface to represent items added to the shopping cart
 */
export interface CartItem {

  /**
   * Unique ID of the cart item
  */
  id: string;

  /**
   * ID of the product added to cart
   */
  productId: string;
  
  /**
   * Quantity of product added to cart
   */
  quantity: number;

}

