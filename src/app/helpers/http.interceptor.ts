import {Injectable} from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HTTP_INTERCEPTORS,
  HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {AlertService} from "@app/services/alert.service";

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(private alertService: AlertService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      withCredentials: true,
    });

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error)
        if (error.status === 0) {
          console.log(error)
          this.alertService.errorNotification()
        } else
          console.log(error)
        // this.alertService.errorNotification(error.message)
        return throwError(() => error)
      })
    );
  }
}

export const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true},
];
