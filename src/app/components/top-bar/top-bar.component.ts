import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {EnterpriseService} from "@app/services/enterprise.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  enterprise_data: any[] = [];

  constructor(private enterpriseService: EnterpriseService) {
  }

  ngOnInit(): void {
    this.enterpriseService.getData().subscribe(data => {
      this.enterprise_data = data
      console.log(this.enterprise_data)
    });
  }

}
