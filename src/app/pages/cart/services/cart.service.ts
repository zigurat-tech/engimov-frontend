import {Injectable} from '@angular/core';
import {environment} from "@src/environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {UUID} from "angular2-uuid";
import {CartLengthService} from "@app/pages/cart/services/cart-length.service";
import {CartStorageService} from "@app/pages/cart/services/cart-storage.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  url = environment.url + '/cart/'

  constructor(private http: HttpClient, private cartLengthService: CartLengthService,
              private cartStorageService: CartStorageService) {
  }

  generateUUID = () => UUID.UUID();

  private getHeaders() {
    let cart_id = localStorage.getItem('cart_id')!;
    if (!cart_id) {
      cart_id = this.generateUUID();
      localStorage.setItem('cart_id', cart_id);
    }
    return new HttpHeaders({
      'Cart-Id': cart_id
    })
  }

  update = (pk: string, quantity: number): Observable<any> => {
    const headers = this.getHeaders();
    return this.http.post(this.url + `update/${pk}/${quantity}/`, {}, {headers}).pipe(
      tap((response: any) => {
        console.log(response)
        this.cartLengthService.setCartLength(response.result.product_list.length)
        this.cartStorageService.total = response.result.total
      })
    )
  }
  clear = (): Observable<any> => {
    const headers = this.getHeaders();
    return this.http.post(this.url + 'clear/', {}, {headers}).pipe(
      tap((response: any) => {
        this.cartLengthService.setCartLength(response.result.product_list.length)
      })
    )
  }
  product_details = (pk: string): Observable<any> => {
    const headers = this.getHeaders();
    return this.http.post(this.url + `details/${pk}/`, {}, {headers}).pipe(
      tap((response: any) => {
        this.cartLengthService.setCartLength(response.result.product_list.length)
      })
    )
  }
  details = (): Observable<any> => {
    const headers = this.getHeaders();
    return this.http.post(this.url + 'details/', {}, {headers}).pipe(
      tap((response: any) => {
        this.cartLengthService.setCartLength(response.result.product_list.length)
      }),
      // catchError((error: any) => {
      //   console.error('Error en la petición:', error);
      //   return throwError(error);
      // })
    )
  }
}
