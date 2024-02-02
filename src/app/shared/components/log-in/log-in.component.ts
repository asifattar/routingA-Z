import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {


  email : string = '' ;
  password : string = '' ;





  constructor( private _authService : AuthService) { }

  ngOnInit(): void {
  }

  login(){
  if(this.email == ''){
    alert (' enter valid email')
    return
  }
  if(this.password == ''){
    alert (' enter valid password')
    return
  }

  this._authService.logInApp(this.email , this.password);
  // this._authService.getStatusOfLogin();

  this.email = '' ;
  this.password = '' ;

  }

  





}
