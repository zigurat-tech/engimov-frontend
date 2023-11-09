import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortfolioComponent} from "@app/components/shared/portfolio/portfolio.component";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    PortfolioComponent
  ],
    imports: [
        CommonModule,
        TranslateModule
    ],
  exports: [
    PortfolioComponent
  ]
})
export class PortfolioModule {
}
