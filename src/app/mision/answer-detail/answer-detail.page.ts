import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/api/rest.service';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-answer-detail',
  templateUrl: './answer-detail.page.html',
  styleUrls: ['./answer-detail.page.scss'],
})
export class AnswerDetailPage implements OnInit {
  seq: string = "0";
  userSeq: any;
  mission: any;
  description: string = "";

  constructor(
    private rest: RestService,
    private router: Router,
    private route: ActivatedRoute,
    private inAppBrowser: InAppBrowser) { }

  async ngOnInit() {
    this.seq = this.route.snapshot.params['seq'];
    this.userSeq = localStorage.getItem("seq");
    console.log(this.seq);
  }

  ionViewWillEnter() {
    this.getMissionDetail();
  }

  getMissionDetail() {
    this.mission = [];
    this.rest.getMisionDetail(this.seq).subscribe((data:any) => {
      console.log(data);
      this.mission = data;
      this.description = this.mission.description.toString().replace(/\\r\\n|\\n|\\r/gm,"\r\n");
    });
  }
  
  openPage(keyword:string, price:string, mall:string){
    const options:InAppBrowserOptions = {
      location: 'yes',
      zoom: 'no',
    };

    const url = `http://naverapp.naver.com/inappbrowser/?url=https%3A%2F%%2Fmsearch.shopping.naver.com%2Fsearch%2Fall%3Fquery=${keyword}%26maxPrice=${price}%26minPrice=${price}%26mall=${mall}&target=new&version=6`
    const browser = this.inAppBrowser.create(url, '_blank', options)
    // window.open("https://nid.naver.com/nidlogin.login?url=https://msearch.shopping.naver.com/search/all?query="+keyword+"%26maxPrice=" + price + "%26minPrice=" + price + "%26mall=" + mall);
  }

  submit(){
    Swal.fire({
      text: '정답을 입력하세요',
      input: 'text',
      heightAuto: false,
      showCancelButton: true,
      confirmButtonText: '제출',
      cancelButtonText: "취소",
      }).then((result) => {
      if (result.isConfirmed) {
        if(result.value == this.mission.answer) {
          this.rest.postAnswerMision(this.seq, this.userSeq, result.value).subscribe((data:any) => {
            console.log(data);
            if(data.status == "Success") {
              let dotori = localStorage.getItem("dotori");
              localStorage.setItem("dotori", (Number(dotori) + Number(this.mission.dotoli)).toString())

              Swal.fire({
                text: "적립이 완료되었습니다",
                icon: 'success',
                heightAuto: false,
                confirmButtonText: '닫기',
              })
              this.router.navigateByUrl('/tabs/tab2');
            } else {
              Swal.fire({
                text: "적립에 실패했습니다",
                icon: 'error',
                heightAuto: false,
                confirmButtonText: '닫기',
              })
            }
          });
        } else {
          Swal.fire({
            text: "정답이 아닙니다",
            icon: 'error',
            heightAuto: false,
            confirmButtonText: '닫기',
          })
        }
      }
    })
  }
}
