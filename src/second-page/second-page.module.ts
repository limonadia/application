import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondPageComponent } from './second-page.component';
import { SecondPageRoutingModule } from './second-page-routing';
import { SharedComponentsModule } from '../components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    SecondPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [SecondPageComponent]
})
export class SecondPageModule { }
