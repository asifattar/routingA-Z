import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { iusers } from '../../interface/iusers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {



  usersinfo : iusers[] = []


  selectedPersone !: iusers ; 


  constructor(private _usersservice : UsersService ,
    private _router : Router) { }


  gotoDashbord() {
    this._router.navigate(['/'])

  }
  gotoProducts() {
    this._router.navigate(['products'])
  }

  ngOnInit(): void {
    this.usersinfo = this._usersservice.getAllusers()
    console.log(this.usersinfo);
    this.selectedPersone = this.usersinfo[0] 
    console.log(this.selectedPersone);    
  }

  

}
