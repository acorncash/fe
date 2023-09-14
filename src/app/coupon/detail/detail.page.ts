import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  seq: number = 0;
  constructor(
    private router: Router,
    private route: ActivatedRoute,) { }

  async ngOnInit() {
    this.seq = this.route.snapshot.params['seq'];
    console.log(this.seq);
  }

  popup(){
    Swal.fire({
      text: "정말 결제 하시겠습니까?",
      icon: 'question',
      showCancelButton: true,
      heightAuto: false,
      confirmButtonText: "네",
      cancelButtonText: "아니요",
    }).then((result) =>
    {
        if (result.isConfirmed) {
          Swal.fire({
            text: "결제가 완료되었습니다",
            icon: 'success',
            heightAuto: false,
        
          })
        }
    });
  }

}
