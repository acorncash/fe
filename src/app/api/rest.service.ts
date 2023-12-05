import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

// const endpoint = 'http://14.7.33.34:8080/api/';
const endpoint = 'http://localhost:8080/api/';

const adPopcornMediakey = '241494633';

const adPopcornLiveUrl = 'https://apapi.adpopcorn.com';
const adPopcornTestUrl = 'https://apapi-staging.adpopcorn.com';

const getAdPopcornMisson = `${adPopcornTestUrl}/ap/v1/api/mediamix/meta?mediakey=${adPopcornMediakey}&country=KR&language=ko`

// const getCsrfTokenFromCookie = () => {
//   // CSRF 토큰을 발급 받을 서버의 엔드포인트 URL을 설정합니다.
//   var csrfTokenUrl = `${endpoint}user/token`;

//   // GET 요청을 보냅니다.
//       fetch(csrfTokenUrl,{
//         method: "GET",
//         mode: "cors", // CORS 요청 모드 설정
//         credentials: "include", // 'same-origin' 또는 'omit' 사용
//     }).then(function(response) {
//           if (!response.ok) {
//               throw new Error("Failed to fetch CSRF token");
//           }
//           return response.text();
//       })
//       .then(function(csrfToken) {
//           console.log("Received CSRF token:", csrfToken);
//       })
//       .catch(function(error) {
//           console.error("Error fetching CSRF token:", error);
//       });

//   const name = 'XSRF-TOKEN=';
//   const decodedCookie = decodeURIComponent(document.cookie);
//   const cookieArray = decodedCookie.split(';');
//   for (const cookie of cookieArray) {
//     if (cookie.indexOf(name) === 0) {
//       alert(cookie.substring(name.length, cookie.length))
//       console.log(1,cookie.substring(name.length, cookie.length))
//       return cookie.substring(name.length, cookie.length);
//     }
//   }
//   return '';
// }

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    // 'X-XSRF-TOKEN': getCsrfTokenFromCookie()
  })
  // ,withCredentials: true
};

const httpFileOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'multipart/form-data',
    // 'X-XSRF-TOKEN': getCsrfTokenFromCookie()
  })
  // ,withCredentials: true
};

@Injectable({
  providedIn: "root"
})

export class RestService {
  
	constructor(private http: HttpClient) { }
  
  private extractData(res: any) {
    let body = res;
    return body || { };
  }

  getLogin(socialKey:string, refreshToken:string): Observable<any> {
    return this.http.get(endpoint + "user/" + 'login/' + socialKey + "/" + refreshToken).pipe(
    map(this.extractData));
  }

  getKakaoLogin(code:string) {
    return this.http.get(endpoint + `user/kakao?code=${code}`).pipe(
      map(this.extractData));
  }
  
  getMisionList(type:string, userSeq:string): Observable<any> {
    return this.http.get(endpoint + 'mission/missionByType/' + userSeq + "/" + type).pipe(
    map(this.extractData));
  }
  
  getMisionDetail(seq:string): Observable<any> {
    return this.http.get(endpoint + 'mission/' + seq).pipe(
    map(this.extractData));
  }

  getDotoriByUser(userSeq:string) {
    return this.http.get(endpoint + 'user/' + "dotoliByUser/" + userSeq).pipe(
    map(this.extractData));
  }

  getAdPopcornInfo(): Observable<any> {
    return this.http.get(endpoint + 'mission/' + "getAdPopcornInfo").pipe(
    map(this.extractData));
  }
  
  getAdPopcornJoin(campaignKey:string, usn:string) {
    return this.http.get(endpoint + 'mission/' + 'getAdPopcornJoin/' + campaignKey + '/' + usn).pipe(
      map(this.extractData));
  }

  getWithdrawByUser(seq:string): Observable<any> {
    return this.http.get(endpoint + 'withdraw/' + 'withdrawByUser/' + seq).pipe(
    map(this.extractData));
  }

  postJoin(jsonModel:string) {
    return this.http.post(endpoint + 'user/' + 'join', jsonModel, httpOptions).pipe(
      map(this.extractData));
  }

  postAnswerMision(seq:string, userSeq:string, answer:string) {
    return this.http.post(endpoint + 'mission/' + 'answerMission/' + seq + "/" + userSeq + "/" + answer, "", httpOptions).pipe(
      map(this.extractData));
  }

  postPressMision(seq:string, userSeq:string) {
    return this.http.post(endpoint + 'mission/' + 'pressMission/' + seq + "/" + userSeq, "", httpOptions).pipe(
      map(this.extractData));
  }

  postCaptureMision(jsonModel:string) {
    return this.http.post(endpoint + 'mission/' + 'captureMission', jsonModel, httpFileOptions).pipe(
      map(this.extractData));
  }

  postAddWithdraw(jsonModel:string) {
    return this.http.post(endpoint + 'withdraw/' + 'addWithdraw', jsonModel, httpOptions).pipe(
      map(this.extractData));
  }

  postDelete(userSeq:string) {
    return this.http.post(endpoint + 'user/' + 'uesrDelete/' + userSeq, httpOptions).pipe(
      map(this.extractData));
  }
  
}