import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IndexRoutingModule} from './index-routing.module';
import {IndexComponent} from './components/index/index.component';
import {AboutComponent} from "@app/components/about/about.component";
import {ContactComponent} from "@app/components/contact/contact.component";
import {LoaderComponent} from "@app/components/shared/loader/loader.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    IndexComponent,
    AboutComponent,
    ContactComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    AboutComponent,
    ContactComponent
  ],
})
export class IndexModule {
}
