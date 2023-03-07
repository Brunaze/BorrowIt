import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public route: Router) { }

  setUserConnect(user: any) {
    localStorage.setItem('userConnect', JSON.stringify(user));
  }

  getUserConnect() {
    let user: any = localStorage.getItem('userConnect');
    return JSON.parse(user);
  }

  isNotConnected() {
    if (this.getUserConnect() == null) {
      return true;
    } else {
      return false;
    }
  }

  isConnected() {
    if (this.getUserConnect() != null) {
      return true;
    } else {
      return false;
    }
  }

  deconnexion() {
    localStorage.removeItem('userConnect');
    window.location.reload;
  }

}
