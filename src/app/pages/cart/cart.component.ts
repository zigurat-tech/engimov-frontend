import {Component, OnInit} from '@angular/core';
import {HeroService} from "@app/services/hero.service";
import {SaleService} from "@app/services/sale.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public heroService: HeroService, public saleService: SaleService,
              private translateService: TranslateService) {
    this.saleService.updateTranslations()
  }


  ngOnInit(): void {
    this.heroService.set_show_hero(false)
    this.translateService.onLangChange.subscribe(v =>
      this.saleService.updateTranslations())
  }
}
