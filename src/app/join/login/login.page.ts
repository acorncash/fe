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
  REST_API_KEY = "b2f9c8bcb75d5dc1e65936bcffc386d1";
  REDIRECT_URI = 'http://localhost:8100/login/kakao';
  
  constructor(
    private router: Router,
    private rest: RestService,
    private inAppBrowser: InAppBrowser
  ) { 
  }

  ngOnInit() {
    this.host = window.location.host;
  }

  kakao() {
    const options:InAppBrowserOptions = {
      location: 'yes',
      zoom: 'no',
    };

    let browser = this.inAppBrowser.create(`https://kauth.kakao.com/oauth/authorize?client_id=${this.REST_API_KEY}&redirect_uri=${this.REDIRECT_URI}&response_type=code&scope=account_email`, '_blank', options);

    browser.on('loadstop').subscribe(() => {
      browser.executeScript({code: `
      let message = {name: localStorage.getItem('name'), seq: localStorage.getItem('seq'), dotori: localStorage.getItem('dotori')}
      webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify(message));
      `})
    })

    browser.on('message').subscribe((val) => {
      localStorage.clear()

      console.log(val)
      localStorage.setItem('name', val.data.name)
      localStorage.setItem('seq', val.data.seq)
      localStorage.setItem('dotori', val.data.dotori)

      window.location.href = ''

      browser.close()
    })
  }
}
