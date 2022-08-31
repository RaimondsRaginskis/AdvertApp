import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public accountService: AccountService) { }
  model: any = {}

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model).subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }

  loggedIn() {
    const user = localStorage.getItem('user');
    if (user) {
      
    }
  }

}
