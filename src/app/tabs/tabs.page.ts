import { Component } from '@angular/core';
import { Location } from '@angular/common';

let cordova: any;

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
      // // 플러그인 초기화 및 메서드 호출      
      cordova.exec(this.successCallback, this.errorCallback, 'testPlugin', 'coolMethod', [localStorage.getItem("seq")]);
      return;
    }
    this.activeTab = name;
  }

  successCallback = (result: any) => {
    console.log('Success:', result); // 네이티브 메서드가 성공적으로 실행된 경우 결과를 처리합니다.
  };
  
  errorCallback = (error: any) => {
    console.error('Error:', error); // 네이티브 메서드 실행 중에 오류가 발생한 경우 오류를 처리합니다.
  };
}
