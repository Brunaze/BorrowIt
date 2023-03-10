import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { RechercheService } from '../services/recherche.service';
import { UserService } from '../services/user.service';

declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  user: any;
  msgErr: any;
  objetsVisibles: any[] = new Array;
  compteur: any;

  constructor(public route: Router, public authService: AuthService, private http: HttpClient, public rechercheObjet: RechercheService, public userservice: UserService) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8283/utilisateur').subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (err) => { console.error(err) }
    })
    if (this.authService.getUserConnect().points == null) {
      this.route.navigateByUrl('administrateur');
    }
  }

  connexion(val: any) {
    this.http.post('http://localhost:8283/utilisateur/login', val).subscribe({
      next: (data) => {
        this.user = data;
        console.log(this.user);
        if (this.user != null && this.user.points != null) {
          this.authService.setUserConnect(this.user);
          window.location.reload();
        } else if (this.user != null) {
          this.authService.setUserConnect(this.user);
          window.location.reload();
        } else {
          this.msgErr = 'Identifiant ou mot de passe incorrect';
        }
      },
      error: (err) => { console.log(err) }
    })
  }

  inscription(val: any) {
    this.http.post('http://localhost:8283/client', val).subscribe({
      next: (data) => {
        window.location.reload();
      },
      error: (err) => { console.error(err) }
    })
  }

  searchObjet(val: any): void {
    this.http.get('http://localhost:8283/objet/recherche/' + val).subscribe({
      next: (data) => {
        //this.rechercheObjet.setObjetRecherche(data);
        this.getListeObjets(data);
      },
      error: (err) => (console.log(err))
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

