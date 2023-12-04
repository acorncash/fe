import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/api/rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  seq: number = 0;
  list: any;
  userSeq: any;
  token: any;
  dotori: any;
  price: any;
  title: any;
  company: any;
  catagory: any;
  image : any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rest: RestService,) { }
    
  async ngOnInit() {
    this.userSeq = localStorage.getItem("seq");
    this.seq = this.route.snapshot.params['seq'];
    if(this.seq == 0){ // 교촌 20000
      this.token = 'aWNIRnNrZ01McFk0dUxMTTBOUmJsdy94WWExazdOSkc3NmFCRkJwV1l4eU1rZkhLaVQwM1BKQ0RBK1h5OGsybQ';
      this.price = 20000;
      this.title = '반반오리지널(한마리)';
      this.company = '교촌치킨';
      this.catagory = '식품';
      this.image = '../../assets/image/gift_1.png';
    } else if(this.seq == 1){ // 투썸 라떼 5500
      this.token = 'WExMd1plQ1NoUzhnbTlQSXdGUXZRcXAwZll4MXZHbksrZTBQaEllbkRRK1FKUXl0TnJxSUUzbW9lY0x6eVdSRg';
      this.price = 5500;
      this.title = '바닐라 카페라떼 (R)';
      this.company = '투썸플레이스';
      this.catagory = '식품';
      this.image = '../../assets/image/gift_2.png';
    } else if(this.seq == 2){ // 오레오초코몬스터설빙 12900
      this.token = 'aWNIRnNrZ01McFk0dUxMTTBOUmJsdy94WWExazdOSkc3NmFCRkJwV1l4eU1rZkhLaVQwM1BKQ0RBK1h5OGsybQ';
      this.price = 12900;
      this.title = '오레오초코몬스터설빙';
      this.company = '설빙';
      this.catagory = '식품';
      this.image = '../../assets/image/gift_3.png';
    } else if(this.seq == 3){ // 스트로베리 초콜릿 생크림 37000
      this.token = 'cS9DeXdWaUZsdzBvME9ETGNPTlJoWlVzMjZYOUFJWFJjalRiVlRUbnV2WUxEV1dTandqVmlML0J1d200RFl2UA';
      this.price = 37000;
      this.title = '스트로베리 초콜릿 생크림';
      this.company = '투썸플레이스';
      this.catagory = '식품';
      this.image = '../../assets/image/gift_4.png';
    } else if(this.seq == 4){ // 해피스마일 케이크 25000
      this.token = 'a00zVXRvQnNwcmFBVzhDekFOMkhjclFvNEQwV1Zac1o4SGplWXRYdU5QOUJGNjdYMEZoZkNDZFNoU25hVlRKdA';
      this.price = 25000;
      this.title = '해피스마일 케이크';
      this.company = '파리바게트';
      this.catagory = '식품';
      this.image = '../../assets/image/gift_5.png';
    }
  }

  ionViewWillEnter() {
    this.dotori = localStorage.getItem("dotori");
    this.getGiftDetail();
  }

  IonViewDidEnter() {
    this.dotori = localStorage.getItem("dotori");
  }

  getGiftDetail() {
    // const url = new URL(data.RedirectURL);
    // const tid = searchParams.get('tid');
    // this.rest.getAdPopcornInfo().subscribe((data:any) => {
      // this.adPopcornDetail = data.CampaignInfo.filter((item:any) => item.CampaignKey == this.campaignKey)[0];
      // this.adPopcornDetailJpg = this.adPopcornDetail.Images[0].URL;
      
      // if(data.ResultMsg == "success") {
        
      //     if(data.Result == true) {
            
      //       // URL 문자열
      //         const url = new URL(data.RedirectURL);
      //         const searchParams = new URLSearchParams(url.search);
      //         const tid = searchParams.get('tid');
      //         const cid = searchParams.get('cid');
      //         this.tid = tid;
      //         this.md5TidCampaignKey = md5TidCampaignKey;
      //     }
        
      // }
    // });
  }

  pay(){
    if(this.dotori < this.price){
      Swal.fire({
        text: "도토리가 부족합니다. 현재 도토리 : " + this.dotori + "개",
        icon: 'error',
        heightAuto: false,
      })
      return
    }
    Swal.fire({
      text: "정말 결제 하시겠습니까?",
      icon: 'question',
      showCancelButton: true,
      heightAuto: false,
      confirmButtonText: "네",
      cancelButtonText: "아니요",
    }).then((result) =>
    {
        if (result.isConfirmed) {
          this.rest.sendKakaoGift(this.userSeq, this.token).subscribe((data:any) => {
            console.log(data);
            this.list = data;
          });
          Swal.fire({
            text: "결제가 완료되었습니다",
            icon: 'success',
            heightAuto: false,
          })
        }
    });
  }

  addComma(string:any) {
    return string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

}
