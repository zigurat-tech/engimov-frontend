import {Component, OnInit} from '@angular/core';
import {UtilsService} from "@app/services/utils.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  constructor(private utilsService: UtilsService) {
  }

  ngOnInit(): void {
    this.utilsService.get_products().subscribe(res => {
      console.log(res)
    })
    this.utilsService.get_products_categories().subscribe(res => {
      console.log(res)
    })
  }

}
