import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  connected : any;

  constructor(public route: Router) { }


  setUser(objet: any) {
    window.localStorage.setItem('usr', JSON.stringify(objet));
    if (this.route.url == "/profil"){
      window.location.reload();
    }
  }

  getUser() {
    let User: any = localStorage.getItem('usr');
    return JSON.parse(User);
  }
}
