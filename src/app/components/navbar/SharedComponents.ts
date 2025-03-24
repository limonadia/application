import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

const components = [
    NavbarComponent
];

@NgModule({
    imports: [
      CommonModule,
      NgxSkeletonLoaderModule
    ],
    declarations: components,
    exports: [
      ...components,
    ]
  })
  export class SharedComponentsModule { }