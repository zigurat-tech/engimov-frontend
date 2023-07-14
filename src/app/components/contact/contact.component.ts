import {Component, OnInit} from '@angular/core';
import {UtilsService} from "@app/services/utils.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title: string = ''
  subtitle: string = ''
  image: string = ''
  loading: boolean = false

  ngOnInit(): void {
    this.contact()
  }

  constructor(private utilsService: UtilsService) {
  }

  contact = () => this.utilsService.section_contact().subscribe(response => {
    const data = response[0]
    this.title = data.title
    this.subtitle = data.subtitle
    this.image = data.image
    this.loading = true
    console.log(response)
    console.log(data)
  })
}
