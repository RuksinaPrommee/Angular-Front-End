import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  templateUrl: './userlogin.component.html'
})
export class LoginComponent {
  isLoginError: boolean = false;
  OnInit(): void {

  }

  
  constructor(private app: LoginService, private http: HttpClient, private router: Router) {
  }

  credentials = { username: '', password: '' };

  // login() {
  //   this.app.userAuthentication(this.credentials, () => {
  //       this.router.navigateByUrl('/list');
  //   });
  //   return false;
  // }

  login(userName, password) {
    this.app.userAuthentication(this.credentials, ()=>{
      this.router.navigateByUrl('/lists');
    });
    // .subscribe((data: any) => {
    //   localStorage.setItem('userToken', data.access_token);
    //   this.router.navigate(['/lists']);
    // });
  }
  //  ,
  //  (err : HttpErrorResponse)=>{
  //    this.isLoginError = true;
  //  });

}