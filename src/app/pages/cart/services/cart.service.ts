import {Injectable} from '@angular/core';
import {environment} from "@src/environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {UUID} from "angular2-uuid";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  url = environment.url + '/cart/'
  private uuidValue: string | undefined;

  constructor(private http: HttpClient) {
  }

  generateUUID() {
    this.uuidValue = UUID.UUID();
    return this.uuidValue;
  }

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
    return this.http.post(this.url + `update/${pk}/${quantity}/`, {}, {headers})
  }
  clear = (): Observable<any> => {
    const headers = this.getHeaders();
    return this.http.post(this.url + 'clear/', {}, {headers})
  }
  product_details = (pk: string): Observable<any> => {
    const headers = this.getHeaders();
    return this.http.post(this.url + `details/${pk}/`, {}, {headers})
  }
  details = (): Observable<any> => {
    const headers = this.getHeaders();
    return this.http.post(this.url + 'details/', {}, {headers})
  }
}
