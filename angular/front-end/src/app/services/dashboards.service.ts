import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {AuthService} from './auth.service';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';
import {Dashboards} from '../models/dashboards.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardsService {

  constructor(private cookieService: CookieService, private http: HttpClient) { }

  public getDashboards(): Observable<Dashboards[]> {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json',
        'X-CSRFToken': this.cookieService.get('csrftoken'),
        'Authorization': 'JWT ' + localStorage.getItem('token')})
    };

    return this.http.get('/api/dashboards', options)
      .pipe( map(response => {
          if (response['data']) {
            return response['data'];
          }

          return false;
        })
      );
  }

  public getDashboard(token): Observable<Dashboards> {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json',
        'X-CSRFToken': this.cookieService.get('csrftoken'),
        'Authorization': 'JWT ' + localStorage.getItem('token')})
    };

    return this.http.get('/api/dashboards', options)
      .pipe( map(response => {
          if (response['data']) {
            return response['data'].find(dashboard => dashboard.token === token);
          }

          return false;
        })
      );
  }

  public updateCard(card): Observable<boolean> {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json',
        'X-CSRFToken': this.cookieService.get('csrftoken'),
        'Authorization': 'JWT ' + localStorage.getItem('token')})
    };

    const body = JSON.stringify({token: card.token, name: card.name, description: card.description});

    return this.http.put('/api/cards', body, options)
      .pipe( map(response => {
        return !!response['success'];
      }));
  }
}
