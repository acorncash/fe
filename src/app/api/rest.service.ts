import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://14.7.33.34:8080/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
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

  kakao(): Observable<any> {
    const clientID = "b2f9c8bcb75d5dc1e65936bcffc386d1";
    const redirectURL = "http://localhost:8080/oauth";

    return this.http.get('https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=' + redirectURL + '&redirect_uri=' + redirectURL).pipe(
    map(this.extractData));
  }

  getMisionList(type:string): Observable<any> {
    return this.http.get(endpoint + 'mission/missionByType/' + type).pipe(
    map(this.extractData));
  }
  
  getMisionDetail(seq:string): Observable<any> {
    return this.http.get(endpoint + 'mission/' + seq).pipe(
    map(this.extractData));
  }

  getDotoriByUser(seq:string): Observable<any> {
    return this.http.get(endpoint + 'dotoli/' + "dotoliByUser/" + seq).pipe(
    map(this.extractData));
  }

  getWithdrawByUser(seq:string): Observable<any> {
    return this.http.get(endpoint + 'withdraw/' + seq).pipe(
    map(this.extractData));
  }

  postAnswerMision(seq:string, userSeq:string, answer:string) {
    return this.http.post(endpoint + 'mission/' + 'answerMission/' + seq + "/" + userSeq + "/" + answer, "", httpOptions).pipe(
      map(this.extractData));
  }

  postCaptureMision(seq:string, userSeq:string, image:any) {
    return this.http.post(endpoint + 'mission/' + 'captureMission/' + seq + "/" + userSeq + "/" + image, "", httpOptions).pipe(
      map(this.extractData));
  }

  postAddWithdraw(jsonModel:string) {
    return this.http.post(endpoint + 'withdraw/' + 'addWithdraw', jsonModel, httpOptions).pipe(
      map(this.extractData));
  }
}