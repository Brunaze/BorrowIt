import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListeLocVisibleService {

  constructor() { }

  setVoirDemande(val: any) {
    window.localStorage.setItem('voirDemandes', val);
  }

  getVoirDemande() {
    return localStorage.getItem('voirDemandes');
  }
}
