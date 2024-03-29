import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { iusers } from 'src/app/shared/interface/iusers';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  userId !: number
  usersobj !: iusers 
  canEdite : string = ''
 
  constructor(private _userservice : UsersService , private _route : ActivatedRoute , private _router : Router ) { }

  ngOnInit(): void {
    this.userId = +this._route.snapshot.params['id'];
    this.usersobj = this._userservice.getSelectedUser(this.userId)!
    console.log(this.usersobj);
    this._route.queryParams.subscribe((res : Params) => {
      this.canEdite = res['userRole'];   
      console.log(this.canEdite);
         
    })
        
  }

  onSubmite(){
    console.log(this.usersobj);
    this._userservice.getediterdUser(this.usersobj) ; 
    this._router.navigate(['/users', this.userId])
  }

}
