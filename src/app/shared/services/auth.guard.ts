import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService , private _router : Router) { }


  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return true

      
  //   return this._authService.isAuthenticated()
  //     .then(( isAuth : boolean) => {
  //       if( isAuth){
  //         return true
  //       }else{
  //         this._router.navigate(["/login"])
  //         return false
  //       }
  //     })
  // }
}

}