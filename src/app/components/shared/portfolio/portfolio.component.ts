import {Component, Input, TemplateRef} from '@angular/core';
import {UtilsService} from "@app/services/utils.service";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {Product} from "@app/models/product";
import {Category} from "@app/models/category";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  constructor(private utilsService: UtilsService,
              config: NgbModalConfig,
              private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
    // config.scrollable = true
  }

  @Input() listCategories: Category[] = []
  @Input() listProducts: Product[] = []
  @Input() headerProducts = {title: '', subtitle: ''}
  // loading = true
  objectModal: Product = new Product('', '', '', 0,
    '', false, new Category(1, ''))


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
    this.modalService.open(content,);
  }

  getProduct = (sku: string) => this.listProducts.find(p => p.sku === sku)

  searchProduct = (name: string) => this.listProducts.filter(p => p.name.includes(name))

  removeProduct = (sku: string) => this.listProducts.splice(this.listProducts.indexOf(<Product>this.getProduct(sku)), 1)

}
