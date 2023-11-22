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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rest: RestService,) { }
    
  async ngOnInit() {
    this.userSeq = localStorage.getItem("seq");
    this.token = 'aWNIRnNrZ01McFk0dUxMTTBOUmJsdy94WWExazdOSkc3NmFCRkJwV1l4eU1rZkhLaVQwM1BKQ0RBK1h5OGsybQ';
    this.seq = this.route.snapshot.params['seq'];
    console.log(this.seq);
  }

  ionViewWillEnter() {
    this.dotori = localStorage.getItem("dotori");
  }
  
  IonViewDidEnter() {
    this.dotori = localStorage.getItem("dotori");
  }


  pay(){
    if(this.dotori < 20000){
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

}
