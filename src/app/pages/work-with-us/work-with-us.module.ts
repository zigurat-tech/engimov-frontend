import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WorkWithUsRoutingModule} from './work-with-us-routing.module';
import {WorkWithUsComponent} from './work-with-us.component';
import {NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import {LoaderModule} from "@app/components/shared/loader/loader.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { WorkComponent } from './work/work.component';


@NgModule({
  declarations: [
    WorkWithUsComponent,
    WorkComponent
  ],
  imports: [
    CommonModule,
    WorkWithUsRoutingModule,
    NgbNavModule,
    LoaderModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class WorkWithUsModule {
}
