import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTableProductsComponent } from './list-table-products.component';
import {ToastModule} from "@app/components/shared/toast/toast.module";



@NgModule({
    declarations: [
        ListTableProductsComponent
    ],
    exports: [
        ListTableProductsComponent
    ],
    imports: [
        CommonModule,
        ToastModule
    ]
})
export class ListTableProductsModule { }
