import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { RestService } from 'src/app/api/rest.service';
declare let Kakao : any;
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  host:any;
  constructor(
    private router: Router,
    private rest: RestService,
  ) { 
  }

  ngOnInit() {
    this.host = window.location.host;
  }

  kakao() {
    Kakao.Auth.authorize({
      redirectUri: 'http://localhost:8080/api/user/kakao',
    })

    this.rest.getKakao().subscribe((data:any) => {
      console.log(data);
      // this.loginData = data;

      // if(this.loginData != null) {
      //   //login Success
      //   localStorage.setItem("name", this.loginData.name)
      //   localStorage.setItem("dotori", this.loginData.dotoli)
      //   localStorage.setItem("seq", this.loginData.seq)
      //   window.location.replace('/tabs/tab1');
      // } else {
      //   const data = {
      //     socialKey: this.kakaoUserData.id.toString(),
      //     refreshToken: refreshToken,
      //     id: "",
      //     password: "",
      //     name: this.kakaoUserData.id.toString(),
      //     nickname: this.kakaoUserData.id.toString(),
      //     phoneNumber: "",
      //     email: "",
      //   }
    
      //   var json = JSON.stringify(data) ;
      //   console.log(json);

      //   this.rest.postJoin(json).subscribe((data:any) => {
      //     console.log(data);
      //     if(data.status == "Success") {
      //       this.getLogin(socialKey, refreshToken);
      //     }
      //   });
      // }
    });

    //   const REST_API_KEY = "b2f9c8bcb75d5dc1e65936bcffc386d1";
    //   let REDIRECT_URI = "";

    //   REDIRECT_URI = "http://" + window.location.host +"*/callback";

    //   const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
      
    //   window.location.replace(`${KAKAO_AUTH_URL}`);
  }
}
