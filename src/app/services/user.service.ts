import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public route: Router) { }


  setUser(objet: any) {
    window.localStorage.setItem('obj', JSON.stringify(objet));
  }

  getUser() {
    let User: any = localStorage.getItem('userid');
    return JSON.parse(User);
  }
}
