import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifiedComponent } from './verified/verified.component';
import { SharedModule } from '../_modules/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';

import { ResetComponent } from './reset/reset.component';
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
    ReactiveFormsModule,
    SharedModule,
    ModalModule.forRoot(),
    AlertModule.forRoot()
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    VerifiedComponent
  ]
})
export class AccountModule { }
