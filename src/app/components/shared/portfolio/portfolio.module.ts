import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortfolioComponent} from "@app/components/shared/portfolio/portfolio.component";


@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PortfolioComponent
  ]
})
export class PortfolioModule {
}
