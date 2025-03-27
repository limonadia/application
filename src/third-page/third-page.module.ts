import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdPageComponent } from './third-page.component';
import { ThirdPageRoutingModule } from './third-page-routing.module';
import { SharedComponentsModule } from '../components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    ThirdPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [ThirdPageComponent]
})
export class ThirdPageModule { }
