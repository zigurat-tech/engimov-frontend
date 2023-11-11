import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  @Input() work: any
  messagesAlert = {
    successMessageAlert: 'Su solicitud ha sido enviada, por favor espere por nuestra respuesta.',
    succesTitleAlert: 'Solicitud enviada!',
    error: 'Error',
    errorMessage500: 'Hay un error en el servidor. Por favor intente de nuevo más tarde o contacte un admin.',
  }


  constructor(private sanitizer: DomSanitizer, private translateService: TranslateService) {
    this.updateTranslations()
  }

  get safeHtmlContent(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.work.description);
  }

  ngOnInit(): void {
    this.translateService.onLangChange.subscribe(v => this.updateTranslations())
  }

  updateTranslations() {
    this.translateService.get('work_with_us\.empleo\.success_message')
      .subscribe(v => this.messagesAlert.successMessageAlert = v)
    this.translateService.get('work_with_us\.empleo\.success_title')
      .subscribe(v => this.messagesAlert.succesTitleAlert = v)
    this.translateService.get('error').subscribe(v => this.messagesAlert.error = v)
    this.translateService.get('work_with_us\.empleo\.error_message500')
      .subscribe(v => this.messagesAlert.errorMessage500 = v)
  }
}
