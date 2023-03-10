import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { RecupObjetService } from '../services/recup-objet.service';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { AbonnementService } from '../services/abonnement.service';

registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit{

  objets: any;
  numbers: any;
  user: any;
  msgErr: any;
  compteView: any;
  abonn : any;

constructor(private route: Router, public authService: AuthService, public recupObjetService: RecupObjetService,
  public userservice: UserService,  public abonnmentservice : AbonnementService, private http: HttpClient) { }

  ngOnInit(): void {
    this.user = this.userservice.getUser();
    this.http.get('http://localhost:8283/objet/listeObjetsClient/' + this.user.id).subscribe({
      next: (data) => {
        this.objets = data;
      },
      error: (err) => { console.error(err) }
    })

    /* Vérification si le compte connecté et regardé sont les mêmes */
      if (this.authService.getUserConnect().id != this.userservice.getUser().id){
        this.compteView = true;
        }else{
          this.compteView = false;
        }

    this.abonn = this.abonnmentservice.getAbonnement();

    }


getUserprofil(val: any): void {
  this.http.get('http://localhost:8283/utilisateur', val).subscribe({
    next: (data) => {
      this.user = data;
    },
    error: (err) => (console.log(err))
  })
}

allerVersElement(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}

objetid(val: any) {
  this.http.post('http://localhost:8283/utilisateur/objet/id', val).subscribe({
    next: (data) => {
      this.objets = data;
      if (this.objets != null) {
        this.recupObjetService.setObjet(this.objets);
        window.location.reload();
      } else {
        this.msgErr = 'pas d objet';
      }
    },
    error: (err) => { console.log(err) }
  })
}


getAbonnementDate(idClient: any): void {
  this.http.get('http://localhost:8283/abonnement/expirationClient/' + idClient).subscribe({
    next: (data) => {
      this.abonn = data;
    },
    error: (err) => (console.log(err))
  })
}

getAbonnement(idClient: any): void {
  this.http.get('http://localhost:8283/abonnement/client/' + idClient).subscribe({
    next: (data) => {
      this.abonn = data;
    },
    error: (err) => (console.log(err))
  })
}

}
