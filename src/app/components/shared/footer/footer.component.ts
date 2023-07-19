import {Component, OnInit} from '@angular/core';
import {UtilsService} from "@app/services/utils.service";
import {EnterpriseService} from "@app/services/enterprise.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  enterprise_data: any[] = [];

  constructor(private utilsService: UtilsService, private enterpriseService: EnterpriseService) {
  }

  ngOnInit(): void {
    this.enterpriseService.getData().subscribe(data => {
      this.enterprise_data = data
    });
  }
}
