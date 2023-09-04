import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

}
