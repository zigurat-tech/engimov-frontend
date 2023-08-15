import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkWithUsRoutingModule } from './work-with-us-routing.module';
import { WorkWithUsComponent } from './work-with-us.component';


@NgModule({
  declarations: [
    WorkWithUsComponent
  ],
  imports: [
    CommonModule,
    WorkWithUsRoutingModule
  ]
})
export class WorkWithUsModule { }
