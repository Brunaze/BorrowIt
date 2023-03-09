import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvisLocationService {

  constructor() { }

  setAvisLocation(user: any) {
    window.localStorage.setItem('avisLocation', JSON.stringify(user));
  }

  getAvisLocation() {
    let user: any = localStorage.getItem('avisLocation');
    return JSON.parse(user);
  }
}
