import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';

const components = [
    NavbarComponent
];

@NgModule({
    imports: [
      CommonModule,
    ],
    declarations: components,
    exports: [
      ...components,
    ]
  })
  export class SharedComponentsModule { }