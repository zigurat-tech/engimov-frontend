import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ListGridProductsComponent } from './list-grid-products.component';
import {ToastModule} from "@app/components/shared/toast/toast.module";



@NgModule({
  declarations: [
    ListGridProductsComponent
  ],
  exports: [
    ListGridProductsComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    ToastModule
  ]
})
export class ListGridProductsModule { }
