import {Injectable} from '@angular/core';
import {environment} from "@src/environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CookieService} from 'ngx-cookie-service';
import {UUID} from "angular2-uuid";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    url = environment.url + '/cart/'
    private uuidValue: string | undefined;

    constructor(private http: HttpClient, private cookieService: CookieService) {
    }

    httpOptions = {
        withCredentials: true,  // Esto enviará cookies de sesión
    };

    generateUUID() {
        this.uuidValue = UUID.UUID();
        return this.uuidValue;
    }

    private getHeaders() {
        console.log(document.cookie)
        console.log(this.generateUUID())

        let asd = new HttpHeaders({
            'X-Session-ID': '1234',
            'Access-Control-Allow-Origin': '*'
        });
        let sessionId = localStorage.getItem('sessionId')!;
        if (!sessionId) {
            sessionId = this.generateUUID();
            localStorage.setItem('sessionId', sessionId);
        }
        asd.set('X-Session-ID', sessionId)
        return asd
    }

    add = (pk: string, quantity = 1): Observable<any> => {
        const headers = this.getHeaders();
        const options = {headers, observe: 'response' as 'response', withCredentials: true,};
        return this.http.post(this.url + `add/${pk}/${quantity}/`, {}, {headers})
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
        const options = {headers, withCredentials: true, observe: 'response' as 'response'};
        return this.http.post(this.url + 'details/', {}, {headers})
    }

}
