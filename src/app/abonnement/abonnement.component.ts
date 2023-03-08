import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-abonnement',
  templateUrl: './abonnement.component.html',
  styleUrls: ['./abonnement.component.css']
})
export class AbonnementComponent implements OnInit {

  constructor(private route: Router, private http: HttpClient) { }

  ngOnInit(): void {

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
