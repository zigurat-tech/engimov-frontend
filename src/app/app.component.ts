import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {HeroService} from "@app/services/hero.service";
import {CartService} from "@app/pages/cart/services/cart.service";
import {CartStorageService} from "@app/pages/cart/services/cart-storage.service";
import {Product} from "@app/models/product";
import {Category} from "@app/models/category";
import {environment} from "@src/environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'engimov';
  loader = false
  basicUrl = environment.basic_url

  constructor(private heroService: HeroService, private cartService: CartService,
              private cartStorageService: CartStorageService) {
  }

  onscroll = (el: any, listener: any) => {
    el.addEventListener('scroll', listener)
  }

  ngOnInit() {
    this.heroService.get_loading().subscribe(value => {
      this.loader = value
    })
    this.cartService.details().subscribe({
      next: (response) => {
        console.log(response.result.product_list)
        response.result.product_list.forEach((p: any) => this.cartStorageService.add(new Product(
          this.basicUrl + p.image, p.name,
          p.description, p.price, p.sku, p.visible, new Category(p.category.id, p.category.name), p.short_description,
          p.stock, p.in_cart, p.quantity)))

        console.log(this.cartStorageService.productList)
      },
      error: err => {
        console.log(err)
      }
    })
  }

  ngAfterViewInit(): void {
  }
}
