import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/api/rest.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  misionList: any;
  captureMisionList: any;

  constructor(
    private router: Router,
    private rest: RestService,
  ) {}
  
  ionViewWillEnter() {
    this.getMisionList();
  }

  navAnswerDetail(seq:number) {  
    this.router.navigateByUrl('/answer-detail/' + seq);
  }

  navCouponDetail(seq:number) {  
    this.router.navigateByUrl('/coupon-detail/' + seq);
  }

  getMisionList() {
    this.misionList = [];
    this.rest.getMisionList("A").subscribe((data:any) => {
      console.log(data);
      this.misionList = data;
    });
    this.rest.getMisionList("C").subscribe((data:any) => {
      console.log(data);
      this.captureMisionList = data;
    });
  }
}
