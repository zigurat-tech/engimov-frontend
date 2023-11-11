import {Injectable} from '@angular/core';
import {Product} from "@app/models/product";
import {Toast} from "@app/components/shared/toast/toast";
import {ToastService} from "@app/components/shared/toast/toast.service";
import {CartService} from "@app/pages/cart/services/cart.service";
import {CartStorageService} from "@app/pages/cart/services/cart-storage.service";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  item_added = ''
  item_updated = ''
  item_removed = ''
  shopping_cart = ''

  constructor(private toastService: ToastService, private cartService: CartService,
              private cartStorageService: CartStorageService, private translateService: TranslateService) {
    this.updateTranslations()
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

        let messageToast = `${prod.name} ${this.item_added} x(${prod.quantity})`

        if (this.cartStorageService.exists(prod.sku)) {
          this.cartStorageService.update(prod)
          messageToast = `${prod.name} ${this.item_updated} x(${prod.quantity})`
        } else
          this.cartStorageService.add(prod)
        this.cartStorageService.waiting(prod)

        this.toastService.openToast(new Toast('bg-engimov-blue',
          `<i class="bi bi-cart-plus-fill fs-6 text-engimov-blue-dark"></i>
          <strong class="mx-1">${this.shopping_cart}!</strong>`,
          messageToast))
      },
      error: err => {
        prod.waiting = false
      }
    })
  }

  removeCart(prod: Product) {
    prod.waiting = true
    this.cartService.update(prod.sku, 0).subscribe({
      next: (response) => {
        prod.waiting = false
        this.cartStorageService.remove(prod.sku)
        prod.in_cart = false
        this.toastService.openToast(new Toast('bg-engimov-red',
          `<i class="bi bi-trash fs-6 text-danger"></i>
          <strong class="mx-1">${this.shopping_cart}!</strong>`,
          `${prod.name} ${this.item_removed}`))
      },
      error: err => {
        console.log(err)
        prod.waiting = false
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

  updateTranslations() {
    this.translateService.get('cart.item_added').subscribe(v => this.item_added = v)
    this.translateService.get('cart\.item_updated').subscribe(v => this.item_updated = v)
    this.translateService.get('cart\.item_removed').subscribe(v => this.item_removed = v)
    this.translateService.get('cart\.title').subscribe(v => this.shopping_cart = v)
  }
}
