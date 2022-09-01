import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifiedComponent } from './verified/verified.component';
import { SharedModule } from '../_modules/shared.module';
import { FormsModule } from '@angular/forms';
import { ResetComponent } from './reset/reset.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    VerifiedComponent,
    ResetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    VerifiedComponent
  ]
})
export class AccountModule { }
