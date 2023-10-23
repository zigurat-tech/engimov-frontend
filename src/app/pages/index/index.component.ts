import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UtilsService} from "@app/services/utils.service";
import {HeroService} from "@app/services/hero.service";
import {Category} from "@app/models/category";
import {Product} from "@app/models/product";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, AfterViewInit {
  constructor(private utilsService: UtilsService, public heroService: HeroService) {
  }

  // listCategories: Category[] = []
  listProducts: Product[] = []
  headerProducts = {title: 'Últimos Productos', subtitle: ''}
  loading = true

  set_hero_data = () => {
    this.heroService.set_loading(false)
    this.utilsService.section_index().subscribe(response => {
      this.heroService.set_title(response[0].title)
      this.heroService.set_subtitle(response[0].subtitle)
      this.heroService.set_image(response[0].image)
      this.heroService.set_loading(true)
      this.heroService.title = response[0].title
    })
  }

  ngOnInit(): void {
    this.set_hero_data()
    this.utilsService.get_products_sale(['index=1']).subscribe((res: any) => {
      res.results.forEach((p: any) => this.listProducts.push(new Product(p.image, p.name,
        p.description, p.price, p.sku, p.visible, new Category(p.category.id, p.category.name), p.short_description)))
    })
    // this.utilsService.get_products_categories(['index=1']).subscribe(res => {
    //   res.forEach((c: any) => this.listCategories.push(new Category(c.id, c.name)))
    // })
  }

  ngAfterViewInit(): void {
    this.loading = false
  }
}
