import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/api/rest.service';
@Component({
  selector: 'app-withdraw-list',
  templateUrl: './withdraw-list.page.html',
  styleUrls: ['./withdraw-list.page.scss'],
})
export class WithdrawListPage implements OnInit {
  userSeq: string = "703";
  list: any;

  constructor(
    private rest: RestService,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getWithdrawByUser();
  }

  getWithdrawByUser() {
    this.list = [];
    this.rest.getWithdrawByUser(this.userSeq).subscribe((data:any) => {
      console.log(data);
      this.list = data;
    });
  }

  datetimeToString(datetime:string) {
    const array = datetime.split("T");
    return array[0];
  }

}
