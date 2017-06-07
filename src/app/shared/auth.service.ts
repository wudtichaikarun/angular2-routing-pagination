import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {

  loggedIn = new Subject<boolean>();

  constructor() { }

  isLoggedIn(): Subject<boolean> {
    return this.loggedIn;
  }

   logIn(){
    this.loggedIn.next(true);
    //console.log("logIn method work");
  }

   logOut() {
   this.loggedIn.next(false);
    //console.log("logOut method work");
  }

}
