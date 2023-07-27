import {Component, OnInit} from '@angular/core';
import {HeroService} from "@app/services/hero.service";
import {UtilsService} from "@app/services/utils.service";

@Component({
  selector: 'app-portfolio-product',
  templateUrl: './portfolio-product.component.html',
  styleUrls: ['./portfolio-product.component.css']
})
export class PortfolioProductComponent implements OnInit {
  constructor(public heroService: HeroService, private utilsService: UtilsService) {
  }

  ngOnInit(): void {
    this.utilsService.section_portfolio().subscribe(response => {
      this.heroService.set_image(response[0].image)
      this.heroService.set_subtitle(response[0].subtitle)
      this.heroService.set_title(response[0].title)
      this.heroService.set_loading(true)
      console.log(response)
    })
  }
}
