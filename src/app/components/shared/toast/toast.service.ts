import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() {
  }

  public showToast = false
  public classes = ''
  public headToast = ''
  public messageToast = ''

  openToast = (head: string, message: string, classes: string) => {
    this.headToast = head
    this.messageToast = message
    this.classes = classes
    this.showToast = true
  }
}
