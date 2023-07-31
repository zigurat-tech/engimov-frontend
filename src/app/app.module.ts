import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from "@app/app-routing.module";
import {AppComponent} from "@app/app.component";
import {NavbarComponent} from "@app/components/globals/navbar/navbar.component";
import {FooterComponent} from "@app/components/globals/footer/footer.component";
import {TopBarComponent} from "@app/components/globals/top-bar/top-bar.component";
import {HeroComponent} from "@app/components/shared/hero/hero.component";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {NgOptimizedImage} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {IndexModule} from "@app/pages/index/index.module";
import {PortfolioProductModule} from "@app/pages/portfolio-product/portfolio-product.module";
import {LoaderModule} from "@app/components/shared/loader/loader.module";
import {ToastModule} from "@app/components/shared/toast/toast.module";

export function initApp() {
  return () => {
    return new Promise<void>((resolve, reject) => {
      const script: any = document.createElement('script');
      script.onload = resolve;
      script.onerror = reject;
      script.src = '../assets/js/main.js';
      document.body.appendChild(script);
    });
  };
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TopBarComponent,
    HeroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    NgbDropdownModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    LoaderModule,
    IndexModule,
    PortfolioProductModule,
    ToastModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
