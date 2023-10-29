import {Injectable} from '@angular/core';
import {environment} from "@src/environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  url = environment.url + '/cart/'

  constructor(private http: HttpClient) {
  }

  add = (pk: string, quantity = 1): Observable<any> =>
    this.http.post(this.url + `add/${pk}/${quantity}/`, {})

  decrement = (pk: string, quantity = 1): Observable<any> =>
    this.http.post(this.url + `decrement/${pk}/${quantity}/`, {})

  update = (pk: string, quantity: number): Observable<any> =>
    this.http.post(this.url + `update/${pk}/${quantity}/`, {})

  clear = (): Observable<any> => this.http.post(this.url + 'clear/', {})

  remove = (pk: string): Observable<any> => this.http.post(this.url + `remove/${pk}/`, {})

  product_details = (pk: string): Observable<any> => this.http.post(this.url + `details/${pk}/`, {})

  details = (): Observable<any> => this.http.post(this.url + 'details/', {})

}
