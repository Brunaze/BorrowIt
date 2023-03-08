import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
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
  constructor(public userservice: UserService, private http: HttpClient, private route: Router, public recupObjetService: RecupObjetService, public authService: AuthService) {

  }

  ngOnInit(): void {
    this.http.get('http://localhost:8283/objet').subscribe({
      next: (data) => {
        this.objets = data;
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

      },
      error: (err) => { console.log(err) }
    })
  }

}
