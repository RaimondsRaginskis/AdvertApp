import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.css']
})
export class AdvertComponent implements OnInit {
  adverts: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAdverts();
  }

  getAdverts() {
    this.http.get('https://localhost:5001/api/adverts').subscribe({
      next: response => this.adverts = response,
      error: error => console.log(error)
    })
  }

}
