import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstPageComponent } from './first-page.component';
import { FirstPageRoutingModule } from './first-page-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedComponentsModule } from '../components/shared-components.module';

@NgModule({
  declarations: [FirstPageComponent],
  imports: [
    CommonModule,
    FirstPageRoutingModule,
    FormsModule,
    SharedComponentsModule
  ]
})
export class FirstPageModule { }
