import {Injectable} from '@angular/core';
import {Product} from "@app/models/product";
import {Toast} from "@app/components/shared/toast/toast";
import {ToastService} from "@app/components/shared/toast/toast.service";
import {CartService} from "@app/pages/cart/services/cart.service";
import {CartStorageService} from "@app/pages/cart/services/cart-storage.service";

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private toastService: ToastService, private cartService: CartService,
              private cartStorageService: CartStorageService) {
  }

  addCart(prod: Product, span: HTMLSpanElement) {
    prod.waiting = true

    this.cartService.update(prod.sku, Number(span.innerText)).subscribe({
      next: (response) => {
        console.log(response)

        let quantity = response.result.product.quantity
        prod.quantity = Number(quantity)
        prod.waiting = false
        prod.in_cart = true

        if (this.cartStorageService.exists(prod.sku))
          this.cartStorageService.update(prod)
        else
          this.cartStorageService.add(prod)
        this.cartStorageService.waiting(prod)

        this.toastService.openToast(new Toast('bg-success',
          `<i class="bi bi-cart-plus-fill fs-6 text-success"></i>
          <strong class="mx-1">Carrito de compras!</strong>`,
          `${prod.name} fue añadido al carrito!`))
        // prod.quantity = Number(span.innerText)
      },
      error: err => {
        console.log(err)
      }
    })
  }

  removeCart(prod: Product) {
    prod.waiting = true
    this.cartService.update(prod.sku, 0).subscribe({
      next: (response) => {
        console.log(response)
        prod.waiting = false
        this.cartStorageService.remove(prod.sku)
        prod.in_cart = false
        this.toastService.openToast(new Toast('bg-info',
          `<i class="bi bi-cart-plus-fill fs-6 text-success"></i>
          <strong class="mx-1">Carrito de compras!</strong>`,
          `${prod.name} fue removido del carrito!`))
      },
      error: err => {
        console.log(err)
      }
    })
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
