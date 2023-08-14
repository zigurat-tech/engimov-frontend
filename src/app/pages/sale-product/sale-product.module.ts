import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SaleProductRoutingModule} from './sale-product-routing.module';
import {SaleProductComponent} from './sale-product.component';
import {ManageSaleProductsComponent} from './components/manage-sale-products/manage-sale-products.component';
import {LoaderModule} from "@app/components/shared/loader/loader.module";
import {ListGridProductsModule} from "@app/components/shared/list-grid-products/list-grid-products.module";
import {ListTableProductsModule} from "@app/components/shared/list-table-products/list-table-products.module";
import {FormsModule} from "@angular/forms";
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    SaleProductComponent,
    ManageSaleProductsComponent
  ],
    imports: [
        CommonModule,
        SaleProductRoutingModule,
        LoaderModule,
        ListGridProductsModule,
        ListTableProductsModule,
        FormsModule,
        NgbPagination
    ]
})
export class SaleProductModule {
}
