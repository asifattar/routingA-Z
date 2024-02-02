import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
email: any;
password: any;


  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }


  singUp(){
    if(this.email == ''){
      alert (' enter valid email')
      return
    }
    if(this.password == ''){
      alert (' enter valid password')
      return
    }
  
    this.auth.register(this.email , this.password);
    this.email = '' ;
    this.password = '' ;
  
    }
}
