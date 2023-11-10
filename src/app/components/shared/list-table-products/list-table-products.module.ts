import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTableProductsComponent } from './list-table-products.component';
import {ToastModule} from "@app/components/shared/toast/toast.module";
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
    declarations: [
        ListTableProductsComponent
    ],
    exports: [
        ListTableProductsComponent
    ],
    imports: [
        CommonModule,
        ToastModule,
        TranslateModule
    ]
})
export class ListTableProductsModule { }
