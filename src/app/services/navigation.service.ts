import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {JsService} from "@app/services/js.service";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router, public jsService: JsService) {
  }

  navigate(url: string, hash = '') {
    this.router.navigate([url])
      .then(value => {
        document.querySelectorAll('.scrollto')
          .forEach(e => e.classList.remove('active'))
      })
      .then(value => {
        if (hash)
          this.jsService.scrollto(hash)
      })
  }
}
