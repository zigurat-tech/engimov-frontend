import {Injectable} from '@angular/core';
import {environment} from "@src/environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  url = environment.url

  constructor(private http: HttpClient, private router: Router) {
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

  section_work_with_us = (): Observable<any> => this.http.get(this.url + '/sections/work_with_us/')


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
    // this.router.navigateByUrl('/product_sale')
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

  create_contact = (formData: any): Observable<any> => this.http.post(this.url + '/core/contacts/', formData)

  create_job_offer_pool = (formData: any): Observable<any> =>
    this.http.post(this.url + '/core/job_offers_pool/', formData)

  get_works = (query_params: string[]): Observable<any> => {
    let url = this.url + '/core/works/?'
    if (query_params) {
      query_params.forEach(e => url += (e + '&'))
    }
    return this.http.get(url)
  }

  get_job_offers = (query_params: string[]): Observable<any> => {
    let url = this.url + '/core/job_offers/?'
    if (query_params) {
      query_params.forEach(e => url += (e + '&'))
    }
    return this.http.get(url)
  }
  get_works_categories = (id = ''): Observable<any> => this.http.get(this.url + '/core/workcategories/' + id)
}
