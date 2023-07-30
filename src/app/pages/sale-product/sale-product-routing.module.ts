import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SaleProductComponent} from "@app/pages/sale-product/sale-product.component";

const routes: Routes = [
  {path: 'sale_products', component: SaleProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleProductRoutingModule {
}
