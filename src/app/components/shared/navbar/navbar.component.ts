import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements AfterViewInit, OnInit {
  collapsed = true;
  current_url = ''

  constructor(private elementRef: ElementRef, private router: Router) {
    this.current_url = router.url
    console.log(this.current_url)
  }

  ngAfterViewInit(): void {

  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.current_url = event.url;
      }
    });
  }
}
