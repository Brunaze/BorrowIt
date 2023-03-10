import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  connected : any;

  constructor(public route: Router) { }


  setUser(User: any) {
    window.localStorage.setItem('usr', JSON.stringify(User)); // remettre objet  à la place de User si ça bug
    if (this.route.url == "/profil"){
      window.location.reload();
    }
  }

  getUser() {
    let User: any = localStorage.getItem('usr');
    return JSON.parse(User);
  }

  getNote() {
    let Note: any = localStorage.getItem('note');
    return JSON.parse(Note);
  }
}
