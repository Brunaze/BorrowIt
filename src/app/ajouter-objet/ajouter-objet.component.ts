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
  ngOnInit(): void { }

  ajouterObjet(type: any, titre: any, image: any, prix: any, caution: any, com: any): void {
    this.http.post('http://localhost:8283/objet', { tag: type, nom: titre, description: com, caution: caution, prixJour: prix, urlPhoto: image, proprietaire: this.authService.getUserConnect() }).subscribe({
      next: (data) => {

      },
      error: (err) => (console.log(err))
    })
  }
}
