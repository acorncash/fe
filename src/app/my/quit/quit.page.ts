import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quit',
  templateUrl: './quit.page.html',
  styleUrls: ['./quit.page.scss'],
})
export class QuitPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  notProvided() {
    alert("서비스 준비중입니다");
  }
}
