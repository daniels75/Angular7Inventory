import {Product} from '../product.model';
import {Component, Input} from '@angular/core';

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html'
})
export class ProductRowComponent {

  @Input() product: Product;
}
