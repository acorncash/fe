import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/api/rest.service';

declare let cordova: any;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  adPopcornList: any;
  adPopcornCnt: any;

  constructor(
    private router: Router,
    private rest: RestService,
  ) {}

  ionViewDidEnter() {
    this.router.navigateByUrl('/tabs/tab2');
    document.addEventListener('deviceready', () => {
      cordova.exec(
        (result: any) => {
          console.log('Success:', result);
        },
        (error: any) => {
          console.error('Error:', error);
        },
        'testPlugin',
        'coolMethod',
        [localStorage.getItem('seq')]
      );
    });
  }

  adPopcornPressDetail(campaignKey:number) {  
    this.router.navigateByUrl('/adpopcorn-detail/' + campaignKey);
  }

  getAdPopcornInfo() {
    this.adPopcornList = [];
    this.rest.getAdPopcornInfo().subscribe((data:any) => {
      console.log(data);
      this.adPopcornList = data.CampaignInfo;
      this.adPopcornCnt = this.adPopcornList.length;
    });
  }

  addComma(string:any) {
    return string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  
  notProvided() {
    alert("서비스 준비중입니다");
  }
}
