import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/api/rest.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  dotori:any = "0";
  name:any;
  misionList: any;
  captureMisionList: any;

  constructor(
    private router: Router,
    private rest: RestService,
  ) {}
  
  ngOnInit() {
    localStorage.setItem("name", "사용자")
    localStorage.setItem("dotori", "0")
    localStorage.setItem("seq", "809")

    this.name = localStorage.getItem("name");
    this.dotori = localStorage.getItem("dotori");
  }

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
  
  addComma(string:any) {
    return string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
