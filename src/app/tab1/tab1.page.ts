import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/api/rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  dotori:any = "0";
  name:any;
  misionList: any;
  captureMisionList: any;
  userSeq: any;

  constructor(
    private router: Router,
    private rest: RestService,
  ) {}
  
  ngOnInit() {
    // localStorage.setItem("name", "사용자")
    // localStorage.setItem("dotori", "0")
    // localStorage.setItem("seq", "809")
    
    this.name = localStorage.getItem("name");
    this.dotori = localStorage.getItem("dotori");
    this.userSeq = localStorage.getItem("seq");
    // if (this.userSeq !== undefined) {
    //   this.rest.getLogin("3047198451", "000000").subscribe((data:any) => {
    //     console.log(data);
    //     localStorage.setItem("name", data.nickname)
    //     localStorage.setItem("dotori", data.dotoli)
    //     localStorage.setItem("seq", data.seq)
  
    //     this.name = localStorage.getItem("name");
    //     this.dotori = localStorage.getItem("dotori");
    //     this.userSeq = localStorage.getItem("seq");
    //   });
    // }

    this.rest.getUser(this.userSeq).subscribe((data:any) => {
      console.log(data);
    });
  }

  ionViewWillEnter() {
    this.getMisionList();
    this.dotori = localStorage.getItem("dotori");
  }
  
  IonViewDidEnter() {
    this.getMisionList();
    this.dotori = localStorage.getItem("dotori");
  }

  navAnswerDetail(seq:number) {  
    this.router.navigateByUrl('/answer-detail/' + seq);
    this.dotori = localStorage.getItem("dotori");
  }

  navCouponDetail(seq:number) {  
    this.router.navigateByUrl('/coupon-detail/' + seq);
    this.dotori = localStorage.getItem("dotori");
  }

  getMisionList() {
    this.misionList = [];
    this.rest.getMisionList("A", this.userSeq).subscribe((data:any) => {
      console.log(data);
      this.misionList = data;
    });
    this.rest.getMisionList("C", this.userSeq).subscribe((data:any) => {
      console.log(data);
      this.captureMisionList = data;
    });
  }
  
  addComma(string:any) {
    return string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  notProvided() {
    alert("서비스 준비중입니다");
  }

  pointList() {
    this.router.navigateByUrl('/point');
  }

  withdrawList() {
    this.router.navigateByUrl('/withdraw-list');
  }
  
  navDetail(seq:number) {  
    this.router.navigateByUrl('/coupon-detail/' + seq);
  }

  recommenderDetail() {  
    this.router.navigateByUrl('/recommender-detail/' + this.userSeq);
  }

  recommenderList() {  
    this.router.navigateByUrl('/recommender-list/' + this.userSeq);
  }

  attendanceCheck() {
    this.rest.postAttendanceCheck(this.userSeq).subscribe((data:any) => {
      console.log(data);
        if(data.status == "Success") {
          let dotori = localStorage.getItem("dotori");
          localStorage.setItem("dotori", (Number(dotori) + Number(1)).toString())

          Swal.fire({
            text: "출석체크를 완료하여 1 포인트가 적립되었습니다!",
            icon: 'success',
            heightAuto: false,
            confirmButtonText: '닫기',
          })
        } else {
          Swal.fire({
            text: "출석체크는 하루에 한번만 가능합니다",
            icon: 'error',
            heightAuto: false,
            confirmButtonText: '닫기',
          })
        }
    });
    this.dotori = localStorage.getItem("dotori");
  }
  
}
