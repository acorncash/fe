import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    
  constructor() { }

  ngOnInit() {
  }

  kakao() {
    const REST_API_KEY = "b2f9c8bcb75d5dc1e65936bcffc386d1";
    const REDIRECT_URI = "http://localhost:8100/callback";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
    
    window.location.replace(`${KAKAO_AUTH_URL}`);
  }
}
