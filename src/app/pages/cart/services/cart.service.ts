import {Injectable} from '@angular/core';
import {environment} from "@src/environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  url = environment.url + '/cart/'

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    withCredentials: true,  // Esto enviará cookies de sesión
  };

  private getHeaders() {
    console.log(document.cookie)
    let asd = new HttpHeaders({
      'X-Session-ID': '123',
      // 'Cookie': `${document.cookie}`
    });
    // let sessionId = localStorage.getItem('sessionId')!;
    // if (!sessionId) {
    //   sessionId = uuidv4();
    //   localStorage.setItem('sessionId', sessionId);
    // }
    // asd.set('algo', 'sessionid=123')
    return asd
  }

  add = (pk: string, quantity = 1): Observable<any> => {
    const headers = this.getHeaders();
    const options = {headers,observe: 'response' as 'response' ,withCredentials: true, };
    return this.http.post(this.url + `add/${pk}/${quantity}/`, {}, options)
  }

  decrement = (pk: string, quantity = 1): Observable<any> =>
    this.http.post(this.url + `decrement/${pk}/${quantity}/`, {})

  update = (pk: string, quantity: number): Observable<any> =>
    this.http.post(this.url + `update/${pk}/${quantity}/`, {}, this.httpOptions)

  clear = (): Observable<any> => this.http.post(this.url + 'clear/', {})

  remove = (pk: string): Observable<any> => this.http.post(this.url + `remove/${pk}/`, {})

  product_details = (pk: string): Observable<any> => this.http.post(this.url + `details/${pk}/`, {})

  details = (): Observable<any> => {
    const headers = this.getHeaders();
    const options = {headers, withCredentials: true,observe: 'response' as 'response'};
    return this.http.post(this.url + 'details/', {}, options)
  }

}
