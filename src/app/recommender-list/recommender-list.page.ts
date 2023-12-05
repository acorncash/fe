import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/api/rest.service';
@Component({
  selector: 'app-recommender-list',
  templateUrl: './recommender-list.page.html',
  styleUrls: ['./recommender-list.page.scss'],
})
export class RecommenderListPage implements OnInit {
  userSeq: any; 
  dotori: any; 
  list: any;

  constructor(
    private rest: RestService,
  ) { }

  ngOnInit() {
    this.userSeq = localStorage.getItem("seq");
    this.rest.getDotoriByUser(this.userSeq).subscribe((data:any) => {
      this.dotori = data.dotoli;
    });
  }
  
  ionViewWillEnter() {
    this.getRecommend();
  }

  getRecommend() {
    this.list = [];
    this.rest.getRecommendList(this.userSeq).subscribe((data:any) => {
      console.log(data);
      this.list = data;
    });
  }

  datetimeToString(datetime:string) {
    const array = datetime.split("T");
    return array[0];
  }
}
