import {Component, OnInit} from '@angular/core';
import {CartService} from "@app/pages/cart/services/cart.service";
import {Product} from "@app/models/product";

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  constructor(private cartService: CartService) {
  }

  loadingCart = true
  productList: Product[] = []

  loadCart(): void {
    //Leer del localStorage
    //if localStorage.get(product_list) -> renderizo el carrito
    //else -> No hay items en el carrito
    //cada vez q añada o haga algo en el carrito-> modificar el localstorage
    this.cartService.details().subscribe({
      next: (v) => {
        this.loadingCart = false
        v.result.product_list.forEach((p: any) => {
          console.log(p)
        })
        console.log(v)
      },
      error: err => {
        console.log(err)
      }
    })
  }

  ngOnInit(): void {
    this.loadCart()
  }
}
