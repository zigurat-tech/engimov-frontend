import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from "@app/app-routing.module";
import {AppComponent} from "@app/app.component";
import {NavbarComponent} from "@app/components/shared/navbar/navbar.component";
import {FooterComponent} from "@app/components/shared/footer/footer.component";
import {TopBarComponent} from "@app/components/top-bar/top-bar.component";
import {HeroComponent} from "@app/components/hero/hero.component";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {NgOptimizedImage} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {IndexModule} from "@app/pages/index/index.module";
// import {LoaderComponent} from "@app/components/shared/loader/loader.component";

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
    // LoaderComponent,
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
    IndexModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
