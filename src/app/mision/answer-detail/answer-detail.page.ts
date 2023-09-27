import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/api/rest.service';
@Component({
  selector: 'app-answer-detail',
  templateUrl: './answer-detail.page.html',
  styleUrls: ['./answer-detail.page.scss'],
})
export class AnswerDetailPage implements OnInit {
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
}
