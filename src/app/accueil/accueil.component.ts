import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  objet: any;
  numbers: any;
  msgErr: any;
  constructor(private http: HttpClient, private route: Router, public authService: AuthService) {

  }

  ngOnInit(): void {
    this.http.get('http://localhost:8283/objet').subscribe({
      next: (data) => {
        this.objet = data;
        this.numbers = Array(Object.keys(this.objet).length).fill(0).map((x, i) => i);
      },
      error: (err) => { console.error(err) }
    })
  }

  objetid(val: any) {
    this.http.post('http://localhost:8283/utilisateur/objet/id', val).subscribe({
      next: (data) => {
        this.objet = data;
        if (this.objet != null) {
          this.authService.setObjet(this.objet);
          window.location.reload();
        } else {
          this.msgErr = 'pas d objet';
        }
      },
      error: (err) => { console.log(err) }
    })
  }
}
