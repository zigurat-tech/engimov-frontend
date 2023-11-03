import {Component, OnInit} from '@angular/core';
import {HeroService} from "@app/services/hero.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public heroService: HeroService) {
  }


  ngOnInit(): void {
    this.heroService.set_show_hero(false)
  }
}
