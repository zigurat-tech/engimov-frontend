import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of, tap} from "rxjs";
import {environment} from "@src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {
  private enterprise_data: any[] = [];
  url = environment.url


  constructor(private http: HttpClient) {
  }

  getData(): Observable<any> {
    if (!this.enterprise_data.length) {
      return this.http.get<any>(this.url + '/core/enterprise_data/').pipe(
        tap(data => this.enterprise_data = data));
    } else {
      return of(this.enterprise_data);
    }
  }
}
