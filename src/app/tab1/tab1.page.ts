import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/api/rest.service';
import Swal from 'sweetalert2';
declare let cordova: any;

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
  userData:any;

  constructor(
    private router: Router,
    private rest: RestService,
  ) {}
  
  ngOnInit() {
    // localStorage.setItem("name", "사용자")
    // localStorage.setItem("seq", "809")
    
    const successCallback = (result: any) => {
      console.log('Success:', result); // 네이티브 메서드가 성공적으로 실행된 경우 결과를 처리합니다.
    };
    
    const errorCallback = (error: any) => {
      console.error('Error:', error); // 네이티브 메서드 실행 중에 오류가 발생한 경우 오류를 처리합니다.
    };
    
    // cordova.exec(successCallback, errorCallback, 'testPlugin', 'coolMethod', ["Hello, World!"]);
    
    this.name = localStorage.getItem("name");
    this.userSeq = localStorage.getItem("seq");
    this.rest.getDotoriByUser(this.userSeq).subscribe((data:any) => {
      console.log(data);
      this.dotori = data.dotoli;
      this.userData = data
      console.log(this.userData.recommendCnt);
    });

    // this.rest.getUser(this.userSeq).subscribe((data:any) => {
    //   console.log(data);
    //   this.userData = data;
    //   console.log(this.userData.recommendCnt);
    // });
  }

  ionViewWillEnter() {
    this.getMisionList();
    this.rest.getDotoriByUser(this.userSeq).subscribe((data:any) => {
      this.dotori = data.dotoli;
    });
  }
  
  IonViewDidEnter() {
    this.getMisionList();
    this.rest.getDotoriByUser(this.userSeq).subscribe((data:any) => {
      this.dotori = data.dotoli;
    });
  }

  navAnswerDetail(seq:number) {  
    this.router.navigateByUrl('/answer-detail/' + seq);
    this.rest.getDotoriByUser(this.userSeq).subscribe((data:any) => {
      this.dotori = data.dotoli;
    });
  }

  navCouponDetail(seq:number) {  
    this.router.navigateByUrl('/coupon-detail/' + seq);
    this.rest.getDotoriByUser(this.userSeq).subscribe((data:any) => {
      this.dotori = data.dotoli;
    });
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

    this.rest.getDotoriByUser(this.userSeq).subscribe((data:any) => {
      this.dotori = data.dotoli;
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
          this.rest.getDotoriByUser(this.userSeq).subscribe((data:any) => {
            this.dotori = data.dotoli;
          });
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
  }
  
}
