import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-abonnement',
  templateUrl: './abonnement.component.html',
  styleUrls: ['./abonnement.component.css']
})
export class AbonnementComponent implements OnInit {

  constructor(private route: Router, private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.getUserConnect().points == null) {
      this.route.navigateByUrl('administrateur');
    }
  }

  postCarte(val: any) {
    this.http.post('http://localhost:8283/carteBancaire', val).subscribe({
      next: (data) => {
        const today = new Date();
        const dd = parseInt(String(today.getDate()).padStart(2, '0'));
        const mm = parseInt(String(today.getMonth() + 2).padStart(2, '0')); //January is 0!
        const yyyy = today.getFullYear();
        const date = new Date(yyyy, mm - 1, dd);
        const formattedDate = `${yyyy}-${mm}-${dd}`;

        this.http.post('http://localhost:8283/abonnement', { dateFin: "2023-04-10", typeAchat: "argent", client: this.authService.getUserConnect() }).subscribe({
          next: (data) => {
            window.location.reload();
          },
          error: (err) => { console.log(err) }
        })
      },
      error: (err) => { console.error(err) }
    })
    this.route.navigateByUrl('');
  }

}
