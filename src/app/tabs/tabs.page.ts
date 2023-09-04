import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  activeTab:string = "tab1";
  constructor() {}
  
  chagedTab(name:string){
    this.activeTab = name;
   }
}
