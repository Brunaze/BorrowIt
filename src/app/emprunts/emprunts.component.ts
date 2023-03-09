import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ListEmpruntVisibleService } from '../services/list-emprunt-visible.service';


@Component({
  selector: 'app-emprunts',
  templateUrl: './emprunts.component.html',
  styleUrls: ['./emprunts.component.css']
})
export class EmpruntsComponent implements OnInit {

  emprunts: any;
  diff: any;
  locPointeAnnulation: any;
  constructor(private http: HttpClient, public route: Router, public authService: AuthService, public listeEmpruntVisible: ListEmpruntVisibleService) { }

  ngOnInit(): void {
    if (this.listeEmpruntVisible.getListeEmpruntVisible() == null) {
      this.listeEmpruntVisible.setListeEmpruntVisible('demandeEffectuees');
    }
    this.getListeLocNonValide()
  }

  getListeLocNonValide() {
    this.http.get('http://localhost:8283/location/locataire/' + this.authService.getUserConnect().id).subscribe({
      next: (data) => {
        this.emprunts = data;
      },
      error: (err) => { console.error(err) }
    })
  }

  annulerLocation(val: any): void {
    this.http.delete('http://localhost:8283/location/delete/' + val).subscribe({})
    window.location.reload()
  }

  getDiffDates(date1: any, date2: any) {
    return (((new Date(date1)).valueOf() - (new Date(date2)).valueOf()) / (3600 * 24 * 1000)) + 1;
  }


  getComparaisonToday(loc: any) {
    if (new Date(loc.dateDebut) > new Date()) {
      return "future"
    } else if (loc.dateFinReelle == null) {
      if (new Date(loc.dateFin) <= new Date()) {
        return "enCoursFinie"
      } else {
        return "enCours"
      }
    } else {
      return "historique"
    }
  }

  postCarte(val: any) {
    this.http.post('http://localhost:8283/carteBancaire', val).subscribe({
      next: (data) => {
        window.location.reload();
      },
      error: (err) => { console.error(err) }
    })
    this.route.navigateByUrl('');
  }
}