import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/api/rest.service';

@Component({
  selector: 'app-callback',
  templateUrl: './kakao.page.html',
})
export class KakaoPage implements OnInit {
  private code!: string;
  data: any;
  constructor(private route:ActivatedRoute,
    private restService: RestService) {

  }

  ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        this.code = params['code']
      })

      this.login()
  }

  login() {
    this.restService.getKakaoLogin(this.code).subscribe(data => {
      this.data = data;

      localStorage.clear()
      
      localStorage.setItem('name', data.nickname)
      localStorage.setItem('seq', data.seq)
      localStorage.setItem('dotori', data.dotoli)
    })
  }
}
