import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TermsComponent} from './terms.component';
import {LoaderModule} from "@app/components/shared/loader/loader.module";
import {TermsRoutingModule} from "@app/pages/terms/terms-routing.module";


@NgModule({
  declarations: [
    TermsComponent,
  ],
  imports: [
    CommonModule,
    LoaderModule,
    TermsRoutingModule,
  ]
})
export class TermsModule {
}
