import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastService} from "@app/components/shared/toast/toast.service";
import {Toast} from "@app/components/shared/toast/toast";
import {UtilsService} from "@app/services/utils.service";

@Component({
  selector: 'app-contacto-comercial',
  templateUrl: './contacto-comercial.component.html',
  styleUrls: ['./contacto-comercial.component.css']
})
export class ContactoComercialComponent {
  @Input() work: any
  form: FormGroup
  loading = false

  constructor(private fb: FormBuilder, private toastService: ToastService, private utilsService: UtilsService) {
    this.form = this.fb.group({
      job_offer: [''],
      name: ['', [Validators.required, Validators.maxLength(120)]],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', [Validators.maxLength(15)]],
      sector: ['', [Validators.maxLength(200)]],
      business_offer: ['',Validators.required],
      others: ['',],
    })
  }

  onSubmit($event: any) {
    this.loading = true
    this.form.patchValue({job_offer: this.work.id})
    // const formData = this.form.value;
    const formData = new FormData($event.target)
    formData.append('job_offer', this.work.id)
    this.utilsService.create_commercial_job_offer(formData).subscribe({
      next: (v) => {
        this.loading = false
        this.form.reset()
        this.toastService.openToast(new Toast('bg-primary',
          `<i class="bx bxs-message-rounded-check fs-6 text-primary"></i>
              <strong class="mx-1">Solicitud enviada!</strong>`,
          'Su solicitud ha sido enviada, por favor espere por nuestra respuesta.'))
      },
      error: (err) => {
        this.loading = false
        console.log(err)
        const attrs = Object.keys(err.error);
        let message_alert = ''

        if (err.status === 0)
          this.showAlertError('Hay un problema de conexión.')
        if (err.status >= 400 && err.status < 500) {
          for (let i = 0; i < attrs.length; i++) {
            const key = attrs[i];
            const value = err.error[key];
            console.log("Clave: " + key + ", Valor: " + value);
            message_alert += value + '\n'
          }
          this.showAlertError(message_alert)
        }
        if (err.status >= 500)
          this.showAlertError('Hay un error en el servidor. Por favor intente de nuevo más tarde.')
      },
      complete: () => {
        this.loading = false
        this.form.reset()
      }
    })
  }

  showAlertError(message: string) {
    this.toastService.openToast(new Toast('bg-danger',
      `<i class="bx bxs-message-error fs-6 text-danger"></i>
              <strong class="mx-1">Error!</strong>`,
      message))
  }
}
