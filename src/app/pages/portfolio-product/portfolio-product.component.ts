import {AfterViewInit, Component, OnInit} from '@angular/core';
import {HeroService} from "@app/services/hero.service";
import {UtilsService} from "@app/services/utils.service";
import {Category} from "@app/models/category";
import {Product} from "@app/models/product";

@Component({
  selector: 'app-portfolio-product',
  templateUrl: './portfolio-product.component.html',
  styleUrls: ['./portfolio-product.component.css']
})
export class PortfolioProductComponent implements OnInit, AfterViewInit {
  constructor(public heroService: HeroService, private utilsService: UtilsService) {
  }

  listCategories: Category[] = []
  listProducts: Product[] = []
  headerProducts = {
    title: 'Portafolio Productos',
    subtitle: 'Ofrecemos una amplia variedad de productos de alta calidad para satisfacer todas tus necesidades.'
  }
  loading = true

  ngOnInit(): void {
    this.heroService.set_loading(false)
    this.utilsService.section_portfolio().subscribe(response => {
      this.heroService.set_image(response[0].image)
      this.heroService.set_subtitle(response[0].subtitle)
      this.heroService.set_title(response[0].title)
      this.heroService.set_loading(true)
    })
    this.utilsService.get_products().subscribe((res: any) => {
      res.forEach((p: any) => this.listProducts.push(new Product(p.image, p.name,
        p.description, p.price, p.sku, p.visible, new Category(p.category.id, p.category.name))))
    })
    this.utilsService.get_products_categories().subscribe(res => {
      res.forEach((c: any) => this.listCategories.push(new Category(c.id, c.name)))
    })
  }

  ngAfterViewInit(): void {
    this.loading = false
  }
}
