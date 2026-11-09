import { Routes } from '@angular/router';
import { cvsResolverResolver } from './cvs/cvs-resolver-resolver';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./commInterCompo/pere/pere').then((m) => m.Pere),
  },
  {
    path: 'defer',
    loadComponent: () => import('./defer/defer/defer.component').then((m) => m.DeferComponent),
  },
  {
    path: 'cvs',
    resolve: {
      cvs: cvsResolverResolver,
    },
    loadComponent: () => import('./http/test-http/test-http').then((m) => m.TestHttp),
  },
  {
    path: 'fils',
    loadComponent: () => import('./commInterCompo/fils/fils').then((m) => m.Fils),
    children: [
      { path: 'som', loadComponent: () => import('./components/som/som').then((m) => m.Som) },
    ],
  },
  {
    path: 'som',
    data: {
      preload: true,
    },
    loadComponent: () => import('./components/som/som').then((m) => m.Som),
  },
  {
    path: 'form',
    data: {
      preload: true,
    },
    loadComponent: () => import('./forms/test-form/test-form').then((m) => m.TestForm),
  },
  { path: 'hello/:name', loadComponent: () => import('./first/first').then((m) => m.First) },
];
