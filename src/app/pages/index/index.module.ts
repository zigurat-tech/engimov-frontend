import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IndexRoutingModule} from './index-routing.module';
import {IndexComponent} from './index.component';
import {AboutComponent} from "@app/pages/index/components/about/about.component";
import {ContactComponent} from "@app/components/globals/contact/contact.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxCaptchaModule} from "ngx-captcha";
import {LoaderModule} from "@app/components/shared/loader/loader.module";
import {PortfolioModule} from "@app/components/shared/portfolio/portfolio.module";
import {ToastModule} from "@app/components/shared/toast/toast.module";
import {CarouselComponent} from './components/carousel/carousel.component';
import {NgbCarousel, NgbSlide} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    IndexComponent,
    AboutComponent,
    ContactComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    FormsModule,
    LoaderModule,
    PortfolioModule,
    ToastModule,
    NgbCarousel,
    NgbSlide
  ],
  exports: [
    AboutComponent,
    ContactComponent,
  ],
})
export class IndexModule {
}
