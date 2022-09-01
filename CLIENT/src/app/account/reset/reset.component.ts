import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  public resetToken: string = this.router.url.split('/').pop();
  model: any = {"resetToken": this.resetToken};

  constructor(private router: Router, public accountService: AccountService) { }

  ngOnInit(): void {
      console.log(this.resetToken);
  }

  resetPassword() {
    this.accountService.resetPassword(this.model).subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }

}
