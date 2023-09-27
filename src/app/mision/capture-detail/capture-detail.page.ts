import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/api/rest.service';

@Component({
  selector: 'app-capture-detail',
  templateUrl: './capture-detail.page.html',
  styleUrls: ['./capture-detail.page.scss'],
})
export class CaptureDetailPage implements OnInit {
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
