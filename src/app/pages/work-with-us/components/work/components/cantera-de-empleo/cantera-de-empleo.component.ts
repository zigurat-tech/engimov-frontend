import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Toast} from "@app/components/shared/toast/toast";
import {ToastService} from "@app/components/shared/toast/toast.service";
import {UtilsService} from "@app/services/utils.service";

@Component({
  selector: 'app-cantera-de-empleo',
  templateUrl: './cantera-de-empleo.component.html',
  styleUrls: ['./cantera-de-empleo.component.css']
})
export class CanteraDeEmpleoComponent {
  @Input() work: any
  form: FormGroup
  loading = false

  constructor(private fb: FormBuilder, private toastService: ToastService, private utilsService: UtilsService) {
    this.form = this.fb.group({
      job_offer: [''],
      name: ['', [Validators.required, Validators.maxLength(120)]],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', [Validators.maxLength(15)]],
      formation: ['', [Validators.maxLength(200)]],
      cv: ['', [Validators.required]],
      experience: ['',],
      skills: ['', Validators.maxLength(250)]
    })
  }

  // name, email, tel, educación,
  // CV, experiencia, habilidades, otros datos.
  onSubmit($event: any) {
    this.loading = true
    this.form.patchValue({job_offer: this.work.id})
    // const formData = this.form.value;
    const formData = new FormData($event.target)
    formData.append('job_offer', this.work.id)
    this.utilsService.create_job_offer_pool(formData).subscribe({
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
        this.toastService.openToast(new Toast('bg-danger',
          `<i class="bx bxs-message-error fs-6 text-danger"></i>
              <strong class="mx-1">Error!</strong>`,
          err.message))
      },
      complete: () => {
        this.loading = false
        this.form.reset()
      }
    })
    // setTimeout(() => {
    //   this.loading = false
    //   this.form.reset()
    //   this.toastService.openToast(new Toast('bg-primary',
    //     `<i class="bx bxs-message-rounded-check fs-6 text-primary"></i>
    //       <strong class="mx-1">Solicitud enviada!</strong>`,
    //     'Su solicitud ha sido enviada, por favor espere por nuestra respuesta.'))
    // }, 1500)
  }
}
