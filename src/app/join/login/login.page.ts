import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  host:any;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.host = window.location.host;
  }

  kakao() {
    const REST_API_KEY = "b2f9c8bcb75d5dc1e65936bcffc386d1";
    let REDIRECT_URI = "";

    REDIRECT_URI = "http://" + window.location.host +":8100/callback";

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
    
    window.location.replace(`${KAKAO_AUTH_URL}`);
  }
}
