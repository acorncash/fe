import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prs-detail',
  templateUrl: './prs-detail.page.html',
  styleUrls: ['./prs-detail.page.scss'],
})
export class PrsDetailPage implements OnInit {
  seq: number = 0;
  constructor(
    private router: Router,
    private route: ActivatedRoute,) { }

  async ngOnInit() {
    this.seq = this.route.snapshot.params['seq'];
    console.log(this.seq);
  }

}
