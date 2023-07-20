import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InicioRoutingModule} from './inicio-routing.module';
import {InicioComponent} from './inicio.component';
import {AboutComponent} from "@app/components/about/about.component";
import {ContactComponent} from "@app/components/contact/contact.component";
import {LoaderComponent} from "@app/components/shared/loader/loader.component";


@NgModule({
  declarations: [
    InicioComponent,
    AboutComponent,
    ContactComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
  ],
  exports: [
    AboutComponent,
    ContactComponent,
    LoaderComponent,
    InicioComponent,
  ]
})
export class InicioModule {
}
