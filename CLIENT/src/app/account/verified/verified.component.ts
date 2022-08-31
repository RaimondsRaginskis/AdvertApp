import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verified',
  templateUrl: './verified.component.html',
  styleUrls: ['./verified.component.css']
})
export class VerifiedComponent implements OnInit {
  public href: string = "";
  token: any;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
      this.href = this.router.url.split('/').pop();
      console.log(this.href);
      this.verifyUser();
  }

  verifyUser() {
    this.http.post('https://localhost:5001/api/account/verify?token=' + this.href, {}).subscribe({
      next: response => this.token = response,
      error: error => console.log(error)
    })
  }

}
