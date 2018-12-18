import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import {User} from "../models/user.model";
import { JwtHelperService } from "@auth0/angular-jwt";
import {ServerResponseInterface} from "../interfaces/ServerResponseInterface";

@Injectable()
export class AuthService {
    private jwtHelper: JwtHelperService;

    constructor(private http: HttpClient) {
        this.jwtHelper = new JwtHelperService();
    }

    /**
     * Login
     * @returns {Observable<boolean>}
     */
    public login(email: string, password: string): Observable<boolean> {
        let options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        let body = JSON.stringify({email: email, password: password});

        return this.http.post<ServerResponseInterface>('/api/login', body, options)
            .map(response => {
                if (response['data']['token']) {
                    localStorage.setItem('token', response['data']['token']);
                    return true;
                }

                return false;
            });
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
    public static addAuthTokenToHeaders(httpHeaders: HttpHeaders) : HttpHeaders {
        return httpHeaders.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
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
            user.name = 'name' in decodedToken ? String(decodedToken.name) : '';
            user.role = 'role' in decodedToken ? String(decodedToken.role) : '';
        }

        return user;
    }
}
