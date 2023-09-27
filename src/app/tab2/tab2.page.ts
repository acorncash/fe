import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/api/rest.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  selectedMenu = "normal";
  answerMisionList: any;
  captureMisionList: any;

  constructor(
    private router: Router,
    private rest: RestService,
  ) {}

  async ngOnInit() {
  }
  
  ionViewWillEnter() {
    this.getMisionList();
  }

  clickMenu(keyword:string) {
    this.selectedMenu = keyword;
  }

  navAnswerDetail(seq:number) {  
    this.router.navigateByUrl('/answer-detail/' + seq);
  }

  navCaptureDetail(seq:number) {  
    this.router.navigateByUrl('/capture-detail/' + seq);
  }

  getMisionList() {
    this.answerMisionList = [];
    this.rest.getMisionList("A").subscribe((data:any) => {
      console.log(data);
      this.answerMisionList = data;
    });

    this.captureMisionList = [];
    this.rest.getMisionList("C").subscribe((data:any) => {
      console.log(data);
      this.captureMisionList = data;
    });
  }
}
