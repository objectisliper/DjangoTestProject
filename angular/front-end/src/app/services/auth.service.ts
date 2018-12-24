import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import {User} from "../models/user.model";
import { JwtHelperService } from "@auth0/angular-jwt";
import {ServerResponseInterface} from "../interfaces/server-response-interface";
import {map} from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthService {
    private jwtHelper: JwtHelperService;

    constructor(private http: HttpClient, private cookieService: CookieService) {
        this.jwtHelper = new JwtHelperService();
    }

    /**
     * Login
     * @returns {Observable<boolean>}
     */
    public login(username: string, password: string): Observable<boolean> {
        let options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json',
              'X-CSRFToken': this.cookieService.get('csrftoken') })
        };

        let body = JSON.stringify({username: username, password: password});

        return this.http.post('/api/login', body, options)
          .pipe( map(response => {
                console.log(response['token']);
                if (response['token']) {
                    localStorage.setItem('token', response['token']);
                    return true;
                }

                return false;
            })
          );
    }

    /**
     * Logout
     */
    public logout(): void {
        localStorage.removeItem('token');
    }

    /**
     * Add auth header
     *
     * @param httpHeaders {HttpHeaders}
     * @returns {HttpHeaders}
     */
    public static addAuthTokenToHeaders(httpHeaders: HttpHeaders): HttpHeaders {
        return httpHeaders.set('Authorization', 'JWT ' + localStorage.getItem('token'));
    }

    /**
     * Get auth token
     *
     * @returns {string | null}
     */
    public static getToken() {
        return localStorage.getItem('token');
    }

    /**
     * Check is user authenticated
     *
     * @returns {boolean}
     */
    isAuth(): boolean {
        return !this.jwtHelper.isTokenExpired(localStorage.getItem('token'));
    }

    /**
     * Get User instance filled by decoded data from token
     * @returns {User}
     */
    getUser(): User {
        let decodedToken = this.jwtHelper.decodeToken(localStorage.getItem('token'));

        let user = new User();

        if (decodedToken) {
            user.name = 'username' in decodedToken ? String(decodedToken.username) : '';
        }

        return user;
    }
}
