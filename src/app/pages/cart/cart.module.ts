import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from './cart.component';
import {LoaderModule} from "@app/components/shared/loader/loader.module";
import {FormsModule} from "@angular/forms";
import {CartRoutingModule} from "@app/pages/cart/cart-routing.module";


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    LoaderModule,
    FormsModule
  ]
})
export class CartModule {
}
