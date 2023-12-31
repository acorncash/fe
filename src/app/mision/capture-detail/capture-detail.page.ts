import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/api/rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-capture-detail',
  templateUrl: './capture-detail.page.html',
  styleUrls: ['./capture-detail.page.scss'],
})
export class CaptureDetailPage implements OnInit {
  seq: number = 0;
  userSeq: number = 0;
  mision: any;
  description: string = "";

  constructor(
    private rest: RestService,
    private router: Router,
    private route: ActivatedRoute,) { 
      
    }

  async ngOnInit() {
    this.seq = this.route.snapshot.params['seq'];
    this.userSeq = Number(localStorage.getItem("seq"));
    console.log(this.seq);
  }

  ionViewWillEnter() {
    this.getMisionDetail();
  }

  getMisionDetail() {
    this.mision = [];
    this.rest.getMisionDetail(this.seq.toString()).subscribe((data:any) => {
      console.log(data);
      this.mision = data;
      this.description = this.mision.description.toString().replace(/\\r\\n|\\n|\\r/gm,"\r\n");
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
          console.log(result);
          
          let file: File = result.value;

            const data = {
              missionSeq: Number(this.seq),
              userSeq: this.userSeq,
              image: result.value,
            }
        
            var json = JSON.stringify(data) ;
            console.log(json);
            
            this.rest.postCaptureMision(json).subscribe((data:any) => {
              console.log(data);
              if(true) {
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
          })
        } else {
          Swal.fire({
            text: "사진을 첨부해주세요",
            icon: 'error',
            heightAuto: false,
            confirmButtonText: '닫기',
          })
        }
      }
    })
  }
}
