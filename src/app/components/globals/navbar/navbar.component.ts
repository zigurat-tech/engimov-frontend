import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {NavigationService} from "@app/services/navigation.service";
import {CartLengthService} from "@app/pages/cart/services/cart-length.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements AfterViewInit, OnInit {
  collapsed = true;
  current_url = ''
  cart_length = 0

  constructor(public router: Router, private navigationService: NavigationService,
              private cartLengthService: CartLengthService) {
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
    const close_dropdown = () => {
      document.querySelector('#navbar')?.classList.toggle('navbar-mobile')
      document.querySelector('.mobile-nav-toggle')?.classList.toggle('bi-list')
      document.querySelector('.mobile-nav-toggle')?.classList.toggle('bi-x')
    }
    /**
     * Navbar links active state on scroll
     */
    try {
      let navbarlinks = document.querySelectorAll('#navbar .scrollto')
      const navbarlinksActive = () => {
        let position = window.scrollY + 200
        navbarlinks.forEach((navbarlink: any) => {
          if (!navbarlink.hash) return
          let section = document.querySelector(navbarlink.hash)
          if (!section) return
          if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            navbarlink.classList.add('active')
          } else {
            navbarlink.classList.remove('active')
          }
        })
      }
      window.addEventListener('load', navbarlinksActive)
      this.onscroll(document, navbarlinksActive)
    } catch (e) {
      console.log(e)
    }
    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el: any) => {
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
    /**
     * Mobile nav toggle
     */
    try {
      document.querySelector('.mobile-nav-toggle')
        ?.addEventListener('click', function (evt) {
          close_dropdown()
        })
    } catch (e) {
      console.log(e)
    }
    /**
     * Mobile nav dropdowns activate
     */
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
     * Scrool with ofset on links with a class name .scrollto
     */
    try {
      document.querySelectorAll('.scrollto').forEach((e: any) =>
        e.addEventListener('click', function (ev: Event) {
          if (e.hash) {
            ev.preventDefault()

            let navbar = document.querySelector('#navbar')!
            if (navbar.classList.contains('navbar-mobile')) {
              navbar.classList.remove('navbar-mobile')
              let navbarToggle = document.querySelector('.mobile-nav-toggle')!
              navbarToggle.classList.toggle('bi-list')
              navbarToggle.classList.toggle('bi-x')
            }
            scrollto(e.hash)
          }
        }))
    } catch (e) {
      console.log(e, 'Scrool with ofset on links with a class name .scrollto')
    }

    //pastillas mias
    this.on('click', '#navbar .dropdown li > a', function (e: any) {
      console.log('se hace el event')
      if (document.querySelector('#navbar')?.classList.contains('navbar-mobile'))
        close_dropdown()
    }, true)
    this.on('click', '#navbar a.nav-link', function (e: any) {
      console.log('se hace el event')
      if (document.querySelector('#navbar')?.classList.contains('navbar-mobile'))
        close_dropdown()
    }, true)

    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
      if (window.location.hash) {
        if (document.querySelector(window.location.hash)) {
          scrollto(window.location.hash)
        }
      }
    });
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.current_url = event.url;
      }
    });
    this.cartLengthService.getCartLength().subscribe(v => this.cart_length = v)
  }

  navigate(url: string, hash = '') {
    this.navigationService.navigate(url, hash)
  }

  protected readonly window = window;
}
