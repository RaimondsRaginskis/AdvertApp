import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AccountService } from '../account.service';

import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {}

  constructor(public accountService: AccountService, private modalService: BsModalService, public modalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model).subscribe({
      next: response => console.log(response),
      error: error => console.log(error),
      complete: () => this.modalService.hide()
    })
  }

  closeModal() {
    this.modalService.hide()
  }

  openLoginModal() {
    this.modalService.show(LoginComponent)
  }

}
