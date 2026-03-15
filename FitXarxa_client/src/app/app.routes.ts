import { Routes } from '@angular/router';
import { EntrenadorList } from './entrenador-list/entrenador-list';
import { Welcome } from './welcome/welcome';
import { SessioList } from './sessio-list/sessio-list';

export const routes: Routes = [
  { path: 'welcome', component: Welcome },
  { path: 'entrenador-list', component: EntrenadorList },
  { path: 'sessio-list', component: SessioList },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
];
