import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifiedComponent } from './verified/verified.component';
import { SharedModule } from '../_modules/shared.module';
import { FormsModule } from '@angular/forms';
import { ResetComponent } from './reset/reset.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ForgotComponent } from './forgot/forgot.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    VerifiedComponent,
    ResetComponent,
    ForgotComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ModalModule.forRoot()
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    VerifiedComponent
  ]
})
export class AccountModule { }
