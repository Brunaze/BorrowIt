import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-administrateur',
  templateUrl: './administrateur.component.html',
  styleUrls: ['./administrateur.component.css']
})
export class AdministrateurComponent implements OnInit {

  users: any;
  constructor(private http: HttpClient, public route: Router, public authService: AuthService) { }

  ngOnInit(): void {
    this.allUsers();
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
}
