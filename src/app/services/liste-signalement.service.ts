import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListeSignalementService {

  constructor() { }

  setListeSignalement(val: any) {
    window.localStorage.setItem('listeSignalement', val);
  }

  getListeSignalement() {
    return localStorage.getItem('listeSignalement');
  }
}
