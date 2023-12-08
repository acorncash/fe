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
    if(name=='tab3'){
      alert('tab3')
      // // 플러그인 초기화 및 메서드 호출
      // let cordova: any;
      // cordova.exec(this.successCallback, this.errorCallback, 'testPlugin', 'coolMethod', [localStorage.getItem("seq")]);
      return;
    }
    this.activeTab = name;
  }
}
