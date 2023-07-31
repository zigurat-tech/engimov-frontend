import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PortfolioProductRoutingModule} from './portfolio-product-routing.module';
import {PortfolioProductComponent} from './portfolio-product.component';
import {LoaderModule} from "@app/components/shared/loader/loader.module";
import {PortfolioModule} from "@app/components/shared/portfolio/portfolio.module";

@NgModule({
  declarations: [
    PortfolioProductComponent,
  ],
  imports: [
    CommonModule,
    PortfolioProductRoutingModule,
    LoaderModule,
    PortfolioModule,
  ],
  exports: []
})
export class PortfolioProductModule {
}
