import {Component, OnInit} from '@angular/core';
import {UtilsService} from "@app/services/utils.service";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  list_works: any[] = []
  loading = false

  constructor(private utilsService: UtilsService) {
  }

  get_works() {
    this.utilsService.get_works([]).subscribe(response => {
      this.list_works = response.results
      this.loading = true
    })
  }

  ngOnInit(): void {
    this.get_works()
  }
}
