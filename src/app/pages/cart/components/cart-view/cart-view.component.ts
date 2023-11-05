import {Component, OnInit} from '@angular/core';
import {CartService} from "@app/pages/cart/services/cart.service";
import {Product} from "@app/models/product";
import {CartStorageService} from "@app/pages/cart/services/cart-storage.service";
import {Category} from "@app/models/category";

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  constructor(private cartService: CartService, public cartStorageService: CartStorageService) {
  }

  loadCart(): void {

    if (!this.cartStorageService.productList.length)
      this.cartService.details().subscribe({
        next: (v) => {
          v.result.product_list.forEach((p: any) => {
            console.log(p)
            this.cartStorageService.add(new Product(p.image, p.name,
              p.description, p.price, p.sku, p.visible, new Category(p.category.id, p.category.name),
              p.short_description, p.stock, p.in_cart))
          })
          this.cartStorageService.loadingCart = false
          console.log(v)
        },
        error: err => {
          console.log(err)
        }
      })
    else
      this.cartStorageService.loadingCart = false
  }

  emptyCart = () => this.cartService.clear().subscribe({
    next: value => {
      this.cartStorageService.productList = []
    },
    error: err => {
      console.log(err)
    }
  })

  ngOnInit(): void {
    this.loadCart()
  }
}
