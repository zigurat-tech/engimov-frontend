import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioProductRoutingModule } from './portfolio-product-routing.module';
import { PortfolioProductComponent } from './portfolio-product.component';


@NgModule({
  declarations: [
    PortfolioProductComponent
  ],
  imports: [
    CommonModule,
    PortfolioProductRoutingModule
  ]
})
export class PortfolioProductModule { }
