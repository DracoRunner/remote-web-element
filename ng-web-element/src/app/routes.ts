import { Routes } from '@angular/router';
import { TextBoxComponent } from './text-box/text-box.component';

export const MFE1_ROUTES: Routes = [
  {
    path: '',
    component: TextBoxComponent,
    pathMatch: 'full',
  },
];
