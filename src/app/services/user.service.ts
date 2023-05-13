import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  page = new EventEmitter();

  userName = "";
  userType = 0;
  libro = 0;

  constructor() { }

  setUserName(user: string = "") {
    this.userName = user;
  }

  getUserName() {
    return this.userName;
  }

  setUserType(type: number = 0) {
    this.userType = type;
  }

  getUserType() {
    return this.userType;
  }

  setLibro(type: number = 0) {
    this.libro = type;
  }

  getLibro() {
    return this.libro;
  }
}
