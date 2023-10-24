import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/api/rest.service';
import { InAppBrowser, InAppBrowserOptions, InAppBrowserObject } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-prs-detail',
  templateUrl: './prs-detail.page.html',
  styleUrls: ['./prs-detail.page.scss'],
})
export class PrsDetailPage implements OnInit {
  seq: string = "1003";
  mission: any;
  userSeq: any;
  description: string = "";
  browser!: InAppBrowserObject;
  result: Boolean = false;

  constructor(
    private rest: RestService,
    private route: ActivatedRoute,
    private inAppBrowser: InAppBrowser) { }

  async ngOnInit() {
    this.seq = this.route.snapshot.params['seq'];
    this.userSeq = localStorage.getItem("seq");
  }
 
  ionViewWillEnter() {
    this.getMissionDetail();
  }

  getMissionDetail() {
    this.mission = [];
    this.rest.getMisionDetail(this.seq).subscribe((data:any) => {
      this.mission = data;
      this.description = this.mission.description.toString().replace(/\\r\\n|\\n|\\r/gm,"\r\n");
    });
  }

  startMission() {
    const options:InAppBrowserOptions = {
      location: 'yes',
      zoom: 'no',
    };

  const browser = this.inAppBrowser.create(this.mission.url, '_blank', options);
  browser.on('loadstop').subscribe(() => {
    browser.executeScript({code: `
    setTimeout(() => {
      var allLinks = document.querySelectorAll('a'); // 모든 링크 가져오기
      var savedLinksArray = [];
      
      for (var i = 0; i < allLinks.length; i++) {
        var link = allLinks[i];
        if (link.textContent.indexOf('저장') !== -1) { // '저장'을 포함한 링크 찾기
          savedLinksArray.push(link);
          link.style.border = '2px solid red'; // 테두리 빨간색으로 변경
        }
      }
    }, 1500)
    `})

    browser.executeScript({code: `
    setInterval(() => {
      var allLinks = document.querySelectorAll('a'); // 모든 링크 가져오기
      var result = false;
      
      for (var i = 0; i < allLinks.length; i++) {
        var link = allLinks[i];
        if (link.textContent.indexOf('저장') !== -1) { // '저장'을 포함한 링크 찾기
          result = link.getAttribute('aria-pressed')

          let message = {result: result}
          webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify(message));          
        }
      }
    }, 300)
    `})
  })

  browser.on('message').subscribe((val) => {
    this.result = val.data.result === 'true'
  })
  }

  requestMission() {
    if (this.result == true) {
      this.rest.postPressMision(this.seq, this.userSeq).subscribe((data:any) => {
        console.log(data);
        if(data.status == "Success") {
          let dotori = localStorage.getItem("dotori");
          localStorage.setItem("dotori", (Number(dotori) + Number(this.mission.dotoli)).toString())
          alert('적립되었습니다.')
        }
      });
    } else {
      alert('미션을 수행한 뒤 다시 시도해 주세요.')
    }
  }

}
