import {Component, Input} from '@angular/core';
import {SaleService} from "@app/services/sale.service";
import {Product} from "@app/models/product";
import {Category} from "@app/models/category";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  constructor(public saleService: SaleService) {
  }

  @Input() prod: Product = new Product('', '', '', 0,
    '', false, new Category(1, ''), '', 1, false)
}
