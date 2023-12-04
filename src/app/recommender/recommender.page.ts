import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/api/rest.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-recommender',
  templateUrl: './recommender.page.html',
  styleUrls: ['./recommender.page.scss'],
})
export class RecommenderPage implements OnInit {
  userSeq:any;
  email:any;
  dotori:any = "0";
  constructor(
    private rest: RestService,
  ) { }

  ngOnInit() {
    this.userSeq = localStorage.getItem("seq");
    this.dotori = localStorage.getItem("dotori");
  }

  submit() {
    this.rest.postRecommend(this.userSeq, this.email).subscribe((data:any) => {
      console.log(data);
      if(data.status != "Fail") {
        Swal.fire({
          text: "추천인 포인트 지급이 완료되었습니다.",
          icon: 'success',
          heightAuto: false,
          confirmButtonText: '닫기',
        })
      } else {
        Swal.fire({
          text: data.message,
          icon: 'error',
          heightAuto: false,
          confirmButtonText: '닫기',
        })
      }
    });
  }
  
  addComma(string:any) {
    return string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
