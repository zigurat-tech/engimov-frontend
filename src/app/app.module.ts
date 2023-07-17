import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NotificationModule} from "@app/services";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from "@app/app-routing.module";
import {AppComponent} from "@app/app.component";
import {LoaderComponent} from "@app/components/shared/loader/loader.component";
import {NavbarComponent} from "@app/components/shared/navbar/navbar.component";
import {FooterComponent} from "@app/components/shared/footer/footer.component";
import {TopBarComponent} from "@app/components/top-bar/top-bar.component";
import {HeroComponent} from "@app/components/hero/hero.component";
import {AboutComponent} from "@app/components/about/about.component";
import {HttpClientModule} from "@angular/common/http";
import {ContactComponent} from './components/contact/contact.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";

export function initApp() {
  return () => {
    return new Promise<void>((resolve, reject) => {
      const script:any = document.createElement('script');
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
    LoaderComponent,
    NavbarComponent,
    FooterComponent,
    TopBarComponent,
    HeroComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotificationModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    NgbDropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
