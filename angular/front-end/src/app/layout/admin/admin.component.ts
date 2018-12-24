import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  pages = [
    'dashboards',
    'settings'
  ];
  currentRoute: string;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(e => this.currentRoute = e['url']);
  }

  ngOnInit() {
  }

}
