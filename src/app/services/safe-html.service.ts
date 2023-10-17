import {Injectable} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class SafeHtmlService {

  constructor(private sanitizer: DomSanitizer) {
  }

  getSafeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html)
  }
}
