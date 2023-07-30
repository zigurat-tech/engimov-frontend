import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IndexRoutingModule} from './index-routing.module';
import {IndexComponent} from './index.component';
import {AboutComponent} from "@app/pages/index/components/about/about.component";
import {ContactComponent} from "@app/components/globals/contact/contact.component";
import {LoaderComponent} from "@app/components/shared/loader/loader.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
        FormsModule,
    ],
    exports: [
        AboutComponent,
        ContactComponent,
        LoaderComponent
    ],
})
export class IndexModule {
}
