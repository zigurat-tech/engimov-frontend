import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from './cart.component';
import {LoaderModule} from "@app/components/shared/loader/loader.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CartRoutingModule} from "@app/pages/cart/cart-routing.module";
import {CartViewComponent} from './components/cart-view/cart-view.component';
import {ToastModule} from "@app/components/shared/toast/toast.module";
import {CartItemComponent} from './components/cart-item/cart-item.component';
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    CartComponent,
    CartViewComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    LoaderModule,
    FormsModule,
    ToastModule,
    TranslateModule,
    ReactiveFormsModule
  ]
})
export class CartModule {
}
