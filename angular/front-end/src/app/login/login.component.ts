import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import {User} from "../models/user.model";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /** User instance */
    public user: User;

    /** Error message for showing in form */
    public errorMessage: string;

    /** Error message for unprocessed statuses */
    public commonErrorMessage: string = 'Something went wrong. Please contact support.';

    constructor(private authService: AuthService, private router: Router) {
        this.user = new User();
        this.user.name = '';
        this.user.password = '';
    }

    ngOnInit() {
        this.authService.logout();
    }

    /** Submit handler */
    submit() {
        this.authService.login(this.user.name, this.user.password).subscribe(
            (result: boolean) => {
                if (result === true) {
                    let user = this.authService.getUser();
                    let startRoute = '';
                    this.router.navigate([startRoute]);
                } else {
                    this.errorMessage = this.commonErrorMessage;
                }
            },
            (error: HttpErrorResponse) => {
                switch (error.status) {
                    case 400: return this.errorMessage = 'Incorrect username and password combination';
                }

                this.errorMessage = this.commonErrorMessage;
                console.log(error);
            }
        );
    }

    /** Removing error message when user start input again */
    userStartInput() {
        this.errorMessage = '';
    }

}
