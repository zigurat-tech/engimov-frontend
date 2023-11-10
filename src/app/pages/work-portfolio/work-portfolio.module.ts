import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkPortfolioComponent} from './work-portfolio.component';
import {WorkPortfolioRoutingModule} from "@app/pages/work-portfolio/work-portfolio-routing.module";
import {WorkCardComponent} from './components/work-card/work-card.component';
import {LoaderModule} from "@app/components/shared/loader/loader.module";
import {FormsModule} from "@angular/forms";
import {NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    WorkPortfolioComponent,
    WorkCardComponent
  ],
    imports: [
        CommonModule,
        WorkPortfolioRoutingModule,
        LoaderModule,
        FormsModule,
        NgbNavModule,
        TranslateModule
    ]
})
export class WorkPortfolioModule {
}
