import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalerUserService {

  constructor() { }

  setUserSignaler(user: any) {
    window.localStorage.setItem('userSignaler', JSON.stringify(user));
  }

  getUserSignaler() {
    let user: any = localStorage.getItem('userSignaler');
    return JSON.parse(user);
  }
}
