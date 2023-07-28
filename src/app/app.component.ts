import {AfterViewInit, Component, OnInit} from '@angular/core';
import {LoadScriptService} from "@app/services/load-script.service";
import {HeroService} from "@app/services/hero.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'engimov';
  loader = false

  constructor(private loadScriptService: LoadScriptService, private heroService: HeroService) {
  }

  onscroll = (el: any, listener: any) => {
    el.addEventListener('scroll', listener)
  }

  ngOnInit() {
    this.heroService.get_loading().subscribe(value => {
      this.loader = value
    })
  }

  ngAfterViewInit(): void {
    // this.loadScriptService.loadScript('../assets/js/pastilla.js').then(() => {
    //   console.log('External script loaded');
    // }).catch(() => {
    //   console.log('External script failed to load');
    // });
    /**
     * Back to top button
     */
    // let backtotop: any = document.querySelector('.back-to-top')
    // if (backtotop) {
    //   const toggleBacktotop = () => {
    //     if (window.scrollY > 100) {
    //       backtotop.classList.add('active')
    //     } else {
    //       backtotop.classList.remove('active')
    //     }
    //   }
    //   window.addEventListener('load', toggleBacktotop)
    //   this.onscroll(document, toggleBacktotop)
    // }
  }
}
