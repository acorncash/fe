import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  selectedMenu = "cafe";

  constructor(
    private router: Router,
  ) {}

  clickMenu(keyword:string) {
    this.selectedMenu = keyword;
  }

  navDetail(seq:number) {  
    this.router.navigateByUrl('/coupon-detail/' + seq);
  }
}
