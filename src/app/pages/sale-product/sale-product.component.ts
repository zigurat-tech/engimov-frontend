import {Component, OnInit} from '@angular/core';
import {SaleService} from "@app/services/sale.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-sale-product',
  templateUrl: './sale-product.component.html',
  styleUrls: ['./sale-product.component.css']
})
export class SaleProductComponent implements OnInit {

  constructor(public saleService: SaleService, private translateService: TranslateService) {
    this.saleService.updateTranslations()
  }

  ngOnInit(): void {
    this.translateService.onLangChange.subscribe(v =>
      this.saleService.updateTranslations())
  }
}
