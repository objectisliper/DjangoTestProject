import { Component, OnInit } from '@angular/core';
import {Tokens} from '../../../models/tokens.model';
import {TokensService} from '../../../services/tokens.service';

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

  constructor(private tokensService: TokensService) { }

  ngOnInit() {
    this.tokensService.getTokens().subscribe(data => {
      if (data) {
        console.log(data);
        this.tokens.api_key = data[0]['api_key'];
        this.tokens.token = data[0]['token'];
      }
    });
  }

}
