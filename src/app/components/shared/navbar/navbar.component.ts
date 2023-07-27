import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {LoadScriptService} from "@app/services/load-script.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements AfterViewInit, OnInit {
  collapsed = true;
  current_url = ''

  constructor(private elementRef: ElementRef, private router: Router, private loadScriptService: LoadScriptService) {
    this.current_url = router.url
    console.log(this.current_url)
  }

  onscroll = (el: any, listener: any) => {
    el.addEventListener('scroll', listener)
  }
  on = (type: string, el: string, listener: any, all = false) => {
    if (all) {
      document.querySelectorAll(el).forEach(e => e.addEventListener(type, listener))
    } else {
      document.querySelector(el)?.addEventListener(type, listener)
    }
  }

  ngAfterViewInit(): void {
    try {
      let mobile_nav_toggle: any = document.querySelector('.mobile-nav-toggle')
        ?.addEventListener('click', function (evt) {
          document.querySelector('#navbar')?.classList.toggle('navbar-mobile')
          document.querySelector('.mobile-nav-toggle')?.classList.toggle('bi-list')
          document.querySelector('.mobile-nav-toggle')?.classList.toggle('bi-x')
        })
    } catch (e) {
      console.log(e)
    }
    try {
      let dropdowns = document.querySelectorAll('.navbar .dropdown > a')
      dropdowns.forEach(e => e.addEventListener('click', function (ev) {
        if (document.querySelector('#navbar')?.classList.contains('navbar-mobile')) {
          ev.preventDefault()
          e.nextElementSibling?.classList.toggle('dropdown-active')
        }
      }))
    } catch (e) {
      console.log(e)
    }
    /**
     * Header fixed top on scroll
     */
    try {
      let selectHeader: any = document.querySelector('#header')
      if (selectHeader) {
        let headerOffset = selectHeader.offsetTop
        let nextElement = selectHeader.nextElementSibling
        const headerFixed = () => {
          if ((headerOffset - window.scrollY) <= 0) {
            selectHeader.classList.add('fixed-top')
            nextElement.classList.add('scrolled-offset')
          } else {
            selectHeader.classList.remove('fixed-top')
            nextElement.classList.remove('scrolled-offset')
          }
        }
        window.addEventListener('load', headerFixed)
        this.onscroll(document, headerFixed)
      }
    } catch (e) {
      console.log(e)
    }
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.current_url = event.url;
      }
    });
    // this.loadScriptService.loadScript('../assets/js/main.js').then(() => {
    //   console.log('External script loaded');
    // }).catch(() => {
    //   console.log('External script failed to load');
    // });
  }
}
