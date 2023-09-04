import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  selectedMenu = "normal";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  clickMenu(keyword:string) {
    this.selectedMenu = keyword;
  }

  navDetail(seq:number) {  
    this.router.navigateByUrl('/mision-detail/' + seq);
  }
}
