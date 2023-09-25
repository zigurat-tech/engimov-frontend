import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsService {

  constructor() {
  }

  scrollto = (el: any) => {
    let header: any = document.querySelector('#header')!
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = document.querySelector(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }
}
