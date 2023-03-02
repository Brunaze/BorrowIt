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

  }

  isNotConnected() {

  }

  isConnected() {

  }

  deconnexion() {

  }
}
