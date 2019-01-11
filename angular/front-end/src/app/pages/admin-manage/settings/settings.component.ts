import { Component, OnInit } from '@angular/core';
import {Tokens} from '../../../models/tokens.model';
import {TokensService} from '../../../services/tokens.service';
import {error} from 'selenium-webdriver';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  tokens: Tokens = {
    api_key: '',
    token: '',
  };

  response = {
    success: '',
    error: ''
  };

  constructor(private tokensService: TokensService) { }

  ngOnInit() {
    this.tokensService.getTokens().subscribe(data => {
      if (data) {
        this.tokens.api_key = data['api_key'];
        this.tokens.token = data['token'];
      }
    });
  }

  submit() {
    this.tokensService.updateOrCreateTokens(this.tokens.api_key, this.tokens.token).subscribe(data => {
      if (data) {
        this.tokens.api_key = data['api_key'];
        this.tokens.token = data['token'];
        this.response.success = 'Tokens saved successful!';
      }
    }, () => {
      this.response.error = 'Something went wrong, try again later!';
    });
  }

  resetTokens() {
    if (confirm('Are you sure you wanna delete tokens?')) {
      this.tokensService.resetTokens().subscribe(() => {
        this.response.success = 'Tokens reset successful!';
        this.tokens.api_key = '';
        this.tokens.token = '';
      }, () => {
        this.response.error = 'Something went wrong, try again later!';
      });
    }
  }

}
