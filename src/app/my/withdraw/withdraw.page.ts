import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/api/rest.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.page.html',
  styleUrls: ['./withdraw.page.scss'],
})
export class WithdrawPage implements OnInit {
  userSeq:any = localStorage.getItem("seq");
  amount:any;
  banknumber:any;
  bankname:any;
  dotori:any = "0";
  constructor(
    private rest: RestService,
  ) { }


  ngOnInit() {
      this.rest.getDotoriByUser(this.userSeq).subscribe((data:any) => {
        this.dotori = data.dotoli;
      });
  }

  submit() {
    const data = {
      userSeq: this.userSeq,
      dotoli: this.amount,
      bankAccountNumber: this.banknumber,
      bankAccountName: this.bankname,
    }

    var json = JSON.stringify(data) ;
    console.log(json);

    if(Number(this.amount)<10000){
      Swal.fire({
        text: "10000원 이상부터 출금할 수 있습니다.",
        icon: 'error',
        heightAuto: false,
        confirmButtonText: '닫기',
      })
      return
    }

    this.rest.postAddWithdraw(json).subscribe((data:any) => {
      console.log(data);
      if(data.status != "Fail") {
        Swal.fire({
          text: "출금 신청이 완료되었습니다. 영업일 기준 2~3일 소요",
          icon: 'success',
          heightAuto: false,
          confirmButtonText: '닫기',
        })
        this.rest.getDotoriByUser(this.userSeq).subscribe((data:any) => {
          this.dotori = data.dotoli;
        });
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
