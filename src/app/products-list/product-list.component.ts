import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {

  private selectedProduct: Product;
  @Input() products: Product[];
  @Output() onProductSelected: EventEmitter<Product>;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  selectProduct(product: Product): void{
    this.selectedProduct = product;
    console.log('1. Selected product: ',  product);
    this.onProductSelected.emit(product);
  }
}
