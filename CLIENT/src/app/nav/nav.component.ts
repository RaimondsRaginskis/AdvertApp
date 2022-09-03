import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account/account.service';
import { faCar, faGear, faRightFromBracket, faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { LoginComponent } from '../account/login/login.component';
import { RegisterComponent } from '../account/register/register.component';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {}
  faUser = faUserLarge;
  faCar = faCar;
  faAcc = faGear;
  faLogout = faRightFromBracket;
  modalRef: BsModalRef;

  constructor(public accountService: AccountService, private modalService: BsModalService) {
  }

  ngOnInit(): void {
  }

  logout() {
    this.accountService.logout();
  }

  openLoginModal() {
    this.modalRef = this.modalService.show(LoginComponent);
  }

  openRegisterModal() {
    this.modalRef = this.modalService.show(RegisterComponent)
  }

}
