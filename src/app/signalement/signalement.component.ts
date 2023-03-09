import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SignalerUserService } from '../services/signaler-user.service';

@Component({
  selector: 'app-signalement',
  templateUrl: './signalement.component.html',
  styleUrls: ['./signalement.component.css']
})
export class SignalementComponent implements OnInit {

  constructor(public route: Router, public authService: AuthService, private http: HttpClient, public signalerUser: SignalerUserService) { }

  ngOnInit(): void { }

  sendSignalement(type: any, com: any): void {
    this.http.post('http://localhost:8283/signalement', { typeSignalement: type, commentaire: com, clientSuspect: this.signalerUser.getUserSignaler(), clientSignaleur: this.authService.getUserConnect() }).subscribe({
      next: (data) => {
        this.route.navigateByUrl('/profil');
      },
      error: (err) => (console.log(err))
    })
  }
}
