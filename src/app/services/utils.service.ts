import {Injectable} from '@angular/core';
import {environment} from "@src/environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  url = environment.url

  constructor(private http: HttpClient) {
  }

  section_index(): Observable<any> {
    return this.http.get(this.url + '/sections/index/')
  }

  section_about(): Observable<any> {
    return this.http.get(this.url + '/sections/about/')
  }

  section_contact(): Observable<any> {
    return this.http.get(this.url + '/sections/contact/')
  }

  enterprise_data(): Observable<any> {
    return this.http.get(this.url + '/core/enterprise_data/')
  }

  get_products = (page = '1') => this.http.get(this.url + '/core/products/?page=' + page)
  get_products_categories = () => this.http.get(this.url + '/core/productcategories/')

  create_contact(formData: any): Observable<any> {
    return this.http.post(this.url + '/core/contacts/', formData)
  }
}
