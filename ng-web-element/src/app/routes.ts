import { Routes } from '@angular/router';

export const MFE1_ROUTES: Routes = [
  {
    path: 'textBox',
    loadComponent:()=> import('./text-box/text-box.component').then(a=>a.TextBoxComponent),
  },
  {
    path: 'header',
    loadComponent: () => import('./header/navbar.component').then(a => a.NavbarComponent),
  }
];
