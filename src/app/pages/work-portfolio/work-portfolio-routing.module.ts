import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {WorkPortfolioComponent} from "@app/pages/work-portfolio/work-portfolio.component";

const routes: Routes = [
  {path: 'work_portfolio', component: WorkPortfolioComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkPortfolioRoutingModule {
}
