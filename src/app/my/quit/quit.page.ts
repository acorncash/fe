import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/api/rest.service';

@Component({
  selector: 'app-quit',
  templateUrl: './quit.page.html',
  styleUrls: ['./quit.page.scss'],
})
export class QuitPage implements OnInit {
  userSeq: any;
  constructor(
    private rest: RestService,
    private router: Router,
  ) { }

  async ngOnInit() {
    this.userSeq = localStorage.getItem("seq");
  }

  userDelete() {
    this.rest.postDelete(this.userSeq).subscribe((data:any) => {
      console.log(data);
      if(data.status == "Success") {
        alert('탈퇴가 완료되었습니다')
        this.router.navigateByUrl('/login');
      } else {
        alert('회원 탈퇴 중 문제가 생겼습니다')
      }
    });
  }
}
