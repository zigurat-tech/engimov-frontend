import {AfterViewInit, Component, OnInit, TemplateRef} from '@angular/core';
import {UtilsService} from "@app/services/utils.service";
import {HeroService} from "@app/services/hero.service";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {Work} from "@app/models/work";
import {WorkCategory} from "@app/models/work_category";
import {Category} from "@app/models/category";
import {Product} from "@app/models/product";
import {WorkTestimonial} from "@app/models/work_testimonial";

@Component({
  selector: 'app-work-portfolio',
  templateUrl: './work-portfolio.component.html',
  styleUrls: ['./work-portfolio.component.css']
})
export class WorkPortfolioComponent implements OnInit, AfterViewInit {
  constructor(private utilsService: UtilsService, public heroService: HeroService, config: NgbModalConfig,
              private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  listCategories: WorkCategory[] = []
  listWorks: Work[] = []
  header = {title: '', subtitle: ''};
  loading = true
  objectModal: Work = new Work(0, new WorkCategory(0, ''), '', '',
    '', [],)

  category_filter = -1
  order_by = '-1'

  page = 1
  total_of_pages = 1
  pages_per_size: number[] | undefined = []
  page_size = 10

  set_hero_data = () => {
    this.heroService.set_loading(false)
    this.utilsService.section_work_portfolio().subscribe(response => {
      this.heroService.set_title(response[0].title)
      this.heroService.set_subtitle(response[0].subtitle)
      this.heroService.set_image(response[0].image)
      this.heroService.set_loading(true)
      this.heroService.title = response[0].title

      this.header.title = response[0].title
      this.header.subtitle = response[0].subtitle
    })
  }

  openModal(work: Work, content: TemplateRef<any>) {
    this.objectModal = work
    this.modalService.open(content,);
  }

  loadData(query_params: string[] = []) {
    this.loading = true
    this.listWorks = []
    this.utilsService.get_works(query_params).subscribe((res: any) => {
      console.log(res)
      this.total_of_pages = Math.ceil(res.count / this.page_size)
      console.log('total of pages ', this.total_of_pages)
      this.pages_per_size = this.getPagesX10()
      res.results.forEach((p: any) => this.listWorks.push(new Work(p.id, new WorkCategory(p.category.id, p.category.name),
        p.name, p.description, p.image, p.testimonials.map((t: any) =>
          new WorkTestimonial(t.id, t.work, t.name, t.link, t.testimonial)))))
      this.loading = false
      console.log(this.listWorks)
    })
  }


  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.set_hero_data()
    this.utilsService.get_works_categories().subscribe(res => {
      res.forEach((c: any) => this.listCategories.push(new WorkCategory(c.id, c.name)))
    })
    this.loadData([`page_size=${this.page_size}`])
  }

  filterAndOrder(send_page = false) {
    this.loading = true
    let query_params = [`page_size=${this.page_size}`,]
    if (send_page)
      query_params.push(`page=${this.page}`)
    else this.page = 1

    this.listWorks = []

    if (this.category_filter > 0)
      query_params.push(`category=${this.category_filter}`)
    if (this.order_by == 'down' || this.order_by == 'up')
      query_params.push(`price=${this.order_by}`)
    if (this.order_by == 'desc' || this.order_by == 'asc')
      query_params.push(`order=${this.order_by}`)

    this.loadData(query_params)
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
