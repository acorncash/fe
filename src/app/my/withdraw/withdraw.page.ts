import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/api/rest.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.page.html',
  styleUrls: ['./withdraw.page.scss'],
})
export class WithdrawPage implements OnInit {
  userSeq = 703;
  amount:any;
  banknumber:any;
  bankname:any;

  constructor(
    private rest: RestService,
  ) { }


  ngOnInit() {
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

    this.rest.postAddWithdraw(json).subscribe((data:any) => {
      console.log(data);
      if(data.status != "Fail") {
        Swal.fire({
          text: "출금 신청이 완료되었습니다",
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
}
