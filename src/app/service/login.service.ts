import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

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
export class LoginService {

    private loginUrl = "http://localhost:8080/api/login";

    private logoutUrl = "http://localhost:8080/logout";

    constructor(
        private http: HttpClient) { }

    authenticated = false;

        

    userAuthentication(credentials, callback) {
        const headers = new HttpHeaders(credentials ? {
            authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        } : {});

        this.http.get(this.loginUrl, { headers: headers }).subscribe(response => {
            if (response[this.loginUrl]) {
                this.authenticated = true;
            } else {
                this.authenticated = false;
            }
            return callback && callback();
        });
    }

    postlogout(callback){
        this.http.post(this.logoutUrl, httpOptions).subscribe(response=>{
            this.authenticated = false;
            console.log('Logout Success');
            return callback && callback();
        });
    }




}