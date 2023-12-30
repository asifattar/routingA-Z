import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  

  constructor(private userservice : UsersService , private _route : ActivatedRoute) { }

  ngOnInit(): void {
    this.seletedUserId = +this._route.snapshot.params['id'];
    this.selectedUser = this.userservice.getSelectedUser(this.seletedUserId)!

    console.log(this.selectedUser);
    
  }

}
