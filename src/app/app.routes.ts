import { NONE_TYPE } from '@angular/compiler';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./home/home.component').then((m) => m.HomeComponent);
    },
  },
  {
    path: 'todos',
    loadComponent: () => {
      return import('./todos/todos.component').then((m) => m.TodosComponent);
    },
  },
];
