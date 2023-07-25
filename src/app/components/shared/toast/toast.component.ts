import {Component, OnDestroy} from '@angular/core';
import {ToastService} from "@app/components/shared/toast/toast.service";

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnDestroy {
  constructor(public toastService: ToastService) {
  }

  ngOnDestroy(): void {
    this.toastService.clear()
  }
}
