import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "@app/models/product";
import {SaleService} from "@app/services/sale.service";
import {Category} from "@app/models/category";

@Component({
  selector: 'app-list-grid-products',
  templateUrl: './list-grid-products.component.html',
  styleUrls: ['./list-grid-products.component.css']
})
export class ListGridProductsComponent {
  @Input() listProducts: Product[] = []
  objectModal: Product = new Product('', '', '', 0,
    '', false, new Category(1, ''), '')

  @Output() eventModal = new EventEmitter<Product>();

  constructor(public saleService: SaleService) {
  }

  openModal(prod: Product) {
    this.objectModal = prod
    this.eventModal.emit(this.objectModal);
  }
}
