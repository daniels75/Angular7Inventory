import {Component, Input} from '@angular/core';

@Component({
  selector: 'product-department-component',
  template: `
    <div>{{departments}}</div>
  `
})
export class ProductDepartmentComponent {
  @Input() departments: string[];
}
