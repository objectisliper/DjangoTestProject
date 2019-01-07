import { Component, OnInit } from '@angular/core';
import { DashboardsService } from '../../../services/dashboards.service';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})

export class DashboardsComponent implements OnInit {

  dashboards;

  constructor(private dashboardsService: DashboardsService) { }

  ngOnInit() {
    this.dashboardsService.getDashboards().subscribe(data => {
      if (data) {
        this.dashboards = data;
      }
    });
  }

}
