import {Component, Input} from '@angular/core';
import {ToastService} from "@app/components/shared/toast/toast.service";

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  constructor(public toastService: ToastService) {
  }

  @Input() header: string = '';
  @Input() message: string = '';
  @Input() classes: string = '';

  closeToast = () => this.toastService.showToast = false
}
