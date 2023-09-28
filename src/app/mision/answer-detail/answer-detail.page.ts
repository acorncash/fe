import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/api/rest.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-answer-detail',
  templateUrl: './answer-detail.page.html',
  styleUrls: ['./answer-detail.page.scss'],
})
export class AnswerDetailPage implements OnInit {
  seq: string = "0";
  mision: any;

  constructor(
    private rest: RestService,
    private route: ActivatedRoute,) { }

  async ngOnInit() {
    this.seq = this.route.snapshot.params['seq'];
    console.log(this.seq);
  }

  ionViewWillEnter() {
    this.getMisionDetail();
  }

  getMisionDetail() {
    this.mision = [];
    this.rest.getMisionDetail(this.seq).subscribe((data:any) => {
      console.log(data);
      this.mision = data;
    });
  }

  openPage(url:string){
    window.open(url);
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
        if(result.value == this.mision.answer) {
          
          // this.rest.postAnswerMision(this.seq, "703", "result.value").subscribe((data:any) => {
          //   console.log(data);
            if(true) {
              Swal.fire({
                text: "적립이 완료되었습니다",
                icon: 'success',
                heightAuto: false,
                confirmButtonText: '닫기',
              })
            } else {
              Swal.fire({
                text: "적립에 실패했습니다",
                icon: 'error',
                heightAuto: false,
                confirmButtonText: '닫기',
              })
            }
          // });
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
