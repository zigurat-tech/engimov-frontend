import {Component, OnInit} from '@angular/core';
import {LoadScriptService} from "@app/services/load-script.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'engimov';

  constructor(private loadScriptService: LoadScriptService) {
  }

  ngOnInit(): void {
    this.loadScriptService.loadScript('../assets/js/main.js').then(() => {
      console.log('External script loaded');
    }).catch(() => {
      console.log('External script failed to load');
    });
  }
}
