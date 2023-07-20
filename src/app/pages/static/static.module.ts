import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StaticRoutingModule} from './static-routing.module';
import {NotFoundModule} from "@app/pages/static/pages/not-found/not-found.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StaticRoutingModule,
    NotFoundModule,
  ],
  exports: [
    StaticRoutingModule,
    NotFoundModule,
  ]
})
export class StaticModule {
}
