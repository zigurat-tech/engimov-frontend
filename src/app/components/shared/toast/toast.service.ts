import {Injectable} from '@angular/core';
import {Toast} from "@app/components/shared/toast/toast";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() {
  }

  listToast: Toast[] = []
  public showToast = false
  public classes = ''
  public headToast = ''
  public messageToast = ''

  openToast = (head: string, message: string, classes: string) => {
    this.headToast = head
    this.messageToast = message
    this.classes = classes
    this.showToast = true
    this.listToast.push(new Toast(true, classes, head, message))
  }
}
