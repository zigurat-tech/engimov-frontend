import {Injectable} from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() {
  }

  messageUnknownError = 'Hay un problema de conexión con el servidor.' +
    ' Por favor refresque la página y vuelva a intentarlo.'

  tinyAlert() {
    Swal.fire('Hey there!');
  }

  errorNotification(message = this.messageUnknownError, title = 'Error!') {
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
