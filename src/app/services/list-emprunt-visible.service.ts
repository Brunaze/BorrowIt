import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListEmpruntVisibleService {

  constructor() { }
  setListeEmpruntVisible(val: any) {
    window.localStorage.setItem('listeEmpruntVisible', val);
  }

  getListeEmpruntVisible() {
    return localStorage.getItem('listeEmpruntVisible');
  }
}

