import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  selectedMenu = "cafe";

  constructor() {}

  clickMenu(keyword:string) {
    this.selectedMenu = keyword;
  }
}
