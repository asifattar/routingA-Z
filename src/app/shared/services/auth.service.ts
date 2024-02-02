import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogInStatus: boolean = false;


  constructor(private fireauth: AngularFireAuth, private router: Router) { }

  isAuthenticated(): Promise<boolean> {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        if (this.isLogInStatus) {
          resolve(true);
        } else {
          _reject(false);
        }
      }, 1000);

    })
  }

  getStatusOfLogin() {
    return this.isLogInStatus;
  }

  logInApp(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['/home'])
      this.isLogInStatus = true
    }, _err => {
      alert('somthing went wrong')
      this.router.navigate(['/'])
    })

  }

  // create account 

  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(() => {
      alert('account creted successfull')
      this.router.navigate(['/login'])
    }, _err => {
      alert('somthing went wrong')
      this.router.navigate(['/sign-Up'])
    })
  }


// sing out


  logOut() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      this.isLogInStatus = false; // Update the login status
      this.router.navigate(['/login']);
    }, _err => {
      console.error('Something went wrong in logOut');
    });
  }


}
