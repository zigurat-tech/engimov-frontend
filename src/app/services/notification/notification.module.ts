import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationComponent} from "@app/services/notification/notification.component";
import {NotificationService} from "@app/services";
// import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    NotificationComponent
  ],
  imports: [
    CommonModule,
    // MatSnackBarModule
  ]
})
export class NotificationModule {
  static forRoot(): ModuleWithProviders<NotificationModule> {
    return {
      ngModule: NotificationModule,
      providers: [NotificationService]
    }
  }
}
