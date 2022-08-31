import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { VerifiedComponent } from './account/verified/verified.component';
import { AdvertDetailsComponent } from './advert/advert-details/advert-details.component';
import { AdvertComponent } from './advert/advert/advert.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'verify/:id', component: VerifiedComponent},
  {path: 'adverts', component: AdvertComponent},
  {path: 'adverts/:id', component: AdvertDetailsComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
