import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AccountService } from 'src/app/account/account.service';

import { ForgotComponent } from '../forgot/forgot.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {}

  constructor(private accountService: AccountService, private modalService: BsModalService, public modalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: response => console.log(response),
      error: error => console.log(error),
      complete: () => this.modalService.hide()
    });
  }

  closeModal() {
    this.modalService.hide()
  }

  openRegisterModal() {
    this.modalService.show(RegisterComponent)
  }

  openForgotModal() {
    this.modalService.show(ForgotComponent)
  }
 
}

