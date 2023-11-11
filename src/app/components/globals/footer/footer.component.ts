import {Component, OnInit} from '@angular/core';
import {UtilsService} from "@app/services/utils.service";
import {EnterpriseService} from "@app/services/enterprise.service";
import {NavigationService} from "@app/services/navigation.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  enterprise_data: any[] = [];

  constructor(private enterpriseService: EnterpriseService, public navigationService: NavigationService) {
  }

  ngOnInit(): void {
    this.enterpriseService.getData().subscribe(data => {
      this.enterprise_data = data
    });
  }

  navigate = (url: string, hash = '') => this.navigationService.navigate(url, hash)
}
