import { Routes } from '@angular/router';
import { FirstPageComponent } from '../first-page/first-page.component';

export const routes: Routes = [
    {   path: 'first-page',
        component: FirstPageComponent },
    {
        path: 'second-page',
        loadChildren: () => import('../second-page/second-page.module').then(m => m.SecondPageModule)
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
