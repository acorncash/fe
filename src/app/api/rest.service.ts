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

const httpFileOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'multipart/form-data'
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

  getDotoriByUser(seq:string): Observable<any> {
    return this.http.get(endpoint + 'dotoli/' + "dotoliByUser/" + seq).pipe(
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