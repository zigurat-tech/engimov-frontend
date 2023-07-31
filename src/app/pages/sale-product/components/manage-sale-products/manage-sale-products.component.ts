import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UtilsService} from "@app/services/utils.service";
import {HeroService} from "@app/services/hero.service";
import {Category} from "@app/models/category";
import {Product} from "@app/models/product";

@Component({
  selector: 'app-manage-sale-products',
  templateUrl: './manage-sale-products.component.html',
  styleUrls: ['./manage-sale-products.component.css']
})
export class ManageSaleProductsComponent implements OnInit, AfterViewInit {
  constructor(private utilsService: UtilsService, public heroService: HeroService) {
  }

  listCategories: Category[] = []
  listProducts: Product[] = []
  headerProducts = {
    title: 'Productos en venta',
    subtitle: '"Explora nuestra variedad de productos en venta, desde artículos de alta calidad hasta opciones' +
      ' asequibles. ¡Encuentra lo que necesitas hoy!"'
  }
  loading = true

  set_hero_data = () => {
    this.heroService.set_loading(false)
    this.utilsService.section_sale().subscribe(response => {
      this.heroService.set_title(response[0].title)
      this.heroService.set_subtitle(response[0].subtitle)
      this.heroService.set_image(response[0].image)
      this.heroService.set_loading(true)
      this.heroService.title = response[0].title
    })
  }

  ngOnInit(): void {
    this.set_hero_data()
    this.utilsService.get_products_sale().subscribe((res: any) => {
      res.forEach((p: any) => this.listProducts.push(new Product(p.image, p.name,
        p.description, p.price, p.sku, p.visible, new Category(p.category.id, p.category.name))))
      this.loading = false
    })
    this.utilsService.get_products_categories().subscribe(res => {
      res.forEach((c: any) => this.listCategories.push(new Category(c.id, c.name)))
    })
  }

  ngAfterViewInit(): void {
    this.loading = false
  }
}