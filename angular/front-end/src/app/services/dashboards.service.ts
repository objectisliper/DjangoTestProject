import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {AuthService} from './auth.service';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardsService {

  constructor(private cookieService: CookieService, private http: HttpClient) { }

  public getDashboards(): Observable<any> {
    let options = {
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
}
