import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UtilsService} from "@app/services/utils.service";
import {LoadScriptService} from "@app/services/load-script.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  constructor(private utilsService: UtilsService, private loadScriptService: LoadScriptService) {
  }

  listCategories: any = []
  listProducts: any = []
  loading = true

  ngOnInit(): void {
    this.utilsService.get_products(['index=1']).subscribe((res: any) => {
      this.listProducts = res
      this.loading = false
    })
    this.utilsService.get_products_categories(['index=1']).subscribe(res => {
      this.listCategories = res
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
}
