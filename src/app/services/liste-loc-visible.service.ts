import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListeLocVisibleService {

  constructor() { }

  setListeLocVisible(val: any) {
    window.localStorage.setItem('listeLocVisible', val);
  }

  getListeLocVisible() {
    return localStorage.getItem('listeLocVisible');
  }
}
