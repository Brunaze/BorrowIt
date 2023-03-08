import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RechercheService {

  constructor() { }

  setObjetRecherche(objet: any) {
    window.localStorage.setItem('objRecherche', JSON.stringify(objet));
  }

  getObjetRecherche() {
    let objet: any = localStorage.getItem('objRecherche');
    return JSON.parse(objet);
  }

}
