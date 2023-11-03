import {Component, OnInit} from '@angular/core';
import {CartService} from "@app/pages/cart/services/cart.service";

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  constructor(private cartService: CartService) {
  }

  loadingCart = true

  loadCart(): void {
    this.cartService.details().subscribe({
      next: (v) => {
        this.loadingCart = false
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
