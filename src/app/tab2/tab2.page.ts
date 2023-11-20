import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/api/rest.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  selectedMenu = "answer";
  answerMissionList: any;
  captureMissionList: any;
  userSeq: any;
  pressMissionList: any;

  constructor(
    private router: Router,
    private rest: RestService,
  ) {
    this.userSeq = localStorage.getItem("seq");
  }

  async ngOnInit() {
    this.userSeq = localStorage.getItem("seq");
  }
  
  IonViewDidEnter() {
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

  navPressDetail(seq:number) {  
    this.router.navigateByUrl('/prs-detail/' + seq);
  }

  getMisionList() {
    this.answerMissionList = [];
    this.rest.getMisionList("A", this.userSeq).subscribe((data:any) => {
      console.log(data);
      this.answerMissionList = data;
    });

    this.captureMissionList = [];
    this.rest.getMisionList("C", this.userSeq).subscribe((data:any) => {
      console.log(data);
      this.captureMissionList = data;
    });

    this.pressMissionList = [];
    this.rest.getMisionList("P", this.userSeq).subscribe((data:any) => {
      this.pressMissionList = data;
    });
  }

  addComma(string:any) {
    return string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
 