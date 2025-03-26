import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstPageComponent } from './first-page.component';
import { FirstPageRoutingModule } from './first-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FirstPageRoutingModule
  ],
  declarations: [FirstPageComponent]
})
export class FirstPageModule { }
