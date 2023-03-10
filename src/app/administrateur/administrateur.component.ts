import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ListeSignalementService } from '../services/liste-signalement.service';

@Component({
  selector: 'app-administrateur',
  templateUrl: './administrateur.component.html',
  styleUrls: ['./administrateur.component.css']
})
export class AdministrateurComponent implements OnInit {

  users: any;
  user: any;
  nbUsers: any;
  signalements: any;
  signalementsById: any;
  nbSignalement: any;
  constructor(private http: HttpClient, public route: Router, private signalementService: ListeSignalementService, public authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.getUserConnect().points != null) {
      this.route.navigateByUrl('');
    }
    this.allUsers();
    this.allSignalements();
  }

  allUsers() {
    this.http.get('http://localhost:8283/client').subscribe({
      next: (data) => {
        console.log(data);
        this.users = data;
      },
      error: (err) => { console.log(err) }
    })
  }

  allSignalements() {
    this.http.get('http://localhost:8283/signalement').subscribe({
      next: (data) => {
        this.signalements = data;
        return this.signalements;
      },
      error: (err) => { console.log(err) }
    })
  }

  signalementById(id: any) {
    this.http.get('http://localhost:8283/signalement/listeSignalementClient/' + id).subscribe({
      next: (data) => {
        this.signalementsById = data;
      },
      error: (err) => { console.log(err) }
    })
  }

  getNbSignalement(id: any) {
    this.http.get('http://localhost:8283/signalement/nbSignalements/' + id).subscribe({
      next: (data) => {
        this.nbSignalement = data;
        return this.nbSignalement;
      },
      error: (err) => { console.log(err) }
    })
  }

  deleteUserById(id: any) {
    this.http.delete('http://localhost:8283/avis/' + id).subscribe({});
    this.http.delete('http://localhost:8283/signalement/' + id).subscribe({});
    this.http.delete('http://localhost:8283/objet/' + id).subscribe({});
    this.http.delete('http://localhost:8283/location/' + id).subscribe({});
    this.http.delete('http://localhost:8283/abonnement/' + id).subscribe({});
    this.http.delete('http://localhost:8283/client/' + id).subscribe({
      next: (data) => {
        window.location.reload();
      },
      error: (err) => { console.log(err) }
    })
  }
}
