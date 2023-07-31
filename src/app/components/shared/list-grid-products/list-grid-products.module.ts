import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ListGridProductsComponent } from './list-grid-products.component';



@NgModule({
  declarations: [
    ListGridProductsComponent
  ],
  exports: [
    ListGridProductsComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ]
})
export class ListGridProductsModule { }
