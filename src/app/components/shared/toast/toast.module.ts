import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastComponent} from "@app/components/shared/toast/toast.component";
import {NgbToast, NgbToastHeader} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [ToastComponent],
  imports: [
    CommonModule,
    NgbToast,
    NgbToastHeader,
  ],
  exports: [
    ToastComponent
  ]
})
export class ToastModule {
}
