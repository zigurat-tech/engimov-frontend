import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TermsComponent} from "@app/pages/terms/terms.component";

const routes: Routes = [
  {path: 'terms_privacy_police', component: TermsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsRoutingModule {
}
