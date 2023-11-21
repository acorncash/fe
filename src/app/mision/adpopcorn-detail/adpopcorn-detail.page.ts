import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/api/rest.service';
import Swal from 'sweetalert2';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-adpopcorn-detail',
  templateUrl: './adpopcorn-detail.page.html',
  styleUrls: ['./adpopcorn-detail.page.scss'],
})
export class AdpopcornDetailPage implements OnInit {
  campaignKey: string = "";
  adPopcornDetail: any;
  seq: string = "";
  userSeq: any;
  adPopcornDetailJpg: any;
  RedirectURL: any;

  constructor(
    private rest: RestService,
    private router: Router,
    private route: ActivatedRoute,) { }

  async ngOnInit() {
    this.userSeq = localStorage.getItem("seq");
    this.adPopcornDetail = [];
    this.campaignKey = this.route.snapshot.params['campaignKey'];
    this.adPopcornDetailJpg = []
    this.RedirectURL = '';
  }

  ionViewWillEnter() {
    this.getAdPopcornDetail();
  }

  getAdPopcornDetail() {
    
    this.rest.getAdPopcornInfo().subscribe((data:any) => {
      this.adPopcornDetail = data.CampaignInfo.filter((item:any) => item.CampaignKey == this.campaignKey)[0];
      this.adPopcornDetailJpg = this.adPopcornDetail.Images[0].URL;
      
      if(data.ResultMsg == "success") {
        this.rest.getAdPopcornJoin(this.campaignKey, this.userSeq).subscribe((data:any) => {
          if(data.Result == true) {
            console.log(data.RedirectURL);
            console.log(data);
            this.RedirectURL = data.RedirectURL
            //  https://apapi.adpopcorn.com/ap/v1/postback/thirdparty/AchievePostBack?tid=abcde&sign=df6f58808ebfd3e609c234cf2283a989
            
            // URL 문자열
              const url = new URL(data.RedirectURL);
              const searchParams = new URLSearchParams(url.search);

              const tid = searchParams.get('tid');
              const cid = searchParams.get('cid');
              const md5Hash = CryptoJS.MD5(tid + this.campaignKey);

              console.log(md5Hash)
              console.log('https://apapi-staging.adpopcorn.com/ap/v1/postback/thirdparty/AchievePostBack?tid=' + tid + '&sign=' + md5Hash)
              // tid+this.campaignKey
              // const url = 'https://apapi.adpopcorn.com/ap/v1/postback/thirdparty/AchievePostBack?tid=' + tid + '&sign='
          }
        });
      }
    });
  }

    missionStart() {
      console.log('missionStart')    
    }
}
