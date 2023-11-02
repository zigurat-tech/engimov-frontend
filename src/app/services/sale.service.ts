import {Injectable} from '@angular/core';
import {Product} from "@app/models/product";
import {Toast} from "@app/components/shared/toast/toast";
import {ToastService} from "@app/components/shared/toast/toast.service";
import {CartService} from "@app/pages/cart/services/cart.service";

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private toastService: ToastService, private cartService: CartService) {
  }

  addCart(prod: Product, span: HTMLSpanElement) {
    prod.waiting = true

    this.cartService.update(prod.sku, Number(span.innerText)).subscribe({
      next: (v) => {
        console.log(v)
        this.toastService.openToast(new Toast('bg-success',
          `<i class="bi bi-cart-plus-fill fs-6 text-success"></i>
          <strong class="mx-1">Carrito de compras!</strong>`,
          `${prod.name} fue añadido al carrito!`))
        prod.waiting = false
        prod.quantity = Number(span.innerText)
      },
      error: err => {
        console.log(err)
      },
      complete: () => {
        console.log('complete')
      }
    })

    // setTimeout(() => {
    //
    // }, 1000)
  }

  decrease(span: HTMLSpanElement) {
    if (span.innerText === '1')
      return
    span.innerText = String(parseInt(span.innerText) - 1)
  }

  increase(span: HTMLSpanElement, stock: number) {
    if (parseInt(span.innerText) === stock)
      return
    span.innerText = String(parseInt(span.innerText) + 1)
  }
}
