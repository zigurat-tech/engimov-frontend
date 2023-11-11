import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TermsComponent} from './terms.component';
import {LoaderModule} from "@app/components/shared/loader/loader.module";
import {TermsRoutingModule} from "@app/pages/terms/terms-routing.module";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    TermsComponent,
  ],
    imports: [
        CommonModule,
        LoaderModule,
        TermsRoutingModule,
        TranslateModule,
    ]
})
export class TermsModule {
}
