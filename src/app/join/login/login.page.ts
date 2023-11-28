import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/api/rest.service';
import { InAppBrowser, InAppBrowserOptions, InAppBrowserObject } from '@ionic-native/in-app-browser/ngx';
import axios from "axios";

declare let Kakao : any;
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  host:any;
  KAKAO_REST_API_KEY = "b2f9c8bcb75d5dc1e65936bcffc386d1";
  KAKAO_REDIRECT_URI = `http://14.7.33.34:8080/kakao`;
  NAVER_REST_API_KEY = "JHEetUu7mEdTxaMm1paO";
  NAVER_REDIRECT_URI = `http://14.7.33.34:8080/callback/login/naver`;
  
  constructor(
    private router: Router,
    private rest: RestService,
    private inAppBrowser: InAppBrowser
  ) { 
  }

  ngOnInit() {
    this.host = window.location.host;
    if (localStorage.getItem('name') && localStorage.getItem('name') != 'null')
      window.location.href = '/tabs'
  }

  kakao() {
    const options:InAppBrowserOptions = {
      location: 'yes',
      zoom: 'no',
    };

    let browser = this.inAppBrowser.create(`https://kauth.kakao.com/oauth/authorize?client_id=${this.KAKAO_REST_API_KEY}&redirect_uri=${this.KAKAO_REDIRECT_URI}&response_type=code&scope=account_email`, '_blank', options);

    browser.on('message').subscribe((val) => {
      localStorage.clear()

      this.setLoginInfo(val.data)
      .then(() => {
        window.location.href = '/tabs'
        browser.close()
      })
    })
  }

  naver() {
    const options:InAppBrowserOptions = {
      location: 'yes',
      zoom: 'no',
    };

    let browser = this.inAppBrowser.create(`https://nid.naver.com/oauth2.0/authorize?client_id=${this.NAVER_REST_API_KEY}&redirect_uri=${this.NAVER_REDIRECT_URI}&response_type=code&state=STATE_STRING`, '_blank', options);

    browser.on('message').subscribe((val) => {
      localStorage.clear()

      this.setLoginInfo(val.data)
      .then(() => {
        window.location.href = '/tabs'
        browser.close()
      })
    })
  }

  setLoginInfo(data: any) {
    return new Promise<void>((resolve) => {
      localStorage.setItem('name', data.name);
      localStorage.setItem('seq', data.seq);
      localStorage.setItem('dotori', data.dotori);

      if (localStorage.getItem("name") && localStorage.getItem("name") !== 'null')
        resolve()
    })
  }
}
