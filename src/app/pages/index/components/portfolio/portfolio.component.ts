import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UtilsService} from "@app/services/utils.service";
import {LoadScriptService} from "@app/services/load-script.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
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
      console.log(this.listProducts)
      this.loading = false
    })
    this.utilsService.get_products_categories(['index=1']).subscribe(res => {
      this.listCategories = res
      console.log(this.listCategories)
    })
  }

  ngAfterViewInit(): void {
    // this.loadScriptService.loadScript('../assets/vendor/glightbox/js/glightbox.min.js').then(() => {
    //   console.log('External script loaded');
    // }).catch(() => {
    //   console.log('External script failed to load');
    // });
    // this.loadScriptService.loadScript('../assets/vendor/isotope-layout/isotope.pkgd.min.js').then(() => {
    //   console.log('External script loaded');
    // }).catch(() => {
    //   console.log('External script failed to load');
    // });
    // this.loadScriptService.loadScript('../assets/vendor/swiper/swiper-bundle.min.js').then(() => {
    //   console.log('External script loaded');
    // }).catch(() => {
    //   console.log('External script failed to load');
    // });
    // this.loadScriptService.loadScript('../assets/js/main.js').then(() => {
    //   console.log('External script loaded');
    // }).catch(() => {
    //   console.log('External script failed to load');
    // });
  }

}
