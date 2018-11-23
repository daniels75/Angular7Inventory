import {Component, Input} from '@angular/core';

@Component({
  selector: 'price-component',
  template: `
    <div>\${{price}}</div>
  `
})
export class PriceDisplayComponent {
  @Input() price: number;

}

