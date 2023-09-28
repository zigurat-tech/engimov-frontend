import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkPortfolioComponent} from './work-portfolio.component';
import {WorkPortfolioRoutingModule} from "@app/pages/work-portfolio/work-portfolio-routing.module";


@NgModule({
  declarations: [
    WorkPortfolioComponent
  ],
  imports: [
    CommonModule,
    WorkPortfolioRoutingModule,
  ]
})
export class WorkPortfolioModule {
}
