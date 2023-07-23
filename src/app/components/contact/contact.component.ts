import {Component, EventEmitter, OnInit} from '@angular/core';
import {UtilsService} from "@app/services/utils.service";
import {EnterpriseService} from "@app/services/enterprise.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
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
  });
  loadingForm = false

  ngOnInit(): void {
    this.contact()
    this.enterpriseService.getData().subscribe(data => {
      this.enterprise_data = data
    });
  }

  constructor(private utilsService: UtilsService, private enterpriseService: EnterpriseService) {
  }

  contact = () => this.utilsService.section_contact().subscribe(response => {
    const data = response[0]
    this.title = data.title
    this.subtitle = data.subtitle
    this.image = data.image
    this.loading = true
    console.log(response)
    console.log(data)
  })

  onSubmit($event: any) {
    this.loadingForm = true
    const formData = this.contactForm.value;
    console.log(formData)
    this.utilsService.create_contact(formData).subscribe({
      next: (v) => {
        console.log(v)
      },
      error: (e) => {
        console.error(e)
        console.log('Ha ocurrido un error en el servidor. Por favor intente de nuevo o corrija sus datos.')
        this.loadingForm = false
      },
      complete: () => {
        console.info('Su mensaje ha sido enviado, por favor espere por nuestra respuesta.')
        this.contactForm.reset()
        this.loadingForm = false
      }
    })
  }
}
