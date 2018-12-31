import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {AuthService} from './auth.service';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokensService {

  constructor(private cookieService: CookieService, private http: HttpClient) { }

  public getTokens(): Observable<any>{
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json',
        'X-CSRFToken': this.cookieService.get('csrftoken'),
        'Authorization': 'JWT ' + localStorage.getItem('token')})
    };

    return this.http.get('/api/get_tokens', options)
      .pipe( map(response => {
        if (response['data']) {
          return response['data'];
        }

        return false;
        })
      );
  }

  public updateOrCreateTokens(api_key, token): Observable<any>{
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json',
        'X-CSRFToken': this.cookieService.get('csrftoken'),
        'Authorization': 'JWT ' + localStorage.getItem('token')})
    };

    let body = JSON.stringify({api_key: api_key, token: token});

    return this.http.put('/api/get_tokens', body, options)
      .pipe( map(response => {
          if (response['data']) {
            return response['data'];
          }

          return false;
        })
      );
  }
}
