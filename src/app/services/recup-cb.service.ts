import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecupCbService {

  constructor() { }

  setCarte(carteBancaire: any) {
    window.localStorage.setItem('cb', JSON.stringify(carteBancaire));
  }

  getCarte() {
    let carteBancaire: any = localStorage.getItem('cb');
    return JSON.parse(carteBancaire);
  }
}
