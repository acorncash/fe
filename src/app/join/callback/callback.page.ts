import { Component, OnInit } from '@angular/core';
import axios from "axios";
import { RestService } from 'src/app/api/rest.service';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-callback',
  templateUrl: './callback.page.html',
  styleUrls: ['./callback.page.scss'],
})
export class CallbackPage implements OnInit {
  REST_API_KEY = "b2f9c8bcb75d5dc1e65936bcffc386d1";

  code = new URL(window.location.href).searchParams.get("code");
  loginData: any;
  kakaoUserData: any;

  constructor(
    private rest: RestService,
  ) { 
  }

  ngOnInit() {
    let REDIRECT_URI = "";
    // if (environment.production) {
    //   REDIRECT_URI = "http://localhost:8100/callback";
    // } else {
      REDIRECT_URI = "http://14.7.33.34:8080/callback";
    // }

    axios
      .post(
        'https://kauth.kakao.com/oauth/token?grant_type=' + "authorization_code" + "&client_id=" + this.REST_API_KEY + "&redirect_url=" + REDIRECT_URI + "&code=" + this.code,
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
        // kakao 사용자정보 가져오기
        this.rest.getKakaoUser(res.data.access_token).subscribe((data:any) => {
          console.log(data);
          this.kakaoUserData = data;

          this.getLogin(this.kakaoUserData.id, res.data.refresh_token)
        });
      });
  }

  getLogin(socialKey:string, refreshToken:string) {
    this.loginData = [];
    this.rest.getLogin(socialKey, refreshToken).subscribe((data:any) => {
      console.log(data);
      this.loginData = data;

      if(this.loginData.length <= 0) {
        const data = {
          socialKey: this.kakaoUserData.id.toString(),
          refreshToken: refreshToken,
          id: "",
          password: "",
          name: "이름1",
          nickname: "닉",
          phoneNumber: "",
          email: "",
        }
    
        var json = JSON.stringify(data) ;
        console.log(json);

        this.rest.postJoin(json).subscribe((data:any) => {
          console.log(data);
          if(data.status == "Success") {
            this.getLogin(socialKey, refreshToken);
          }
        });
      } else {
        //login Success
        localStorage.setItem("name", this.loginData.name)
        localStorage.setItem("dotori", this.loginData.dotoli)
        localStorage.setItem("seq", this.loginData.seq)
        window.location.replace('/tabs/tab1');
      }
    });
  }
}
