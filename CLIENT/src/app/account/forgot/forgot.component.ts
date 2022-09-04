import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AccountService } from '../account.service';

import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  email: string;

  constructor(public accountService: AccountService, private modalService: BsModalService, public modalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  forgotPassword() {
    this.accountService.forgotPassword(this.email)
    //No logs for security reasons
    // .subscribe({
    //   next: response => console.log(response),
    //   error: error => console.log(error),
    //   complete: () => this.modalService.hide()
    // })
  }

  closeModal() {
    this.modalService.hide()
  }

  openLoginModal() {
    this.modalService.show(LoginComponent)
  }

}
