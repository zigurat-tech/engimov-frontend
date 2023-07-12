import {Component, OnInit} from '@angular/core';
import {UtilsService} from "@app/services/utils.service";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  title: string = ''
  subtitle: string = ''
  image: string = ''

  constructor(private utilsService: UtilsService) {
  }

  dataHero = () => this.utilsService.index().subscribe(response => {
    const data = response[0]
    this.title = data.title
    this.subtitle = data.subtitle
    this.image = data.image
    console.log(response)
    console.log(data)
  })

  ngOnInit(): void {
    this.dataHero()
  }
}
