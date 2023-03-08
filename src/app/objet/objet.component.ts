import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { RecupObjetService } from '../services/recup-objet.service';

@Component({
  selector: 'app-objet',
  templateUrl: './objet.component.html',
  styleUrls: ['./objet.component.css']
})
export class ObjetComponent implements OnInit {

  objet: any;
  user: any;
  msgErr: any;
  constructor(private route: Router, public authService: AuthService, private recupObjetService: RecupObjetService, private http: HttpClient) { }

  ngOnInit(): void {
    this.objet = this.recupObjetService.getObjet();
  }

  getObjet(val: any): void {
    this.http.get('http://localhost:8283/objet', val).subscribe({
      next: (data) => {
        this.objet = data;
      },
      error: (err) => (console.log(err))
    })
  }
  connexion(val: any) {
    this.http.post('http://localhost:8283/utilisateur/login', val).subscribe({
      next: (data) => {
        this.user = data;
        if (this.user != null) {
          this.authService.setUserConnect(this.user);
          window.location.reload();
        } else {
          this.msgErr = 'Identifiant ou mot de passe incorrect';
        }
      },
      error: (err) => { console.log(err) }
    })
  }
  

}
