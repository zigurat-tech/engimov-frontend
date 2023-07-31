import {Component, Input} from '@angular/core';
import {Product} from "@app/models/product";
import {ToastService} from "@app/components/shared/toast/toast.service";
import {Toast} from "@app/components/shared/toast/toast";

@Component({
  selector: 'app-list-grid-products',
  templateUrl: './list-grid-products.component.html',
  styleUrls: ['./list-grid-products.component.css']
})
export class ListGridProductsComponent {
  @Input() listProducts: Product[] = []

  constructor(private toastService: ToastService) {
  }

  addCart(prod: Product) {
    console.log('evento')
    this.toastService.openToast(new Toast('bg-success',
      `<i class="bx bx-cart-add fs-6 text-success"></i>
          <strong class="mx-1">Mensaje enviado!</strong>`,`${prod.name} fue añadido al carrito!`))
  }
}
