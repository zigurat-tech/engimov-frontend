import {Injectable} from '@angular/core';
import {Toast} from "@app/components/shared/toast/toast";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() {
  }

  listToast: Toast[] = []

  openToast = (toast: Toast, autocloseable = true) => {
    this.listToast.push(toast)
    if (autocloseable)
      setTimeout(() => {
        this.closeToast(this.listToast.indexOf(toast))
      }, 5000)
  }

  closeToast(i: number) {
    this.listToast.splice(i, 1)
  }

  clear() {
    this.listToast.splice(0, this.listToast.length);
  }
}
