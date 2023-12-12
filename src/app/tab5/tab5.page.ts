import { Component } from '@angular/core';
@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {
  name:any;
  email:any;
  constructor(
  ) {}

  ngOnInit() {
    this.name = localStorage.getItem("name");
    this.email = localStorage.getItem("email");
  }
}
