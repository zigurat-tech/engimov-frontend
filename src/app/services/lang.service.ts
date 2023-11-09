import {Injectable} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class LangService {

  constructor(private translateService: TranslateService) {
  }

  changeLang(lang: string = 'es') {
    localStorage.setItem('engimov_lang', lang);
    this.translateService.use(lang)
  }

  getStoreLang() {
    if (localStorage.getItem('engimov_lang'))
      return localStorage.getItem('engimov_lang')!
    localStorage.setItem('engimov_lang', 'es')
    return 'es'
  }

}
