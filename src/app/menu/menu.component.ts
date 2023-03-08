import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  user: any;
  msgErr: any;

  constructor(private route: Router, public authService: AuthService, private http: HttpClient, public userservice: UserService) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8283/utilisateur').subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (err) => { console.error(err) }
    })
  }

  connexion(val: any) {
    this.http.post('http://localhost:8283/utilisateur/login', val).subscribe({
      next: (data) => {
        this.user = data;
        if (this.user != null) {
          this.authService.setUserConnect(this.user);
          window.location.reload();
        } else {
          this.msgErr = 'Identifiant ou mot de passe incorrect';
        }
      },
      error: (err) => { console.log(err) }
    })
  }

  inscription(val: any) {
    this.http.post('http://localhost:8283/client', val).subscribe({
      next: (data) => {
        window.location.reload();
      },
      error: (err) => { console.error(err) }
    })
  }

}
