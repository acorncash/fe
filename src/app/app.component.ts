import { Component } from '@angular/core';

declare let cordova: any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  constructor() {
    document.addEventListener("deviceready", function() {
      cordova.exec((result: any) => {
        console.log('Success:', result);
      }, (error: any) => {
        console.error('Error:', error);
      }, 'testPlugin', 'coolMethod', [localStorage.getItem("seq")]);
    });
  }
}
