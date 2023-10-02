import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-callback',
  templateUrl: './callback.page.html',
  styleUrls: ['./callback.page.scss'],
})
export class CallbackPage implements OnInit {
  REST_API_KEY = "b2f9c8bcb75d5dc1e65936bcffc386d1";
  REDIRECT_URI = "http://localhost:8100/callback";
  code = new URL(window.location.href).searchParams.get("code");

  constructor() { }

  ngOnInit() {
    axios
      .post(
        'https://kauth.kakao.com/oauth/token?grant_type=' + "authorization_code" + "&client_id=" + this.REST_API_KEY + "&redirect_url=" + this.REDIRECT_URI + "&code=" + this.code,
        {},
        {
          headers: {
            "Content-type":
            "application/x-www-form-urlencoded;charset=utf-8"
          },
        }
      )
      .then((res) => {
        console.log(res);
      });
  }
}
