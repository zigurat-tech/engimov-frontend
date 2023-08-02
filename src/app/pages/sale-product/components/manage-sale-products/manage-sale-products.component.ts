import {AfterViewInit, Component, OnInit, Output, TemplateRef} from '@angular/core';
import {UtilsService} from "@app/services/utils.service";
import {HeroService} from "@app/services/hero.service";
import {Category} from "@app/models/category";
import {Product} from "@app/models/product";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-manage-sale-products',
  templateUrl: './manage-sale-products.component.html',
  styleUrls: ['./manage-sale-products.component.css']
})
export class ManageSaleProductsComponent implements OnInit, AfterViewInit {
  constructor(private utilsService: UtilsService, public heroService: HeroService, config: NgbModalConfig,
              private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  listCategories: Category[] = []
  listProducts: Product[] = []
  headerProducts = {
    title: 'Productos en venta',
    subtitle: 'Explora nuestra variedad de productos en venta, desde artículos de alta calidad hasta opciones' +
      ' asequibles. ¡Encuentra lo que necesitas hoy!'
  }
  loading = true
  objectModal: Product = new Product('', '', '', 0,
    '', false, new Category(1, ''))
  viewMode = 'cards'
  category_filter = -1
  order_by = '-1'

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

  openModal(prod: Product, content: TemplateRef<any>) {
    this.objectModal = prod
    this.modalService.open(content,);
  }

  changeViewMode() {
    localStorage.setItem('view_mode', JSON.stringify(this.viewMode))
  }

  ngOnInit(): void {
    this.set_hero_data()
    if (localStorage.getItem('view_mode'))
      this.viewMode = JSON.parse(localStorage.getItem('view_mode')!)

    this.utilsService.get_products_sale().subscribe((res: any) => {
      res.forEach((p: any) => this.listProducts.push(new Product(p.image, p.name,
        p.description, p.price, p.sku, p.visible, new Category(p.category.id, p.category.name))))
      this.loading = false
    })
    this.utilsService.get_products_sale_categories().subscribe(res => {
      res.forEach((c: any) => this.listCategories.push(new Category(c.id, c.name)))
    })
  }

  ngAfterViewInit(): void {
  }

  filterAndOrder() {
    this.loading = true
    console.log(this.category_filter)
    let query_params = []
    this.listProducts = []
    if (this.category_filter > 0)
      query_params.push(`category=${this.category_filter}`)
    if (this.order_by == 'down' || this.order_by == 'up')
      query_params.push(`price=${this.order_by}`)
    if (this.order_by == 'desc' || this.order_by == 'asc')
      query_params.push(`order=${this.order_by}`)
    this.utilsService.get_products_sale(query_params).subscribe(res => {
      res.forEach((p: any) => this.listProducts.push(new Product(p.image, p.name,
        p.description, p.price, p.sku, p.visible, new Category(p.category.id, p.category.name))))
      this.loading = false
      console.log(this.listProducts)
    })
  }
}
