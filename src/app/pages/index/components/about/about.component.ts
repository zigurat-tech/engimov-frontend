import {Component, OnInit} from '@angular/core';
import {UtilsService} from "@app/services/utils.service";
import {TranslateService} from "@ngx-translate/core";
import {LangService} from "@app/services/lang.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title = ''
  subtitle = ''
  image = ''
  loading = false
  currentLang = ''
  data: any

  constructor(private utilsService: UtilsService, private translateService: TranslateService,
              private langService: LangService) {
    this.currentLang = langService.getStoreLang()
  }

  get_about() {
    this.utilsService.section_about().subscribe(response => {
      this.data = response[0]
      this.title = this.data.title[this.currentLang]
      this.subtitle = this.data.subtitle[this.currentLang]
      this.image = this.data.image
      this.loading = true
    })
  }

  ngOnInit(): void {
    this.get_about()
    this.translateService.onLangChange.subscribe(v => {
      this.currentLang = this.langService.getStoreLang()
      this.translateData()
    })
  }

  translateData() {
    this.title = this.data.title[this.currentLang]
    this.subtitle = this.data.subtitle[this.currentLang]
  }
}
