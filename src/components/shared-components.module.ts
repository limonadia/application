import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FooterComponent } from './footer/footer.component';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
      CommonModule,
      NgxSkeletonLoaderModule,
      ReactiveFormsModule
    ],
    declarations: [
      NavbarComponent,
      FooterComponent,
      InputComponent,
      ButtonComponent
    ],
    exports: [
      NavbarComponent,
      FooterComponent,
      InputComponent,
      ButtonComponent,
      ReactiveFormsModule
    ]
  })
  export class SharedComponentsModule { }