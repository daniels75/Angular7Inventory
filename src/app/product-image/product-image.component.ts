import {Component, HostBinding, Input} from '@angular/core';
import {Product} from '../product.model';


@Component({
  selector: 'product-image',
  template: `
    <img class="product-image" [src]="imageUrl" />
  `
  }
)
export class ProductImageComponent {
  @Input() imageUrl: string;
  @HostBinding('attr.class') cssClass = 'ui small image';
}


