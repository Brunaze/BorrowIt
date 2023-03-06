import { Component } from '@angular/core';

@Component({
  selector: 'app-star-rating-component',
  templateUrl: './star-rating-component.component.html',
  styleUrls: ['./star-rating-component.component.css']
})
export class StarRatingComponentComponent {

  stars = [1, 2, 3, 4, 5];
  currentRate = 3 ;

  rate(star: number) {
    this.currentRate = star;
  }

}

