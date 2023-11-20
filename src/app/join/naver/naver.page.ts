import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/api/rest.service';

@Component({
  selector: 'app-callback',
  templateUrl: './naver.page.html',
})
export class NaverPage implements OnInit {
  constructor(private route:ActivatedRoute,
    private restService: RestService) {

  }

  ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        this.login(params['code'], params['state'])
      })
  }

  login(code: string, state: string) {
    this.restService.getNaverLogin(code, state).subscribe(data => {
      localStorage.clear()

      let message = {name: data.nickname, seq: data.seq, dotori: data.dotoli}
      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify(message))
    })
  }
}
