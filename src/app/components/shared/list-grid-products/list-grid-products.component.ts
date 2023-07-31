import {Component, Input} from '@angular/core';
import {Product} from "@app/models/product";
import {SaleService} from "@app/services/sale.service";

@Component({
  selector: 'app-list-grid-products',
  templateUrl: './list-grid-products.component.html',
  styleUrls: ['./list-grid-products.component.css']
})
export class ListGridProductsComponent {
  @Input() listProducts: Product[] = []

  constructor(public saleService: SaleService) {
  }
}
