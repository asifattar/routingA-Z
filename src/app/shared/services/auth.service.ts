import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogInStatus : boolean = false;


  constructor() { }

  isAuthenticated()  : Promise<boolean>{
    return new Promise ((resolve , reject) => {
      setTimeout(() => {
        resolve(this.isLogInStatus )
      }, 2000);
      
    })
  } 

  getStatusOfLogin(){
    return this.isLogInStatus ;
  }

  logInApp() {
    this.isLogInStatus = true;
  }

  logOut() {
    this.isLogInStatus = false
  }


}
