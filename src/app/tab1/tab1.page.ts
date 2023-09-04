import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  
  constructor(
    private router: Router,
  ) {}
  
  navMisionDetail(seq:number) {  
    this.router.navigateByUrl('/mision-detail/' + seq);
  }

  navCouponDetail(seq:number) {  
    this.router.navigateByUrl('/coupon-detail/' + seq);
  }
}
