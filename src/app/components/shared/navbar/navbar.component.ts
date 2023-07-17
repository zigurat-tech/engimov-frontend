import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
// import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
// import '../../../../assets/js/main.js'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent  implements AfterViewInit{
  collapsed = true;

  constructor(private elementRef: ElementRef){
  }

  ngAfterViewInit(): void {
    // const script = document.createElement('script');
    // script.src = '../assets/js/main.js';
    // document.body.appendChild(script);
  }
}
