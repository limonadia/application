import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FooterComponent } from './footer/footer.component';

const components = [
    NavbarComponent,
    FooterComponent
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