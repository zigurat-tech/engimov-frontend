import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IndexRoutingModule} from './index-routing.module';
import {IndexComponent} from './index.component';
import {AboutComponent} from "@app/components/about/about.component";
import {ContactComponent} from "@app/components/contact/contact.component";
import {LoaderComponent} from "@app/components/shared/loader/loader.component";
import {ReactiveFormsModule} from "@angular/forms";
import {NgbToast, NgbToastHeader} from "@ng-bootstrap/ng-bootstrap";
import {ToastComponent} from "@app/components/shared/toast/toast.component";
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {NgxCaptchaModule} from "ngx-captcha";

@NgModule({
  declarations: [
    IndexComponent,
    AboutComponent,
    ContactComponent,
    LoaderComponent,
    ToastComponent,
    PortfolioComponent,
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    ReactiveFormsModule,
    NgbToast,
    NgbToastHeader,
    NgxCaptchaModule,
  ],
    exports: [
        AboutComponent,
        ContactComponent,
        LoaderComponent
    ],
})
export class IndexModule {
}
