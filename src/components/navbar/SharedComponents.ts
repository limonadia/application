import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatIconModule } from '@angular/material/icon';

const components = [
    NavbarComponent
];

@NgModule({
    imports: [
      CommonModule,
      MatIconModule
    ],
    declarations: components,
    exports: [
      ...components,
      MatIconModule
    ]
  })
  export class SharedComponentsModule { }