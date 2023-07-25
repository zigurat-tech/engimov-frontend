import {Injectable} from '@angular/core';
import {Toast} from "@app/components/shared/toast/toast";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() {
  }

  listToast: Toast[] = []

  openToast = (toast: Toast) => {
    this.listToast.push(toast)
  }

  closeToast(i: number) {
    this.listToast.splice(i, 1)
  }

  clear() {
    this.listToast.splice(0, this.listToast.length);
  }
}
