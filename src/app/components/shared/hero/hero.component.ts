import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UtilsService} from "@app/services/utils.service";
import {HeroService} from "@app/services/hero.service";
import {take} from "rxjs";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, AfterViewInit {
  title: string = ''
  subtitle: string = ''
  image: string = ''
  loading: boolean = false
  show_hero = true

  constructor(private utilsService: UtilsService, public heroService: HeroService) {
  }

  dataHero = () => this.utilsService.section_index().subscribe(response => {
    const data = response[0]
    this.title = data.title
    this.subtitle = data.subtitle
    this.image = data.image
    this.loading = true
    console.log(response)
    console.log(data)
  })

  ngOnInit(): void {
    this.heroService.get_show_hero().subscribe(value => {
      this.show_hero = value
    })

    this.loading = false
    this.heroService.get_image().subscribe(value => {
      this.image = value
    })
    this.heroService.get_subtitle().subscribe(value => {
      this.subtitle = value
    })
    this.heroService.get_title().subscribe(value => {
      this.title = value
    })
    this.heroService.get_loading().subscribe(value => {
      this.loading = value
    })
  }

  ngAfterViewInit(): void {

  }
}
