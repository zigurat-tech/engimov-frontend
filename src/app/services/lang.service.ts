import {Injectable} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class LangService {

  constructor(private translateService: TranslateService) {
  }

  langs = ['es', 'pt', 'en']

  changeLang(lang: string = 'es') {
    localStorage.setItem('engimov_lang', lang);
    this.translateService.use(lang)
  }

  getStoreLang() {
    if (localStorage.getItem('engimov_lang'))
      return localStorage.getItem('engimov_lang')!
    let browserLang = this.translateService.getBrowserLang()
    console.log(browserLang)
    if (browserLang)
      if (this.langs.some(e => e === browserLang?.toLowerCase())) {
        localStorage.setItem('engimov_lang', browserLang)
        return browserLang
      }
    localStorage.setItem('engimov_lang', 'es')
    return 'es'
  }
}
