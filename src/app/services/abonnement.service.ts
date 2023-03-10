import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AbonnementService {

  constructor() { }


  setAbonnement(abonnement: any) {
    window.localStorage.setItem('Abonn', JSON.stringify(abonnement));
  }

  getAbonnement() {
    let abonnement: any = localStorage.getItem('Abonn');
    return JSON.parse(abonnement);
  }

  isAbonner() {
    if (this.getAbonnement() == null) {
      return false;
    } else {
      return true;
    }
  }
}
