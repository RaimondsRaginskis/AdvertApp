import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account/account.service';
import { faCar, faGear, faRightFromBracket, faUserLarge } from '@fortawesome/free-solid-svg-icons';


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

  constructor(public accountService: AccountService) {
  }

  ngOnInit(): void {
  }

  logout() {
    this.accountService.logout();
  }

}
