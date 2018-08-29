import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Routes,RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule, NgbPaginationModule, NgbAlertModule,NgbModalModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UserUpdateComponent } from './updateuser/updateuser.component';
import {ListUserComponent} from './listuser/listuser.component';
import {LoginComponent} from './login/userlogin.component';
import {ApiService} from './service/api.service';
import {LoginService} from './service/login.service';
import {UrlPermission} from "./url.permission";

const appRoutes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'lists', 
    component: ListUserComponent
  },
  {
    path: 'updateuser/:id',
    component: UserUpdateComponent
  },
  {
    path: '**', redirectTo: '/login', pathMatch: 'full'
  }
  
]

@NgModule({
  declarations: [
    AppComponent,
    UserUpdateComponent,
    ListUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
    NgbModalModule
  ],
  providers: [ApiService,LoginService,UrlPermission],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
