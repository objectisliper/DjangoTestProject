import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private jwtHelper: JwtHelperService;

  constructor(private http: HttpClient, private cookieService: CookieService) {
    this.jwtHelper = new JwtHelperService();
  }

  public register(username: string, password: string, email: string): Observable<any> {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json',
        'X-CSRFToken': this.cookieService.get('csrftoken') })
    };

    const body = JSON.stringify({username: username, password: password, email: email});

    return this.http.post('/api/user', body, options)
      .pipe( map(response => {
          return response;
        })
      );
  }
}
