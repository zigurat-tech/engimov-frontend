import {Component, OnInit} from '@angular/core';
import {HeroService} from "@app/services/hero.service";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  title = '404'
  image = ''
  subtitle = 'La página a la intentas acceder no existe. Click en el logo para volver ir al inicio.'
  loading = false

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.loading = true
    this.heroService.set_loading(this.loading)
    this.heroService.set_image(this.image)
    this.heroService.set_subtitle(this.subtitle)
    this.heroService.set_title(this.title)
  }
}
