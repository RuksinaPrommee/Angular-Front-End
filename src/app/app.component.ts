import { Component,OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/finally';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
  
})
export class AppComponent implements OnInit{

  ngOnInit():void{
    
  }

}
