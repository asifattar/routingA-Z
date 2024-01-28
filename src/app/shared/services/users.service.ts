import { Injectable } from '@angular/core';
import { iusers } from '../interface/iusers';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 
 

   usersArray : iusers[] = [
    {
      firstName: "John",
      lastName: "Doe",
      surname: "Smith",
      dateOfBirth: "1990-05-15",
      userRole : "admin",
      nativePlace: "New York ",
      id : 1
    },
    {
      firstName: "Alice",
      lastName: "Johnson",
      surname: "Brown",
      dateOfBirth: "1988-09-23",
      userRole : "customer",
      nativePlace: "Los Angeles",
      id : 2},

    {
      firstName: "Michael",
      lastName: "Williams",
      surname: "Jones",
      dateOfBirth: "1995-12-07",
      userRole : "admin",
      nativePlace: "Chicago",
      id : 3},

    {
      firstName: "Emily",
      lastName: "Davis",
      surname: "Wilson",
      dateOfBirth: "1992-03-30",
      userRole : "customer",
      nativePlace: "Houston" ,
      id : 4},

    {
      firstName: "Daniel",
      lastName: "Anderson",
      surname: "Martinez",
      dateOfBirth: "1985-11-10",
      userRole : "admin",
      nativePlace: "Miami",
      id : 5},

    {
      firstName: "Sophia",
      lastName: "Garcia",
      surname: "Thompson",
      dateOfBirth: "1998-07-18",
      userRole : "customer",
      nativePlace: "San Francisco",
      id : 6},

    {
      firstName: "Matthew",
      lastName: "Hernandez",
      surname: "Lee",
      dateOfBirth: "1993-01-25",
      userRole : "admin",
      nativePlace: "Seattle",
      id : 10},

    {
      firstName: "Olivia",
      lastName: "Miller",
      surname: "Walker",
      dateOfBirth: "1997-06-08",
      userRole : "customer",
      nativePlace: "Boston",
      id : 7},

    {
      firstName: "David",
      lastName: "Gonzalez",
      surname: "Clark",
      dateOfBirth: "1987-04-12",
      userRole : "admin",
      nativePlace: "Dallas",
      id : 8},

    {
      firstName: "Emma",
      lastName: "Rodriguez",
      surname: "Adams",
      dateOfBirth: "1991-08-05",
      userRole : "customer",
      nativePlace: "Phoenix",
      id :9}

  ];
  

  constructor() { }  

  getAllusers() : Array<iusers>{
    return this.usersArray
  }

  getSelectedUser(seletedUserId: number) {
    return this.usersArray.find(per => per.id === seletedUserId)
  }

  getediterdUser(updateduser : iusers) {
     this.usersArray.forEach(user => {
      if ( user.id === updateduser.id){
        user.firstName = updateduser.firstName,
        user.lastName = updateduser.lastName,
        user.dateOfBirth = updateduser.dateOfBirth,
        user.nativePlace = updateduser.nativePlace,
        user.surname = updateduser.surname
      }
     })
  }
}
