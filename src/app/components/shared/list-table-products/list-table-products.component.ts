import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "@app/models/product";
import {SaleService} from "@app/services/sale.service";
import {Category} from "@app/models/category";

@Component({
  selector: 'app-list-table-products',
  templateUrl: './list-table-products.component.html',
  styleUrls: ['./list-table-products.component.css']
})
export class ListTableProductsComponent {
  @Input() listProducts: Product[] = []
  @Output() eventModal = new EventEmitter<Product>();
  objectModal: Product = new Product('', '', '', 0,
    '', false, new Category(1, ''), '')

  constructor(public saleService: SaleService) {
  }

  openModal(prod: Product) {
    this.objectModal = prod
    this.eventModal.emit(this.objectModal);
  }

  stopEvent($event: MouseEvent) {
    $event.stopPropagation();
  }
}
