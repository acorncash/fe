import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/api/rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-capture-detail',
  templateUrl: './capture-detail.page.html',
  styleUrls: ['./capture-detail.page.scss'],
})
export class CaptureDetailPage implements OnInit {
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
    const toDataURL = (url: RequestInfo | URL) => fetch(url)
    .then(response => response.blob())
    .then(blob => new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result)
      reader.onerror = reject
      reader.readAsDataURL(blob)
    }))

    Swal.fire({
      text: '사진을 첨부하세요',
      input: "file",
      inputAttributes: {
        accept: "image/*",
        "aria-label": "Select Image",
      },
      heightAuto: false,
      showCancelButton: true,
      confirmButtonText: '제출',
      cancelButtonText: "취소",
      
      }).then((result) => {
      if (result.isConfirmed) {
        if(result.value) {
          console.log(result.value);
          
          toDataURL('https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0')
          .then(dataUrl => {
            console.log('RESULT:', dataUrl)

            this.rest.postCaptureMision(this.seq, "703", dataUrl).subscribe((data:any) => {
              console.log(data);
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
            });
          })
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
