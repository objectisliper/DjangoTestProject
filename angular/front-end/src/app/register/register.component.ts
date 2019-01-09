import { Component, OnInit } from '@angular/core';
import {User} from "../models/user.model";
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {RegisterService} from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  public user: User;

  /** Error message for showing in form */
  public errorMessage: string;

  /** Error message for unprocessed statuses */
  public commonErrorMessage: string = 'Something went wrong. Please contact support.';

  constructor(private authService: AuthService, private router: Router, private registerService: RegisterService) {
    this.user = new User();
    this.user.name = '';
    this.user.password = '';
    this.user.email = '';
  }

  ngOnInit() {
    this.authService.logout();
  }

  submit() {
    this.registerService.register(this.user.name, this.user.password, this.user.email).subscribe(
      response => this.authService.login(response['data']['username'], response['data']['password']).subscribe(
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
        }
    ), (error: HttpErrorResponse) => {
        switch (error.status) {
          case 400: return this.errorMessage = 'Something went wrong, maybe such user already exist?';
          case 500: return this.errorMessage = 'Something went wrong, maybe such user already exist?';
        }

        this.errorMessage = this.commonErrorMessage;
      });
  }

  /** Removing error message when user start input again */
  userStartInput() {
    this.errorMessage = '';
  }

}
