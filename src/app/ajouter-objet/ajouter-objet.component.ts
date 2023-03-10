import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { RecupObjetService } from '../services/recup-objet.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-ajouter-objet',
  templateUrl: './ajouter-objet.component.html',
  styleUrls: ['./ajouter-objet.component.css']
})
export class AjouterObjetComponent implements OnInit {

  objet: any;
  user: any;
  msgErr: any;
  constructor(public userservice: UserService, private route: Router, public authService: AuthService, private RecupObjetService: RecupObjetService, private http: HttpClient) { }
  ngOnInit(): void {
    if (this.authService.getUserConnect().points == null) {
      this.route.navigateByUrl('administrateur');
    }
  }

  ajouterObjet(type: any, titre: any, image: any, prix: any, caution: any, com: any): void {
    this.http.post('http://localhost:8283/objet', { tag: type, nom: titre, description: com, caution: caution, prixJour: prix, urlPhoto: image, proprietaire: this.authService.getUserConnect() }).subscribe({
      next: (data) => {

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
  inscription(val: any) {
    this.http.post('http://localhost:8283/client', val).subscribe({
      next: (data) => {
        window.location.reload();
      },
      error: (err) => { console.error(err) }
    })
  }
  refresh(): void {
    window.location.reload();
  }
}
