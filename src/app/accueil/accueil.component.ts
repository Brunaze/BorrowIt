import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { RechercheService } from '../services/recherche.service';
import { RecupObjetService } from '../services/recup-objet.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  objets: any;
  numbers: any;
  msgErr: any;
  objetsVisibles: any[] = new Array;
  compteur: any;

  constructor(public userservice: UserService, private http: HttpClient, public route: Router, public recupObjetService: RecupObjetService, public authService: AuthService, public rechercheObjet: RechercheService) {

  }

  ngOnInit(): void {
    if (this.rechercheObjet.getObjetRecherche() == null) {
      this.allObjets();
    }
    if (this.authService.getUserConnect().points == null) {
      this.route.navigateByUrl('administrateur');
    }
  }

  allObjets(): void {
    this.http.get('http://localhost:8283/objet').subscribe({
      next: (data) => {
        this.objets = data;
        //this.rechercheObjet.setObjetRecherche(data);
        this.getListeObjets(data);
        window.location.reload();
      },
      error: (err) => { console.error(err) }
    })
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

  objetByTag(val: any) {
    this.http.get('http://localhost:8283/objet/tag/' + val).subscribe({
      next: (data) => {
        this.objets = data;
        //this.rechercheObjet.setObjetRecherche(data);
        this.getListeObjets(data);
        window.location.reload();
      },
      error: (err) => { console.log(err) }
    })
  }

  getListeObjets(data: any) {
    this.compteur = -1;
    for (let o of data) {
      this.compteur = this.compteur + 1;
      if (this.authService.getUserConnect() != null) {
        if (this.authService.getUserConnect().id != o.proprietaire.id) {
          this.objetsVisibles[this.compteur] = o;
          continue;
        }
      } else {
        this.objetsVisibles[this.compteur] = o;
        continue;
      }
      this.compteur = this.compteur - 1;
    }
    this.rechercheObjet.setObjetRecherche(this.objetsVisibles);
  }
}
