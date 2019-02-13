import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
const endpoint = 'http://localhost:8095/ask/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};
@Injectable()
export class RestService {
  constructor(private http: HttpClient) {}
  private extractData(res: Response) {
    return res || {};
  }
  getQuestionLists(): Observable<any> {
    return this.http.get(endpoint + 'questions').pipe(
      map(this.extractData));
  }

  getAnswerPerQues(id): Observable<any> {
    return this.http.get(endpoint + 'questions/' + id).pipe(
      map(this.extractData));
  }

  addQuestion(ques): Observable<any> {
    return this.http
      .post<any>(endpoint + 'questions/add', ques, httpOptions)
      .pipe(
      tap(quest => console.log(`added ques w/ id=${quest.id}`)),
        catchError(this.handleError<any>('addQues'))
      );
  }
  addAnswer(ansModel): Observable<any> {
    return this.http
      .post<any>(endpoint + 'answers/add', ansModel, httpOptions)
      .pipe(
        tap(anserModel => console.log(`added ans w/ id=${anserModel.id}`)),
        catchError(this.handleError<any>('addQues'))
      );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}
