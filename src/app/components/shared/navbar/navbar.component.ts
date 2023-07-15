import {Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  cargarScript() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'assets/js/mi-script.js';
    document.body.appendChild(script);
  }

}
