import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IndexRoutingModule} from './index-routing.module';
import {IndexComponent} from './index.component';
import {AboutComponent} from "@app/pages/index/components/about/about.component";
import {ContactComponent} from "@app/components/globals/contact/contact.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbToast, NgbToastHeader} from "@ng-bootstrap/ng-bootstrap";
import {ToastComponent} from "@app/components/shared/toast/toast.component";
import {NgxCaptchaModule} from "ngx-captcha";
import {LoaderModule} from "@app/components/shared/loader/loader.module";
import {PortfolioModule} from "@app/components/shared/portfolio/portfolio.module";


@NgModule({
  declarations: [
    IndexComponent,
    AboutComponent,
    ContactComponent,
    ToastComponent,
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    ReactiveFormsModule,
    NgbToast,
    NgbToastHeader,
    NgxCaptchaModule,
    FormsModule,
    LoaderModule,
    PortfolioModule
  ],
  exports: [
    AboutComponent,
    ContactComponent,
  ],
})
export class IndexModule {
}
