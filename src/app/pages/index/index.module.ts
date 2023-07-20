import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexRoutingModule} from "@app/pages/index/index-routing.module";
import {InicioModule} from "@app/pages/index/pages/inicio/inicio.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IndexRoutingModule,
    InicioModule,
  ],
  exports:[
    IndexRoutingModule,
    InicioModule,
  ]
})
export class IndexModule {
}
