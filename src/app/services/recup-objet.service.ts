import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecupObjetService {

  constructor() { }

  setObjet(objet: any) {
    window.localStorage.setItem('obj', JSON.stringify(objet));
  }

  getObjet() {
    let objet: any = localStorage.getItem('obj');
    return JSON.parse(objet);
  }
}
