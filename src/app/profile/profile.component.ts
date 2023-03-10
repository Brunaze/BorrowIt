import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { RecupObjetService } from '../services/recup-objet.service';
import { formatDate, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { AbonnementService } from '../services/abonnement.service';
import { ThisReceiver } from '@angular/compiler';
import { catchError, map, Observable, throwError } from 'rxjs';

registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit{

  formatdate = 'dd/MM/yyyy';

  objets: any;
  numbers: any;
  user: any;
  msgErr: any;
  onlyViewbyMySelf: any;
  notViewbyMySelf: any;
  abonnActif : any;
  finAbonn : any;
  myDate = new Date();
  formattedfinAbonn: any;


  constructor(private route: Router, public authService: AuthService, public recupObjetService: RecupObjetService,
    public userservice: UserService, public abonnmentservice: AbonnementService, private http: HttpClient) { }

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
        this.notViewbyMySelf = true;
        }else{
          this.notViewbyMySelf = false;
        }

        if (this.authService.getUserConnect().id == this.userservice.getUser().id){
          this.onlyViewbyMySelf = true;
          }else{
            this.onlyViewbyMySelf = false;
          }

        /* Extrait la date de fin d'abonnement */
        this.finAbonn = this.getAbonnementDate(this.user.id);



        /* Vérification si le compte connecté à un abonnement actif  {{ this.getAbonnementDate(this.user.id)) | 'dd/MM/yyyy'}}*/
/*
        this.abonnActif = this.verifAbonnementActif(this.user.id);
        if (this.finAbonn == null) {
        this.abonnActif = true;
        console.log(this.getAbonnementDate(this.user.id));
        console.log(this.finAbonn);
        console.log("true");
      }else{
        this.abonnActif = false;
        console.log(this.formattedfinAbonn);
        console.log("false");
      }
*/

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
      element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
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

/* Extrait la date de fin d'abonnement */
getAbonnementDate(id : any) {
  this.http.get('http://localhost:8283/abonnement/expirationClient/' + id).subscribe({
    next: (data) => {
      this.finAbonn = data;
      return this.finAbonn;
    },
    error: (err) => (console.log(err))
  })
}
/*
verifAbonnementActif(id : any) {
  this.http.get('http://localhost:8283/abonnement/expirationClient/' + id).subscribe({
    next: (data) => {
      this.finAbonn = data;
      if (this.finAbonn =! null){
      return this.finAbonn;
      }else{
        return null;
      }
    },
    error: (err) => (console.log(err))
  })
}
*/





}
