import { Component, OnInit } from '@angular/core';
import { DashboardsService } from '../../../services/dashboards.service';
import {Dashboards} from '../../../models/dashboards.model';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})

export class DashboardsComponent implements OnInit {

  dashboards: Dashboards[];
  errors = {
    message: ''
  };

  constructor(private dashboardsService: DashboardsService) { }

  ngOnInit() {
    this.dashboardsService.getDashboards().subscribe(data => {
      if (data.length > 0) {
        this.dashboards = data;
      } else {
        this.errors.message = 'Something went wrong, please check your tokens in settings.';
      }
    });
  }

}
