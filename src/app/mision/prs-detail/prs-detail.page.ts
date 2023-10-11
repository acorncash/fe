import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import cheerio from 'cheerio';
import { children } from 'cheerio/lib/api/traversing';

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

      // // ❶ HTML 로드하기
      // const resp1 = await axios.get(
      //   'https://pcmap.place.naver.com/restaurant/1815321561/home?from=map&fromPanelNum=2&x=127.0888519&y=37.5960637&timestamp=202310112021'
      // );
    
      // const loadData1 = cheerio.load(resp1.data); // ❷ HTML을 파싱하고 DOM 생성하기
      // const elements1 = loadData1('.Mq0QC>path');    // ❸ CSS 셀렉터로 원하는 요소 찾기
      // console.log(elements1);
      
      // // ➍ 찾은 요소를 순회하면서 요소가 가진 텍스트를 출력하기
      // elements1.each((idx, el) => {
      //   // ❺ text() 메서드를 사용하기 위해 Node 객체인 el을 $로 감싸서 cheerio 객체로 변환
      //   const a = el.attribs;
      //   const b = JSON.stringify(a);
      //   const c = JSON.parse(b);
      //   console.log(a);
      //   console.log(b);
      //   console.log(c.d);
      // });

      // // ❶ HTML 로드하기
      // const resp = await axios.get(
      //   'https://www.instagram.com/p/CyJAWsLLZrE/'
      // );
    
      // const loadData = cheerio.load(resp.data); // ❷ HTML을 파싱하고 DOM 생성하기
      // const elements = loadData('.xp7jhwk');    // ❸ CSS 셀렉터로 원하는 요소 찾기
      // console.log(resp.data);
      // console.log(elements);
      // // ➍ 찾은 요소를 순회하면서 요소가 가진 텍스트를 출력하기
      // elements.each((idx, el) => {
      //   // ❺ text() 메서드를 사용하기 위해 Node 객체인 el을 $로 감싸서 cheerio 객체로 변환
      //   console.log(el);
      // });
  }

}
