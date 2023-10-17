import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UtilsService} from "@app/services/utils.service";
import {HeroService} from "@app/services/hero.service";
import {SafeHtmlService} from "@app/services/safe-html.service";

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit, AfterViewInit {

  constructor(private utilsService: UtilsService,
              public heroService: HeroService,
              public safeHtmlService: SafeHtmlService) {
  }

  loadingTerms = true
  loadingPolice = true
  dataTerms: any
  dataPrivacy: any

  set_hero_data = () => {
    this.heroService.set_loading(false)
    this.utilsService.section_terms().subscribe(response => {
      this.heroService.set_title(response[0].title)
      this.heroService.set_subtitle(response[0].subtitle)
      this.heroService.set_image(response[0].image)
      this.heroService.set_loading(true)
      this.heroService.title = response[0].title
    })
    this.get_privacy()
    this.get_terms()
  }

  get_year = (date: string) => new Date(date).getFullYear()
  get_month = (date: string) => new Date(date).getMonth() + 1
  get_day = (date: string) => new Date(date).getDate() + 1

  get_terms = () => {
    this.utilsService.get_terms().subscribe(r => {
      this.loadingTerms = false
      console.log(r)
      this.dataTerms = r[0]
    })
  }

  get_privacy = () => {
    this.utilsService.get_privacy_police().subscribe(r => {
      this.loadingPolice = false
      console.log(r)
      this.dataPrivacy = r[0]
    })
  }

  ngOnInit(): void {
    this.set_hero_data()
  }

  ngAfterViewInit(): void {
    // this.loading = false
  }

}
