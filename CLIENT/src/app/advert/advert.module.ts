import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertComponent } from './advert/advert.component';
import { AdvertDetailsComponent } from './advert-details/advert-details.component';

@NgModule({
  declarations: [
    AdvertComponent,
    AdvertDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AdvertComponent,
    AdvertDetailsComponent
  ]
})
export class AdvertModule { }
