import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WorkWithUsRoutingModule} from './work-with-us-routing.module';
import {WorkWithUsComponent} from './work-with-us.component';
import {NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import {LoaderModule} from "@app/components/shared/loader/loader.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {WorkComponent} from '@app/pages/work-with-us/components/work/work.component';
import { CanteraDeEmpleoComponent } from './components/work/components/cantera-de-empleo/cantera-de-empleo.component';
import { ContactoComercialComponent } from './components/work/components/contacto-comercial/contacto-comercial.component';
import {ToastModule} from "@app/components/shared/toast/toast.module";


@NgModule({
  declarations: [
    WorkWithUsComponent,
    WorkComponent,
    CanteraDeEmpleoComponent,
    ContactoComercialComponent,
  ],
  imports: [
    CommonModule,
    WorkWithUsRoutingModule,
    NgbNavModule,
    LoaderModule,
    ReactiveFormsModule,
    FormsModule,
    ToastModule,
  ]
})
export class WorkWithUsModule {
}
