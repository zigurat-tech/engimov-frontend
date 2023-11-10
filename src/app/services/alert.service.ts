import {Injectable} from '@angular/core';
import Swal from 'sweetalert2';
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  messageUnknownError = ''
  titleError = 'Error!'

  constructor(translateService: TranslateService) {
    translateService.get('conexion_error')
      .subscribe(v => this.messageUnknownError = v)
    translateService.get('error').subscribe(v => this.titleError = v)
  }

  tinyAlert() {
    Swal.fire('Hey there!');
  }

  errorNotification(message = this.messageUnknownError, title = this.titleError) {
    Swal.fire(title, message, 'error');
  }

  alertConfirmation(message: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Removed!', 'Product removed successfully.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Product still in our database.)', 'error');
      }
    });
  }
}
