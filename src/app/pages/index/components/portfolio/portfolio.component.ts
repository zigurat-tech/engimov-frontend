import {AfterViewInit, Component, OnInit, TemplateRef} from '@angular/core';
import {UtilsService} from "@app/services/utils.service";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {Product} from "@app/models/product";
import {Category} from "@app/models/category";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  constructor(private utilsService: UtilsService,
              config: NgbModalConfig,
              private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  listCategories: Category[] = []
  listProducts: Product[] = []
  loading = true
  objectModal: Product = new Product('', '', '', 0,
    '', false, new Category(1, ''))

  ngOnInit(): void {
    this.utilsService.get_products(['index=1']).subscribe((res: any) => {
      res.forEach((p: any) => this.listProducts.push(new Product(p.image, p.name,
        p.description, p.price, p.sku, p.visible, new Category(p.category.id, p.category.name))))
      // this.listProducts = res
      this.loading = false
      console.log(this.listProducts[0])
    })
    this.utilsService.get_products_categories(['index=1']).subscribe(res => {
      // this.listCategories = res
      res.forEach((c: any) => this.listCategories.push(new Category(c.id, c.name)))
      console.log(this.listCategories[0])
    })
  }

  ngAfterViewInit(): void {
  }

  filterProducts(s: string, i: number) {
    let lis = document.querySelectorAll('#portfolio-flters li'),
      products = document.querySelectorAll('.portfolio-item'),
      container = document.querySelector('.portfolio-container')
    lis.forEach(e => e.classList.remove('filter-active'))
    lis[i].classList.add('filter-active')
    if (s === '*') {
      products.forEach((e: any) => {
        e.style = ""
      })
      return
    }
    products.forEach((e: any) => {
      if (!e.classList.contains(s)) {
        e.style = 'display:none'
      } else {
        e.style = ''
      }
    })
  }

  openModal(content: TemplateRef<any>, prod: Product) {
    this.objectModal = prod
    this.modalService.open(content);
  }

  getProduct = (sku: string) => this.listProducts.find(p => p.sku === sku)

  searchProduct = (name: string) => this.listProducts.filter(p => p.name.includes(name))

  removeProduct = (sku: string) => this.listProducts.splice(this.listProducts.indexOf(<Product>this.getProduct(sku)), 1)

}
