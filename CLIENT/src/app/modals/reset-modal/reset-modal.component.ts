import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/account/account.service';

@Component({
  selector: 'app-reset-modal',
  templateUrl: './reset-modal.component.html',
  styleUrls: ['./reset-modal.component.css']
})
export class ResetModalComponent implements OnInit {
  email: string;

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }

  forgotPassword() {
    this.accountService.forgotPassword(this.email).subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }

}
