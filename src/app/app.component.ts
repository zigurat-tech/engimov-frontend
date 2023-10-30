import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {HeroService} from "@app/services/hero.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'engimov';
  loader = false

  constructor(private heroService: HeroService) {
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
  }
}
