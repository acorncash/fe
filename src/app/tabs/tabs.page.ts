import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  activeTab:any = "tab1";
  constructor(private location: Location) {
    location.onUrlChange(url => this.activeTab = window.location.pathname.split("/").pop())
  }

  chagedTab(name:string){
    this.activeTab = name;
  }
}
