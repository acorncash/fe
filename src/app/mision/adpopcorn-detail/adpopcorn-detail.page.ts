import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/api/rest.service';
import Swal from 'sweetalert2';
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

  constructor(
    private rest: RestService,
    private router: Router,
    private route: ActivatedRoute,) { }

  async ngOnInit() {
    // this.seq = this.route.snapshot.params['seq'];
    this.userSeq = localStorage.getItem("seq");
    this.adPopcornDetail = [];
    this.campaignKey = this.route.snapshot.params['campaignKey'];
    this.adPopcornDetailJpg = []
    
    // console.log(this.seq);
  }

  ionViewWillEnter() {
    this.getAdPopcornDetail();
  }

  getAdPopcornDetail() {
    this.rest.getAdPopcornInfo().subscribe((data:any) => {
      this.adPopcornDetail = data.CampaignInfo.filter((item:any) => item.CampaignKey == this.campaignKey)[0];
      this.adPopcornDetailJpg = this.adPopcornDetail.Images[0].URL;
      console.log(this.adPopcornDetailJpg)
      console.log(this.adPopcornDetail)
    });
    console.log(this.campaignKey)
  }

  missionStart() {

  }
}
