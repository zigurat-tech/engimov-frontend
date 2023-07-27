import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PortfolioProductComponent} from "@app/pages/portfolio-product/portfolio-product.component";

const routes: Routes = [
  {path: 'portfolio_products', component: PortfolioProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioProductRoutingModule {
}
