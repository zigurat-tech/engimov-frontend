import {AfterViewInit, Component, OnInit} from '@angular/core';
import {HeroService} from "@app/services/hero.service";
import {TranslateService} from "@ngx-translate/core";
import {LangService} from "@app/services/lang.service";

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
  currentLang = ''

  constructor(public heroService: HeroService, private translateService: TranslateService,
              private langService: LangService) {
    this.currentLang = langService.getStoreLang()
  }

  ngOnInit(): void {
    this.heroService.get_show_hero().subscribe(value => {
      this.show_hero = value
    })
    this.translateService.onLangChange.subscribe(v => {
      this.currentLang = this.langService.getStoreLang()
      this.loadTitleAndSubtitle()
    })

    this.loading = false
    this.heroService.get_image().subscribe(value => {
      this.image = value
    })

    this.loadTitleAndSubtitle()
    this.heroService.get_loading().subscribe(value => {
      this.loading = value
    })
  }

  loadTitleAndSubtitle() {
    this.heroService.get_subtitle().subscribe(value => {
      this.subtitle = value[this.currentLang]
    })
    this.heroService.get_title().subscribe(value => {
      this.title = value[this.currentLang]
    })
  }

  ngAfterViewInit(): void {

  }
}
