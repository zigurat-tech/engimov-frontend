import {Component, OnInit} from '@angular/core';
import {HeroService} from "@app/services/hero.service";
import {CartService} from "@app/pages/cart/services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public heroService: HeroService, private cartService: CartService) {
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
      },
      complete: () => {
        console.log('complete')
      }
    })
  }

  ngOnInit(): void {
    this.heroService.set_show_hero(false)
    this.loadCart()
  }
}
