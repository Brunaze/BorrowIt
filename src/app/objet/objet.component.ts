import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objet',
  templateUrl: './objet.component.html',
  styleUrls: ['./objet.component.css']
})
export class ObjetComponent implements OnInit {

  objet: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8283/objet/1').subscribe({
      next: (data) => {
        this.objet = data;
      },
      error: (err) => (console.log(err))
    })
  }

  getObjet(val: any): void {
    this.http.get('http://localhost:8283/objet', val).subscribe({
      next: (data) => {
        this.objet = data;
      },
      error: (err) => (console.log(err))
    })
  }


}
