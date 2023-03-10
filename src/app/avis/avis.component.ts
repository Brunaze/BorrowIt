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

  note: any;

  constructor(public route: Router, public authService: AuthService, private http: HttpClient, public avisLocation: AvisLocationService) { }

  ngOnInit(): void {
    this.note = 0;
    if (this.authService.getUserConnect().points == null) {
      this.route.navigateByUrl('administrateur');
    }
  }

  sendAvis(com: any): void {
    this.http.post('http://localhost:8283/signalement', { commentaire: com, note: this.note, location: this.avisLocation.getAvisLocation() }).subscribe({
      next: (data) => {
        this.route.navigateByUrl('/profil');
      },
      error: (err) => (console.log(err))
    })
  }

  comp(type: any, num: any) {
    if (type == 'sup') {
      return this.note > num
    } else if (type == 'inf') {
      return this.note < num
    } else {
      return null
    }
  }
}
