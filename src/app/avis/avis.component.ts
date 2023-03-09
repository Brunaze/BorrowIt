import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AvisLocationService } from '../services/avis-location.service';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {

  constructor(public route: Router, public authService: AuthService, private http: HttpClient, public avisLocation: AvisLocationService) { }

  ngOnInit(): void { }

  sendSignalement(type: any, com: any): void {
    this.http.post('http://localhost:8283/signalement', { typeSignalement: type, commentaire: com, clientSuspect: this.avisLocation.getAvisLocation(), clientSignaleur: this.authService.getUserConnect() }).subscribe({
      next: (data) => {
        this.route.navigateByUrl('/profil');
      },
      error: (err) => (console.log(err))
    })
  }
}
