import {Component, OnInit} from '@angular/core';
import {HeroService} from "@app/services/hero.service";
import {UtilsService} from "@app/services/utils.service";

@Component({
  selector: 'app-work-with-us',
  templateUrl: './work-with-us.component.html',
  styleUrls: ['./work-with-us.component.css']
})
export class WorkWithUsComponent implements OnInit {
  constructor(private heroService: HeroService, private utilsService: UtilsService) {
  }

  set_hero_data = () => {
    this.heroService.set_loading(false)
    this.utilsService.section_work_with_us().subscribe(response => {
      this.heroService.set_title(response[0].title)
      this.heroService.set_subtitle(response[0].subtitle)
      this.heroService.set_image(response[0].image)
      this.heroService.set_loading(true)
      this.heroService.title = response[0].title
    })
  }

  ngOnInit(): void {
    this.set_hero_data()
  }
}
