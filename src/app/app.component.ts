import { Component } from '@angular/core';

declare let cordova: any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    cordova.exec((result: any) => {
      console.log('Success:', result); // 네이티브 메서드가 성공적으로 실행된 경우 결과를 처리합니다.
    }, (error: any) => {
      console.error('Error:', error); // 네이티브 메서드 실행 중에 오류가 발생한 경우 오류를 처리합니다.
    }, 'testPlugin', 'coolMethod', [localStorage.getItem("seq")]);
  }
}
