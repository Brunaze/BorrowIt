import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-star-rating-component',
  templateUrl: './star-rating-component.component.html',
  styleUrls: ['./star-rating-component.component.css']
})
export class StarRatingComponentComponent implements OnInit {

  constructor(private route: Router, public authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.getUserConnect().points == null) {
      this.route.navigateByUrl('administrateur');
    }
  }

  stars = [1, 2, 3, 4, 5];
  currentRate = 3;

  rate(star: number) {
    this.currentRate = star;
  }

}

