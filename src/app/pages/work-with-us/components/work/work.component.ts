import {Component, Input} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  @Input() work: any

  constructor(private sanitizer: DomSanitizer) {
  }

  get safeHtmlContent(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.work.description);
  }
}
