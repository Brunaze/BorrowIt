import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profil-bis',
  templateUrl: './profil-bis.component.html',
  styleUrls: ['./profil-bis.component.css']
})
export class ProfilBisComponent implements OnInit{

  constructor(private route: Router, public authService: AuthService) { }

  ngOnInit(): void {
}
}
