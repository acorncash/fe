import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/api/rest.service';
@Component({
  selector: 'app-point',
  templateUrl: './point.page.html',
  styleUrls: ['./point.page.scss'],
})
export class PointPage implements OnInit {
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
    this.getDotoriByUser();
  }

  getDotoriByUser() {
    this.list = [];
    this.rest.getDotoriByDotoli(this.userSeq).subscribe((data:any) => {
      console.log(data);
      this.list = data;
    });
  }

  datetimeToString(datetime:string) {
    const array = datetime.split("T");
    return array[0];
  }
}
