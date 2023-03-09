import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListeSignalementService {

  constructor() { }

  setListeSigVisible(val: any) {
    window.localStorage.setItem('listeSigVisible', val);
  }

  getListeSigVisible() {
    return localStorage.getItem('listeSigVisible');
  }
}
