import {Component, OnInit} from '@angular/core';
import {UtilsService} from "@app/services/utils.service";
import {EnterpriseService} from "@app/services/enterprise.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastService} from "@app/components/shared/toast/toast.service";
import {Toast} from "@app/components/shared/toast/toast";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {AlertService} from "@app/services/alert.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(private utilsService: UtilsService,
              private enterpriseService: EnterpriseService,
              public toastService: ToastService,
              private sanitizer: DomSanitizer,
              private alertService: AlertService,
              private translateService: TranslateService) {
    this.updateTranslations()
  }

  title: string = ''
  subtitle: string = ''
  image: string = ''
  loading: boolean = false
  enterprise_data: any[] = [];

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    email: new FormControl('', [Validators.email, Validators.required]),
    subject: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    text: new FormControl('', [Validators.required,]),
    // recaptcha: new FormControl('', [Validators.required])
  })
  loadingForm = false

  titleAlert = 'Mensaje enviado!'
  successMessageAlert = 'Su mensaje ha sido enviado, por favor espere por nuestra respuesta.'
  errorMessageAlert = 'Por favor verifique sus datos e intente de nuevo.'

  contact = () => this.utilsService.section_contact().subscribe(response => {
    const data = response[0]
    this.title = data.title
    this.subtitle = data.subtitle
    this.image = data.image
    this.loading = true
  })

  onSubmit($event: any) {
    this.loadingForm = true
    const formData = this.contactForm.value;
    this.utilsService.create_contact(formData).subscribe({
      next: (v) => {
        this.toastService.openToast(new Toast('bg-engimov-blue',
          `<i class="bx bxs-message-rounded-check fs-6 text-engimov-blue-dark"></i>
          <strong class="mx-1">${this.titleAlert}</strong>`,
          this.successMessageAlert))
        this.contactForm.reset()
        this.loadingForm = false
      },
      error: (e) => {
        console.error(e)
        if (e.status !== 0) {
          let message = ''
          if (e.status === 400)
            message = this.errorMessageAlert
          this.alertService.errorNotification(message)
        }
        this.loadingForm = false
      }
    })
  }

  ngOnInit(): void {
    this.contactForm.disable()
    this.contact()
    this.enterpriseService.getData().subscribe(data => {
      this.enterprise_data = data
    });
    this.contactForm.enable()
    this.translateService.onLangChange.subscribe(v => this.updateTranslations())
  }

  get safeHtmlContent(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.enterprise_data[0].location);
  }

  updateTranslations() {
    this.translateService.get('section\.contact\.title_alert')
      .subscribe(v => this.titleAlert = v)
    this.translateService.get('section\.contact\.success_message')
      .subscribe(v => this.successMessageAlert = v)
    this.translateService.get('section\.contact\.error_message')
      .subscribe(v => this.errorMessageAlert = v)
  }
}
