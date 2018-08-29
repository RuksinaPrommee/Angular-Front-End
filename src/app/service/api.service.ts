import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { catchError, tap } from 'rxjs/operators'
import { MyNewInterface } from '../my-new-interface';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import {RequestOptions} from '@angular/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Accept': 'application/json'
  })
  ,withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class ApiService{

  private apiUrl = "http://localhost:8080/api/users";



  constructor(
    private http: HttpClient) { }


  get(): Observable<MyNewInterface[]> {
    return this.http.get<MyNewInterface[]>(this.apiUrl, httpOptions)
      .pipe(
        tap((user: MyNewInterface) => console.log('All user'))
        //catchError(this.handleError('getHeroes', []))
      );
  }

  getUserId(id: number): Observable<MyNewInterface> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<MyNewInterface>(url, httpOptions).pipe(
      tap(_ => console.log(`fetched user id=${id}`)),
      //catchError(this.handleError<MyNewInterface>(`getHero id=${id}`))
    );
  }

  post(user: MyNewInterface): Observable<MyNewInterface> {
    return this.http.post<MyNewInterface>(this.apiUrl, user, httpOptions).pipe(
      tap((user: MyNewInterface) => console.log(`added user w/ id=${user.id}`))
      //catchError(this.handleError<MyNewInterface>('addHero'))
    );
  }

  update(user: MyNewInterface): Observable<any> {
    //const Option = this._getHeader;
    return this.http.put(this.apiUrl + "/" + user.id, user, httpOptions).pipe(
      tap(_ => console.log(`updated user id=${user.id}`))
      //catchError(this.handleError<any>('updateHero'))
    );
  }

  delete(user: MyNewInterface | number): Observable<MyNewInterface> {

    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<MyNewInterface>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted user id=${id}`))
    );
  }
}
