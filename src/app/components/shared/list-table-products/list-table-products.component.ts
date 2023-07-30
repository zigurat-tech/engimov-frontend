import {Component, Input} from '@angular/core';
import {Product} from "@app/models/product";

@Component({
  selector: 'app-list-table-products',
  templateUrl: './list-table-products.component.html',
  styleUrls: ['./list-table-products.component.css']
})
export class ListTableProductsComponent {
  @Input() listProducts: Product[] = []

}
