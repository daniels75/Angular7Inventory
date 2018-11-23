import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ProductListComponent} from './products-list/product-list.component';
import {ProductRowComponent} from './product-row/product-row.component';
import {PriceDisplayComponent} from './price-display/price-display.component';
import {ProductImageComponent} from './product-image/product-image.component';
import {ProductDepartmentComponent} from './product-department/product-department.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductRowComponent,
    PriceDisplayComponent,
    ProductImageComponent,
    ProductDepartmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }