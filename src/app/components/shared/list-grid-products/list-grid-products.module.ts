import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGridProductsComponent } from './list-grid-products.component';



@NgModule({
  declarations: [
    ListGridProductsComponent
  ],
  exports: [
    ListGridProductsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ListGridProductsModule { }
