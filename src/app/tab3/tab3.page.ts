import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private router: Router,
  ) {}

  navDetail(seq:number) {  
    this.router.navigateByUrl('/prs-detail/' + seq);
  }

  notProvided() {
    alert("서비스 준비중입니다");
  }
}
