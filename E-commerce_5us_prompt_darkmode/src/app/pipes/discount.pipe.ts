import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {

  transform(value: number, discountPercentage: number): number {
    // Apply discount percentage to value 
    // to calculate and return discounted price
    return value - (value * discountPercentage / 100);
  }

}
