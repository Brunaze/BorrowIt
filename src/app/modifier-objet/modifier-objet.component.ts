import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RecupObjetService } from '../services/recup-objet.service';

@Component({
  selector: 'app-modifier-objet',
  templateUrl: './modifier-objet.component.html',
  styleUrls: ['./modifier-objet.component.css']
})
export class ModifierObjetComponent implements OnInit {

  constructor(private route: Router, public authService: AuthService, private RecupObjetService: RecupObjetService, private http: HttpClient) { }
  ngOnInit(): void { }

  modifierObjet(type: any, titre: any, image: any, prix: any, caution: any, com: any): void {
    this.http.patch('http://localhost:8283/objet', { tag: type, nom: titre, description: com, caution: caution, prixJour: prix, urlPhoto: image, proprietaire: this.authService.getUserConnect() }).subscribe({
      next: (data) => {

      },
      error: (err) => (console.log(err))
    })
  }
}
