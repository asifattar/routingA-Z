import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { iusers } from 'src/app/shared/interface/iusers';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  seletedUserId !: number;
  selectedUser !: iusers; 
  
  

  constructor(private userservice : UsersService , private _route : ActivatedRoute ,private _router : Router) { }

  ngOnInit(): void {
    // this.seletedUserId = +this._route.snapshot.params['id'];
    this._route.params
    .subscribe((param : Params) => {
      this.seletedUserId = +param['id']
      this.selectedUser = this.userservice.getSelectedUser(this.seletedUserId)!
    })

    console.log(this.selectedUser);
    
  }


  gotoEdit(){


    this._router.navigate(['/users' , this.seletedUserId , 'edit' ],{
      queryParamsHandling : 'preserve'
    })



  }

}
