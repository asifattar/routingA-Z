import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor(private _router: Router , private _authService : AuthService) { }

  ngOnInit(): void {
  }


  AddProd() {
    this._router.navigate(['addProd'])
  }

  logIn() {
    this._authService.logInApp()
    alert('your logged in') 
    this._router.navigate(['products'])

   
  }
  logOut() {
    this._router.navigate(['/'])
    this._authService.logOut()
    alert('thanks for the shopping with us')

  }
  
}
