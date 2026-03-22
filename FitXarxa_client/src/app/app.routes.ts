import { Routes } from '@angular/router';
import { EntrenadorList } from './entrenador-list/entrenador-list';
import { Welcome } from './welcome/welcome';
import { SessioList } from './sessio-list/sessio-list';
import { EntrenadorForm } from './entrenador-form/entrenador-form';
import { SessioForm } from './sessio-form/sessio-form';

export const routes: Routes = [
  { path: 'welcome', component: Welcome },
  { path: 'entrenador-list', component: EntrenadorList },
  { path: 'sessio-list', component: SessioList },
  { path: 'entrenador-form', component: EntrenadorForm },
  { path: 'entrenador-form/:id', component: EntrenadorForm },
  { path: 'sessio-form', component: SessioForm },
  { path: 'sessio-form/:id', component: SessioForm },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
];
