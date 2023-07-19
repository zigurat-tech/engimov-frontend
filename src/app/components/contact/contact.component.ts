import {Component, OnInit} from '@angular/core';
import {UtilsService} from "@app/services/utils.service";
import {EnterpriseService} from "@app/services/enterprise.service";

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
  enterprise_data: any[] = [];

  ngOnInit(): void {
    this.contact()
    this.enterpriseService.getData().subscribe(data => {
      this.enterprise_data = data
    });
  }

  constructor(private utilsService: UtilsService, private enterpriseService: EnterpriseService) {
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
