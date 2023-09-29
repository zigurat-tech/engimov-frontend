import {Component, OnInit} from '@angular/core';
import {HeroService} from "@app/services/hero.service";
import {UtilsService} from "@app/services/utils.service";
import {NgbNavConfig} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-work-with-us',
  templateUrl: './work-with-us.component.html',
  styleUrls: ['./work-with-us.component.css']
})
export class WorkWithUsComponent implements OnInit {
  constructor(private heroService: HeroService, private utilsService: UtilsService, config: NgbNavConfig) {

  }

  list_works: any[] = []
  list_categories: any[] = []
  loadingWorks = true
  loadingCategories = true
  header = {title: '', subtitle: ''};
  //paginator
  page = 1
  total_of_pages = 1
  pages_per_size: number[] | undefined = []
  page_size = 10

  set_hero_data = () => {
    this.heroService.set_loading(false)
    this.utilsService.section_work_with_us().subscribe(response => {
      this.heroService.set_title(response[0].title)
      this.heroService.set_subtitle(response[0].subtitle)
      this.heroService.set_image(response[0].image)
      this.heroService.set_loading(true)
      this.heroService.title = response[0].title

      this.header.title = response[0].title
      this.header.subtitle = response[0].subtitle
    })
  }
  active = 1;

  ngOnInit(): void {
    this.set_hero_data()
    this.load_works([])
    this.load_categories()
  }

  load_works(query_params: string[] = []) {
    this.loadingWorks = true
    this.list_works = []
    this.utilsService.get_job_offers(query_params).subscribe(resp => {
      console.log(resp)
      this.loadingWorks = false
      if (!resp.length) {
        console.log('No hay ofertas de trabajo')
        return
      }
      this.list_works = resp
      this.list_works.forEach(e => e.active = 1)
      /*this.total_of_pages = Math.ceil(resp.count / this.page_size)
      this.pages_per_size = this.getPagesX10()

      this.list_works = resp.results
      this.list_works.forEach(e => e.active = 1)
      this.loadingWorks = false*/
      console.log(this.list_works)
    })
  }

  load_categories() {
    this.loadingCategories = true
    this.list_categories = []
    this.utilsService.get_works_categories().subscribe(resp => {
      this.list_categories = resp
      this.loadingCategories = false
      console.log(this.list_categories)
    })
  }

  filterProducts(s: string, i: number) {
    let lis = document.querySelectorAll('#portfolio-flters li'),
      products = document.querySelectorAll('.portfolio-item'),
      container = document.querySelector('.portfolio-container')
    lis.forEach(e => e.classList.remove('filter-active'))
    lis[i].classList.add('filter-active')
    if (s === '*') {
      products.forEach((e: any) => {
        e.style = ""
      })
      return
    }
    products.forEach((e: any) => {
      if (!e.classList.contains(s)) {
        e.style = 'display:none'
      } else {
        e.style = ''
      }
    })
  }

  //Paginator
  filterAndOrder(send_page = false) {
    this.loadingWorks = true
    let query_params = [`page_size=${this.page_size}`,]
    if (send_page)
      query_params.push(`page=${this.page}`)
    else this.page = 1

    this.list_works = []

    this.load_works(query_params)
  }

  getPagesX10(): number[] | undefined {
    let pages10: number[] | undefined = []
    for (let i of this.getPages10in10().keys()) {
      if (this.page <= i && this.getPages10in10().has(i)) {
        pages10 = this.getPages10in10().get(i)
        break
      }
    }
    return pages10
  }

  getPages10in10() {
    let mapa: Map<number, number[]> = new Map<number, number[]>()
    let cont = 0,
      key = 10,
      arr: number[] = [],
      aux = this.total_of_pages,
      stop = 10

    for (let i = 1; i <= this.total_of_pages; i++) {
      cont++
      arr.push(i)
      if (aux < 10)
        stop = aux
      if (cont === stop) {
        mapa.set(key, arr)
        key += 10
        arr = []
        cont = 0
        aux -= 10
      }
    }
    return mapa
  }

  nextPage() {
    this.page++
    this.filterAndOrder(true)
  }

  previousPage() {
    this.page--
    this.filterAndOrder(true)
  }

  previousPageClass = () => this.page !== 1

  nextPageClass = () => this.page !== this.total_of_pages

  selectedPage(numPgae: number) {
    this.page = numPgae
    this.filterAndOrder(true)
  }

  protected readonly Array = Array;
}
