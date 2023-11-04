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

  constructor(private cartService: CartService, private cartStorageService: CartStorageService) {
  }

  loadingCart = true
  productList: Product[] = []

  loadCart(): void {
    //Leer del localStorage
    //if localStorage.get(product_list) -> renderizo el carrito
    //else -> No hay items en el carrito
    //cada vez q añada o haga algo en el carrito-> modificar el localstorage
    this.productList = []
    this.cartService.details().subscribe({
      next: (v) => {
        v.result.product_list.forEach((p: any) => {
          console.log(p)
          this.cartStorageService.productList.push(new Product(p.image, p.name,
            p.description, p.price, p.sku, p.visible, new Category(p.category.id, p.category.name), p.short_description,
            p.stock, p.in_cart))
        })
        this.productList = this.cartStorageService.productList
        this.cartStorageService.loadingCart = false
        this.loadingCart = this.cartStorageService.loadingCart
        console.log(v)
      },
      error: err => {
        console.log(err)
      }
    })
  }

  emptyCart = () => this.cartService.clear().subscribe()

  ngOnInit(): void {
    this.loadCart()
  }
}
