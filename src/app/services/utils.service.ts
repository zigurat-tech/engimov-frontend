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

  section_portfolio(): Observable<any> {
    return this.http.get(this.url + '/sections/products_portfolio/')
  }

  section_sale = (): Observable<any> => this.http.get(this.url + '/sections/sell/')


  enterprise_data(): Observable<any> {
    return this.http.get(this.url + '/core/enterprise_data/')
  }

  get_products = (query_params: string[] = []): Observable<any> => {
    let url = this.url + '/core/products/?'
    if (query_params) {
      query_params.forEach(e => url += (e + '?'))
    }
    return this.http.get(url)
  }
  get_products_sale = (query_params: string[] = []): Observable<any> => {
    let url = this.url + '/core/products_sale/?'
    if (query_params) {
      query_params.forEach(e => url += (e + '&'))
    }
    console.log(url)
    return this.http.get(url)
  }

  get_products_categories = (query_params: string[] = []): Observable<any> => {
    let url = this.url + '/core/productcategories/?'
    if (query_params) {
      query_params.forEach(e => url += (e + '?'))
    }
    return this.http.get(url)
  }
  get_products_sale_categories = (): Observable<any> => this.http.get(this.url + '/core/productcategories_sale/')

  create_contact(formData: any): Observable<any> {
    return this.http.post(this.url + '/core/contacts/', formData)
  }
}
