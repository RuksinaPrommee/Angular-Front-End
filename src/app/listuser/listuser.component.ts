import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { MyNewInterface } from '../my-new-interface';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../service/login.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  providers: [ApiService]

})
export class ListUserComponent implements OnInit {

  ngOnInit(): void {
    this.getUser();
  }
  title = 'userapp';
  id: number = null;
  firstName: string = "";
  lastName: string = "";
  _getData: MyNewInterface[];

  constructor(private apiService: ApiService, private app: LoginService,
    private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  logout() {
    this.app.postlogout(() => {
      this.router.navigateByUrl('/login');
      console.log('LOGOUT');
    });
  }

  getUser(): void {
    this.apiService.get()
      .subscribe(
        resultData => { this._getData = resultData; console.log(this._getData) },
      )
  }

  getUserid(): void {
    // let user : MyNewInterface = {
    //   id:this.id,
    //   firstName: this.firstName,
    //   lastName: this.lastName
    // };
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getUserId(id)
      .subscribe(user => user);
  }

  postData() {
    console.log(this.firstName);
    let user: MyNewInterface = {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName
    };
    this.apiService.post(user)
      .subscribe((m) => {
        console.log(user);
        this._getData.push(user);
      })
  }

  // postData = function () {
  //   let user:MyNewInterface = {
  //     id:this.id,
  //     firstName: this.fisrtName,
  //     lastName: this.lastName
  //   };
  //   this.apiService.post(user)
  //   .subscribe((m)=>{
  //     this._getData.push(m);
  //     error => console.log("Error :: " + error)
  //   })
  // }

  deleteUser(user: MyNewInterface): void {
    this._getData = this._getData.filter(m => m !== user);
    this.apiService.delete(user).subscribe();
  }


}

