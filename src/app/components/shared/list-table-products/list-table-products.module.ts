import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTableProductsComponent } from './list-table-products.component';



@NgModule({
    declarations: [
        ListTableProductsComponent
    ],
    exports: [
        ListTableProductsComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ListTableProductsModule { }
