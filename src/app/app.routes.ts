import { FirstPageComponent } from '../first-page/first-page.component';
import { SecondPageComponent } from '../second-page/second-page.component';

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {   
    path: 'first-page',
    component: FirstPageComponent 
  },
  {
    path: 'first-page',
    loadChildren: () => import('../first-page/first-page.module').then( m => m.FirstPageModule)
  },
  {   
    path: 'second-page',
    component: SecondPageComponent 
  },
  {
    path: 'second-page',
    loadChildren: () => import('../second-page/second-page.module').then( m => m.SecondPageModule)
  },
  {
    path: '', 
    redirectTo: '/first-page',
    pathMatch: 'full'
  },
  {
    path: '**', 
    redirectTo: '/first-page'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }

