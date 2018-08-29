import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {ApiService} from '../service/api.service';
import {MyNewInterface} from '../my-new-interface';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html'
})

export class UserUpdateComponent implements OnInit {
  @Input() user: MyNewInterface;

  constructor(
    private route: ActivatedRoute,
    private userService: ApiService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUserId(id)
      .subscribe(user => this.user = user);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.userService.update(this.user)
      .subscribe(() => this.goBack());
  }

  // postData(){
  //   console.log(this.firstName);
  // let user:MyNewInterface = {
  //     id:this.id,
  //     firstName: this.firstName,
  //     lastName: this.lastName
  //   };
  //   this.apiService.post(user)
  //   .subscribe((m)=>{
  //     console.log(user);
  //     this._getData.push(user);
  //   })  
  // }
}


