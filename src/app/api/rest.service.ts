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