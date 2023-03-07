import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ListeLocVisibleService } from '../services/liste-loc-visible.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  locations: any;
  diff: any;
  locPointeAnnulation: any;

  constructor(private http: HttpClient, private route: Router, public authService: AuthService, public listeLocVisible: ListeLocVisibleService) { }

  ngOnInit(): void {
    if (this.listeLocVisible.getVoirDemande() == null) {
      this.listeLocVisible.setVoirDemande(true);
    }
    this.getListeLocNonValide()
  }

  getListeLocNonValide() {
    this.http.get('http://localhost:8283/location/proprietaire/' + this.authService.getUserConnect().id).subscribe({
      next: (data) => {
        this.locations = data;
      },
      error: (err) => { console.error(err) }
    })
  }

  validerLocation(val: any): void {
    this.http.patch('http://localhost:8283/location/validation/' + val, {
      "description": "PATCH la validité de la location",
    }).subscribe({})
    window.location.reload()
  }

  refuserLocation(val: any): void {
    this.http.delete('http://localhost:8283/location/delete/' + val).subscribe({})
    window.location.reload()
  }

  getDiffDates(loc: any) {
    return ((new Date(loc.dateFin)).valueOf() - (new Date(loc.dateDebut)).valueOf()) / (3600 * 24 * 1000);
  }
}
