import {Component, OnInit} from '@angular/core';
import {UtilsService} from "@app/services/utils.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title = ''
  subtitle = ''
  image = ''
  loading = false

  constructor(private utilsService: UtilsService) {
  }

  get_about() {
    this.utilsService.section_about().subscribe(response => {
      const data = response[0]
      this.title = data.title
      this.subtitle = data.subtitle
      this.image = data.image
      this.loading = true
    })
  }

  ngOnInit(): void {
    this.get_about()
  }

}
