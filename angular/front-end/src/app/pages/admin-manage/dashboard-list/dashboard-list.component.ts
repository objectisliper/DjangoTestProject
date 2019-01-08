import { Component, OnInit } from '@angular/core';
import {DashboardsService} from '../../../services/dashboards.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Dashboards} from '../../../models/dashboards.model';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.css']
})

export class DashboardListComponent implements OnInit {

  dashboard: Dashboards = {
    name: '',
    token: '',
    lists_set: []
  };
  chosen_card: object;

  constructor(private dashboardService: DashboardsService,
              private route: ActivatedRoute, private location: Location,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.getDashboard();
  }

  getDashboard(): void {
    const token = this.route.snapshot.paramMap.get('token');
    this.dashboardService.getDashboard(token)
      .subscribe(dashboard => this.dashboard = dashboard);
  }

  goBack(): void {
    this.location.back();
  }

  open(content, card) {
    this.chosen_card = card;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.
    then(() => {this.dashboardService.updateCard(this.chosen_card).subscribe(); }, () => {});
  }

}
